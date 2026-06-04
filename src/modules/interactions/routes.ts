import { db } from '#database/connection.js'
import {
  mpWhatsappClicksTable,
  mpFavoritesTable,
  mpReportsTable,
  mpRecommendationsTable,
  mpLeadsTable,
} from '#database/schemas/interactions.js'
import { mpListingsTable } from '#database/schemas/listings.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpStoreContactsTable } from '#database/schemas/stores.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, count, desc, eq, sql } from 'drizzle-orm'
import { Hono } from 'hono'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const interactionRoutes = new Hono<{ Variables: HonoVariables }>()

// ============================================================
// WHATSAPP TRACKING
// ============================================================

// --- Register WhatsApp click on listing ---
interactionRoutes.post('/listings/:slug/whatsapp', async (c) => {
  const slug = c.req.param('slug')

  const [listing] = await db
    .select({ id: mpListingsTable.id, storeId: mpListingsTable.storeId, userId: mpListingsTable.userId })
    .from(mpListingsTable)
    .where(and(eq(mpListingsTable.slug, slug), eq(mpListingsTable.status, 'published')))
    .limit(1)

  if (!listing) throw new NotFoundException('Publicación no encontrada')

  const ipAddress = c.req.header('x-forwarded-for') ?? c.req.header('x-real-ip') ?? undefined

  // Register click
  await db.insert(mpWhatsappClicksTable).values({
    listingId: listing.id,
    storeId: listing.storeId ?? undefined,
    ipAddress,
  })

  // Update whatsappClicks counter
  await db
    .update(mpListingsTable)
    .set({ whatsappClicks: sql`${mpListingsTable.whatsappClicks} + 1` })
    .where(eq(mpListingsTable.id, listing.id))

  // Register lead for owner (fire-and-forget)
  db.insert(mpLeadsTable)
    .values({
      ownerId: listing.userId,
      listingId: listing.id,
      storeId: listing.storeId ?? undefined,
      leadType: 'whatsapp',
      ipAddress,
    })
    .catch(() => {})

  // Get WhatsApp contact for this listing's store
  const [whatsappContact] = await db
    .select({ value: mpStoreContactsTable.value })
    .from(mpStoreContactsTable)
    .where(
      and(
        eq(mpStoreContactsTable.storeId, listing.storeId ?? 0),
        eq(mpStoreContactsTable.contactType, 'whatsapp'),
      ),
    )
    .limit(1)

  return c.json({ phone: whatsappContact?.value ?? null })
})

// ============================================================
// FAVORITES
// ============================================================

interactionRoutes.use('/favorites/*', jwtMiddleware)

// --- Get my favorites ---
interactionRoutes.get('/favorites', async (c) => {
  const { user } = c.get('jwtPayload')

  const favorites = await db
    .select()
    .from(mpFavoritesTable)
    .where(eq(mpFavoritesTable.userId, user.id))
    .orderBy(desc(mpFavoritesTable.createdAt))

  return c.json(favorites)
})

