import { db } from '#database/connection.js'
import { mpBlogPostsTable } from '#database/schemas/blog.js'
import { mpUsersTable } from '#database/schemas/users.js'
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

export const blogRoutes = new Hono<{ Variables: HonoVariables }>()

// ─── DTOs ────────────────────────────────────────────────────────────────────

const createPostDto = z.object({
  title: z.string().min(5).max(255),
  slug: z.string().min(3).max(255).regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(10),
  imageUrl: z.string().url().optional().or(z.literal('')),
  category: z.string().min(2).max(80).default('General'),
  tags: z.string().max(500).optional(),
  readTimeMinutes: z.number().int().min(1).max(120).default(5),
  isPublished: z.boolean().default(false),
})

const updatePostDto = createPostDto.partial()

const listQueryDto = z.object({
  category: z.string().optional(),
  search: z.string().max(100).optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(12),
})

// ─── Public routes ───────────────────────────────────────────────────────────

// GET /blog — paginated list of published posts
blogRoutes.get('/', zodValidator('query', listQueryDto), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const conditions = [eq(mpBlogPostsTable.isPublished, true)]
  if (q.category && q.category !== 'Todos') {
    conditions.push(eq(mpBlogPostsTable.category, q.category))
  }
  if (q.search) {
    conditions.push(
      or(
        like(mpBlogPostsTable.title, `%${q.search}%`),
        like(mpBlogPostsTable.excerpt, `%${q.search}%`),
      )!,
    )
  }

  const where = and(...conditions)

  const [posts, [{ total }]] = await Promise.all([
    db
      .select({
        id: mpBlogPostsTable.id,
        title: mpBlogPostsTable.title,
        slug: mpBlogPostsTable.slug,
        excerpt: mpBlogPostsTable.excerpt,
        imageUrl: mpBlogPostsTable.imageUrl,
        category: mpBlogPostsTable.category,
        tags: mpBlogPostsTable.tags,
        readTimeMinutes: mpBlogPostsTable.readTimeMinutes,
        publishedAt: mpBlogPostsTable.publishedAt,
        viewCount: mpBlogPostsTable.viewCount,
        authorName: mpUsersTable.name,
      })
      .from(mpBlogPostsTable)
      .leftJoin(mpUsersTable, eq(mpUsersTable.id, mpBlogPostsTable.authorId))
      .where(where)
      .orderBy(desc(mpBlogPostsTable.publishedAt))
      .limit(q.limit)
      .offset(offset),
    db
      .select({ total: count() })
      .from(mpBlogPostsTable)
      .where(where),
  ])

  return c.json({ posts, total, page: q.page, limit: q.limit })
})

// GET /blog/categories — distinct categories in use
blogRoutes.get('/categories', async (c) => {
  const rows = await db
    .selectDistinct({ category: mpBlogPostsTable.category })
    .from(mpBlogPostsTable)
    .where(eq(mpBlogPostsTable.isPublished, true))
    .orderBy(asc(mpBlogPostsTable.category))

  return c.json(rows.map((r) => r.category))
})

// GET /blog/:slug — single published post (increments view count)
blogRoutes.get('/:slug', async (c) => {
  const slug = c.req.param('slug')

  const [post] = await db
    .select({
      id: mpBlogPostsTable.id,
      title: mpBlogPostsTable.title,
      slug: mpBlogPostsTable.slug,
      excerpt: mpBlogPostsTable.excerpt,
      content: mpBlogPostsTable.content,
      imageUrl: mpBlogPostsTable.imageUrl,
      category: mpBlogPostsTable.category,
      tags: mpBlogPostsTable.tags,
      readTimeMinutes: mpBlogPostsTable.readTimeMinutes,
      publishedAt: mpBlogPostsTable.publishedAt,
      viewCount: mpBlogPostsTable.viewCount,
      authorName: mpUsersTable.name,
    })
    .from(mpBlogPostsTable)
    .leftJoin(mpUsersTable, eq(mpUsersTable.id, mpBlogPostsTable.authorId))
    .where(and(eq(mpBlogPostsTable.slug, slug), eq(mpBlogPostsTable.isPublished, true)))
    .limit(1)

  if (!post) throw new NotFoundException('Artículo no encontrado')

  // Fire-and-forget view count increment
  db.update(mpBlogPostsTable)
    .set({ viewCount: sql`${mpBlogPostsTable.viewCount} + 1` })
    .where(eq(mpBlogPostsTable.slug, slug))
    .catch(() => {})

  // Related posts (same category, excluding current)
  const related = await db
    .select({
      id: mpBlogPostsTable.id,
      title: mpBlogPostsTable.title,
      slug: mpBlogPostsTable.slug,
      imageUrl: mpBlogPostsTable.imageUrl,
      category: mpBlogPostsTable.category,
      publishedAt: mpBlogPostsTable.publishedAt,
      readTimeMinutes: mpBlogPostsTable.readTimeMinutes,
    })
    .from(mpBlogPostsTable)
    .where(
      and(
        eq(mpBlogPostsTable.isPublished, true),
        eq(mpBlogPostsTable.category, post.category),
        sql`${mpBlogPostsTable.slug} != ${slug}`,
      ),
    )
    .orderBy(desc(mpBlogPostsTable.publishedAt))
    .limit(3)

  return c.json({ ...post, related })
})

