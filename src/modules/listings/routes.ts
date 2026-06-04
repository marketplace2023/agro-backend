import { db } from '#database/connection.js'
import {
  mpListingsTable,
  mpListingMediaTable,
  mpListingAttributesTable,
  mpListingStatusesTable,
  mpModerationQueueTable,
} from '#database/schemas/listings.js'
import { mpCategoriesTable, mpSubcategoriesTable } from '#database/schemas/categories.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { ListingNotFound, NotListingOwner, InvalidStatusTransition } from '#modules/listings/errors.js'
import { createListing, createListingDto } from '#modules/listings/use-cases/create-listing.js'
import { changeListingStatus } from '#modules/listings/use-cases/change-status.js'
import {
  addListingMedia,
  listingMediaDto,
  deleteListingMedia,
  setListingAttributes,
  setListingAttributesDto,
} from '#modules/listings/use-cases/manage-listing-content.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { ForbiddenException } from '#modules/shared/http/exceptions/forbidden-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, count, desc, eq, gte, lte, sql } from 'drizzle-orm'
import { Hono } from 'hono'
import { Match } from 'resultable'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const listingRoutes = new Hono<{ Variables: HonoVariables }>()

const PUBLISHER_ROLES = [
  'producer', 'seller', 'farm_owner', 'input_supplier', 'machinery_supplier',
  'agronomist', 'transporter', 'cooperative', 'laboratory', 'certifier', 'quality_inspector',
] as const

async function isAdmin(userId: number): Promise<boolean> {
  const roles = await db
    .select({ name: mpRolesTable.name })
    .from(mpUsersToRolesTable)
    .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
    .where(eq(mpUsersToRolesTable.userId, userId))
  return roles.some((r) => r.name === 'admin')
}

// ============================================================
// PUBLIC
// ============================================================

const listingsQuery = z.object({
  categoryId: z.coerce.number().int().positive().optional(),
  subcategoryId: z.coerce.number().int().positive().optional(),
  listingType: z.enum(['sale', 'rent', 'service', 'quote', 'alliance']).optional(),
  department: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  isFeatured: z.coerce.boolean().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
})

// --- List published listings ---
listingRoutes.get('/', zodValidator('query', listingsQuery), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const conditions = [eq(mpListingsTable.status, 'published')]
  if (q.categoryId) conditions.push(eq(mpListingsTable.categoryId, q.categoryId))
  if (q.subcategoryId) conditions.push(eq(mpListingsTable.subcategoryId, q.subcategoryId))
  if (q.listingType) conditions.push(eq(mpListingsTable.listingType, q.listingType))
  if (q.department) conditions.push(eq(mpListingsTable.department, q.department))
  if (q.isFeatured !== undefined) conditions.push(eq(mpListingsTable.isFeatured, q.isFeatured))
  if (q.minPrice) conditions.push(gte(mpListingsTable.price, String(q.minPrice)))
  if (q.maxPrice) conditions.push(lte(mpListingsTable.price, String(q.maxPrice)))

  const [listings, [{ total }]] = await Promise.all([
    db
      .select({
        id: mpListingsTable.id,
        title: mpListingsTable.title,
        price: mpListingsTable.price,
        priceUnit: mpListingsTable.priceUnit,
        listingType: mpListingsTable.listingType,
        department: mpListingsTable.department,
        municipality: mpListingsTable.municipality,
        isFeatured: mpListingsTable.isFeatured,
        slug: mpListingsTable.slug,
        viewCount: mpListingsTable.viewCount,
        categoryName: mpCategoriesTable.name,
        storeName: mpStoresTable.name,
        storeSlug: mpStoresTable.slug,
        storeLogoUrl: mpStoresTable.logoUrl,
        storeIsVerified: mpStoresTable.isVerified,
        createdAt: mpListingsTable.createdAt,
      })
      .from(mpListingsTable)
      .leftJoin(mpCategoriesTable, eq(mpCategoriesTable.id, mpListingsTable.categoryId))
      .leftJoin(mpStoresTable, eq(mpStoresTable.id, mpListingsTable.storeId))
      .where(and(...conditions))
      .orderBy(desc(mpListingsTable.isFeatured), desc(mpListingsTable.createdAt))
      .limit(q.limit)
      .offset(offset),
    db
      .select({ total: count() })
      .from(mpListingsTable)
      .where(and(...conditions)),
  ])

  return c.json({ listings, total, page: q.page, limit: q.limit })
})

