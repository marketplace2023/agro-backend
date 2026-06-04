import { db } from '#database/connection.js'
import { mpQuotesTable, mpQuoteItemsTable, mpQuoteStatusesTable } from '#database/schemas/quotes.js'
import { QuoteNotFound, NotQuoteParticipant } from '#modules/quotes/errors.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const respondQuoteItemDto = z.object({
  id: z.number().int().positive().optional(),
  description: z.string().min(1).max(255),
  quantity: z.string().regex(/^\d+(\.\d{1,2})?$/),
  unitId: z.number().int().positive().optional(),
  unitPrice: z.string().regex(/^\d+(\.\d{1,2})?$/),
  totalPrice: z.string().regex(/^\d+(\.\d{1,2})?$/).optional(),
  notes: z.string().max(500).optional(),
})

export const respondQuoteDto = z.object({
  items: z.array(respondQuoteItemDto).min(1).max(20),
  totalAmount: z.string().regex(/^\d+(\.\d{1,2})?$/),
  validUntil: z.string().date().optional(),
  sellerNotes: z.string().max(2000).optional(),
})

export type RespondQuoteDto = z.infer<typeof respondQuoteDto>

export const respondQuote = Result.resultableFn(async function (
  sellerId: number,
  quoteId: number,
  dto: RespondQuoteDto,
) {
  const [quote] = await db
    .select({ id: mpQuotesTable.id, sellerId: mpQuotesTable.sellerId, status: mpQuotesTable.status })
    .from(mpQuotesTable)
    .where(eq(mpQuotesTable.id, quoteId))
    .limit(1)

  if (!quote) return Result.err(new QuoteNotFound())
  if (quote.sellerId !== sellerId) return Result.err(new NotQuoteParticipant())
  if (!['sent', 'viewed'].includes(quote.status)) {
    return Result.err(new (await import('#modules/quotes/errors.js').then(m => m.InvalidQuoteTransition))())
  }

  // Replace items with seller's response
  await db.delete(mpQuoteItemsTable).where(eq(mpQuoteItemsTable.quoteId, quoteId))
  await db.insert(mpQuoteItemsTable).values(
    dto.items.map((item) => ({ ...item, quoteId })),
  )

  await db.update(mpQuotesTable).set({
    status: 'responded',
    totalAmount: dto.totalAmount,
    validUntil: dto.validUntil,
    sellerNotes: dto.sellerNotes,
  }).where(eq(mpQuotesTable.id, quoteId))

  await db.insert(mpQuoteStatusesTable).values({
    quoteId,
    fromStatus: quote.status,
    toStatus: 'responded',
    changedByUserId: sellerId,
  })

  return Result.okVoid()
})
