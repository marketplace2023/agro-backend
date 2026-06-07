import { db } from '#database/connection.js'
import { mpHelpCategoriesTable, mpHelpArticlesTable } from '#database/schemas/help.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, count, desc, eq, like, or, sql } from 'drizzle-orm'
import { Hono } from 'hono'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const helpRoutes = new Hono<{ Variables: HonoVariables }>()

// ─── DTOs ─────────────────────────────────────────────────────────────────────

const categoryDto = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/),
  description: z.string().max(1000).optional(),
  imageUrl: z.string().url().optional().or(z.literal('')),
  icon: z.string().max(50).optional(),
  sortOrder: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
})

const articleDto = z.object({
  categoryId: z.number().int().positive(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255).regex(/^[a-z0-9-]+$/),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(5),
  type: z.enum(['faq', 'guide', 'tutorial', 'policy', 'announcement']).default('faq'),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0),
})

const listQueryDto = z.object({
  search: z.string().max(100).optional(),
  categoryId: z.coerce.number().int().positive().optional(),
  type: z.enum(['faq', 'guide', 'tutorial', 'policy', 'announcement']).optional(),
  featured: z.coerce.boolean().optional(),
})

// ─── Public: categories ───────────────────────────────────────────────────────

helpRoutes.get('/categories', async (c) => {
  const categories = await db
    .select({
      id: mpHelpCategoriesTable.id,
      name: mpHelpCategoriesTable.name,
      slug: mpHelpCategoriesTable.slug,
      description: mpHelpCategoriesTable.description,
      imageUrl: mpHelpCategoriesTable.imageUrl,
      icon: mpHelpCategoriesTable.icon,
      sortOrder: mpHelpCategoriesTable.sortOrder,
      articleCount: count(mpHelpArticlesTable.id),
    })
    .from(mpHelpCategoriesTable)
    .leftJoin(
      mpHelpArticlesTable,
      and(
        eq(mpHelpArticlesTable.categoryId, mpHelpCategoriesTable.id),
        eq(mpHelpArticlesTable.isPublished, true),
      ),
    )
    .where(eq(mpHelpCategoriesTable.isActive, true))
    .groupBy(mpHelpCategoriesTable.id)
    .orderBy(asc(mpHelpCategoriesTable.sortOrder), asc(mpHelpCategoriesTable.name))

  return c.json(categories)
})

// ─── Public: articles list ────────────────────────────────────────────────────

helpRoutes.get('/articles', zodValidator('query', listQueryDto), async (c) => {
  const q = c.req.valid('query')

  const conditions = [eq(mpHelpArticlesTable.isPublished, true)]
  if (q.categoryId) conditions.push(eq(mpHelpArticlesTable.categoryId, q.categoryId))
  if (q.type) conditions.push(eq(mpHelpArticlesTable.type, q.type))
  if (q.featured) conditions.push(eq(mpHelpArticlesTable.isFeatured, true))
  if (q.search) {
    conditions.push(
      or(
        like(mpHelpArticlesTable.title, `%${q.search}%`),
        like(mpHelpArticlesTable.excerpt, `%${q.search}%`),
        like(mpHelpArticlesTable.content, `%${q.search}%`),
      )!,
    )
  }

  const articles = await db
    .select({
      id: mpHelpArticlesTable.id,
      title: mpHelpArticlesTable.title,
      slug: mpHelpArticlesTable.slug,
      excerpt: mpHelpArticlesTable.excerpt,
      type: mpHelpArticlesTable.type,
      isFeatured: mpHelpArticlesTable.isFeatured,
      sortOrder: mpHelpArticlesTable.sortOrder,
      viewCount: mpHelpArticlesTable.viewCount,
      categoryId: mpHelpCategoriesTable.id,
      categoryName: mpHelpCategoriesTable.name,
      categorySlug: mpHelpCategoriesTable.slug,
      categoryIcon: mpHelpCategoriesTable.icon,
    })
    .from(mpHelpArticlesTable)
    .innerJoin(mpHelpCategoriesTable, eq(mpHelpCategoriesTable.id, mpHelpArticlesTable.categoryId))
    .where(and(...conditions))
    .orderBy(asc(mpHelpArticlesTable.sortOrder), desc(mpHelpArticlesTable.isFeatured))

  return c.json(articles)
})

