import { db } from '#database/connection.js'
import {
  mpRatingsTable,
  mpVerificationRequestsTable,
  mpVerificationDocumentsTable,
  mpTrustBadgesTable,
  mpReputationScoresTable,
} from '#database/schemas/reputation.js'
import { mpReviewsTable } from '#database/schemas/stores.js'
import { calculateReputation } from '#modules/reputation/use-cases/calculate-reputation.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { ForbiddenException } from '#modules/shared/http/exceptions/forbidden-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, count, desc, eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const reputationRoutes = new Hono<{ Variables: HonoVariables }>()

// ============================================================
// PUBLIC: reputation profile
// ============================================================

// --- Get full reputation profile ---
reputationRoutes.get('/:entityType/:entityId', async (c) => {
  const entityType = c.req.param('entityType') as 'user' | 'store'
  const entityId = Number(c.req.param('entityId'))

  const [score] = await db
    .select()
    .from(mpReputationScoresTable)
    .where(
      and(
        eq(mpReputationScoresTable.entityType, entityType),
        eq(mpReputationScoresTable.entityId, entityId),
      ),
    )
    .limit(1)

  const badges = await db
    .select()
    .from(mpTrustBadgesTable)
    .where(
      and(
        eq(mpTrustBadgesTable.entityType, entityType),
        eq(mpTrustBadgesTable.entityId, entityId),
        eq(mpTrustBadgesTable.isActive, true),
      ),
    )

  const recentRatings = await db
    .select()
    .from(mpRatingsTable)
    .where(
      and(
        eq(mpRatingsTable.targetType, entityType),
        eq(mpRatingsTable.targetId, entityId),
        eq(mpRatingsTable.status, 'published'),
      ),
    )
    .orderBy(desc(mpRatingsTable.createdAt))
    .limit(5)

  return c.json({
    score: score ?? null,
    badges,
    recentRatings,
  })
})

// --- Get all ratings for entity ---
reputationRoutes.get('/:entityType/:entityId/ratings', zodValidator('query', z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
})), async (c) => {
  const entityType = c.req.param('entityType') as 'user' | 'store'
  const entityId = Number(c.req.param('entityId'))
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const [ratings, [{ total }]] = await Promise.all([
    db
      .select()
      .from(mpRatingsTable)
      .where(
        and(
          eq(mpRatingsTable.targetType, entityType),
          eq(mpRatingsTable.targetId, entityId),
          eq(mpRatingsTable.status, 'published'),
        ),
      )
      .orderBy(desc(mpRatingsTable.createdAt))
      .limit(q.limit)
      .offset(offset),
    db
      .select({ total: count() })
      .from(mpRatingsTable)
      .where(
        and(
          eq(mpRatingsTable.targetType, entityType),
          eq(mpRatingsTable.targetId, entityId),
          eq(mpRatingsTable.status, 'published'),
        ),
      ),
  ])

  return c.json({ ratings, total, page: q.page, limit: q.limit })
})

// ============================================================
// RATINGS (authenticated)
// ============================================================
reputationRoutes.use('/ratings*', jwtMiddleware)

