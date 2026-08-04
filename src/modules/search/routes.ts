import { db } from '#database/connection.js'
import { mpListingsTable, mpListingMediaTable, mpListingAttributesTable } from '#database/schemas/listings.js'
import { mpCategoriesTable, mpSubcategoriesTable, mpDynamicFiltersTable, mpCategoryAttributesTable, mpAttributeOptionsTable } from '#database/schemas/categories.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpLocationsTable, mpSearchLogsTable } from '#database/schemas/search.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import { and, asc, count, desc, eq, gte, ilike, lte, or, sql, inArray } from 'drizzle-orm'
import { Hono } from 'hono'
import { z } from 'zod'

export const searchRoutes = new Hono()

const searchQuery = z.object({
  q: z.string().max(255).optional(),
  categoryId: z.coerce.number().int().positive().optional(),
  subcategoryId: z.coerce.number().int().positive().optional(),
  listingType: z.enum(['sale', 'rent', 'service', 'quote', 'alliance']).optional(),
  department: z.string().max(100).optional(),
  municipality: z.string().max(100).optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  isVerifiedStore: z.coerce.boolean().optional(),
  isFeatured: z.coerce.boolean().optional(),
  lat: z.coerce.number().min(-90).max(90).optional(),
  lng: z.coerce.number().min(-180).max(180).optional(),
  radiusKm: z.coerce.number().positive().max(500).default(50),
  sort: z.enum(['recent', 'price_asc', 'price_desc', 'featured', 'distance']).default('recent'),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  // Dynamic attribute filters: attr_<attributeId>=<value>
  // Passed as query params, extracted manually below
})

