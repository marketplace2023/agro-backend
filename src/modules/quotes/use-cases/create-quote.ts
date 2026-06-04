import { db } from '#database/connection.js'
import { mpQuotesTable, mpQuoteItemsTable, mpQuoteStatusesTable } from '#database/schemas/quotes.js'
import { mpListingsTable } from '#database/schemas/listings.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpLeadsTable } from '#database/schemas/interactions.js'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const quoteItemDto = z.object({
  description: z.string().min(1).max(255),
  quantity: z.string().regex(/^\d+(\.\d{1,2})?$/),
  unitId: z.number().int().positive().optional(),
  notes: z.string().max(500).optional(),
})

export const createQuoteDto = z.object({
  listingId: z.number().int().positive().optional(),
  storeId: z.number().int().positive().optional(),
  sellerId: z.number().int().positive(),
  subject: z.string().min(5).max(255),
  buyerNotes: z.string().max(2000).optional(),
  items: z.array(quoteItemDto).min(1).max(20),
})

export type CreateQuoteDto = z.infer<typeof createQuoteDto>

export async function createQuote(buyerId: number, dto: CreateQuoteDto) {
  const [inserted] = await db
    .insert(mpQuotesTable)
    .values({
      buyerId,
      sellerId: dto.sellerId,
      listingId: dto.listingId,
      storeId: dto.storeId,
      subject: dto.subject,
      buyerNotes: dto.buyerNotes,
      status: 'sent',
    })
    .$returningId()

  if (dto.items.length) {
    await db.insert(mpQuoteItemsTable).values(
      dto.items.map((item) => ({ ...item, quoteId: inserted.id })),
    )
  }

  await db.insert(mpQuoteStatusesTable).values({
    quoteId: inserted.id,
    toStatus: 'sent',
    changedByUserId: buyerId,
  })

  // Generate lead for seller
  db.insert(mpLeadsTable)
    .values({
      ownerId: dto.sellerId,
      contactUserId: buyerId,
      listingId: dto.listingId,
      storeId: dto.storeId,
      leadType: 'quote',
      status: 'new',
    })
    .catch(() => {})

  return inserted.id
}
