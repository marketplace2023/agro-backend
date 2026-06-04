import { db } from '#database/connection.js'
import {
  mpAttributeOptionsTable,
  mpCategoryAttributesTable,
  mpDynamicFiltersTable,
} from '#database/schemas/categories.js'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const attributeOptionDto = z.object({
  value: z.string().min(1).max(100),
  label: z.string().min(1).max(100),
  sortOrder: z.number().int().default(0),
})

export const createAttributeDto = z.object({
  name: z.string().min(1).max(100),
  label: z.string().min(1).max(100),
  attributeType: z.enum(['text', 'number', 'select', 'multiselect', 'boolean', 'date', 'range']),
  unit: z.string().max(30).optional(),
  isRequired: z.boolean().default(false),
  isFilter: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
  options: z.array(attributeOptionDto).optional(),
})

export type CreateAttributeDto = z.infer<typeof createAttributeDto>

export async function createAttribute(
  categoryId: number | null,
  subcategoryId: number | null,
  dto: CreateAttributeDto,
) {
  const [inserted] = await db
    .insert(mpCategoryAttributesTable)
    .values({
      categoryId: categoryId ?? undefined,
      subcategoryId: subcategoryId ?? undefined,
      name: dto.name,
      label: dto.label,
      attributeType: dto.attributeType,
      unit: dto.unit,
      isRequired: dto.isRequired,
      isFilter: dto.isFilter,
      sortOrder: dto.sortOrder,
    })
    .$returningId()

  if (dto.options?.length) {
    await db.insert(mpAttributeOptionsTable).values(
      dto.options.map((opt, i) => ({ ...opt, attributeId: inserted.id, sortOrder: opt.sortOrder ?? i })),
    )
  }

  if (dto.isFilter) {
    const filterType = dto.attributeType === 'number' || dto.attributeType === 'range'
      ? 'range'
      : dto.attributeType === 'select' || dto.attributeType === 'multiselect'
        ? dto.attributeType
        : dto.attributeType === 'boolean'
          ? 'boolean'
          : 'text'

    await db.insert(mpDynamicFiltersTable).values({
      categoryId: categoryId ?? undefined,
      subcategoryId: subcategoryId ?? undefined,
      attributeId: inserted.id,
      filterType: filterType as any,
      label: dto.label,
      sortOrder: dto.sortOrder,
      isActive: true,
    })
  }

  return inserted.id
}

export async function deleteAttribute(attributeId: number) {
  await db
    .delete(mpCategoryAttributesTable)
    .where(eq(mpCategoryAttributesTable.id, attributeId))
}
