import { db } from '#database/connection.js'
import { mpRatingsTable, mpReputationScoresTable, mpTrustBadgesTable } from '#database/schemas/reputation.js'
import { mpReviewsTable } from '#database/schemas/stores.js'
import { mpLeadsTable } from '#database/schemas/interactions.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { and, avg, count, eq, sql } from 'drizzle-orm'

export async function calculateReputation(entityType: 'user' | 'store', entityId: number) {
  // 1. Aggregate ratings
  const [ratingStats] = await db
    .select({
      total: count(),
      average: avg(mpRatingsTable.rating),
    })
    .from(mpRatingsTable)
    .where(
      and(
        eq(mpRatingsTable.targetType, entityType),
        eq(mpRatingsTable.targetId, entityId),
        eq(mpRatingsTable.status, 'published'),
      ),
    )

  // 2. Store reviews (only for stores)
  let totalReviews = 0
  if (entityType === 'store') {
    const [reviewStats] = await db
      .select({ total: count() })
      .from(mpReviewsTable)
      .where(
        and(eq(mpReviewsTable.storeId, entityId), eq(mpReviewsTable.status, 'published')),
      )
    totalReviews = reviewStats?.total ?? 0
  }

  // 3. Active trust badges → verification score (each badge +15, max 100)
  const [badgeCount] = await db
    .select({ count: count() })
    .from(mpTrustBadgesTable)
    .where(
      and(
        eq(mpTrustBadgesTable.entityType, entityType),
        eq(mpTrustBadgesTable.entityId, entityId),
        eq(mpTrustBadgesTable.isActive, true),
      ),
    )
  const verificationScore = Math.min((badgeCount?.count ?? 0) * 15, 100)

  // 4. Conversion rate (leads converted / total leads for the owner)
  let conversionRate = 0
  if (entityType === 'user') {
    const [leadStats] = await db
      .select({
        total: count(),
        converted: sql<number>`SUM(CASE WHEN ${mpLeadsTable.status} = 'converted' THEN 1 ELSE 0 END)`,
      })
      .from(mpLeadsTable)
      .where(eq(mpLeadsTable.ownerId, entityId))

    const totalLeads = leadStats?.total ?? 0
    const convertedLeads = Number(leadStats?.converted ?? 0)
    conversionRate = totalLeads > 0 ? Number(((convertedLeads / totalLeads) * 100).toFixed(2)) : 0
  }

  // 5. Compute reputation index (0-100)
  // Formula: 40% avg rating + 30% verification + 20% reviews/ratings volume + 10% conversion
  const avgRating = ratingStats?.average ? Number(ratingStats.average) : 0
  const totalRatings = ratingStats?.total ?? 0

  const ratingScore = (avgRating / 5) * 40
  const verScore = (verificationScore / 100) * 30
  const volumeScore = Math.min((totalRatings + totalReviews) / 50, 1) * 20
  const convScore = (conversionRate / 100) * 10

  const reputationIndex = Math.round(ratingScore + verScore + volumeScore + convScore)

  // 6. Upsert score
  const [existing] = await db
    .select({ id: mpReputationScoresTable.id })
    .from(mpReputationScoresTable)
    .where(
      and(
        eq(mpReputationScoresTable.entityType, entityType),
        eq(mpReputationScoresTable.entityId, entityId),
      ),
    )
    .limit(1)

  const payload = {
    totalRatings,
    averageRating: avgRating.toFixed(2),
    totalReviews,
    verificationScore,
    conversionRate: conversionRate.toFixed(2),
    reputationIndex,
    lastCalculatedAt: new Date(),
  }

  if (existing) {
    await db.update(mpReputationScoresTable).set(payload).where(eq(mpReputationScoresTable.id, existing.id))
  } else {
    await db.insert(mpReputationScoresTable).values({ entityType, entityId, responseRate: '0.00', ...payload })
  }

  return { reputationIndex, avgRating, totalRatings, verificationScore, conversionRate }
}
