import { db } from '#database/connection.js'
import { mpSettingsTable, mpAdminActionsTable, mpSupportTicketsTable } from '#database/schemas/admin.js'
import { mpUsersTable, mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { mpListingsTable, mpModerationQueueTable } from '#database/schemas/listings.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpLeadsTable } from '#database/schemas/interactions.js'
import { mpQuotesTable } from '#database/schemas/quotes.js'
import { mpReportsTable } from '#database/schemas/interactions.js'
import { mpVerificationRequestsTable } from '#database/schemas/reputation.js'
import { mpRadarAlertsTable } from '#database/schemas/radar.js'
import { mpAuditLogsTable } from '#database/schemas/profiles.js'
import { logAdminAction } from '#modules/admin/use-cases/audit.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, count, desc, eq, sql } from 'drizzle-orm'
import { Hono } from 'hono'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const adminRoutes = new Hono<{ Variables: HonoVariables }>()

adminRoutes.use('*', jwtMiddleware, requireRole('admin'))

// ============================================================
// DASHBOARD
// ============================================================

adminRoutes.get('/dashboard', async (c) => {
  const [
    [{ totalUsers }],
    [{ totalListings }],
    [{ publishedListings }],
    [{ pendingModeration }],
    [{ totalLeads }],
    [{ convertedLeads }],
    [{ openTickets }],
    [{ pendingVerifications }],
    [{ pendingReports }],
    [{ activeRadarAlerts }],
  ] = await Promise.all([
    db.select({ totalUsers: count() }).from(mpUsersTable),
    db.select({ totalListings: count() }).from(mpListingsTable).where(sql`${mpListingsTable.status} != 'deleted'`),
    db.select({ publishedListings: count() }).from(mpListingsTable).where(eq(mpListingsTable.status, 'published')),
    db.select({ pendingModeration: count() }).from(mpModerationQueueTable).where(eq(mpModerationQueueTable.status, 'pending')),
    db.select({ totalLeads: count() }).from(mpLeadsTable),
    db.select({ convertedLeads: count() }).from(mpLeadsTable).where(eq(mpLeadsTable.status, 'converted')),
    db.select({ openTickets: count() }).from(mpSupportTicketsTable).where(sql`${mpSupportTicketsTable.status} IN ('open','in_progress')`),
    db.select({ pendingVerifications: count() }).from(mpVerificationRequestsTable).where(eq(mpVerificationRequestsTable.status, 'pending')),
    db.select({ pendingReports: count() }).from(mpReportsTable).where(eq(mpReportsTable.status, 'pending')),
    db.select({ activeRadarAlerts: count() }).from(mpRadarAlertsTable).where(eq(mpRadarAlertsTable.status, 'active')),
  ])

  // Users registered in last 30 days
  const [{ newUsers }] = await db
    .select({ newUsers: count() })
    .from(mpUsersTable)
    .where(sql`${mpUsersTable.createdAt} >= DATE_SUB(NOW(), INTERVAL 30 DAY)`)

  // Listings published in last 30 days
  const [{ recentListings }] = await db
    .select({ recentListings: count() })
    .from(mpListingsTable)
    .where(
      and(
        eq(mpListingsTable.status, 'published'),
        sql`${mpListingsTable.createdAt} >= DATE_SUB(NOW(), INTERVAL 30 DAY)`,
      ),
    )

  const conversionRate = totalLeads > 0
    ? Number(((convertedLeads / totalLeads) * 100).toFixed(1))
    : 0

  return c.json({
    users: { total: totalUsers, newLast30Days: newUsers },
    listings: { total: totalListings, published: publishedListings, recentLast30Days: recentListings },
    moderation: { pendingQueue: pendingModeration },
    leads: { total: totalLeads, converted: convertedLeads, conversionRate },
    support: { openTickets },
    verifications: { pending: pendingVerifications },
    reports: { pending: pendingReports },
    radar: { activeAlerts: activeRadarAlerts },
  })
})

// ============================================================
// SETTINGS
// ============================================================

adminRoutes.get('/settings', async (c) => {
  const settings = await db
    .select()
    .from(mpSettingsTable)
    .orderBy(asc(mpSettingsTable.key))

  return c.json(settings)
})

adminRoutes.get('/settings/public', async (_c) => {
  // Public settings can be read without admin auth — but we put it here under /admin anyway
  const settings = await db
    .select({ key: mpSettingsTable.key, value: mpSettingsTable.value })
    .from(mpSettingsTable)
    .where(eq(mpSettingsTable.isPublic, true))
    .orderBy(asc(mpSettingsTable.key))

  return _c.json(Object.fromEntries(settings.map((s) => [s.key, s.value])))
})

adminRoutes.put(
  '/settings/:key',
  zodValidator('json', z.object({
    value: z.string().max(5000),
    description: z.string().max(300).optional(),
    isPublic: z.boolean().optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const key = c.req.param('key')
    const dto = c.req.valid('json')

    const [existing] = await db
      .select({ id: mpSettingsTable.id })
      .from(mpSettingsTable)
      .where(eq(mpSettingsTable.key, key))
      .limit(1)

    if (existing) {
      await db.update(mpSettingsTable).set({ ...dto, updatedByUserId: user.id }).where(eq(mpSettingsTable.key, key))
    } else {
      await db.insert(mpSettingsTable).values({ key, ...dto, updatedByUserId: user.id })
    }

    logAdminAction({ adminUserId: user.id, actionType: 'setting.updated', entityType: 'setting', description: `Updated setting: ${key}` })

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// USERS MANAGEMENT
// ============================================================

adminRoutes.get(
  '/users',
  zodValidator('query', z.object({
    search: z.string().optional(),
    status: z.enum(['active', 'banned']).optional(),
    role: z.string().optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  })),
  async (c) => {
    const q = c.req.valid('query')
    const offset = (q.page - 1) * q.limit

    const conditions = []
    if (q.status) conditions.push(eq(mpUsersTable.status, q.status))
    if (q.search) conditions.push(sql`(${mpUsersTable.name} LIKE ${`%${q.search}%`} OR ${mpUsersTable.email} LIKE ${`%${q.search}%`})`)

    const [users, [{ total }]] = await Promise.all([
      db
        .select({
          id: mpUsersTable.id,
          name: mpUsersTable.name,
          email: mpUsersTable.email,
          status: mpUsersTable.status,
          emailVerifiedAt: mpUsersTable.emailVerifiedAt,
          createdAt: mpUsersTable.createdAt,
        })
        .from(mpUsersTable)
        .where(conditions.length ? and(...conditions) : undefined)
        .orderBy(desc(mpUsersTable.createdAt))
        .limit(q.limit)
        .offset(offset),
      db.select({ total: count() }).from(mpUsersTable).where(conditions.length ? and(...conditions) : undefined),
    ])

    return c.json({ users, total, page: q.page, limit: q.limit })
  },
)

adminRoutes.patch(
  '/users/:id/status',
  zodValidator('json', z.object({ status: z.enum(['active', 'banned']) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const { status } = c.req.valid('json')

    await db.update(mpUsersTable).set({ status }).where(eq(mpUsersTable.id, id))

    logAdminAction({
      adminUserId: user.id,
      actionType: `user.${status}`,
      entityType: 'user',
      entityId: id,
      description: `User ${id} set to ${status}`,
    })

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// LISTINGS MANAGEMENT
// ============================================================

adminRoutes.get(
  '/listings',
  zodValidator('query', z.object({
    status: z.enum(['draft', 'pending_review', 'published', 'paused', 'rejected', 'expired', 'deleted']).optional(),
    categoryId: z.coerce.number().int().positive().optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  })),
  async (c) => {
    const q = c.req.valid('query')
    const offset = (q.page - 1) * q.limit

    const conditions = []
    if (q.status) conditions.push(eq(mpListingsTable.status, q.status))
    if (q.categoryId) conditions.push(eq(mpListingsTable.categoryId, q.categoryId))

    const [listings, [{ total }]] = await Promise.all([
      db
        .select({
          id: mpListingsTable.id,
          title: mpListingsTable.title,
          status: mpListingsTable.status,
          listingType: mpListingsTable.listingType,
          userId: mpListingsTable.userId,
          categoryId: mpListingsTable.categoryId,
          slug: mpListingsTable.slug,
          isFeatured: mpListingsTable.isFeatured,
          createdAt: mpListingsTable.createdAt,
        })
        .from(mpListingsTable)
        .where(conditions.length ? and(...conditions) : undefined)
        .orderBy(desc(mpListingsTable.createdAt))
        .limit(q.limit)
        .offset(offset),
      db.select({ total: count() }).from(mpListingsTable).where(conditions.length ? and(...conditions) : undefined),
    ])

    return c.json({ listings, total, page: q.page, limit: q.limit })
  },
)

// ============================================================
// MODERATION QUEUE (consolidated view)
// ============================================================

adminRoutes.get('/moderation/queue', async (c) => {
  const queue = await db
    .select({
      id: mpModerationQueueTable.id,
      listingId: mpModerationQueueTable.listingId,
      priority: mpModerationQueueTable.priority,
      status: mpModerationQueueTable.status,
      assignedToUserId: mpModerationQueueTable.assignedToUserId,
      listingTitle: mpListingsTable.title,
      listingStatus: mpListingsTable.status,
      listingUserId: mpListingsTable.userId,
      createdAt: mpModerationQueueTable.createdAt,
    })
    .from(mpModerationQueueTable)
    .leftJoin(mpListingsTable, eq(mpListingsTable.id, mpModerationQueueTable.listingId))
    .where(eq(mpModerationQueueTable.status, 'pending'))
    .orderBy(
      desc(sql`CASE WHEN ${mpModerationQueueTable.priority} = 'high' THEN 0 ELSE 1 END`),
      asc(mpModerationQueueTable.createdAt),
    )

  return c.json(queue)
})

adminRoutes.patch(
  '/moderation/queue/:id/assign',
  zodValidator('json', z.object({ userId: z.number().int().positive().nullable() })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const { userId } = c.req.valid('json')

    await db
      .update(mpModerationQueueTable)
      .set({ assignedToUserId: userId ?? undefined, status: userId ? 'in_review' : 'pending' })
      .where(eq(mpModerationQueueTable.id, id))

    logAdminAction({ adminUserId: user.id, actionType: 'moderation.assigned', entityType: 'queue_item', entityId: id })

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// SUPPORT TICKETS (admin view)
// ============================================================

adminRoutes.get(
  '/support/tickets',
  zodValidator('query', z.object({
    status: z.enum(['open', 'in_progress', 'resolved', 'closed']).optional(),
    priority: z.enum(['low', 'normal', 'high', 'urgent']).optional(),
    assignedToMe: z.coerce.boolean().optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const q = c.req.valid('query')
    const offset = (q.page - 1) * q.limit

    const conditions = []
    if (q.status) conditions.push(eq(mpSupportTicketsTable.status, q.status))
    if (q.priority) conditions.push(eq(mpSupportTicketsTable.priority, q.priority))
    if (q.assignedToMe) conditions.push(eq(mpSupportTicketsTable.assignedToUserId, user.id))

    const [tickets, [{ total }]] = await Promise.all([
      db
        .select()
        .from(mpSupportTicketsTable)
        .where(conditions.length ? and(...conditions) : undefined)
        .orderBy(
          desc(sql`CASE ${mpSupportTicketsTable.priority} WHEN 'urgent' THEN 0 WHEN 'high' THEN 1 WHEN 'normal' THEN 2 ELSE 3 END`),
          asc(mpSupportTicketsTable.createdAt),
        )
        .limit(q.limit)
        .offset(offset),
      db.select({ total: count() }).from(mpSupportTicketsTable).where(conditions.length ? and(...conditions) : undefined),
    ])

    return c.json({ tickets, total, page: q.page, limit: q.limit })
  },
)

adminRoutes.patch(
  '/support/tickets/:id',
  zodValidator('json', z.object({
    status: z.enum(['open', 'in_progress', 'resolved', 'closed']).optional(),
    priority: z.enum(['low', 'normal', 'high', 'urgent']).optional(),
    assignedToUserId: z.number().int().positive().nullable().optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const dto = c.req.valid('json')

    const update: Record<string, unknown> = { ...dto }
    if (dto.status === 'resolved' || dto.status === 'closed') {
      update.resolvedAt = new Date()
    }

    await db.update(mpSupportTicketsTable).set(update).where(eq(mpSupportTicketsTable.id, id))
    logAdminAction({ adminUserId: user.id, actionType: 'support.ticket.updated', entityType: 'ticket', entityId: id })

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// AUDIT LOG
// ============================================================

adminRoutes.get(
  '/audit',
  zodValidator('query', z.object({
    actionType: z.string().optional(),
    adminUserId: z.coerce.number().int().positive().optional(),
    entityType: z.string().optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().min(1).max(100).default(50),
  })),
  async (c) => {
    const q = c.req.valid('query')
    const offset = (q.page - 1) * q.limit

    const conditions = []
    if (q.actionType) conditions.push(eq(mpAdminActionsTable.actionType, q.actionType))
    if (q.adminUserId) conditions.push(eq(mpAdminActionsTable.adminUserId, q.adminUserId))
    if (q.entityType) conditions.push(eq(mpAdminActionsTable.entityType, q.entityType))

    const actions = await db
      .select()
      .from(mpAdminActionsTable)
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(desc(mpAdminActionsTable.createdAt))
      .limit(q.limit)
      .offset(offset)

    return c.json(actions)
  },
)

// ============================================================
// REPORTS (consolidated)
// ============================================================

adminRoutes.get(
  '/reports',
  zodValidator('query', z.object({
    status: z.enum(['pending', 'reviewed', 'dismissed']).default('pending'),
    entityType: z.enum(['listing', 'store', 'review']).optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
  })),
  async (c) => {
    const q = c.req.valid('query')
    const offset = (q.page - 1) * q.limit

    const conditions = [eq(mpReportsTable.status, q.status)]
    if (q.entityType) conditions.push(eq(mpReportsTable.entityType, q.entityType))

    const reports = await db
      .select()
      .from(mpReportsTable)
      .where(and(...conditions))
      .orderBy(desc(mpReportsTable.createdAt))
      .limit(q.limit)
      .offset(offset)

    return c.json(reports)
  },
)

adminRoutes.patch(
  '/reports/:id',
  zodValidator('json', z.object({ status: z.enum(['reviewed', 'dismissed']) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const { status } = c.req.valid('json')

    await db
      .update(mpReportsTable)
      .set({ status, reviewedByUserId: user.id, reviewedAt: new Date() })
      .where(eq(mpReportsTable.id, id))

    logAdminAction({ adminUserId: user.id, actionType: `report.${status}`, entityType: 'report', entityId: id })

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)