// --- Submit rating ---
reputationRoutes.post(
  '/ratings',
  zodValidator('json', z.object({
    targetType: z.enum(['store', 'listing', 'user']),
    targetId: z.number().int().positive(),
    rating: z.number().int().min(1).max(5),
    comment: z.string().max(2000).optional(),
    quoteId: z.number().int().positive().optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const dto = c.req.valid('json')

    const [existing] = await db
      .select({ id: mpRatingsTable.id })
      .from(mpRatingsTable)
      .where(
        and(
          eq(mpRatingsTable.reviewerId, user.id),
          eq(mpRatingsTable.targetType, dto.targetType),
          eq(mpRatingsTable.targetId, dto.targetId),
        ),
      )
      .limit(1)

    if (existing) {
      throw new ValidationException({ targetId: ['Ya calificaste esta entidad'] })
    }

    const isVerifiedPurchase = !!dto.quoteId

    const [inserted] = await db
      .insert(mpRatingsTable)
      .values({ ...dto, reviewerId: user.id, isVerifiedPurchase, status: 'pending' })
      .$returningId()

    // Trigger reputation recalculation (fire-and-forget)
    calculateReputation(dto.targetType as 'user' | 'store', dto.targetId).catch(() => {})

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)

// --- Reply to a rating (owner) ---
reputationRoutes.put(
  '/ratings/:id/reply',
  zodValidator('json', z.object({ reply: z.string().min(1).max(2000) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [rating] = await db
      .select({ targetType: mpRatingsTable.targetType, targetId: mpRatingsTable.targetId })
      .from(mpRatingsTable)
      .where(eq(mpRatingsTable.id, id))
      .limit(1)

    if (!rating) throw new NotFoundException('Calificación no encontrada')

    await db.update(mpRatingsTable).set({ ownerReply: c.req.valid('json').reply }).where(eq(mpRatingsTable.id, id))

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// VERIFICATION REQUESTS (authenticated)
// ============================================================
reputationRoutes.use('/verifications*', jwtMiddleware)

// --- Submit verification request ---
reputationRoutes.post(
  '/verifications',
  zodValidator('json', z.object({
    requestType: z.enum(['identity', 'business', 'organic', 'professional']),
    notes: z.string().max(1000).optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const dto = c.req.valid('json')

    // Only one active request per type
    const [existing] = await db
      .select({ id: mpVerificationRequestsTable.id })
      .from(mpVerificationRequestsTable)
      .where(
        and(
          eq(mpVerificationRequestsTable.userId, user.id),
          eq(mpVerificationRequestsTable.requestType, dto.requestType),
          eq(mpVerificationRequestsTable.status, 'pending'),
        ),
      )
      .limit(1)

    if (existing) {
      throw new ValidationException({ requestType: ['Ya tienes una solicitud pendiente de este tipo'] })
    }

    const [inserted] = await db
      .insert(mpVerificationRequestsTable)
      .values({ ...dto, userId: user.id, status: 'pending' })
      .$returningId()

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)

// --- Get my verification requests ---
reputationRoutes.get('/verifications/my', async (c) => {
  const { user } = c.get('jwtPayload')

  const requests = await db
    .select()
    .from(mpVerificationRequestsTable)
    .where(eq(mpVerificationRequestsTable.userId, user.id))
    .orderBy(desc(mpVerificationRequestsTable.createdAt))

  return c.json(requests)
})

// --- Add document to verification request ---
reputationRoutes.post(
  '/verifications/:id/documents',
  zodValidator('json', z.object({
    documentType: z.enum(['cedula', 'rif', 'registro_mercantil', 'insai_cert', 'other']),
    documentUrl: z.string().url().max(500),
    filename: z.string().max(255),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [request] = await db
      .select({ id: mpVerificationRequestsTable.id, userId: mpVerificationRequestsTable.userId })
      .from(mpVerificationRequestsTable)
      .where(eq(mpVerificationRequestsTable.id, id))
      .limit(1)

    if (!request) throw new NotFoundException('Solicitud no encontrada')
    if (request.userId !== user.id) throw new ForbiddenException()

    const [inserted] = await db
      .insert(mpVerificationDocumentsTable)
      .values({ ...c.req.valid('json'), verificationRequestId: id })
      .$returningId()

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)

// ============================================================
// ADMIN
// ============================================================
reputationRoutes.use('/admin/*', jwtMiddleware, requireRole('admin'))

// --- Pending ratings queue ---
reputationRoutes.get('/admin/ratings', zodValidator('query', z.object({
  status: z.enum(['pending', 'published', 'rejected']).default('pending'),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
})), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const ratings = await db
    .select()
    .from(mpRatingsTable)
    .where(eq(mpRatingsTable.status, q.status))
    .orderBy(desc(mpRatingsTable.createdAt))
    .limit(q.limit)
    .offset(offset)

  return c.json(ratings)
})

// --- Approve/reject rating ---
reputationRoutes.patch(
  '/admin/ratings/:id',
  zodValidator('json', z.object({ status: z.enum(['published', 'rejected']) })),
  async (c) => {
    const id = Number(c.req.param('id'))
    const { status } = c.req.valid('json')

    const [rating] = await db
      .select({ targetType: mpRatingsTable.targetType, targetId: mpRatingsTable.targetId })
      .from(mpRatingsTable)
      .where(eq(mpRatingsTable.id, id))
      .limit(1)

    if (!rating) throw new NotFoundException('Calificación no encontrada')

    await db.update(mpRatingsTable).set({ status }).where(eq(mpRatingsTable.id, id))

    if (status === 'published') {
      calculateReputation(rating.targetType as 'user' | 'store', rating.targetId).catch(() => {})
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Verification queue ---
reputationRoutes.get('/admin/verifications', zodValidator('query', z.object({
  status: z.enum(['pending', 'in_review', 'approved', 'rejected']).default('pending'),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
})), async (c) => {
  const q = c.req.valid('query')
  const offset = (q.page - 1) * q.limit

  const requests = await db
    .select()
    .from(mpVerificationRequestsTable)
    .where(eq(mpVerificationRequestsTable.status, q.status))
    .orderBy(asc(mpVerificationRequestsTable.createdAt))
    .limit(q.limit)
    .offset(offset)

  return c.json(requests)
})

// --- Get verification request detail with documents ---
reputationRoutes.get('/admin/verifications/:id', async (c) => {
  const id = Number(c.req.param('id'))

  const [request] = await db
    .select()
    .from(mpVerificationRequestsTable)
    .where(eq(mpVerificationRequestsTable.id, id))
    .limit(1)

  if (!request) throw new NotFoundException('Solicitud no encontrada')

  const documents = await db
    .select()
    .from(mpVerificationDocumentsTable)
    .where(eq(mpVerificationDocumentsTable.verificationRequestId, id))

  return c.json({ ...request, documents })
})

// --- Approve/reject verification ---
reputationRoutes.patch(
  '/admin/verifications/:id',
  zodValidator('json', z.object({
    status: z.enum(['approved', 'rejected', 'in_review']),
    reviewerNotes: z.string().max(1000).optional(),
    badgeType: z.enum([
      'verified_identity', 'verified_business', 'organic_certified',
      'top_seller', 'responsive', 'trusted_exporter',
      'professional_agronomist', 'quality_certified',
    ]).optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))
    const { status, reviewerNotes, badgeType } = c.req.valid('json')

    const [request] = await db
      .select()
      .from(mpVerificationRequestsTable)
      .where(eq(mpVerificationRequestsTable.id, id))
      .limit(1)

    if (!request) throw new NotFoundException('Solicitud no encontrada')

    await db
      .update(mpVerificationRequestsTable)
      .set({ status, reviewerNotes, reviewedByUserId: user.id, reviewedAt: new Date() })
      .where(eq(mpVerificationRequestsTable.id, id))

    // If approved and badge type provided → award badge
    if (status === 'approved' && badgeType) {
      await db.insert(mpTrustBadgesTable).values({
        entityType: 'user',
        entityId: request.userId,
        badgeType,
        issuedByUserId: user.id,
        isActive: true,
      })
      calculateReputation('user', request.userId).catch(() => {})
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Award badge manually ---
reputationRoutes.post(
  '/admin/badges',
  zodValidator('json', z.object({
    entityType: z.enum(['user', 'store']),
    entityId: z.number().int().positive(),
    badgeType: z.enum([
      'verified_identity', 'verified_business', 'organic_certified',
      'top_seller', 'responsive', 'trusted_exporter',
      'professional_agronomist', 'quality_certified',
    ]),
    expiresAt: z.string().datetime().optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const dto = c.req.valid('json')

    const [inserted] = await db
      .insert(mpTrustBadgesTable)
      .values({
        ...dto,
        issuedByUserId: user.id,
        isActive: true,
        expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined,
      })
      .$returningId()

    calculateReputation(dto.entityType, dto.entityId).catch(() => {})

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)

// --- Revoke badge ---
reputationRoutes.delete('/admin/badges/:id', async (c) => {
  await db
    .update(mpTrustBadgesTable)
    .set({ isActive: false })
    .where(eq(mpTrustBadgesTable.id, Number(c.req.param('id'))))

  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Recalculate reputation ---
reputationRoutes.post('/admin/recalculate/:entityType/:entityId', async (c) => {
  const entityType = c.req.param('entityType') as 'user' | 'store'
  const entityId = Number(c.req.param('entityId'))

  const result = await calculateReputation(entityType, entityId)

  return c.json(result)
})
