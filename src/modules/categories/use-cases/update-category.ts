import { db } from '#database/connection.js'
import { mpCategoriesTable } from '#database/schemas/categories.js'
import { CategoryNotFound, SlugAlreadyExists } from '#modules/categories/errors.js'
import { use } from '#database/connection.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const updateCategoryDto = z.object({
  name: z.string().min(2).max(100).optional(),
  slug: z.string().min(2).max(120).regex(/^[a-z0-9-]+$/).optional(),
  description: z.string().max(1000).optional(),
  icon: z.string().max(100).optional(),
  imageUrl: z.string().url().max(500).optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
})

export type UpdateCategoryDto = z.infer<typeof updateCategoryDto>

export const updateCategory = Result.resultableFn(async function (
  id: number,
  dto: UpdateCategoryDto,
) {
  const [existing] = await db
    .select({ id: mpCategoriesTable.id })
    .from(mpCategoriesTable)
    .where(eq(mpCategoriesTable.id, id))
    .limit(1)

  if (!existing) return Result.err(new CategoryNotFound())

  const [, error] = await use((db) =>
    db.update(mpCategoriesTable).set(dto).where(eq(mpCategoriesTable.id, id)),
  )

  if (error) {
    if (error.reason === 'unique_violation') return Result.err(new SlugAlreadyExists())
    throw error.cause
  }

  return Result.okVoid()
})
