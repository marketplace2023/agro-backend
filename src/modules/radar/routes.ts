import { db } from '#database/connection.js'
import {
  mpRadarAlertsTable,
  mpRadarCriteriaTable,
  mpRadarMatchesTable,
  mpNotificationsTable,
} from '#database/schemas/radar.js'
import { mpListingsTable } from '#database/schemas/listings.js'
import { matchListingAgainstRadar } from '#modules/radar/use-cases/match-engine.js'
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

export const radarRoutes = new Hono<{ Variables: HonoVariables }>()

radarRoutes.use('*', jwtMiddleware)

const criteriaDto = z.object({
  criteriaType: z.enum([
    'category',
    'subcategory',
    'listing_type',
    'department',
    'municipality',
    'min_price',
    'max_price',
    'keyword',
    'verified_store',
    'has_certification',
  ]),
  value: z.string().min(1).max(255),
})

const createAlertDto = z.object({
  name: z.string().min(2).max(150),
  notifyEmail: z.boolean().default(true),
  notifyInApp: z.boolean().default(true),
  expiresAt: z.string().datetime().optional(),
  criteria: z.array(criteriaDto).min(1).max(10),
})

// ============================================================
// ALERTS CRUD
// ============================================================

// --- List my alerts ---
radarRoutes.get('/alerts', async (c) => {
  const { user } = c.get('jwtPayload')

  const alerts = await db
    .select()
    .from(mpRadarAlertsTable)
    .where(eq(mpRadarAlertsTable.userId, user.id))
    .orderBy(desc(mpRadarAlertsTable.createdAt))

  // Attach criteria to each alert
  const alertsWithCriteria = await Promise.all(
    alerts.map(async (alert) => {
      const criteria = await db
        .select()
        .from(mpRadarCriteriaTable)
        .where(eq(mpRadarCriteriaTable.alertId, alert.id))
      return { ...alert, criteria }
    }),
  )

  return c.json(alertsWithCriteria)
})

// --- Get alert detail with recent matches ---
radarRoutes.get('/alerts/:id', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const [alert] = await db
    .select()
    .from(mpRadarAlertsTable)
    .where(and(eq(mpRadarAlertsTable.id, id), eq(mpRadarAlertsTable.userId, user.id)))
    .limit(1)

  if (!alert) throw new NotFoundException('Alerta no encontrada')

  const [criteria, recentMatches] = await Promise.all([
    db.select().from(mpRadarCriteriaTable).where(eq(mpRadarCriteriaTable.alertId, id)),
    db
      .select({
        matchId: mpRadarMatchesTable.id,
        listingId: mpRadarMatchesTable.listingId,
        matchedAt: mpRadarMatchesTable.matchedAt,
        notified: mpRadarMatchesTable.notified,
        listingTitle: mpListingsTable.title,
        listingSlug: mpListingsTable.slug,
        listingPrice: mpListingsTable.price,
        listingDepartment: mpListingsTable.department,
      })
      .from(mpRadarMatchesTable)
      .leftJoin(mpListingsTable, eq(mpListingsTable.id, mpRadarMatchesTable.listingId))
      .where(eq(mpRadarMatchesTable.alertId, id))
      .orderBy(desc(mpRadarMatchesTable.matchedAt))
      .limit(20),
  ])

  return c.json({ ...alert, criteria, recentMatches })
})

// --- Create alert ---
radarRoutes.post('/alerts', zodValidator('json', createAlertDto), async (c) => {
  const { user } = c.get('jwtPayload')
  const dto = c.req.valid('json')

  // Max 10 active alerts per user
  const [{ total }] = await db
    .select({ total: count() })
    .from(mpRadarAlertsTable)
    .where(and(eq(mpRadarAlertsTable.userId, user.id), eq(mpRadarAlertsTable.status, 'active')))

  if (total >= 10) {
    return c.json({ message: 'Límite de 10 alertas activas alcanzado' }, StatusCodes.UNPROCESSABLE_ENTITY)
  }

  const { criteria, expiresAt, ...alertData } = dto

  const [inserted] = await db
    .insert(mpRadarAlertsTable)
    .values({
      ...alertData,
      userId: user.id,
      status: 'active',
      expiresAt: expiresAt ? new Date(expiresAt) : undefined,
    })
    .$returningId()

  await db.insert(mpRadarCriteriaTable).values(
    criteria.map((c) => ({ ...c, alertId: inserted.id })),
  )

  return c.json({ id: inserted.id }, StatusCodes.CREATED)
})

