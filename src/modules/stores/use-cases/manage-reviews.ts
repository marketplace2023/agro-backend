import { db } from '#database/connection.js'
import { mpReviewsTable, mpStoresTable } from '#database/schemas/stores.js'
import { AlreadyReviewed, NotStoreOwner, StoreNotFound } from '#modules/stores/errors.js'
import { and, avg, count, eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const createReviewDto = z.object({
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(2000).optional(),
})

export type CreateReviewDto = z.infer<typeof createReviewDto>

export const createReview = Result.resultableFn(async function (
  storeId: number,
  userId: number,
  dto: CreateReviewDto,
) {
  const [store] = await db
    .select({ id: mpStoresTable.id })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.id, storeId))
    .limit(1)

  if (!store) return Result.err(new StoreNotFound())

  const [existing] = await db
    .select({ count: count() })
    .from(mpReviewsTable)
    .where(and(eq(mpReviewsTable.storeId, storeId), eq(mpReviewsTable.userId, userId)))

  if (existing.count > 0) return Result.err(new AlreadyReviewed())

  const [inserted] = await db
    .insert(mpReviewsTable)
    .values({ ...dto, storeId, userId, status: 'pending' })
    .$returningId()

  return Result.ok(inserted.id)
})

export const replyToReview = Result.resultableFn(async function (
  storeOwnerId: number,
  reviewId: number,
  reply: string,
) {
  const [review] = await db
    .select({ id: mpReviewsTable.id, storeId: mpReviewsTable.storeId })
    .from(mpReviewsTable)
    .where(eq(mpReviewsTable.id, reviewId))
    .limit(1)

  if (!review) return Result.err(new StoreNotFound())

  const [store] = await db
    .select({ userId: mpStoresTable.userId })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.id, review.storeId))
    .limit(1)

  if (!store || store.userId !== storeOwnerId) return Result.err(new NotStoreOwner())

  await db.update(mpReviewsTable).set({ ownerReply: reply }).where(eq(mpReviewsTable.id, reviewId))

  return Result.okVoid()
})

export async function getStoreRating(storeId: number) {
  const [result] = await db
    .select({ avg: avg(mpReviewsTable.rating), total: count() })
    .from(mpReviewsTable)
    .where(and(eq(mpReviewsTable.storeId, storeId), eq(mpReviewsTable.status, 'published')))

  return {
    average: result.avg ? Number(Number(result.avg).toFixed(1)) : 0,
    total: result.total,
  }
}