// --- Featured listings ---
listingRoutes.get('/featured', async (c) => {
  const listings = await db
    .select({
      id: mpListingsTable.id,
      title: mpListingsTable.title,
      price: mpListingsTable.price,
      priceUnit: mpListingsTable.priceUnit,
      slug: mpListingsTable.slug,
      department: mpListingsTable.department,
      categoryName: mpCategoriesTable.name,
      storeName: mpStoresTable.name,
      storeSlug: mpStoresTable.slug,
      storeLogoUrl: mpStoresTable.logoUrl,
    })
    .from(mpListingsTable)
    .leftJoin(mpCategoriesTable, eq(mpCategoriesTable.id, mpListingsTable.categoryId))
    .leftJoin(mpStoresTable, eq(mpStoresTable.id, mpListingsTable.storeId))
    .where(and(eq(mpListingsTable.status, 'published'), eq(mpListingsTable.isFeatured, true)))
    .orderBy(desc(mpListingsTable.createdAt))
    .limit(12)

  return c.json(listings)
})

// --- Get listing by slug ---
listingRoutes.get('/:slug', async (c) => {
  const slug = c.req.param('slug')

  const rows = await db
    .select({
      listing: mpListingsTable,
      category: mpCategoriesTable,
      subcategory: mpSubcategoriesTable,
      store: {
        id: mpStoresTable.id,
        name: mpStoresTable.name,
        slug: mpStoresTable.slug,
        logoUrl: mpStoresTable.logoUrl,
        isVerified: mpStoresTable.isVerified,
        department: mpStoresTable.department,
        municipality: mpStoresTable.municipality,
      },
    })
    .from(mpListingsTable)
    .leftJoin(mpCategoriesTable, eq(mpCategoriesTable.id, mpListingsTable.categoryId))
    .leftJoin(mpSubcategoriesTable, eq(mpSubcategoriesTable.id, mpListingsTable.subcategoryId))
    .leftJoin(mpStoresTable, eq(mpStoresTable.id, mpListingsTable.storeId))
    .where(eq(mpListingsTable.slug, slug))
    .limit(1)

  if (!rows.length || rows[0].listing.status === 'deleted') {
    throw new NotFoundException('Publicación no encontrada')
  }

  const { listing, category, subcategory, store } = rows[0]

  const [media, attributes] = await Promise.all([
    db
      .select()
      .from(mpListingMediaTable)
      .where(eq(mpListingMediaTable.listingId, listing.id))
      .orderBy(asc(mpListingMediaTable.sortOrder)),
    db
      .select()
      .from(mpListingAttributesTable)
      .where(eq(mpListingAttributesTable.listingId, listing.id)),
  ])

  // Increment view count (fire-and-forget)
  db.update(mpListingsTable)
    .set({ viewCount: sql`${mpListingsTable.viewCount} + 1` })
    .where(eq(mpListingsTable.id, listing.id))
    .catch(() => {})

  return c.json({ ...listing, category, subcategory, store, media, attributes })
})

// ============================================================
// AUTHENTICATED
// ============================================================
listingRoutes.use('/my/*', jwtMiddleware)
listingRoutes.use('/manage/*', jwtMiddleware)

// --- My listings ---
listingRoutes.get('/my/listings', async (c) => {
  const { user } = c.get('jwtPayload')

  const listings = await db
    .select()
    .from(mpListingsTable)
    .where(and(eq(mpListingsTable.userId, user.id), sql`${mpListingsTable.status} != 'deleted'`))
    .orderBy(desc(mpListingsTable.createdAt))

  return c.json(listings)
})

// --- Create listing ---
listingRoutes.post(
  '/manage/listings',
  requireRole(...PUBLISHER_ROLES),
  zodValidator('json', createListingDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const listingId = await createListing(user.id, c.req.valid('json'))
    return c.json({ id: listingId }, StatusCodes.CREATED)
  },
)

// --- Update listing (draft/paused only) ---
const updateListingDto = z.object({
  title: z.string().min(5).max(255).optional(),
  description: z.string().max(5000).optional(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/).optional(),
  priceUnit: z.string().max(10).optional(),
  listingType: z.enum(['sale', 'rent', 'service', 'quote', 'alliance']).optional(),
  department: z.string().max(100).optional(),
  municipality: z.string().max(100).optional(),
  subcategoryId: z.number().int().positive().optional(),
  productId: z.number().int().positive().optional(),
})

