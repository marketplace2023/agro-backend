import { db } from '#database/connection.js'
import { mpListingsTable, mpListingStatusesTable } from '#database/schemas/listings.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const createListingDto = z.object({
  categoryId: z.number().int().positive(),
  subcategoryId: z.number().int().positive().optional(),
  productId: z.number().int().positive().optional(),
  title: z.string().min(5).max(255),
  description: z.string().max(5000).optional(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/).optional(),
  priceUnit: z.string().max(10).default('USD'),
  listingType: z.enum(['sale', 'rent', 'service', 'quote', 'alliance']).default('sale'),
  department: z.string().max(100).optional(),
  municipality: z.string().max(100).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  expiresAt: z.string().datetime().optional(),
})

export type CreateListingDto = z.infer<typeof createListingDto>

function buildSlug(title: string, id: number): string {
  const base = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 200)
  return `${base}-${id}`
}

export async function createListing(userId: number, dto: CreateListingDto) {
  const [store] = await db
    .select({ id: mpStoresTable.id })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.userId, userId))
    .limit(1)

  const { expiresAt, latitude, longitude, ...rest } = dto

  const [inserted] = await db
    .insert(mpListingsTable)
    .values({
      ...rest,
      userId,
      storeId: store?.id ?? undefined,
      status: 'draft',
      slug: `draft-${userId}-${Date.now()}`,
      expiresAt: expiresAt ? new Date(expiresAt) : undefined,
      latitude: latitude !== undefined ? String(latitude) : undefined,
      longitude: longitude !== undefined ? String(longitude) : undefined,
    })
    .$returningId()

  const slug = buildSlug(dto.title, inserted.id)
  await db.update(mpListingsTable).set({ slug }).where(eq(mpListingsTable.id, inserted.id))

  await db.insert(mpListingStatusesTable).values({
    listingId: inserted.id,
    toStatus: 'draft',
    changedByUserId: userId,
  })

  return inserted.id
}
