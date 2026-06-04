import { db } from '#database/connection.js'
import { mpQuotesTable, mpQuoteStatusesTable } from '#database/schemas/quotes.js'
import { mpLeadsTable } from '#database/schemas/interactions.js'
import { InvalidQuoteTransition, NotQuoteParticipant, QuoteNotFound } from '#modules/quotes/errors.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'

type QuoteStatus = 'draft' | 'sent' | 'viewed' | 'responded' | 'accepted' | 'rejected' | 'expired' | 'cancelled'

// Buyer transitions
const BUYER_TRANSITIONS: Record<string, QuoteStatus[]> = {
  responded: ['accepted', 'rejected'],
  sent: ['cancelled'],
  viewed: ['cancelled'],
}

// Seller transitions
const SELLER_TRANSITIONS: Record<string, QuoteStatus[]> = {
  sent: ['viewed'],
}

export const changeQuoteStatus = Result.resultableFn(async function (
  userId: number,
  quoteId: number,
  newStatus: QuoteStatus,
  reason?: string,
) {
  const [quote] = await db
    .select({
      id: mpQuotesTable.id,
      buyerId: mpQuotesTable.buyerId,
      sellerId: mpQuotesTable.sellerId,
      status: mpQuotesTable.status,
      listingId: mpQuotesTable.listingId,
      storeId: mpQuotesTable.storeId,
    })
    .from(mpQuotesTable)
    .where(eq(mpQuotesTable.id, quoteId))
    .limit(1)

  if (!quote) return Result.err(new QuoteNotFound())

  const isBuyer = quote.buyerId === userId
  const isSeller = quote.sellerId === userId

  if (!isBuyer && !isSeller) return Result.err(new NotQuoteParticipant())

  const allowed = isBuyer
    ? BUYER_TRANSITIONS[quote.status] ?? []
    : SELLER_TRANSITIONS[quote.status] ?? []

  if (!allowed.includes(newStatus)) return Result.err(new InvalidQuoteTransition())

  await db.update(mpQuotesTable).set({ status: newStatus }).where(eq(mpQuotesTable.id, quoteId))

  await db.insert(mpQuoteStatusesTable).values({
    quoteId,
    fromStatus: quote.status,
    toStatus: newStatus,
    reason,
    changedByUserId: userId,
  })

  // When accepted → upgrade lead to converted
  if (newStatus === 'accepted') {
    db.update(mpLeadsTable)
      .set({ status: 'converted' })
      .where(eq(mpLeadsTable.listingId, quote.listingId ?? 0))
      .catch(() => {})
  }

  return Result.okVoid()
})
