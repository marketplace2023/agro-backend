import { db } from '#database/connection.js'
import { mpListingAttributesTable, mpListingMediaTable } from '#database/schemas/listings.js'
import { and, eq } from 'drizzle-orm'
import { z } from 'zod'

// ---- Media ----

export const listingMediaDto = z.object({
  mediaType: z.enum(['image', 'video', 'document']).default('image'),
  url: z.string().max(500),
  caption: z.string().max(200).optional(),
  isPrimary: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
})

export type ListingMediaDto = z.infer<typeof listingMediaDto>

export async function addListingMedia(listingId: number, dto: ListingMediaDto) {
  const [inserted] = await db
    .insert(mpListingMediaTable)
    .values({ ...dto, listingId })
    .$returningId()
  return inserted.id
}

export async function deleteListingMedia(listingId: number, mediaId: number) {
  await db
    .delete(mpListingMediaTable)
    .where(and(eq(mpListingMediaTable.id, mediaId), eq(mpListingMediaTable.listingId, listingId)))
}

// ---- Attributes ----

export const setListingAttributesDto = z.array(
  z.object({
    attributeId: z.number().int().positive(),
    value: z.string().min(1).max(500),
  }),
)

export type SetListingAttributesDto = z.infer<typeof setListingAttributesDto>

export async function setListingAttributes(listingId: number, attrs: SetListingAttributesDto) {
  await db.delete(mpListingAttributesTable).where(eq(mpListingAttributesTable.listingId, listingId))
  if (attrs.length) {
    await db.insert(mpListingAttributesTable).values(attrs.map((a) => ({ ...a, listingId })))
  }
}