// ─── Public: single article ───────────────────────────────────────────────────

helpRoutes.get('/articles/:slug', async (c) => {
  const slug = c.req.param('slug')

  const [article] = await db
    .select({
      id: mpHelpArticlesTable.id,
      title: mpHelpArticlesTable.title,
      slug: mpHelpArticlesTable.slug,
      excerpt: mpHelpArticlesTable.excerpt,
      content: mpHelpArticlesTable.content,
      type: mpHelpArticlesTable.type,
      isFeatured: mpHelpArticlesTable.isFeatured,
      viewCount: mpHelpArticlesTable.viewCount,
      updatedAt: mpHelpArticlesTable.updatedAt,
      categoryId: mpHelpCategoriesTable.id,
      categoryName: mpHelpCategoriesTable.name,
      categorySlug: mpHelpCategoriesTable.slug,
    })
    .from(mpHelpArticlesTable)
    .innerJoin(mpHelpCategoriesTable, eq(mpHelpCategoriesTable.id, mpHelpArticlesTable.categoryId))
    .where(and(eq(mpHelpArticlesTable.slug, slug), eq(mpHelpArticlesTable.isPublished, true)))
    .limit(1)

  if (!article) throw new NotFoundException('Artículo no encontrado')

  // Fire-and-forget view count
  db.update(mpHelpArticlesTable)
    .set({ viewCount: sql`${mpHelpArticlesTable.viewCount} + 1` })
    .where(eq(mpHelpArticlesTable.slug, slug))
    .catch(() => {})

  // Related articles in same category
  const related = await db
    .select({
      id: mpHelpArticlesTable.id,
      title: mpHelpArticlesTable.title,
      slug: mpHelpArticlesTable.slug,
      type: mpHelpArticlesTable.type,
    })
    .from(mpHelpArticlesTable)
    .where(
      and(
        eq(mpHelpArticlesTable.categoryId, article.categoryId),
        eq(mpHelpArticlesTable.isPublished, true),
        sql`${mpHelpArticlesTable.slug} != ${slug}`,
      ),
    )
    .orderBy(asc(mpHelpArticlesTable.sortOrder))
    .limit(5)

  return c.json({ ...article, related })
})

// ─── Admin routes ─────────────────────────────────────────────────────────────

helpRoutes.use('/admin/*', jwtMiddleware, requireRole('admin'))

// --- Categories CRUD ---

helpRoutes.get('/admin/categories', async (c) => {
  const cats = await db
    .select()
    .from(mpHelpCategoriesTable)
    .orderBy(asc(mpHelpCategoriesTable.sortOrder))
  return c.json(cats)
})

helpRoutes.post('/admin/categories', zodValidator('json', categoryDto), async (c) => {
  const dto = c.req.valid('json')

  const existing = await db
    .select({ id: mpHelpCategoriesTable.id })
    .from(mpHelpCategoriesTable)
    .where(eq(mpHelpCategoriesTable.slug, dto.slug))
    .limit(1)

  if (existing.length > 0) throw new ValidationException({ slug: ['El slug ya está en uso'] })

  const [inserted] = await db
    .insert(mpHelpCategoriesTable)
    .values({ ...dto, imageUrl: dto.imageUrl || null })
    .$returningId()

  return c.json({ id: inserted.id }, StatusCodes.CREATED)
})

