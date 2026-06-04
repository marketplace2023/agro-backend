import { db } from '#database/connection.js'
import { mpCategoriesTable } from '#database/schemas/categories.js'
import { SlugAlreadyExists } from '#modules/categories/errors.js'
import { use } from '#database/connection.js'
import { Result } from 'resultable'
import { z } from 'zod'

export const createCategoryDto = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(120).regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),
  description: z.string().max(1000).optional(),
  icon: z.string().max(100).optional(),
  imageUrl: z.string().url().max(500).optional(),
  sortOrder: z.number().int().default(0),
})

export type CreateCategoryDto = z.infer<typeof createCategoryDto>

export const createCategory = Result.resultableFn(async function (dto: CreateCategoryDto) {
  const [result, error] = await use((db) =>
    db.insert(mpCategoriesTable).values({ ...dto, isActive: true }),
  )

  if (error) {
    if (error.reason === 'unique_violation') return Result.err(new SlugAlreadyExists())
    throw error.cause
  }

  return Result.ok(result)
})
