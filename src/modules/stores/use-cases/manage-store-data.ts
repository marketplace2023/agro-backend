import { db } from '#database/connection.js'
import {
  mpStoreContactsTable,
  mpStoreHoursTable,
  mpStoreMediaTable,
} from '#database/schemas/stores.js'
import { and, eq } from 'drizzle-orm'
import { z } from 'zod'

// ---- Hours ----

export const storeHourDto = z.object({
  dayOfWeek: z.number().int().min(0).max(6),
  openTime: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  closeTime: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  isClosed: z.boolean().default(false),
})

export const setHoursDto = z.array(storeHourDto).min(1).max(7)

export type SetHoursDto = z.infer<typeof setHoursDto>

export async function setStoreHours(storeId: number, hours: SetHoursDto) {
  await db.delete(mpStoreHoursTable).where(eq(mpStoreHoursTable.storeId, storeId))
  if (hours.length) {
    await db.insert(mpStoreHoursTable).values(hours.map((h) => ({ ...h, storeId })))
  }
}

// ---- Contacts ----

export const storeContactDto = z.object({
  contactType: z.enum(['phone', 'whatsapp', 'email', 'website', 'instagram', 'facebook']),
  value: z.string().min(1).max(255),
  label: z.string().max(50).optional(),
  isPrimary: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
})

export type StoreContactDto = z.infer<typeof storeContactDto>

export async function addContact(storeId: number, dto: StoreContactDto) {
  const [inserted] = await db
    .insert(mpStoreContactsTable)
    .values({ ...dto, storeId })
    .$returningId()
  return inserted.id
}

export async function deleteContact(storeId: number, contactId: number) {
  await db
    .delete(mpStoreContactsTable)
    .where(
      and(eq(mpStoreContactsTable.id, contactId), eq(mpStoreContactsTable.storeId, storeId)),
    )
}

// ---- Media ----

export const storeMediaDto = z.object({
  mediaType: z.enum(['image', 'video']).default('image'),
  url: z.string().url().max(500),
  caption: z.string().max(200).optional(),
  isPrimary: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
})

export type StoreMediaDto = z.infer<typeof storeMediaDto>

export async function addMedia(storeId: number, dto: StoreMediaDto) {
  const [inserted] = await db
    .insert(mpStoreMediaTable)
    .values({ ...dto, storeId })
    .$returningId()
  return inserted.id
}

export async function deleteMedia(storeId: number, mediaId: number) {
  await db
    .delete(mpStoreMediaTable)
    .where(and(eq(mpStoreMediaTable.id, mediaId), eq(mpStoreMediaTable.storeId, storeId)))
}
