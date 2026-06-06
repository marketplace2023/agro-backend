import { db } from '#database/connection.js'
import {
  mpAttributeOptionsTable,
  mpCategoriesTable,
  mpCategoryAttributesTable,
  mpDynamicFiltersTable,
  mpSubcategoriesTable,
} from '#database/schemas/categories.js'
import {
  CategoryNotFound,
  SlugAlreadyExists,
  SubcategoryNotFound,
} from '#modules/categories/errors.js'
import { createCategory, createCategoryDto } from '#modules/categories/use-cases/create-category.js'
import { updateCategory, updateCategoryDto } from '#modules/categories/use-cases/update-category.js'
import {
  createSubcategory,
  createSubcategoryDto,
} from '#modules/categories/use-cases/create-subcategory.js'
import {
  createAttribute,
  createAttributeDto,
  deleteAttribute,
} from '#modules/categories/use-cases/manage-attributes.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import { asc, eq, inArray } from 'drizzle-orm'
import { Hono } from 'hono'
import { Match } from 'resultable'
import { StatusCodes } from 'http-status-codes'

export const categoryRoutes = new Hono()

// --- Public: list active categories with their subcategories ---
categoryRoutes.get('/', async (c) => {
  const categories = await db
    .select({
      id: mpCategoriesTable.id,
      name: mpCategoriesTable.name,
      slug: mpCategoriesTable.slug,
      description: mpCategoriesTable.description,
      icon: mpCategoriesTable.icon,
      imageUrl: mpCategoriesTable.imageUrl,
      sortOrder: mpCategoriesTable.sortOrder,
    })
    .from(mpCategoriesTable)
    .where(eq(mpCategoriesTable.isActive, true))
    .orderBy(asc(mpCategoriesTable.sortOrder), asc(mpCategoriesTable.name))

  const categoryIds = categories.map((c) => c.id)
  const subcategories = categoryIds.length
    ? await db
        .select({
          id: mpSubcategoriesTable.id,
          categoryId: mpSubcategoriesTable.categoryId,
          name: mpSubcategoriesTable.name,
          slug: mpSubcategoriesTable.slug,
          sortOrder: mpSubcategoriesTable.sortOrder,
        })
        .from(mpSubcategoriesTable)
        .where(inArray(mpSubcategoriesTable.categoryId, categoryIds))
        .orderBy(asc(mpSubcategoriesTable.sortOrder))
    : []

  const subcatByCategory = subcategories.reduce<Record<number, typeof subcategories>>(
    (acc, sub) => {
      ;(acc[sub.categoryId] ??= []).push(sub)
      return acc
    },
    {},
  )

  return c.json(categories.map((cat) => ({ ...cat, subcategories: subcatByCategory[cat.id] ?? [] })))
})

// --- Public: get category with subcategories ---
categoryRoutes.get('/:id', async (c) => {
  const id = Number(c.req.param('id'))

  const [category] = await db
    .select()
    .from(mpCategoriesTable)
    .where(eq(mpCategoriesTable.id, id))
    .limit(1)

  if (!category || !category.isActive) throw new NotFoundException('Categoría no encontrada')

  const subcategories = await db
    .select({
      id: mpSubcategoriesTable.id,
      name: mpSubcategoriesTable.name,
      slug: mpSubcategoriesTable.slug,
      description: mpSubcategoriesTable.description,
      icon: mpSubcategoriesTable.icon,
      sortOrder: mpSubcategoriesTable.sortOrder,
    })
    .from(mpSubcategoriesTable)
    .where(eq(mpSubcategoriesTable.categoryId, id))
    .orderBy(asc(mpSubcategoriesTable.sortOrder))

  return c.json({ ...category, subcategories })
})

// --- Public: get attributes for a category (for form building) ---
categoryRoutes.get('/:id/attributes', async (c) => {
  const id = Number(c.req.param('id'))

  const attributes = await db
    .select()
    .from(mpCategoryAttributesTable)
    .where(eq(mpCategoryAttributesTable.categoryId, id))
    .orderBy(asc(mpCategoryAttributesTable.sortOrder))

  const attributeIds = attributes.map((a) => a.id)

  const options =
    attributeIds.length > 0
      ? await db
          .select()
          .from(mpAttributeOptionsTable)
          .orderBy(asc(mpAttributeOptionsTable.sortOrder))
      : []

  const optionsByAttr = options.reduce<Record<number, typeof options>>(
    (acc, opt) => {
      if (!acc[opt.attributeId]) acc[opt.attributeId] = []
      acc[opt.attributeId].push(opt)
      return acc
    },
    {},
  )

  return c.json(
    attributes.map((attr) => ({ ...attr, options: optionsByAttr[attr.id] ?? [] })),
  )
})