// --- Add favorite ---
interactionRoutes.post(
  '/favorites',
  zodValidator('json', z.object({
    entityType: z.enum(['listing', 'store']),
    entityId: z.number().int().positive(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const { entityType, entityId } = c.req.valid('json')

    const existing = await db
      .select({ id: mpFavoritesTable.id })
      .from(mpFavoritesTable)
      .where(
        and(
          eq(mpFavoritesTable.userId, user.id),
          eq(mpFavoritesTable.entityType, entityType),
          eq(mpFavoritesTable.entityId, entityId),
        ),
      )
      .limit(1)

    if (existing.length > 0) {
      return c.json({ already: true }, StatusCodes.OK)
    }

    await db.insert(mpFavoritesTable).values({ userId: user.id, entityType, entityId })

    // Register lead if favoriting a listing
    if (entityType === 'listing') {
      const [listing] = await db
        .select({ userId: mpListingsTable.userId, storeId: mpListingsTable.storeId })
        .from(mpListingsTable)
        .where(eq(mpListingsTable.id, entityId))
        .limit(1)

      if (listing) {
        db.insert(mpLeadsTable)
          .values({
            ownerId: listing.userId,
            contactUserId: user.id,
            listingId: entityId,
            storeId: listing.storeId ?? undefined,
            leadType: 'favorite',
          })
          .catch(() => {})
      }
    }

    return c.body(null, StatusCodes.CREATED)
  },
)

// --- Remove favorite ---
interactionRoutes.delete(
  '/favorites/:entityType/:entityId',
  async (c) => {
    const { user } = c.get('jwtPayload')
    const entityType = c.req.param('entityType') as 'listing' | 'store'
    const entityId = Number(c.req.param('entityId'))

    await db
      .delete(mpFavoritesTable)
      .where(
        and(
          eq(mpFavoritesTable.userId, user.id),
          eq(mpFavoritesTable.entityType, entityType),
          eq(mpFavoritesTable.entityId, entityId),
        ),
      )

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Check if listing is favorited ---
interactionRoutes.get('/favorites/check/:entityType/:entityId', async (c) => {
  const { user } = c.get('jwtPayload')
  const entityType = c.req.param('entityType') as 'listing' | 'store'
  const entityId = Number(c.req.param('entityId'))

  const [fav] = await db
    .select({ id: mpFavoritesTable.id })
    .from(mpFavoritesTable)
    .where(
      and(
        eq(mpFavoritesTable.userId, user.id),
        eq(mpFavoritesTable.entityType, entityType),
        eq(mpFavoritesTable.entityId, entityId),
      ),
    )
    .limit(1)

  return c.json({ isFavorite: !!fav })
})

// ============================================================
// REPORTS
// ============================================================

const reportDto = z.object({
  entityType: z.enum(['listing', 'store', 'review']),
  entityId: z.number().int().positive(),
  reason: z.enum(['spam', 'fraud', 'offensive', 'duplicate', 'incorrect_info', 'other']),
  description: z.string().max(1000).optional(),
})

// --- Submit report (any user, auth optional) ---
interactionRoutes.post('/reports', zodValidator('json', reportDto), async (c) => {
  const dto = c.req.valid('json')

  // Try to get logged-in user (optional auth)
  let userId: number | undefined
  const authHeader = c.req.header('Authorization')
  if (authHeader) {
    try {
      await jwtMiddleware(c, async () => {})
      userId = c.get('jwtPayload')?.user?.id
    } catch { /* not authenticated */ }
  }

  await db.insert(mpReportsTable).values({ ...dto, userId })

  return c.body(null, StatusCodes.CREATED)
})

// ============================================================
// RECOMMENDATIONS
// ============================================================

// --- Get recommendations for a listing ---
interactionRoutes.get('/listings/:slug/recommendations', async (c) => {
  const slug = c.req.param('slug')

  const [listing] = await db
    .select({ id: mpListingsTable.id, categoryId: mpListingsTable.categoryId, department: mpListingsTable.department })
    .from(mpListingsTable)
    .where(and(eq(mpListingsTable.slug, slug), eq(mpListingsTable.status, 'published')))
    .limit(1)

  if (!listing) throw new NotFoundException('Publicación no encontrada')

  // Check pre-computed recommendations first
  const precomputed = await db
    .select({
      id: mpListingsTable.id,
      title: mpListingsTable.title,
      price: mpListingsTable.price,
      priceUnit: mpListingsTable.priceUnit,
      slug: mpListingsTable.slug,
      department: mpListingsTable.department,
      isFeatured: mpListingsTable.isFeatured,
    })
    .from(mpRecommendationsTable)
    .innerJoin(
      mpListingsTable,
      and(
        eq(mpListingsTable.id, mpRecommendationsTable.recommendedListingId),
        eq(mpListingsTable.status, 'published'),
      ),
    )
    .where(eq(mpRecommendationsTable.baseListingId, listing.id))
    .orderBy(desc(mpRecommendationsTable.score))
    .limit(6)

  if (precomputed.length >= 4) return c.json(precomputed)

  // Fallback: same category, excluding current listing
  const fallback = await db
    .select({
      id: mpListingsTable.id,
      title: mpListingsTable.title,
      price: mpListingsTable.price,
      priceUnit: mpListingsTable.priceUnit,
      slug: mpListingsTable.slug,
      department: mpListingsTable.department,
      isFeatured: mpListingsTable.isFeatured,
    })
    .from(mpListingsTable)
    .where(
      and(
        eq(mpListingsTable.status, 'published'),
        eq(mpListingsTable.categoryId, listing.categoryId),
        sql`${mpListingsTable.id} != ${listing.id}`,
      ),
    )
    .orderBy(desc(mpListingsTable.isFeatured), desc(mpListingsTable.createdAt))
    .limit(6)

  return c.json(fallback)
})

// ============================================================
// LEADS (owner view)
// ============================================================

interactionRoutes.use('/my/leads*', jwtMiddleware)

// --- Get my leads (I'm the owner/seller) ---
interactionRoutes.get(
  '/my/leads',
  zodValidator('query', z.object({
    leadType: z.enum(['whatsapp', 'quote', 'favorite', 'contact_form', 'radar']).optional(),
    status: z.enum(['new', 'contacted', 'converted', 'lost']).optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().min(1).max(50).default(20),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const q = c.req.valid('query')
    const offset = (q.page - 1) * q.limit

    const conditions = [eq(mpLeadsTable.ownerId, user.id)]
    if (q.leadType) conditions.push(eq(mpLeadsTable.leadType, q.leadType))
    if (q.status) conditions.push(eq(mpLeadsTable.status, q.status))

    const leads = await db
      .select()
      .from(mpLeadsTable)
      .where(and(...conditions))
      .orderBy(desc(mpLeadsTable.createdAt))
      .limit(q.limit)
      .offset(offset)

    return c.json(leads)
  },
)

// --- Update lead status ---
interactionRoutes.patch(
  '/my/leads/:id/status',
  zodValidator('json', z.object({
    status: z.enum(['new', 'contacted', 'converted', 'lost']),
    notes: z.string().max(500).optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const { status, notes } = c.req.valid('json')

    const [lead] = await db
      .select({ ownerId: mpLeadsTable.ownerId })
      .from(mpLeadsTable)
      .where(eq(mpLeadsTable.id, id))
      .limit(1)

    if (!lead) throw new NotFoundException('Lead no encontrado')
    if (lead.ownerId !== user.id) return c.json({ message: 'Forbidden' }, StatusCodes.FORBIDDEN)

    await db.update(mpLeadsTable).set({ status, notes }).where(eq(mpLeadsTable.id, id))

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// ADMIN
// ============================================================
interactionRoutes.use('/admin/*', jwtMiddleware, requireRole('admin'))

// --- List pending reports ---
interactionRoutes.get(
  '/admin/reports',
  zodValidator('query', z.object({
    status: z.enum(['pending', 'reviewed', 'dismissed']).default('pending'),
    entityType: z.enum(['listing', 'store', 'review']).optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().min(1).max(50).default(20),
  })),
  async (c) => {
    const q = c.req.valid('query')
    const offset = (q.page - 1) * q.limit

    const conditions = [eq(mpReportsTable.status, q.status)]
    if (q.entityType) conditions.push(eq(mpReportsTable.entityType, q.entityType))

    const reports = await db
      .select()
      .from(mpReportsTable)
      .where(and(...conditions))
      .orderBy(desc(mpReportsTable.createdAt))
      .limit(q.limit)
      .offset(offset)

    return c.json(reports)
  },
)

// --- Review/dismiss a report ---
interactionRoutes.patch(
  '/admin/reports/:id',
  zodValidator('json', z.object({
    status: z.enum(['reviewed', 'dismissed']),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const { status } = c.req.valid('json')

    await db
      .update(mpReportsTable)
      .set({ status, reviewedByUserId: user.id, reviewedAt: new Date() })
      .where(eq(mpReportsTable.id, id))

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- WhatsApp stats (admin) ---
interactionRoutes.get('/admin/analytics/whatsapp', async (c) => {
  const stats = await db
    .select({
      listingId: mpWhatsappClicksTable.listingId,
      storeId: mpWhatsappClicksTable.storeId,
      total: count(),
    })
    .from(mpWhatsappClicksTable)
    .groupBy(mpWhatsappClicksTable.listingId, mpWhatsappClicksTable.storeId)
    .orderBy(desc(count()))
    .limit(50)

  return c.json(stats)
})
