import { db } from '#database/connection.js'
import { mpProductsTable } from '#database/schemas/products.js'
import { mpCategoriesTable } from '#database/schemas/categories.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const createProductDto = z.object({
  categoryId: z.number().int().positive(),
  subcategoryId: z.number().int().positive().optional(),
  name: z.string().min(2).max(255),
  description: z.string().max(2000).optional(),
  sku: z.string().max(100).optional(),
})

export type CreateProductDto = z.infer<typeof createProductDto>

export async function createProduct(userId: number, dto: CreateProductDto) {
  const [category] = await db
    .select({ id: mpCategoriesTable.id })
    .from(mpCategoriesTable)
    .where(eq(mpCategoriesTable.id, dto.categoryId))
    .limit(1)

  if (!category) return null

  const [inserted] = await db
    .insert(mpProductsTable)
    .values({ ...dto, userId, status: 'draft' })
    .$returningId()

  return inserted.id
}
