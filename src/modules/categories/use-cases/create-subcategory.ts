import { db } from '#database/connection.js'
import { mpCategoriesTable, mpSubcategoriesTable } from '#database/schemas/categories.js'
import { CategoryNotFound, SlugAlreadyExists } from '#modules/categories/errors.js'
import { use } from '#database/connection.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const createSubcategoryDto = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(120).regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),
  description: z.string().max(1000).optional(),
  icon: z.string().max(100).optional(),
  sortOrder: z.number().int().default(0),
})

export type CreateSubcategoryDto = z.infer<typeof createSubcategoryDto>

export const createSubcategory = Result.resultableFn(async function (
  categoryId: number,
  dto: CreateSubcategoryDto,
) {
  const [category] = await db
    .select({ id: mpCategoriesTable.id })
    .from(mpCategoriesTable)
    .where(eq(mpCategoriesTable.id, categoryId))
    .limit(1)

  if (!category) return Result.err(new CategoryNotFound())

  const [, error] = await use((db) =>
    db.insert(mpSubcategoriesTable).values({ ...dto, categoryId, isActive: true }),
  )

  if (error) {
    if (error.reason === 'unique_violation') return Result.err(new SlugAlreadyExists())
    throw error.cause
  }

  return Result.okVoid()
})
