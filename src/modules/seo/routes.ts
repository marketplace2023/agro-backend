import { db } from '#database/connection.js'
import { mpSeoPageTable, mpSitemapEntriesTable } from '#database/schemas/search.js'
import { mpListingsTable } from '#database/schemas/listings.js'
import { mpCategoriesTable, mpSubcategoriesTable } from '#database/schemas/categories.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import { asc, and, eq, desc } from 'drizzle-orm'
import { Hono } from 'hono'
import { StatusCodes } from 'http-status-codes'
import { env } from '#env.js'
import { z } from 'zod'

export const seoRoutes = new Hono()

const seoDto = z.object({
  title: z.string().max(160).optional(),
  description: z.string().max(320).optional(),
  keywords: z.string().max(500).optional(),
  canonicalUrl: z.string().url().max(500).optional(),
  ogTitle: z.string().max(160).optional(),
  ogDescription: z.string().max(320).optional(),
  ogImageUrl: z.string().url().max(500).optional(),
  isIndexable: z.boolean().optional(),
})

// --- Get SEO metadata for entity ---
seoRoutes.get('/:entityType/:entityId', async (c) => {
  const entityType = c.req.param('entityType') as 'category' | 'subcategory' | 'listing' | 'store'
  const entityId = Number(c.req.param('entityId'))

  const [seo] = await db
    .select()
    .from(mpSeoPageTable)
    .where(and(eq(mpSeoPageTable.entityType, entityType), eq(mpSeoPageTable.entityId, entityId)))
    .limit(1)

  return c.json(seo ?? null)
})

// --- Update SEO metadata (admin) ---
seoRoutes.put(
  '/:entityType/:entityId',
  jwtMiddleware,
  requireRole('admin'),
  zodValidator('json', seoDto),
  async (c) => {
    const entityType = c.req.param('entityType') as 'category' | 'subcategory' | 'listing' | 'store'
    const entityId = Number(c.req.param('entityId'))
    const dto = c.req.valid('json')

    const [existing] = await db
      .select({ id: mpSeoPageTable.id })
      .from(mpSeoPageTable)
      .where(and(eq(mpSeoPageTable.entityType, entityType), eq(mpSeoPageTable.entityId, entityId)))
      .limit(1)

    if (existing) {
      await db.update(mpSeoPageTable).set(dto).where(eq(mpSeoPageTable.id, existing.id))
    } else {
      await db.insert(mpSeoPageTable).values({ ...dto, entityType, entityId })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Sitemap XML ---
seoRoutes.get('/sitemap.xml', async (c) => {
  const baseUrl = env.FRONTEND_URL

  // Collect all published listings
  const [listings, categories, stores, manualEntries] = await Promise.all([
    db
      .select({ slug: mpListingsTable.slug, updatedAt: mpListingsTable.updatedAt })
      .from(mpListingsTable)
      .where(eq(mpListingsTable.status, 'published'))
      .orderBy(desc(mpListingsTable.updatedAt))
      .limit(5000),
    db
      .select({ slug: mpCategoriesTable.slug, updatedAt: mpCategoriesTable.updatedAt })
      .from(mpCategoriesTable)
      .where(eq(mpCategoriesTable.isActive, true)),
    db
      .select({ slug: mpStoresTable.slug, updatedAt: mpStoresTable.updatedAt })
      .from(mpStoresTable)
      .where(eq(mpStoresTable.status, 'active')),
    db
      .select()
      .from(mpSitemapEntriesTable)
      .where(eq(mpSitemapEntriesTable.isActive, true))
      .orderBy(asc(mpSitemapEntriesTable.priority)),
  ])

  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
    { loc: baseUrl, lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '1.0' },
    ...manualEntries.map((e) => ({
      loc: `${baseUrl}${e.url}`,
      lastmod: e.lastMod.toISOString().split('T')[0],
      changefreq: e.changeFreq,
      priority: String(e.priority),
    })),
    ...categories.map((cat) => ({
      loc: `${baseUrl}/c/${cat.slug}`,
      lastmod: cat.updatedAt.toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    })),
    ...stores.map((s) => ({
      loc: `${baseUrl}/tiendas/${s.slug}`,
      lastmod: s.updatedAt.toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.7',
    })),
    ...listings.map((l) => ({
      loc: `${baseUrl}/anuncios/${l.slug}`,
      lastmod: l.updatedAt.toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '0.6',
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`

  return c.text(xml, 200, { 'Content-Type': 'application/xml; charset=UTF-8' })
})

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
