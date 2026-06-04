import { db } from '#database/connection.js'
import {
  mpCropBatchesTable,
  mpProductCertificationsTable,
  mpProductsTable,
  mpQualitySpecsTable,
  mpUnitsTable,
} from '#database/schemas/products.js'
import { mpCategoriesTable, mpSubcategoriesTable } from '#database/schemas/categories.js'
import { mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { ProductNotFound, NotProductOwner, BatchNotFound } from '#modules/products/errors.js'
import { createProduct, createProductDto } from '#modules/products/use-cases/create-product.js'
import { updateProduct, updateProductDto } from '#modules/products/use-cases/update-product.js'
import {
  createBatch,
  createBatchDto,
  updateBatch,
  updateBatchDto,
  deleteBatch,
} from '#modules/products/use-cases/manage-batches.js'
import {
  addQualitySpec,
  createQualitySpecDto,
  addCertification,
  createCertificationDto,
  deleteQualitySpec,
  deleteCertification,
} from '#modules/products/use-cases/manage-specs.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { ForbiddenException } from '#modules/shared/http/exceptions/forbidden-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, desc, eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { Match } from 'resultable'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const productRoutes = new Hono<{ Variables: HonoVariables }>()

const SELLER_ROLES = [
  'producer',
  'seller',
  'cooperative',
  'input_supplier',
  'machinery_supplier',
] as const

async function isAdmin(userId: number): Promise<boolean> {
  const roles = await db
    .select({ name: mpRolesTable.name })
    .from(mpUsersToRolesTable)
    .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
    .where(eq(mpUsersToRolesTable.userId, userId))
  return roles.some((r) => r.name === 'admin')
}

// --- Public: list units ---
productRoutes.get('/units', async (c) => {
  const units = await db
    .select()
    .from(mpUnitsTable)
    .where(eq(mpUnitsTable.isActive, true))
    .orderBy(asc(mpUnitsTable.sortOrder))
  return c.json(units)
})

const listProductsQuery = z.object({
  categoryId: z.coerce.number().int().positive().optional(),
  subcategoryId: z.coerce.number().int().positive().optional(),
  userId: z.coerce.number().int().positive().optional(),
  status: z.enum(['active', 'inactive', 'draft']).optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
})

// --- Public: list products ---
productRoutes.get('/', zodValidator('query', listProductsQuery), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const conditions = []
  if (q.categoryId) conditions.push(eq(mpProductsTable.categoryId, q.categoryId))
  if (q.subcategoryId) conditions.push(eq(mpProductsTable.subcategoryId, q.subcategoryId))
  if (q.userId) conditions.push(eq(mpProductsTable.userId, q.userId))
  conditions.push(eq(mpProductsTable.status, q.status ?? 'active'))

  const products = await db
    .select({
      id: mpProductsTable.id,
      name: mpProductsTable.name,
      description: mpProductsTable.description,
      status: mpProductsTable.status,
      sku: mpProductsTable.sku,
      userId: mpProductsTable.userId,
      categoryId: mpProductsTable.categoryId,
      subcategoryId: mpProductsTable.subcategoryId,
      categoryName: mpCategoriesTable.name,
      createdAt: mpProductsTable.createdAt,
    })
    .from(mpProductsTable)
    .leftJoin(mpCategoriesTable, eq(mpCategoriesTable.id, mpProductsTable.categoryId))
    .where(and(...conditions))
    .orderBy(desc(mpProductsTable.createdAt))
    .limit(q.limit)
    .offset(offset)

  return c.json({ products, page: q.page, limit: q.limit })
})

// --- Public: get product detail ---
productRoutes.get('/:id', async (c) => {
  const id = Number(c.req.param('id'))

  const rows = await db
    .select({
      product: mpProductsTable,
      category: mpCategoriesTable,
      subcategory: mpSubcategoriesTable,
    })
    .from(mpProductsTable)
    .leftJoin(mpCategoriesTable, eq(mpCategoriesTable.id, mpProductsTable.categoryId))
    .leftJoin(mpSubcategoriesTable, eq(mpSubcategoriesTable.id, mpProductsTable.subcategoryId))
    .where(eq(mpProductsTable.id, id))
    .limit(1)

  if (!rows.length) throw new NotFoundException('Producto no encontrado')

  const { product, category, subcategory } = rows[0]

  const [batches, qualitySpecs, certifications] = await Promise.all([
    db
      .select()
      .from(mpCropBatchesTable)
      .where(eq(mpCropBatchesTable.productId, id))
      .orderBy(desc(mpCropBatchesTable.createdAt)),
    db.select().from(mpQualitySpecsTable).where(eq(mpQualitySpecsTable.productId, id)),
    db
      .select()
      .from(mpProductCertificationsTable)
      .where(eq(mpProductCertificationsTable.productId, id)),
  ])

  return c.json({ ...product, category, subcategory, batches, qualitySpecs, certifications })
})

