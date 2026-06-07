import { db } from '#database/connection.js'
import {
  mpStoresTable,
  mpStoreProfilesTable,
  mpStoreHoursTable,
  mpStoreContactsTable,
  mpStoreMediaTable,
  mpGbpProfilesTable,
  mpReviewsTable,
} from '#database/schemas/stores.js'
import { mpProductsTable } from '#database/schemas/products.js'
import {
  StoreNotFound,
  StoreAlreadyExists,
  SlugAlreadyExists,
  NotStoreOwner,
  AlreadyReviewed,
} from '#modules/stores/errors.js'
import { createStore, createStoreDto } from '#modules/stores/use-cases/create-store.js'
import { onboardStore, onboardStoreDto } from '#modules/stores/use-cases/onboard-store.js'
import {
  updateStore,
  updateStoreDto,
  upsertStoreProfile,
  updateStoreProfileDto,
  upsertGbp,
  upsertGbpDto,
  setStoreStatus,
} from '#modules/stores/use-cases/update-store.js'
import {
  setStoreHours,
  setHoursDto,
  addContact,
  storeContactDto,
  deleteContact,
  addMedia,
  storeMediaDto,
  deleteMedia,
} from '#modules/stores/use-cases/manage-store-data.js'
import {
  createReview,
  createReviewDto,
  replyToReview,
  getStoreRating,
} from '#modules/stores/use-cases/manage-reviews.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { ForbiddenException } from '#modules/shared/http/exceptions/forbidden-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { asc, avg, count, desc, eq, and, ilike, or } from 'drizzle-orm'
import { Hono } from 'hono'
import { Match } from 'resultable'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const storeRoutes = new Hono<{ Variables: HonoVariables }>()

const STORE_ROLES = [
  'producer', 'seller', 'farm_owner', 'input_supplier', 'machinery_supplier',
  'agronomist', 'transporter', 'cooperative', 'laboratory', 'certifier', 'quality_inspector',
] as const

// ============================================================
// PUBLIC ROUTES
// ============================================================

const listStoresQuery = z.object({
  department: z.string().optional(),
  roleType: z.string().optional(),
  isVerified: z.coerce.boolean().optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
})

// --- List active stores ---
storeRoutes.get('/', zodValidator('query', listStoresQuery), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const conditions = [eq(mpStoresTable.status, 'active')]
  if (q.department) conditions.push(eq(mpStoresTable.department, q.department))
  if (q.roleType)   conditions.push(eq(mpStoresTable.roleType, q.roleType))
  if (q.isVerified !== undefined) conditions.push(eq(mpStoresTable.isVerified, q.isVerified))
  if (q.search) {
    const term = `%${q.search}%`
    conditions.push(
      or(
        ilike(mpStoresTable.name, term),
        ilike(mpStoresTable.description, term),
        ilike(mpStoresTable.municipality, term),
      )!,
    )
  }

  const [stores, [{ total }]] = await Promise.all([
    db
      .select({
        id:          mpStoresTable.id,
        name:        mpStoresTable.name,
        slug:        mpStoresTable.slug,
        description: mpStoresTable.description,
        logoUrl:     mpStoresTable.logoUrl,
        roleType:    mpStoresTable.roleType,
        department:  mpStoresTable.department,
        municipality: mpStoresTable.municipality,
        isVerified:  mpStoresTable.isVerified,
        specialties: mpStoreProfilesTable.specialties,
        lat:         mpGbpProfilesTable.latitude,
        lng:         mpGbpProfilesTable.longitude,
        avgRating:   avg(mpReviewsTable.rating),
        reviewCount: count(mpReviewsTable.id),
      })
      .from(mpStoresTable)
      .leftJoin(mpStoreProfilesTable, eq(mpStoreProfilesTable.storeId, mpStoresTable.id))
      .leftJoin(mpGbpProfilesTable, eq(mpGbpProfilesTable.storeId, mpStoresTable.id))
      .leftJoin(
        mpReviewsTable,
        and(eq(mpReviewsTable.storeId, mpStoresTable.id), eq(mpReviewsTable.status, 'published')),
      )
      .where(and(...conditions))
      .groupBy(mpStoresTable.id)
      .orderBy(desc(mpStoresTable.isVerified), desc(mpStoresTable.createdAt))
      .limit(q.limit)
      .offset(offset),
    db.select({ total: count() }).from(mpStoresTable).where(and(...conditions)),
  ])

  return c.json({ stores, total, page: q.page, limit: q.limit })
})

