import { db } from '#database/connection.js'
import {
  mpRadarAlertsTable,
  mpRadarCriteriaTable,
  mpRadarMatchesTable,
  mpNotificationsTable,
} from '#database/schemas/radar.js'
import { mpListingsTable } from '#database/schemas/listings.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpLeadsTable } from '#database/schemas/interactions.js'
import { and, eq, sql } from 'drizzle-orm'

type PartialListing = {
  id: number
  userId: number
  categoryId: number
  subcategoryId: number | null
  listingType: string
  department: string | null
  municipality: string | null
  price: string | null
  title: string
  slug: string
  storeId: number | null
  storeIsVerified: boolean | null
}

/**
 * Evaluates a single listing against all active radar alerts.
 * Called when a listing is published.
 */
export async function matchListingAgainstRadar(listingId: number) {
  const [listing] = await db
    .select({
      id: mpListingsTable.id,
      userId: mpListingsTable.userId,
      categoryId: mpListingsTable.categoryId,
      subcategoryId: mpListingsTable.subcategoryId,
      listingType: mpListingsTable.listingType,
      department: mpListingsTable.department,
      municipality: mpListingsTable.municipality,
      price: mpListingsTable.price,
      title: mpListingsTable.title,
      slug: mpListingsTable.slug,
      storeId: mpListingsTable.storeId,
      storeIsVerified: mpStoresTable.isVerified,
    })
    .from(mpListingsTable)
    .leftJoin(mpStoresTable, eq(mpStoresTable.id, mpListingsTable.storeId))
    .where(eq(mpListingsTable.id, listingId))
    .limit(1)

  if (!listing) return 0

  // Load all active alerts with their criteria
  const activeAlerts = await db
    .select({ id: mpRadarAlertsTable.id, userId: mpRadarAlertsTable.userId, name: mpRadarAlertsTable.name, notifyInApp: mpRadarAlertsTable.notifyInApp })
    .from(mpRadarAlertsTable)
    .where(
      and(
        eq(mpRadarAlertsTable.status, 'active'),
        // Don't alert the listing's own owner
        sql`${mpRadarAlertsTable.userId} != ${listing.userId}`,
      ),
    )

  let matchCount = 0

  for (const alert of activeAlerts) {
    const criteria = await db
      .select()
      .from(mpRadarCriteriaTable)
      .where(eq(mpRadarCriteriaTable.alertId, alert.id))

    if (!criteria.length) continue

    // Check if listing was already matched to this alert
    const [alreadyMatched] = await db
      .select({ id: mpRadarMatchesTable.id })
      .from(mpRadarMatchesTable)
      .where(
        and(
          eq(mpRadarMatchesTable.alertId, alert.id),
          eq(mpRadarMatchesTable.listingId, listingId),
        ),
      )
      .limit(1)

    if (alreadyMatched) continue

    // Evaluate ALL criteria (AND logic)
    const matches = criteria.every((c) => evaluateCriteria(c, listing))

    if (!matches) continue

    // Record match
    await db.insert(mpRadarMatchesTable).values({ alertId: alert.id, listingId })

    // Update alert counters
    await db
      .update(mpRadarAlertsTable)
      .set({
        matchCount: sql`${mpRadarAlertsTable.matchCount} + 1`,
        lastTriggeredAt: new Date(),
      })
      .where(eq(mpRadarAlertsTable.id, alert.id))

    // Create in-app notification
    if (alert.notifyInApp) {
      await db.insert(mpNotificationsTable).values({
        userId: alert.userId,
        type: 'radar_match',
        title: `Radar: nueva coincidencia para "${alert.name}"`,
        body: `Nueva publicación: ${listing.title}`,
        entityType: 'listing',
        entityId: listingId,
      })
    }

    // Generate lead for seller
    await db.insert(mpLeadsTable).values({
      ownerId: listing.userId,
      listingId,
      storeId: listing.storeId ?? undefined,
      leadType: 'radar',
      status: 'new',
    })

    matchCount++
  }

  return matchCount
}

function evaluateCriteria(
  criteria: { criteriaType: string; value: string },
  listing: PartialListing,
): boolean {
  const { criteriaType, value } = criteria

  switch (criteriaType) {
    case 'category':
      return listing.categoryId === Number(value)

    case 'subcategory':
      return listing.subcategoryId === Number(value)

    case 'listing_type':
      return listing.listingType === value

    case 'department':
      return listing.department?.toLowerCase() === value.toLowerCase()

    case 'municipality':
      return listing.municipality?.toLowerCase() === value.toLowerCase()

    case 'min_price':
      return listing.price !== null && Number(listing.price) >= Number(value)

    case 'max_price':
      return listing.price !== null && Number(listing.price) <= Number(value)

    case 'keyword':
      return listing.title.toLowerCase().includes(value.toLowerCase())

    case 'verified_store':
      return value === 'true' ? listing.storeIsVerified === true : true

    case 'has_certification':
      // Simplified: just passes — full impl would check mp_product_certifications
      return true

    default:
      return true
  }
}