listingRoutes.put(
  '/manage/listings/:id',
  requireRole(...PUBLISHER_ROLES),
  zodValidator('json', updateListingDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [listing] = await db
      .select({ userId: mpListingsTable.userId, status: mpListingsTable.status })
      .from(mpListingsTable)
      .where(eq(mpListingsTable.id, id))
      .limit(1)

    if (!listing) throw new NotFoundException('Publicación no encontrada')
    if (listing.userId !== user.id) throw new ForbiddenException()
    if (!['draft', 'paused', 'rejected'].includes(listing.status)) {
      throw new ValidationException({ status: ['Solo se pueden editar borradores, pausadas o rechazadas'] })
    }

    await db.update(mpListingsTable).set(c.req.valid('json')).where(eq(mpListingsTable.id, id))
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Change listing status ---
listingRoutes.patch(
  '/manage/listings/:id/status',
  zodValidator('json', z.object({
    status: z.enum(['draft', 'pending_review', 'published', 'paused', 'rejected', 'expired', 'deleted']),
    reason: z.string().max(500).optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const { status, reason } = c.req.valid('json')
    const admin = await isAdmin(user.id)

    const [, error] = await changeListingStatus(user.id, id, status, { isAdmin: admin, reason })

    if (error) {
      throw Match.matchBrand(error)({
        '@/listings/errors/ListingNotFound': () => new NotFoundException('Publicación no encontrada'),
        '@/listings/errors/NotListingOwner': () => new ForbiddenException(),
        '@/listings/errors/InvalidStatusTransition': () =>
          new ValidationException({ status: [`Transición de estado inválida hacia '${status}'`] }),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Add media ---
listingRoutes.post(
  '/manage/listings/:id/media',
  requireRole(...PUBLISHER_ROLES),
  zodValidator('json', listingMediaDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [listing] = await db
      .select({ userId: mpListingsTable.userId })
      .from(mpListingsTable)
      .where(eq(mpListingsTable.id, id))
      .limit(1)

    if (!listing) throw new NotFoundException('Publicación no encontrada')
    if (listing.userId !== user.id) throw new ForbiddenException()

    const mediaId = await addListingMedia(id, c.req.valid('json'))
    return c.json({ id: mediaId }, StatusCodes.CREATED)
  },
)

// --- Delete media ---
listingRoutes.delete('/manage/listings/:id/media/:mediaId', requireRole(...PUBLISHER_ROLES), async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const [listing] = await db
    .select({ userId: mpListingsTable.userId })
    .from(mpListingsTable)
    .where(eq(mpListingsTable.id, id))
    .limit(1)

  if (!listing) throw new NotFoundException('Publicación no encontrada')
  if (listing.userId !== user.id) throw new ForbiddenException()

  await deleteListingMedia(id, Number(c.req.param('mediaId')))
  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Set attributes ---
listingRoutes.put(
  '/manage/listings/:id/attributes',
  requireRole(...PUBLISHER_ROLES),
  zodValidator('json', setListingAttributesDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [listing] = await db
      .select({ userId: mpListingsTable.userId })
      .from(mpListingsTable)
      .where(eq(mpListingsTable.id, id))
      .limit(1)

    if (!listing) throw new NotFoundException('Publicación no encontrada')
    if (listing.userId !== user.id) throw new ForbiddenException()

    await setListingAttributes(id, c.req.valid('json'))
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Get status history ---
listingRoutes.get('/manage/listings/:id/history', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const [listing] = await db
    .select({ userId: mpListingsTable.userId })
    .from(mpListingsTable)
    .where(eq(mpListingsTable.id, id))
    .limit(1)

  if (!listing) throw new NotFoundException('Publicación no encontrada')
  const admin = await isAdmin(user.id)
  if (listing.userId !== user.id && !admin) throw new ForbiddenException()

  const history = await db
    .select()
    .from(mpListingStatusesTable)
    .where(eq(mpListingStatusesTable.listingId, id))
    .orderBy(asc(mpListingStatusesTable.createdAt))

  return c.json(history)
})

// ============================================================
// ADMIN
// ============================================================
listingRoutes.use('/admin/*', jwtMiddleware, requireRole('admin'))

// --- Moderation queue ---
listingRoutes.get('/admin/queue', async (c) => {
  const queue = await db
    .select({
      id: mpModerationQueueTable.id,
      listingId: mpModerationQueueTable.listingId,
      priority: mpModerationQueueTable.priority,
      status: mpModerationQueueTable.status,
      listingTitle: mpListingsTable.title,
      listingUserId: mpListingsTable.userId,
      createdAt: mpModerationQueueTable.createdAt,
    })
    .from(mpModerationQueueTable)
    .leftJoin(mpListingsTable, eq(mpListingsTable.id, mpModerationQueueTable.listingId))
    .where(eq(mpModerationQueueTable.status, 'pending'))
    .orderBy(desc(sql`CASE WHEN ${mpModerationQueueTable.priority} = 'high' THEN 0 ELSE 1 END`), asc(mpModerationQueueTable.createdAt))

  return c.json(queue)
})

// --- Feature a listing ---
listingRoutes.patch(
  '/admin/listings/:id/feature',
  zodValidator('json', z.object({
    isFeatured: z.boolean(),
    featuredUntil: z.string().datetime().optional(),
  })),
  async (c) => {
    const { isFeatured, featuredUntil } = c.req.valid('json')
    await db
      .update(mpListingsTable)
      .set({ isFeatured, featuredUntil: featuredUntil ? new Date(featuredUntil) : undefined })
      .where(eq(mpListingsTable.id, Number(c.req.param('id'))))
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)