// --- Public: get filters for a category (for search) ---
categoryRoutes.get('/:id/filters', async (c) => {
  const id = Number(c.req.param('id'))

  const filters = await db
    .select()
    .from(mpDynamicFiltersTable)
    .where(eq(mpDynamicFiltersTable.categoryId, id))
    .orderBy(asc(mpDynamicFiltersTable.sortOrder))

  return c.json(filters.filter((f) => f.isActive))
})

// --- Public: get attributes for a subcategory ---
categoryRoutes.get('/:catId/subcategories/:subId/attributes', async (c) => {
  const subId = Number(c.req.param('subId'))

  const attributes = await db
    .select()
    .from(mpCategoryAttributesTable)
    .where(eq(mpCategoryAttributesTable.subcategoryId, subId))
    .orderBy(asc(mpCategoryAttributesTable.sortOrder))

  const options = attributes.length
    ? await db
        .select()
        .from(mpAttributeOptionsTable)
        .orderBy(asc(mpAttributeOptionsTable.sortOrder))
    : []

  const optionsByAttr = options.reduce<Record<number, typeof options>>((acc, opt) => {
    if (!acc[opt.attributeId]) acc[opt.attributeId] = []
    acc[opt.attributeId].push(opt)
    return acc
  }, {})

  return c.json(attributes.map((attr) => ({ ...attr, options: optionsByAttr[attr.id] ?? [] })))
})

// ============================================================
// Admin-only routes below
// ============================================================
categoryRoutes.use('/admin/*', jwtMiddleware, requireRole('admin'))

// --- Create category ---
categoryRoutes.post('/admin/categories', zodValidator('json', createCategoryDto), async (c) => {
  const [, error] = await createCategory(c.req.valid('json'))

  if (error) {
    throw Match.matchBrand(error)({
      '@/categories/errors/SlugAlreadyExists': () =>
        new ValidationException({ slug: ['El slug ya está en uso'] }),
    })
  }

  return c.body(null, StatusCodes.CREATED)
})

// --- Update category ---
categoryRoutes.put(
  '/admin/categories/:id',
  zodValidator('json', updateCategoryDto),
  async (c) => {
    const id = Number(c.req.param('id'))
    const [, error] = await updateCategory(id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/categories/errors/CategoryNotFound': () =>
          new NotFoundException('Categoría no encontrada'),
        '@/categories/errors/SlugAlreadyExists': () =>
          new ValidationException({ slug: ['El slug ya está en uso'] }),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Soft-delete category ---
categoryRoutes.delete('/admin/categories/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await db
    .update(mpCategoriesTable)
    .set({ isActive: false })
    .where(eq(mpCategoriesTable.id, id))
  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Create subcategory ---
categoryRoutes.post(
  '/admin/categories/:id/subcategories',
  zodValidator('json', createSubcategoryDto),
  async (c) => {
    const id = Number(c.req.param('id'))
    const [, error] = await createSubcategory(id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/categories/errors/CategoryNotFound': () =>
          new NotFoundException('Categoría no encontrada'),
        '@/categories/errors/SlugAlreadyExists': () =>
          new ValidationException({ slug: ['El slug ya está en uso'] }),
      })
    }

    return c.body(null, StatusCodes.CREATED)
  },
)

// --- Add attribute to category ---
categoryRoutes.post(
  '/admin/categories/:id/attributes',
  zodValidator('json', createAttributeDto),
  async (c) => {
    const id = Number(c.req.param('id'))
    await createAttribute(id, null, c.req.valid('json'))
    return c.body(null, StatusCodes.CREATED)
  },
)

// --- Add attribute to subcategory ---
categoryRoutes.post(
  '/admin/categories/:catId/subcategories/:subId/attributes',
  zodValidator('json', createAttributeDto),
  async (c) => {
    const subId = Number(c.req.param('subId'))
    await createAttribute(null, subId, c.req.valid('json'))
    return c.body(null, StatusCodes.CREATED)
  },
)

// --- Delete attribute ---
categoryRoutes.delete('/admin/attributes/:id', async (c) => {
  await deleteAttribute(Number(c.req.param('id')))
  return c.body(null, StatusCodes.NO_CONTENT)
})