// --- Update alert (name, notifications, expiry) ---
radarRoutes.put(
  '/alerts/:id',
  zodValidator('json', z.object({
    name: z.string().min(2).max(150).optional(),
    notifyEmail: z.boolean().optional(),
    notifyInApp: z.boolean().optional(),
    expiresAt: z.string().datetime().optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [alert] = await db
      .select({ userId: mpRadarAlertsTable.userId })
      .from(mpRadarAlertsTable)
      .where(eq(mpRadarAlertsTable.id, id))
      .limit(1)

    if (!alert) throw new NotFoundException('Alerta no encontrada')
    if (alert.userId !== user.id) throw new ForbiddenException()

    const { expiresAt, ...rest } = c.req.valid('json')
    await db
      .update(mpRadarAlertsTable)
      .set({ ...rest, ...(expiresAt ? { expiresAt: new Date(expiresAt) } : {}) })
      .where(eq(mpRadarAlertsTable.id, id))

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Replace criteria ---
radarRoutes.put(
  '/alerts/:id/criteria',
  zodValidator('json', z.array(criteriaDto).min(1).max(10)),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [alert] = await db
      .select({ userId: mpRadarAlertsTable.userId })
      .from(mpRadarAlertsTable)
      .where(eq(mpRadarAlertsTable.id, id))
      .limit(1)

    if (!alert) throw new NotFoundException('Alerta no encontrada')
    if (alert.userId !== user.id) throw new ForbiddenException()

    await db.delete(mpRadarCriteriaTable).where(eq(mpRadarCriteriaTable.alertId, id))
    await db.insert(mpRadarCriteriaTable).values(c.req.valid('json').map((c) => ({ ...c, alertId: id })))

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Change alert status (pause/resume/cancel) ---
radarRoutes.patch(
  '/alerts/:id/status',
  zodValidator('json', z.object({ status: z.enum(['active', 'paused', 'cancelled']) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [alert] = await db
      .select({ userId: mpRadarAlertsTable.userId })
      .from(mpRadarAlertsTable)
      .where(eq(mpRadarAlertsTable.id, id))
      .limit(1)

    if (!alert) throw new NotFoundException('Alerta no encontrada')
    if (alert.userId !== user.id) throw new ForbiddenException()

    await db
      .update(mpRadarAlertsTable)
      .set({ status: c.req.valid('json').status })
      .where(eq(mpRadarAlertsTable.id, id))

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Delete alert ---
radarRoutes.delete('/alerts/:id', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const [alert] = await db
    .select({ userId: mpRadarAlertsTable.userId })
    .from(mpRadarAlertsTable)
    .where(eq(mpRadarAlertsTable.id, id))
    .limit(1)

  if (!alert) throw new NotFoundException('Alerta no encontrada')
  if (alert.userId !== user.id) throw new ForbiddenException()

  await db.delete(mpRadarAlertsTable).where(eq(mpRadarAlertsTable.id, id))

  return c.body(null, StatusCodes.NO_CONTENT)
})

// ============================================================
// MATCHES
// ============================================================

// --- Get my recent matches across all alerts ---
radarRoutes.get('/matches', zodValidator('query', z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
})), async (c) => {
  const { user } = c.get('jwtPayload')
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const matches = await db
    .select({
      matchId: mpRadarMatchesTable.id,
      alertId: mpRadarMatchesTable.alertId,
      alertName: mpRadarAlertsTable.name,
      listingId: mpRadarMatchesTable.listingId,
      listingTitle: mpListingsTable.title,
      listingSlug: mpListingsTable.slug,
      listingPrice: mpListingsTable.price,
      listingPriceUnit: mpListingsTable.priceUnit,
      listingDepartment: mpListingsTable.department,
      listingType: mpListingsTable.listingType,
      matchedAt: mpRadarMatchesTable.matchedAt,
      notified: mpRadarMatchesTable.notified,
    })
    .from(mpRadarMatchesTable)
    .innerJoin(mpRadarAlertsTable, eq(mpRadarAlertsTable.id, mpRadarMatchesTable.alertId))
    .leftJoin(mpListingsTable, eq(mpListingsTable.id, mpRadarMatchesTable.listingId))
    .where(eq(mpRadarAlertsTable.userId, user.id))
    .orderBy(desc(mpRadarMatchesTable.matchedAt))
    .limit(q.limit)
    .offset(offset)

  return c.json(matches)
})

// ============================================================
// NOTIFICATIONS
// ============================================================

// --- Get my notifications ---
radarRoutes.get('/notifications', zodValidator('query', z.object({
  unreadOnly: z.coerce.boolean().default(false),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
})), async (c) => {
  const { user } = c.get('jwtPayload')
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const conditions = [eq(mpNotificationsTable.userId, user.id)]
  if (q.unreadOnly) conditions.push(eq(mpNotificationsTable.isRead, false))

  const [notifications, [{ total }]] = await Promise.all([
    db
      .select()
      .from(mpNotificationsTable)
      .where(and(...conditions))
      .orderBy(desc(mpNotificationsTable.createdAt))
      .limit(q.limit)
      .offset(offset),
    db.select({ total: count() }).from(mpNotificationsTable).where(and(...conditions)),
  ])

  return c.json({ notifications, total, page: q.page, limit: q.limit })
})

// --- Unread count ---
radarRoutes.get('/notifications/unread-count', async (c) => {
  const { user } = c.get('jwtPayload')

  const [{ total }] = await db
    .select({ total: count() })
    .from(mpNotificationsTable)
    .where(and(eq(mpNotificationsTable.userId, user.id), eq(mpNotificationsTable.isRead, false)))

  return c.json({ count: total })
})

// --- Mark notification as read ---
radarRoutes.patch('/notifications/:id/read', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  await db
    .update(mpNotificationsTable)
    .set({ isRead: true, readAt: new Date() })
    .where(and(eq(mpNotificationsTable.id, id), eq(mpNotificationsTable.userId, user.id)))

  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Mark all notifications as read ---
radarRoutes.post('/notifications/read-all', async (c) => {
  const { user } = c.get('jwtPayload')

  await db
    .update(mpNotificationsTable)
    .set({ isRead: true, readAt: new Date() })
    .where(and(eq(mpNotificationsTable.userId, user.id), eq(mpNotificationsTable.isRead, false)))

  return c.body(null, StatusCodes.NO_CONTENT)
})

// ============================================================
// ADMIN: run match engine manually
// ============================================================
radarRoutes.post(
  '/admin/run-match/:listingId',
  requireRole('admin'),
  async (c) => {
    const listingId = Number(c.req.param('listingId'))
    const matchCount = await matchListingAgainstRadar(listingId)
    return c.json({ matchCount })
  },
)