// ============================================================
// Authenticated routes
// ============================================================
productRoutes.use('/my/*', jwtMiddleware)
productRoutes.use('/manage/*', jwtMiddleware)

// --- Get my products ---
productRoutes.get('/my/products', async (c) => {
  const { user } = c.get('jwtPayload')
  const products = await db
    .select()
    .from(mpProductsTable)
    .where(eq(mpProductsTable.userId, user.id))
    .orderBy(desc(mpProductsTable.createdAt))
  return c.json(products)
})

// --- Create product ---
productRoutes.post(
  '/manage/products',
  requireRole(...SELLER_ROLES),
  zodValidator('json', createProductDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const productId = await createProduct(user.id, c.req.valid('json'))
    if (!productId) throw new ValidationException({ categoryId: ['Categoría no encontrada'] })
    return c.json({ id: productId }, StatusCodes.CREATED)
  },
)

// --- Update product ---
productRoutes.put(
  '/manage/products/:id',
  requireRole(...SELLER_ROLES, 'admin'),
  zodValidator('json', updateProductDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const admin = await isAdmin(user.id)

    const [, error] = await updateProduct(user.id, id, c.req.valid('json'), admin)

    if (error) {
      throw Match.matchBrand(error)({
        '@/products/errors/ProductNotFound': () => new NotFoundException('Producto no encontrado'),
        '@/products/errors/NotProductOwner': () => new ForbiddenException(),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Delete product (soft) ---
productRoutes.delete(
  '/manage/products/:id',
  requireRole(...SELLER_ROLES, 'admin'),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const admin = await isAdmin(user.id)

    const [, error] = await updateProduct(user.id, id, { status: 'inactive' }, admin)

    if (error) {
      throw Match.matchBrand(error)({
        '@/products/errors/ProductNotFound': () => new NotFoundException('Producto no encontrado'),
        '@/products/errors/NotProductOwner': () => new ForbiddenException(),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Create batch (lote/cosecha) ---
productRoutes.post(
  '/manage/products/:id/batches',
  requireRole(...SELLER_ROLES),
  zodValidator('json', createBatchDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const [batchId, error] = await createBatch(user.id, Number(c.req.param('id')), c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/products/errors/ProductNotFound': () => new NotFoundException('Producto no encontrado'),
        '@/products/errors/NotProductOwner': () => new ForbiddenException(),
      })
    }

    return c.json({ id: batchId }, StatusCodes.CREATED)
  },
)

// --- Update batch ---
productRoutes.put(
  '/manage/products/:id/batches/:batchId',
  requireRole(...SELLER_ROLES),
  zodValidator('json', updateBatchDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const [, error] = await updateBatch(
      user.id,
      Number(c.req.param('id')),
      Number(c.req.param('batchId')),
      c.req.valid('json'),
    )

    if (error) {
      throw Match.matchBrand(error)({
        '@/products/errors/ProductNotFound': () => new NotFoundException('Producto no encontrado'),
        '@/products/errors/NotProductOwner': () => new ForbiddenException(),
        '@/products/errors/BatchNotFound': () => new NotFoundException('Lote no encontrado'),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Delete batch ---
productRoutes.delete(
  '/manage/products/:id/batches/:batchId',
  requireRole(...SELLER_ROLES),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const ok = await deleteBatch(
      user.id,
      Number(c.req.param('id')),
      Number(c.req.param('batchId')),
    )
    if (!ok) throw new ForbiddenException()
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Quality specs ---
productRoutes.post(
  '/manage/products/:id/quality-specs',
  requireRole(...SELLER_ROLES),
  zodValidator('json', createQualitySpecDto),
  async (c) => {
    const specId = await addQualitySpec(Number(c.req.param('id')), c.req.valid('json'))
    return c.json({ id: specId }, StatusCodes.CREATED)
  },
)

productRoutes.delete(
  '/manage/products/:id/quality-specs/:specId',
  requireRole(...SELLER_ROLES, 'admin'),
  async (c) => {
    await deleteQualitySpec(Number(c.req.param('specId')))
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Certifications ---
productRoutes.post(
  '/manage/products/:id/certifications',
  requireRole(...SELLER_ROLES),
  zodValidator('json', createCertificationDto),
  async (c) => {
    const certId = await addCertification(Number(c.req.param('id')), c.req.valid('json'))
    return c.json({ id: certId }, StatusCodes.CREATED)
  },
)

productRoutes.delete(
  '/manage/products/:id/certifications/:certId',
  requireRole(...SELLER_ROLES, 'admin'),
  async (c) => {
    await deleteCertification(Number(c.req.param('certId')))
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)
