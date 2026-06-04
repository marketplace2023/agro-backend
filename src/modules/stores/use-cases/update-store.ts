import { db } from '#database/connection.js'
import { use } from '#database/connection.js'
import { mpStoresTable, mpStoreProfilesTable, mpGbpProfilesTable } from '#database/schemas/stores.js'
import { NotStoreOwner, SlugAlreadyExists, StoreNotFound } from '#modules/stores/errors.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const updateStoreDto = z.object({
  name: z.string().min(2).max(150).optional(),
  slug: z.string().min(2).max(170).regex(/^[a-z0-9-]+$/).optional(),
  description: z.string().max(2000).optional(),
  logoUrl: z.string().url().max(500).optional(),
  bannerUrl: z.string().url().max(500).optional(),
  department: z.string().max(100).optional(),
  municipality: z.string().max(100).optional(),
})

export type UpdateStoreDto = z.infer<typeof updateStoreDto>

export const updateStoreProfileDto = z.object({
  tagline: z.string().max(200).optional(),
  about: z.string().max(5000).optional(),
  yearFounded: z.number().int().min(1900).max(new Date().getFullYear()).optional(),
  specialties: z.string().max(1000).optional(),
  certifications: z.array(z.string()).optional(),
})

export type UpdateStoreProfileDto = z.infer<typeof updateStoreProfileDto>

export const upsertGbpDto = z.object({
  businessName: z.string().min(2).max(150),
  address: z.string().max(300).optional(),
  addressReference: z.string().max(300).optional(),
  latitude: z.string().regex(/^-?\d+(\.\d+)?$/).optional(),
  longitude: z.string().regex(/^-?\d+(\.\d+)?$/).optional(),
  postalCode: z.string().max(20).optional(),
  phone: z.string().max(30).optional(),
  website: z.string().url().max(500).optional(),
  googlePlaceId: z.string().max(200).optional(),
  isLocationApproximate: z.boolean().default(true),
})

export type UpsertGbpDto = z.infer<typeof upsertGbpDto>

async function getStoreByUserId(userId: number) {
  const [store] = await db
    .select({ id: mpStoresTable.id, userId: mpStoresTable.userId })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.userId, userId))
    .limit(1)
  return store ?? null
}

export const updateStore = Result.resultableFn(async function (userId: number, dto: UpdateStoreDto) {
  const store = await getStoreByUserId(userId)
  if (!store) return Result.err(new StoreNotFound())

  const [, error] = await use((db) =>
    db.update(mpStoresTable).set(dto).where(eq(mpStoresTable.id, store.id)),
  )

  if (error) {
    if (error.reason === 'unique_violation') return Result.err(new SlugAlreadyExists())
    throw error.cause
  }

  return Result.okVoid()
})

export const upsertStoreProfile = Result.resultableFn(async function (
  userId: number,
  dto: UpdateStoreProfileDto,
) {
  const store = await getStoreByUserId(userId)
  if (!store) return Result.err(new StoreNotFound())

  const [existing] = await db
    .select({ id: mpStoreProfilesTable.id })
    .from(mpStoreProfilesTable)
    .where(eq(mpStoreProfilesTable.storeId, store.id))
    .limit(1)

  if (existing) {
    await db.update(mpStoreProfilesTable).set(dto).where(eq(mpStoreProfilesTable.storeId, store.id))
  } else {
    await db.insert(mpStoreProfilesTable).values({ ...dto, storeId: store.id })
  }

  return Result.okVoid()
})

export const upsertGbp = Result.resultableFn(async function (userId: number, dto: UpsertGbpDto) {
  const store = await getStoreByUserId(userId)
  if (!store) return Result.err(new StoreNotFound())

  const [existing] = await db
    .select({ id: mpGbpProfilesTable.id })
    .from(mpGbpProfilesTable)
    .where(eq(mpGbpProfilesTable.storeId, store.id))
    .limit(1)

  if (existing) {
    await db.update(mpGbpProfilesTable).set(dto).where(eq(mpGbpProfilesTable.storeId, store.id))
  } else {
    await db.insert(mpGbpProfilesTable).values({ ...dto, storeId: store.id })
  }

  return Result.okVoid()
})

export async function setStoreStatus(
  storeId: number,
  status: 'active' | 'inactive' | 'suspended' | 'pending',
  isVerified?: boolean,
) {
  await db
    .update(mpStoresTable)
    .set({ status, ...(isVerified !== undefined ? { isVerified, verifiedAt: isVerified ? new Date() : null } : {}) })
    .where(eq(mpStoresTable.id, storeId))
}