// --- Main search ---
searchRoutes.get('/', zodValidator('query', searchQuery), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const conditions = [eq(mpListingsTable.status, 'published')]

  if (q.categoryId) conditions.push(eq(mpListingsTable.categoryId, q.categoryId))
  if (q.subcategoryId) conditions.push(eq(mpListingsTable.subcategoryId, q.subcategoryId))
  if (q.listingType) conditions.push(eq(mpListingsTable.listingType, q.listingType))
  if (q.department) conditions.push(eq(mpListingsTable.department, q.department))
  if (q.municipality) conditions.push(eq(mpListingsTable.municipality, q.municipality))
  if (q.isFeatured !== undefined) conditions.push(eq(mpListingsTable.isFeatured, q.isFeatured))
  if (q.minPrice !== undefined) conditions.push(gte(mpListingsTable.price, String(q.minPrice)))
  if (q.maxPrice !== undefined) conditions.push(lte(mpListingsTable.price, String(q.maxPrice)))

  // "Cerca de mí": distance in km via Haversine, computed from the listing's lat/lng
  const hasNearMe = q.lat !== undefined && q.lng !== undefined
  const distanceExpr = hasNearMe
    ? sql<number>`(6371 * acos(least(1, greatest(-1,
        cos(radians(${q.lat})) * cos(radians(${mpListingsTable.latitude})) *
          cos(radians(${mpListingsTable.longitude}) - radians(${q.lng})) +
        sin(radians(${q.lat})) * sin(radians(${mpListingsTable.latitude}))
      ))))`
    : undefined

  if (hasNearMe && distanceExpr) {
    conditions.push(
      and(
        sql`${mpListingsTable.latitude} is not null`,
        sql`${mpListingsTable.longitude} is not null`,
        lte(distanceExpr, q.radiusKm),
      )!,
    )
  }

  if (q.q) {
    const term = `%${q.q}%`
    conditions.push(
      or(
        ilike(mpListingsTable.title, term),
        ilike(mpListingsTable.description, term),
        ilike(mpListingsTable.department, term),
        ilike(mpListingsTable.municipality, term),
      )!,
    )
  }

  // Extract dynamic attribute filters: ?attr_12=extra&attr_15=500
  const rawQuery = c.req.raw.url
  const urlObj = new URL(rawQuery)
  const attrFilters: { attributeId: number; value: string }[] = []
  for (const [key, value] of urlObj.searchParams.entries()) {
    if (key.startsWith('attr_')) {
      const attributeId = Number(key.replace('attr_', ''))
      if (!isNaN(attributeId)) attrFilters.push({ attributeId, value })
    }
  }

  // If attribute filters present, find listing IDs that match ALL of them
  let filteredListingIds: number[] | undefined
  if (attrFilters.length > 0) {
    // For each attr filter get matching listing IDs
    const attrMatchSets = await Promise.all(
      attrFilters.map(({ attributeId, value }) =>
        db
          .select({ listingId: mpListingAttributesTable.listingId })
          .from(mpListingAttributesTable)
          .where(
            and(
              eq(mpListingAttributesTable.attributeId, attributeId),
              ilike(mpListingAttributesTable.value, `%${value}%`),
            ),
          ),
      ),
    )
    // Intersection of all sets
    filteredListingIds = attrMatchSets.reduce<number[]>((acc, set, i) => {
      const ids = set.map((r) => r.listingId)
      return i === 0 ? ids : acc.filter((id) => ids.includes(id))
    }, [])

    if (filteredListingIds.length === 0) {
      return c.json({ listings: [], total: 0, page: q.page, limit: q.limit, filters: [] })
    }

    conditions.push(inArray(mpListingsTable.id, filteredListingIds))
  }

  const orderBy =
    hasNearMe && distanceExpr && (q.sort === 'distance' || q.sort === 'recent')
      ? asc(distanceExpr)
      : q.sort === 'price_asc'
        ? asc(mpListingsTable.price)
        : q.sort === 'price_desc'
          ? desc(mpListingsTable.price)
          : q.sort === 'featured'
            ? desc(mpListingsTable.isFeatured)
            : desc(mpListingsTable.createdAt)

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
        categoryId: mpListingsTable.categoryId,
        categoryName: mpCategoriesTable.name,
        categorySlug: mpCategoriesTable.slug,
        subcategoryName: mpSubcategoriesTable.name,
        storeName: mpStoresTable.name,
        storeSlug: mpStoresTable.slug,
        storeLogoUrl: mpStoresTable.logoUrl,
        storeIsVerified: mpStoresTable.isVerified,
        createdAt: mpListingsTable.createdAt,
        ...(hasNearMe && distanceExpr ? { distanceKm: distanceExpr } : {}),
      })
      .from(mpListingsTable)
      .leftJoin(mpCategoriesTable, eq(mpCategoriesTable.id, mpListingsTable.categoryId))
      .leftJoin(mpSubcategoriesTable, eq(mpSubcategoriesTable.id, mpListingsTable.subcategoryId))
      .leftJoin(mpStoresTable, eq(mpStoresTable.id, mpListingsTable.storeId))
      .where(and(...conditions))
      .orderBy(orderBy)
      .limit(q.limit)
      .offset(offset),
    db.select({ total: count() }).from(mpListingsTable).where(and(...conditions)),
  ])

  // Attach first available image per listing (primary first, then any by sort order)
  const listingIds = listings.map((l) => l.id)
  const allImages =
    listingIds.length > 0
      ? await db
          .select({
            listingId: mpListingMediaTable.listingId,
            url: mpListingMediaTable.url,
            isPrimary: mpListingMediaTable.isPrimary,
            sortOrder: mpListingMediaTable.sortOrder,
          })
          .from(mpListingMediaTable)
          .where(inArray(mpListingMediaTable.listingId, listingIds))
          .orderBy(desc(mpListingMediaTable.isPrimary), asc(mpListingMediaTable.sortOrder))
      : []

  // Keep only the first image per listing
  const imageMap = new Map<number, string>()
  for (const img of allImages) {
    if (!imageMap.has(img.listingId)) imageMap.set(img.listingId, img.url)
  }

  // Get active filters for the selected category
  const filters = q.categoryId
    ? await db
        .select({
          id: mpDynamicFiltersTable.id,
          label: mpDynamicFiltersTable.label,
          filterType: mpDynamicFiltersTable.filterType,
          attributeId: mpDynamicFiltersTable.attributeId,
          sortOrder: mpDynamicFiltersTable.sortOrder,
        })
        .from(mpDynamicFiltersTable)
        .where(
          and(
            eq(mpDynamicFiltersTable.categoryId, q.categoryId),
            eq(mpDynamicFiltersTable.isActive, true),
          ),
        )
        .orderBy(asc(mpDynamicFiltersTable.sortOrder))
    : []

  // Log search (fire-and-forget)
  if (q.q || q.categoryId) {
    db.insert(mpSearchLogsTable)
      .values({
        query: q.q,
        categoryId: q.categoryId,
        resultCount: total,
        filters: attrFilters.length ? JSON.stringify(attrFilters) : undefined,
      })
      .catch(() => {})
  }

  return c.json({
    listings: listings.map((l) => ({ ...l, primaryImage: imageMap.get(l.id) ?? null })),
    total,
    page: q.page,
    limit: q.limit,
    filters,
  })
})