helpRoutes.put('/admin/categories/:id', zodValidator('json', categoryDto.partial()), async (c) => {
  const id = Number(c.req.param('id'))
  const dto = c.req.valid('json')

  const [existing] = await db
    .select({ id: mpHelpCategoriesTable.id })
    .from(mpHelpCategoriesTable)
    .where(eq(mpHelpCategoriesTable.id, id))
    .limit(1)

  if (!existing) throw new NotFoundException('Categoría no encontrada')

  if (dto.slug) {
    const conflict = await db
      .select({ id: mpHelpCategoriesTable.id })
      .from(mpHelpCategoriesTable)
      .where(and(eq(mpHelpCategoriesTable.slug, dto.slug), sql`${mpHelpCategoriesTable.id} != ${id}`))
      .limit(1)
    if (conflict.length > 0) throw new ValidationException({ slug: ['El slug ya está en uso'] })
  }

  await db
    .update(mpHelpCategoriesTable)
    .set({ ...dto, imageUrl: dto.imageUrl !== undefined ? (dto.imageUrl || null) : undefined })
    .where(eq(mpHelpCategoriesTable.id, id))

  return c.body(null, StatusCodes.NO_CONTENT)
})

helpRoutes.delete('/admin/categories/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await db.delete(mpHelpCategoriesTable).where(eq(mpHelpCategoriesTable.id, id))
  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Articles CRUD ---

helpRoutes.get('/admin/articles', async (c) => {
  const articles = await db
    .select({
      id: mpHelpArticlesTable.id,
      title: mpHelpArticlesTable.title,
      slug: mpHelpArticlesTable.slug,
      type: mpHelpArticlesTable.type,
      isFeatured: mpHelpArticlesTable.isFeatured,
      isPublished: mpHelpArticlesTable.isPublished,
      sortOrder: mpHelpArticlesTable.sortOrder,
      viewCount: mpHelpArticlesTable.viewCount,
      categoryName: mpHelpCategoriesTable.name,
      createdAt: mpHelpArticlesTable.createdAt,
    })
    .from(mpHelpArticlesTable)
    .innerJoin(mpHelpCategoriesTable, eq(mpHelpCategoriesTable.id, mpHelpArticlesTable.categoryId))
    .orderBy(asc(mpHelpArticlesTable.sortOrder), asc(mpHelpArticlesTable.title))
  return c.json(articles)
})

helpRoutes.post('/admin/articles', zodValidator('json', articleDto), async (c) => {
  const dto = c.req.valid('json')

  const [catExists] = await db
    .select({ id: mpHelpCategoriesTable.id })
    .from(mpHelpCategoriesTable)
    .where(eq(mpHelpCategoriesTable.id, dto.categoryId))
    .limit(1)

  if (!catExists) throw new NotFoundException('Categoría no encontrada')

  const [slugExists] = await db
    .select({ id: mpHelpArticlesTable.id })
    .from(mpHelpArticlesTable)
    .where(eq(mpHelpArticlesTable.slug, dto.slug))
    .limit(1)

  if (slugExists) throw new ValidationException({ slug: ['El slug ya está en uso'] })

  const [inserted] = await db
    .insert(mpHelpArticlesTable)
    .values(dto)
    .$returningId()

  return c.json({ id: inserted.id }, StatusCodes.CREATED)
})

helpRoutes.put('/admin/articles/:id', zodValidator('json', articleDto.partial()), async (c) => {
  const id = Number(c.req.param('id'))
  const dto = c.req.valid('json')

  const [existing] = await db
    .select({ id: mpHelpArticlesTable.id })
    .from(mpHelpArticlesTable)
    .where(eq(mpHelpArticlesTable.id, id))
    .limit(1)

  if (!existing) throw new NotFoundException('Artículo no encontrado')

  if (dto.slug) {
    const conflict = await db
      .select({ id: mpHelpArticlesTable.id })
      .from(mpHelpArticlesTable)
      .where(and(eq(mpHelpArticlesTable.slug, dto.slug), sql`${mpHelpArticlesTable.id} != ${id}`))
      .limit(1)
    if (conflict.length > 0) throw new ValidationException({ slug: ['El slug ya está en uso'] })
  }

  await db.update(mpHelpArticlesTable).set(dto).where(eq(mpHelpArticlesTable.id, id))
  return c.body(null, StatusCodes.NO_CONTENT)
})

helpRoutes.delete('/admin/articles/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await db.delete(mpHelpArticlesTable).where(eq(mpHelpArticlesTable.id, id))
  return c.body(null, StatusCodes.NO_CONTENT)
})
