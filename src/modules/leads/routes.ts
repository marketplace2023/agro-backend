import { db } from '#database/connection.js'
import { mpLeadsTable } from '#database/schemas/interactions.js'
import {
  mpLeadNotesTable,
  mpLeadActivitiesTable,
  mpCampaignsTable,
  mpLeadCampaignsTable,
} from '#database/schemas/leads.js'
import { mpListingsTable } from '#database/schemas/listings.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ForbiddenException } from '#modules/shared/http/exceptions/forbidden-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, count, desc, eq, sql } from 'drizzle-orm'
import { Hono } from 'hono'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const leadRoutes = new Hono<{ Variables: HonoVariables }>()

leadRoutes.use('*', jwtMiddleware)

// ---- owner guard helper ----
async function assertLeadOwner(leadId: number, userId: number) {
  const [lead] = await db
    .select({ id: mpLeadsTable.id, ownerId: mpLeadsTable.ownerId })
    .from(mpLeadsTable)
    .where(eq(mpLeadsTable.id, leadId))
    .limit(1)
  if (!lead) return null
  if (lead.ownerId !== userId) return null
  return lead
}

// ============================================================
// LEAD DETAIL + NOTES + ACTIVITIES  (owner)
// ============================================================

// --- Get lead detail ---
leadRoutes.get('/:id', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const [lead] = await db
    .select({
      lead: mpLeadsTable,
      listingTitle: mpListingsTable.title,
      listingSlug: mpListingsTable.slug,
      storeName: mpStoresTable.name,
      storeSlug: mpStoresTable.slug,
    })
    .from(mpLeadsTable)
    .leftJoin(mpListingsTable, eq(mpListingsTable.id, mpLeadsTable.listingId))
    .leftJoin(mpStoresTable, eq(mpStoresTable.id, mpLeadsTable.storeId))
    .where(eq(mpLeadsTable.id, id))
    .limit(1)

  if (!lead) throw new NotFoundException('Lead no encontrado')
  if (lead.lead.ownerId !== user.id) throw new ForbiddenException()

  const [notes, activities] = await Promise.all([
    db
      .select()
      .from(mpLeadNotesTable)
      .where(eq(mpLeadNotesTable.leadId, id))
      .orderBy(desc(mpLeadNotesTable.createdAt)),
    db
      .select()
      .from(mpLeadActivitiesTable)
      .where(eq(mpLeadActivitiesTable.leadId, id))
      .orderBy(asc(mpLeadActivitiesTable.createdAt)),
  ])

  return c.json({ ...lead.lead, listingTitle: lead.listingTitle, listingSlug: lead.listingSlug, storeName: lead.storeName, storeSlug: lead.storeSlug, notes, activities })
})