// --- Suggestions (autocomplete) ---
searchRoutes.get('/suggestions', zodValidator('query', z.object({ q: z.string().min(2).max(100) })), async (c) => {
  const { q } = c.req.valid('query')
  const term = `%${q}%`

  const [listings, categories, stores] = await Promise.all([
    db
      .select({ id: mpListingsTable.id, title: mpListingsTable.title, slug: mpListingsTable.slug, type: sql<string>`'listing'` })
      .from(mpListingsTable)
      .where(and(eq(mpListingsTable.status, 'published'), ilike(mpListingsTable.title, term)))
      .limit(5),
    db
      .select({ id: mpCategoriesTable.id, title: mpCategoriesTable.name, slug: mpCategoriesTable.slug, type: sql<string>`'category'` })
      .from(mpCategoriesTable)
      .where(and(eq(mpCategoriesTable.isActive, true), ilike(mpCategoriesTable.name, term)))
      .limit(3),
    db
      .select({ id: mpStoresTable.id, title: mpStoresTable.name, slug: mpStoresTable.slug, type: sql<string>`'store'` })
      .from(mpStoresTable)
      .where(and(eq(mpStoresTable.status, 'active'), ilike(mpStoresTable.name, term)))
      .limit(3),
  ])

  return c.json([...listings, ...categories, ...stores])
})

// --- Get filters for a category (with options) ---
searchRoutes.get('/filters/:categoryId', async (c) => {
  const categoryId = Number(c.req.param('categoryId'))

  const filters = await db
    .select({
      id: mpDynamicFiltersTable.id,
      label: mpDynamicFiltersTable.label,
      filterType: mpDynamicFiltersTable.filterType,
      attributeId: mpDynamicFiltersTable.attributeId,
      sortOrder: mpDynamicFiltersTable.sortOrder,
    })
    .from(mpDynamicFiltersTable)
    .where(and(eq(mpDynamicFiltersTable.categoryId, categoryId), eq(mpDynamicFiltersTable.isActive, true)))
    .orderBy(asc(mpDynamicFiltersTable.sortOrder))

  const attrIds = filters.map((f) => f.attributeId).filter(Boolean) as number[]
  const options =
    attrIds.length > 0
      ? await db
          .select()
          .from(mpAttributeOptionsTable)
          .where(inArray(mpAttributeOptionsTable.attributeId, attrIds))
          .orderBy(asc(mpAttributeOptionsTable.sortOrder))
      : []

  const optionsByAttr = options.reduce<Record<number, typeof options>>((acc, opt) => {
    if (!acc[opt.attributeId]) acc[opt.attributeId] = []
    acc[opt.attributeId].push(opt)
    return acc
  }, {})

  return c.json(
    filters.map((f) => ({
      ...f,
      options: f.attributeId ? (optionsByAttr[f.attributeId] ?? []) : [],
    })),
  )
})

// --- Locations ---
searchRoutes.get('/locations', zodValidator('query', z.object({
  type: z.enum(['department', 'municipality']).default('department'),
  parentId: z.coerce.number().int().positive().optional(),
})), async (c) => {
  const { type, parentId } = c.req.valid('query')

  const conditions = [eq(mpLocationsTable.type, type), eq(mpLocationsTable.isActive, true)]
  if (parentId) conditions.push(eq(mpLocationsTable.parentId, parentId))

  const locations = await db
    .select({ id: mpLocationsTable.id, name: mpLocationsTable.name, code: mpLocationsTable.code })
    .from(mpLocationsTable)
    .where(and(...conditions))
    .orderBy(asc(mpLocationsTable.name))

  return c.json(locations)
})

// --- Popular searches (top queries) ---
searchRoutes.get('/popular', async (c) => {
  const popular = await db
    .select({
      query: mpSearchLogsTable.query,
      count: count(),
    })
    .from(mpSearchLogsTable)
    .where(sql`${mpSearchLogsTable.query} IS NOT NULL`)
    .groupBy(mpSearchLogsTable.query)
    .orderBy(desc(count()))
    .limit(10)

  return c.json(popular)
})