// ─── Admin routes ─────────────────────────────────────────────────────────────

blogRoutes.use('/admin/*', jwtMiddleware, requireRole('admin'))

// GET /blog/admin/posts — all posts including drafts
blogRoutes.get('/admin/posts', zodValidator('query', listQueryDto), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const [posts, [{ total }]] = await Promise.all([
    db
      .select({
        id: mpBlogPostsTable.id,
        title: mpBlogPostsTable.title,
        slug: mpBlogPostsTable.slug,
        category: mpBlogPostsTable.category,
        isPublished: mpBlogPostsTable.isPublished,
        publishedAt: mpBlogPostsTable.publishedAt,
        viewCount: mpBlogPostsTable.viewCount,
        readTimeMinutes: mpBlogPostsTable.readTimeMinutes,
        authorName: mpUsersTable.name,
        createdAt: mpBlogPostsTable.createdAt,
      })
      .from(mpBlogPostsTable)
      .leftJoin(mpUsersTable, eq(mpUsersTable.id, mpBlogPostsTable.authorId))
      .orderBy(desc(mpBlogPostsTable.createdAt))
      .limit(q.limit)
      .offset(offset),
    db.select({ total: count() }).from(mpBlogPostsTable),
  ])

  return c.json({ posts, total, page: q.page, limit: q.limit })
})

// POST /blog/admin/posts
blogRoutes.post('/admin/posts', zodValidator('json', createPostDto), async (c) => {
  const { user } = c.get('jwtPayload')
  const dto = c.req.valid('json')

  const existing = await db
    .select({ id: mpBlogPostsTable.id })
    .from(mpBlogPostsTable)
    .where(eq(mpBlogPostsTable.slug, dto.slug))
    .limit(1)

  if (existing.length > 0) {
    throw new ValidationException({ slug: ['El slug ya está en uso'] })
  }

  const publishedAt = dto.isPublished ? new Date() : null

  const [inserted] = await db
    .insert(mpBlogPostsTable)
    .values({
      ...dto,
      imageUrl: dto.imageUrl || null,
      authorId: user.id,
      publishedAt,
    })
    .$returningId()

  return c.json({ id: inserted.id }, StatusCodes.CREATED)
})

// PUT /blog/admin/posts/:id
blogRoutes.put('/admin/posts/:id', zodValidator('json', updatePostDto), async (c) => {
  const id = Number(c.req.param('id'))
  const dto = c.req.valid('json')

  const [existing] = await db
    .select({ id: mpBlogPostsTable.id, isPublished: mpBlogPostsTable.isPublished, publishedAt: mpBlogPostsTable.publishedAt })
    .from(mpBlogPostsTable)
    .where(eq(mpBlogPostsTable.id, id))
    .limit(1)

  if (!existing) throw new NotFoundException('Artículo no encontrado')

  if (dto.slug) {
    const slugConflict = await db
      .select({ id: mpBlogPostsTable.id })
      .from(mpBlogPostsTable)
      .where(and(eq(mpBlogPostsTable.slug, dto.slug), sql`${mpBlogPostsTable.id} != ${id}`))
      .limit(1)

    if (slugConflict.length > 0) {
      throw new ValidationException({ slug: ['El slug ya está en uso'] })
    }
  }

  // Set publishedAt when publishing for the first time
  let publishedAt = existing.publishedAt
  if (dto.isPublished && !existing.isPublished && !existing.publishedAt) {
    publishedAt = new Date()
  }

  await db
    .update(mpBlogPostsTable)
    .set({ ...dto, imageUrl: dto.imageUrl !== undefined ? (dto.imageUrl || null) : undefined, publishedAt })
    .where(eq(mpBlogPostsTable.id, id))

  return c.body(null, StatusCodes.NO_CONTENT)
})

// DELETE /blog/admin/posts/:id
blogRoutes.delete('/admin/posts/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await db.delete(mpBlogPostsTable).where(eq(mpBlogPostsTable.id, id))
  return c.body(null, StatusCodes.NO_CONTENT)
})