// --- Add note ---
leadRoutes.post(
  '/:id/notes',
  zodValidator('json', z.object({ note: z.string().min(1).max(2000) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const lead = await assertLeadOwner(id, user.id)
    if (!lead) throw new NotFoundException('Lead no encontrado')

    const [inserted] = await db
      .insert(mpLeadNotesTable)
      .values({ leadId: id, userId: user.id, note: c.req.valid('json').note })
      .$returningId()

    // Log activity
    db.insert(mpLeadActivitiesTable).values({
      leadId: id,
      userId: user.id,
      activityType: 'note',
      description: 'Nota agregada',
    }).catch(() => {})

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)

// --- Update note ---
leadRoutes.put(
  '/:id/notes/:noteId',
  zodValidator('json', z.object({ note: z.string().min(1).max(2000) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const noteId = Number(c.req.param('noteId'))

    const lead = await assertLeadOwner(id, user.id)
    if (!lead) throw new NotFoundException('Lead no encontrado')

    await db
      .update(mpLeadNotesTable)
      .set({ note: c.req.valid('json').note })
      .where(and(eq(mpLeadNotesTable.id, noteId), eq(mpLeadNotesTable.leadId, id)))

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Delete note ---
leadRoutes.delete('/:id/notes/:noteId', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))
  const noteId = Number(c.req.param('noteId'))

  const lead = await assertLeadOwner(id, user.id)
  if (!lead) throw new NotFoundException('Lead no encontrado')

  await db
    .delete(mpLeadNotesTable)
    .where(and(eq(mpLeadNotesTable.id, noteId), eq(mpLeadNotesTable.leadId, id)))

  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Log activity ---
leadRoutes.post(
  '/:id/activities',
  zodValidator('json', z.object({
    activityType: z.enum(['call', 'email', 'whatsapp', 'visit', 'meeting', 'note']),
    description: z.string().max(1000).optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const lead = await assertLeadOwner(id, user.id)
    if (!lead) throw new NotFoundException('Lead no encontrado')

    const dto = c.req.valid('json')
    const [inserted] = await db
      .insert(mpLeadActivitiesTable)
      .values({ leadId: id, userId: user.id, ...dto })
      .$returningId()

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)

// ============================================================
// ANALYTICS  (owner)
// ============================================================

// --- My leads analytics ---
leadRoutes.get('/analytics/summary', async (c) => {
  const { user } = c.get('jwtPayload')

  const [byType, byStatus, total] = await Promise.all([
    // By lead type
    db
      .select({
        leadType: mpLeadsTable.leadType,
        total: count(),
      })
      .from(mpLeadsTable)
      .where(eq(mpLeadsTable.ownerId, user.id))
      .groupBy(mpLeadsTable.leadType),

    // By status
    db
      .select({
        status: mpLeadsTable.status,
        total: count(),
      })
      .from(mpLeadsTable)
      .where(eq(mpLeadsTable.ownerId, user.id))
      .groupBy(mpLeadsTable.status),

    // Total + conversion rate
    db
      .select({
        total: count(),
        converted: sql<number>`SUM(CASE WHEN ${mpLeadsTable.status} = 'converted' THEN 1 ELSE 0 END)`,
      })
      .from(mpLeadsTable)
      .where(eq(mpLeadsTable.ownerId, user.id)),
  ])

  const totalCount = total[0]?.total ?? 0
  const convertedCount = Number(total[0]?.converted ?? 0)
  const conversionRate = totalCount > 0 ? Number(((convertedCount / totalCount) * 100).toFixed(1)) : 0

  return c.json({
    total: totalCount,
    converted: convertedCount,
    conversionRate,
    byType,
    byStatus,
  })
})

// --- Monthly lead trend (last 6 months) ---
leadRoutes.get('/analytics/trend', async (c) => {
  const { user } = c.get('jwtPayload')

  const trend = await db
    .select({
      month: sql<string>`DATE_FORMAT(${mpLeadsTable.createdAt}, '%Y-%m')`,
      total: count(),
      converted: sql<number>`SUM(CASE WHEN ${mpLeadsTable.status} = 'converted' THEN 1 ELSE 0 END)`,
    })
    .from(mpLeadsTable)
    .where(
      and(
        eq(mpLeadsTable.ownerId, user.id),
        sql`${mpLeadsTable.createdAt} >= DATE_SUB(NOW(), INTERVAL 6 MONTH)`,
      ),
    )
    .groupBy(sql`DATE_FORMAT(${mpLeadsTable.createdAt}, '%Y-%m')`)
    .orderBy(sql`DATE_FORMAT(${mpLeadsTable.createdAt}, '%Y-%m')`)

  return c.json(trend)
})

// ============================================================
// CAMPAIGNS  (admin)
// ============================================================

leadRoutes.use('/campaigns*', requireRole('admin'))

const campaignDto = z.object({
  name: z.string().min(2).max(150),
  type: z.enum(['email', 'whatsapp', 'promotion', 'featured', 'other']),
  description: z.string().max(2000).optional(),
  budget: z.string().regex(/^\d+(\.\d{1,2})?$/).optional(),
  startDate: z.string().date().optional(),
  endDate: z.string().date().optional(),
})

// --- List campaigns ---
leadRoutes.get('/campaigns', async (c) => {
  const campaigns = await db
    .select()
    .from(mpCampaignsTable)
    .orderBy(desc(mpCampaignsTable.createdAt))

  return c.json(campaigns)
})

// --- Create campaign ---
leadRoutes.post('/campaigns', zodValidator('json', campaignDto), async (c) => {
  const { user } = c.get('jwtPayload')

  const [inserted] = await db
    .insert(mpCampaignsTable)
    .values({ ...c.req.valid('json'), status: 'draft', createdByUserId: user.id })
    .$returningId()

  return c.json({ id: inserted.id }, StatusCodes.CREATED)
})

// --- Update campaign ---
leadRoutes.put(
  '/campaigns/:id',
  zodValidator('json', campaignDto.partial().extend({
    status: z.enum(['draft', 'active', 'paused', 'ended']).optional(),
  })),
  async (c) => {
    const id = Number(c.req.param('id'))
    await db.update(mpCampaignsTable).set(c.req.valid('json')).where(eq(mpCampaignsTable.id, id))
    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Get campaign detail with lead count ---
leadRoutes.get('/campaigns/:id', async (c) => {
  const id = Number(c.req.param('id'))

  const [campaign] = await db
    .select()
    .from(mpCampaignsTable)
    .where(eq(mpCampaignsTable.id, id))
    .limit(1)

  if (!campaign) throw new NotFoundException('Campaña no encontrada')

  const [stats] = await db
    .select({
      total: count(),
      converted: sql<number>`SUM(CASE WHEN l.status = 'converted' THEN 1 ELSE 0 END)`,
    })
    .from(mpLeadCampaignsTable)
    .leftJoin(mpLeadsTable, eq(mpLeadsTable.id, mpLeadCampaignsTable.leadId))
    .where(eq(mpLeadCampaignsTable.campaignId, id))

  return c.json({ ...campaign, leadsTotal: stats.total, leadsConverted: Number(stats.converted ?? 0) })
})

// --- Link lead(s) to campaign ---
leadRoutes.post(
  '/campaigns/:id/leads',
  zodValidator('json', z.object({ leadIds: z.array(z.number().int().positive()).min(1).max(100) })),
  async (c) => {
    const campaignId = Number(c.req.param('id'))
    const { leadIds } = c.req.valid('json')

    for (const leadId of leadIds) {
      await db
        .insert(mpLeadCampaignsTable)
        .values({ leadId, campaignId })
        .onDuplicateKeyUpdate({ set: { campaignId } })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// ADMIN — full leads view
// ============================================================
leadRoutes.use('/admin*', requireRole('admin'))

const adminListQuery = z.object({
  leadType: z.enum(['whatsapp', 'quote', 'favorite', 'contact_form', 'radar']).optional(),
  status: z.enum(['new', 'contacted', 'converted', 'lost']).optional(),
  ownerId: z.coerce.number().int().positive().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
})

// --- List all leads (admin) ---
leadRoutes.get('/admin/leads', zodValidator('query', adminListQuery), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const conditions = []
  if (q.leadType) conditions.push(eq(mpLeadsTable.leadType, q.leadType))
  if (q.status) conditions.push(eq(mpLeadsTable.status, q.status))
  if (q.ownerId) conditions.push(eq(mpLeadsTable.ownerId, q.ownerId))

  const [leads, [{ total }]] = await Promise.all([
    db
      .select()
      .from(mpLeadsTable)
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(desc(mpLeadsTable.createdAt))
      .limit(q.limit)
      .offset(offset),
    db
      .select({ total: count() })
      .from(mpLeadsTable)
      .where(conditions.length ? and(...conditions) : undefined),
  ])

  return c.json({ leads, total, page: q.page, limit: q.limit })
})

// --- System-wide analytics (admin) ---
leadRoutes.get('/admin/analytics', async (c) => {
  const [byType, byStatus, topOwners] = await Promise.all([
    db
      .select({ leadType: mpLeadsTable.leadType, total: count() })
      .from(mpLeadsTable)
      .groupBy(mpLeadsTable.leadType)
      .orderBy(desc(count())),

    db
      .select({ status: mpLeadsTable.status, total: count() })
      .from(mpLeadsTable)
      .groupBy(mpLeadsTable.status),

    db
      .select({
        ownerId: mpLeadsTable.ownerId,
        total: count(),
        converted: sql<number>`SUM(CASE WHEN ${mpLeadsTable.status} = 'converted' THEN 1 ELSE 0 END)`,
      })
      .from(mpLeadsTable)
      .groupBy(mpLeadsTable.ownerId)
      .orderBy(desc(count()))
      .limit(10),
  ])

  return c.json({ byType, byStatus, topOwners })
})