// --- Get store by slug (full public profile) ---
storeRoutes.get('/:slug', async (c) => {
  const slug = c.req.param('slug')

  const [store] = await db
    .select()
    .from(mpStoresTable)
    .where(and(eq(mpStoresTable.slug, slug), eq(mpStoresTable.status, 'active')))
    .limit(1)

  if (!store) throw new NotFoundException('Tienda no encontrada')

  const [profile, hours, contacts, media, gbp, rating] = await Promise.all([
    db.select().from(mpStoreProfilesTable).where(eq(mpStoreProfilesTable.storeId, store.id)).limit(1),
    db.select().from(mpStoreHoursTable).where(eq(mpStoreHoursTable.storeId, store.id)).orderBy(asc(mpStoreHoursTable.dayOfWeek)),
    db.select().from(mpStoreContactsTable).where(eq(mpStoreContactsTable.storeId, store.id)).orderBy(asc(mpStoreContactsTable.sortOrder)),
    db.select().from(mpStoreMediaTable).where(eq(mpStoreMediaTable.storeId, store.id)).orderBy(asc(mpStoreMediaTable.sortOrder)),
    db.select().from(mpGbpProfilesTable).where(eq(mpGbpProfilesTable.storeId, store.id)).limit(1),
    getStoreRating(store.id),
  ])

  return c.json({
    ...store,
    profile: profile[0] ?? null,
    hours,
    contacts,
    media,
    gbp: gbp[0] ?? null,
    rating,
  })
})

// --- Get store products ---
storeRoutes.get('/:slug/products', async (c) => {
  const slug = c.req.param('slug')

  const [store] = await db
    .select({ id: mpStoresTable.id, userId: mpStoresTable.userId })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.slug, slug))
    .limit(1)

  if (!store) throw new NotFoundException('Tienda no encontrada')

  const products = await db
    .select()
    .from(mpProductsTable)
    .where(and(eq(mpProductsTable.userId, store.userId), eq(mpProductsTable.status, 'active')))
    .orderBy(desc(mpProductsTable.createdAt))

  return c.json(products)
})

// --- Get store reviews ---
storeRoutes.get('/:slug/reviews', async (c) => {
  const slug = c.req.param('slug')

  const [store] = await db
    .select({ id: mpStoresTable.id })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.slug, slug))
    .limit(1)

  if (!store) throw new NotFoundException('Tienda no encontrada')

  const reviews = await db
    .select()
    .from(mpReviewsTable)
    .where(and(eq(mpReviewsTable.storeId, store.id), eq(mpReviewsTable.status, 'published')))
    .orderBy(desc(mpReviewsTable.createdAt))

  return c.json(reviews)
})

// ============================================================
// AUTHENTICATED: my store management
// ============================================================
storeRoutes.use('/my/*', jwtMiddleware)

// --- Get my store ---
storeRoutes.get('/my/store', async (c) => {
  const { user } = c.get('jwtPayload')

  const [store] = await db
    .select()
    .from(mpStoresTable)
    .where(eq(mpStoresTable.userId, user.id))
    .limit(1)

  if (!store) throw new NotFoundException('No tienes una tienda registrada')

  return c.json(store)
})

// --- Onboarding: assign role + create store (no prior store role required) ---
storeRoutes.post('/my/onboarding', zodValidator('json', onboardStoreDto), async (c) => {
  const { user } = c.get('jwtPayload')
  const [storeId, error] = await onboardStore(user.id, c.req.valid('json'))

  if (error) {
    throw Match.matchBrand(error)({
      '@/stores/errors/StoreAlreadyExists': () =>
        new ValidationException({ name: ['Ya tienes un perfil de negocio registrado'] }),
      '@/stores/errors/SlugAlreadyExists': () =>
        new ValidationException({ slug: ['Esa URL ya está en uso, prueba con otra'] }),
    })
  }

  return c.json({ id: storeId }, StatusCodes.CREATED)
})

// --- Create my store ---
storeRoutes.post(
  '/my/store',
  requireRole(...STORE_ROLES),
  zodValidator('json', createStoreDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const [storeId, error] = await createStore(user.id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/stores/errors/StoreAlreadyExists': () =>
          new ValidationException({ name: ['Ya tienes una tienda registrada'] }),
        '@/stores/errors/SlugAlreadyExists': () =>
          new ValidationException({ slug: ['El slug ya está en uso'] }),
      })
    }

    return c.json({ id: storeId }, StatusCodes.CREATED)
  },
)

