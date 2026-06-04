import { db } from '#database/connection.js'
import { mpCropBatchesTable, mpProductsTable } from '#database/schemas/products.js'
import { BatchNotFound, NotProductOwner, ProductNotFound } from '#modules/products/errors.js'
import { and, eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const createBatchDto = z.object({
  batchCode: z.string().max(50).optional(),
  volume: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Número decimal válido'),
  unitId: z.number().int().positive(),
  pricePerUnit: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Número decimal válido'),
  quality: z.enum(['extra', 'primera', 'segunda', 'tercera']).optional(),
  department: z.string().max(100).optional(),
  municipality: z.string().max(100).optional(),
  harvestDate: z.string().date().optional(),
  availableFrom: z.string().date().optional(),
  availableTo: z.string().date().optional(),
  notes: z.string().max(1000).optional(),
})

export type CreateBatchDto = z.infer<typeof createBatchDto>

export const updateBatchDto = createBatchDto.partial().extend({
  status: z.enum(['available', 'reserved', 'sold', 'expired']).optional(),
})

export type UpdateBatchDto = z.infer<typeof updateBatchDto>

export const createBatch = Result.resultableFn(async function (
  userId: number,
  productId: number,
  dto: CreateBatchDto,
) {
  const [product] = await db
    .select({ id: mpProductsTable.id, userId: mpProductsTable.userId })
    .from(mpProductsTable)
    .where(eq(mpProductsTable.id, productId))
    .limit(1)

  if (!product) return Result.err(new ProductNotFound())
  if (product.userId !== userId) return Result.err(new NotProductOwner())

  const [inserted] = await db
    .insert(mpCropBatchesTable)
    .values({ ...dto, productId, status: 'available' })
    .$returningId()

  return Result.ok(inserted.id)
})

export const updateBatch = Result.resultableFn(async function (
  userId: number,
  productId: number,
  batchId: number,
  dto: UpdateBatchDto,
) {
  const [product] = await db
    .select({ id: mpProductsTable.id, userId: mpProductsTable.userId })
    .from(mpProductsTable)
    .where(eq(mpProductsTable.id, productId))
    .limit(1)

  if (!product) return Result.err(new ProductNotFound())
  if (product.userId !== userId) return Result.err(new NotProductOwner())

  const [batch] = await db
    .select({ id: mpCropBatchesTable.id })
    .from(mpCropBatchesTable)
    .where(and(eq(mpCropBatchesTable.id, batchId), eq(mpCropBatchesTable.productId, productId)))
    .limit(1)

  if (!batch) return Result.err(new BatchNotFound())

  await db.update(mpCropBatchesTable).set(dto).where(eq(mpCropBatchesTable.id, batchId))

  return Result.okVoid()
})

export async function deleteBatch(userId: number, productId: number, batchId: number) {
  const [product] = await db
    .select({ userId: mpProductsTable.userId })
    .from(mpProductsTable)
    .where(eq(mpProductsTable.id, productId))
    .limit(1)

  if (!product || product.userId !== userId) return false

  await db
    .delete(mpCropBatchesTable)
    .where(and(eq(mpCropBatchesTable.id, batchId), eq(mpCropBatchesTable.productId, productId)))

  return true
}
