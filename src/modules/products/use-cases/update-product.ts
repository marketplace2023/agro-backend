import { db } from '#database/connection.js'
import { mpProductsTable } from '#database/schemas/products.js'
import { ProductNotFound, NotProductOwner } from '#modules/products/errors.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const updateProductDto = z.object({
  name: z.string().min(2).max(255).optional(),
  description: z.string().max(2000).optional(),
  sku: z.string().max(100).optional(),
  status: z.enum(['active', 'inactive', 'draft']).optional(),
  subcategoryId: z.number().int().positive().optional(),
})

export type UpdateProductDto = z.infer<typeof updateProductDto>

export const updateProduct = Result.resultableFn(async function (
  userId: number,
  productId: number,
  dto: UpdateProductDto,
  isAdmin = false,
) {
  const [product] = await db
    .select({ id: mpProductsTable.id, userId: mpProductsTable.userId })
    .from(mpProductsTable)
    .where(eq(mpProductsTable.id, productId))
    .limit(1)

  if (!product) return Result.err(new ProductNotFound())
  if (!isAdmin && product.userId !== userId) return Result.err(new NotProductOwner())

  await db.update(mpProductsTable).set(dto).where(eq(mpProductsTable.id, productId))

  return Result.okVoid()
})