// --- Update my store ---
storeRoutes.put(
  '/my/store',
  requireRole(...STORE_ROLES),
  zodValidator('json', updateStoreDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const [, error] = await updateStore(user.id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/stores/errors/StoreNotFound': () => new NotFoundException('Tienda no encontrada'),
        '@/stores/errors/SlugAlreadyExists': () =>
          new ValidationException({ slug: ['El slug ya está en uso'] }),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Update store extended profile ---
storeRoutes.put(
  '/my/store/profile',
  requireRole(...STORE_ROLES),
  zodValidator('json', updateStoreProfileDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const [, error] = await upsertStoreProfile(user.id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/stores/errors/StoreNotFound': () => new NotFoundException('Tienda no encontrada'),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Set business hours (replaces all) ---
storeRoutes.put(
  '/my/store/hours',
  requireRole(...STORE_ROLES),
  zodValidator('json', setHoursDto),
  async (c) => {
    const { user } = c.get('jwtPayload')

    const [store] = await db
      .select({ id: mpStoresTable.id })
      .from(mpStoresTable)
      .where(eq(mpStoresTable.userId, user.id))
      .limit(1)

    if (!store) throw new NotFoundException('Tienda no encontrada')

    await setStoreHours(store.id, c.req.valid('json'))
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Manage contacts ---
storeRoutes.post(
  '/my/store/contacts',
  requireRole(...STORE_ROLES),
  zodValidator('json', storeContactDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const [store] = await db
      .select({ id: mpStoresTable.id })
      .from(mpStoresTable)
      .where(eq(mpStoresTable.userId, user.id))
      .limit(1)

    if (!store) throw new NotFoundException('Tienda no encontrada')

    const contactId = await addContact(store.id, c.req.valid('json'))
    return c.json({ id: contactId }, StatusCodes.CREATED)
  },
)

storeRoutes.delete('/my/store/contacts/:id', requireRole(...STORE_ROLES), async (c) => {
  const { user } = c.get('jwtPayload')
  const [store] = await db
    .select({ id: mpStoresTable.id })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.userId, user.id))
    .limit(1)

  if (!store) throw new NotFoundException('Tienda no encontrada')

  await deleteContact(store.id, Number(c.req.param('id')))
  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Manage media ---
storeRoutes.post(
  '/my/store/media',
  requireRole(...STORE_ROLES),
  zodValidator('json', storeMediaDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const [store] = await db
      .select({ id: mpStoresTable.id })
      .from(mpStoresTable)
      .where(eq(mpStoresTable.userId, user.id))
      .limit(1)

    if (!store) throw new NotFoundException('Tienda no encontrada')

    const mediaId = await addMedia(store.id, c.req.valid('json'))
    return c.json({ id: mediaId }, StatusCodes.CREATED)
  },
)

storeRoutes.delete('/my/store/media/:id', requireRole(...STORE_ROLES), async (c) => {
  const { user } = c.get('jwtPayload')
  const [store] = await db
    .select({ id: mpStoresTable.id })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.userId, user.id))
    .limit(1)

  if (!store) throw new NotFoundException('Tienda no encontrada')

  await deleteMedia(store.id, Number(c.req.param('id')))
  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Upsert GBP ---
storeRoutes.put(
  '/my/store/gbp',
  requireRole(...STORE_ROLES),
  zodValidator('json', upsertGbpDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const [, error] = await upsertGbp(user.id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/stores/errors/StoreNotFound': () => new NotFoundException('Tienda no encontrada'),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// REVIEWS (any authenticated user)
// ============================================================
storeRoutes.post('/:storeId/reviews', jwtMiddleware, zodValidator('json', createReviewDto), async (c) => {
  const { user } = c.get('jwtPayload')
  const storeId = Number(c.req.param('storeId'))

  const [reviewId, error] = await createReview(storeId, user.id, c.req.valid('json'))

  if (error) {
    throw Match.matchBrand(error)({
      '@/stores/errors/StoreNotFound': () => new NotFoundException('Tienda no encontrada'),
      '@/stores/errors/AlreadyReviewed': () =>
        new ValidationException({ rating: ['Ya tienes una reseña en esta tienda'] }),
    })
  }

  return c.json({ id: reviewId }, StatusCodes.CREATED)
})

storeRoutes.put(
  '/reviews/:reviewId/reply',
  jwtMiddleware,
  zodValidator('json', z.object({ reply: z.string().min(1).max(2000) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const reviewId = Number(c.req.param('reviewId'))
    const { reply } = c.req.valid('json')

    const [, error] = await replyToReview(user.id, reviewId, reply)

    if (error) {
      throw Match.matchBrand(error)({
        '@/stores/errors/StoreNotFound': () => new NotFoundException('Reseña no encontrada'),
        '@/stores/errors/NotStoreOwner': () => new ForbiddenException(),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// ADMIN
// ============================================================
storeRoutes.patch(
  '/admin/:id/status',
  jwtMiddleware,
  requireRole('admin'),
  zodValidator('json', z.object({
    status: z.enum(['active', 'inactive', 'suspended', 'pending']),
    isVerified: z.boolean().optional(),
  })),
  async (c) => {
    const { status, isVerified } = c.req.valid('json')
    await setStoreStatus(Number(c.req.param('id')), status, isVerified)
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)
