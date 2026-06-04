import { db } from '#database/connection.js'
import {
  mpQuotesTable,
  mpQuoteItemsTable,
  mpQuoteMessagesTable,
  mpQuoteStatusesTable,
  mpQuoteAttachmentsTable,
} from '#database/schemas/quotes.js'
import { QuoteNotFound, NotQuoteParticipant, InvalidQuoteTransition } from '#modules/quotes/errors.js'
import { createQuote, createQuoteDto } from '#modules/quotes/use-cases/create-quote.js'
import { respondQuote, respondQuoteDto } from '#modules/quotes/use-cases/respond-quote.js'
import { changeQuoteStatus } from '#modules/quotes/use-cases/change-quote-status.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { ForbiddenException } from '#modules/shared/http/exceptions/forbidden-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, desc, eq, or } from 'drizzle-orm'
import { Hono } from 'hono'
import { Match } from 'resultable'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const quoteRoutes = new Hono<{ Variables: HonoVariables }>()

quoteRoutes.use('*', jwtMiddleware)

// helper — verify participant access
async function getQuoteForUser(quoteId: number, userId: number) {
  const [quote] = await db
    .select()
    .from(mpQuotesTable)
    .where(eq(mpQuotesTable.id, quoteId))
    .limit(1)

  if (!quote) return null
  if (quote.buyerId !== userId && quote.sellerId !== userId) return null
  return quote
}

// ============================================================
// BUYER
// ============================================================

// --- Send a quote request ---
quoteRoutes.post('/', zodValidator('json', createQuoteDto), async (c) => {
  const { user } = c.get('jwtPayload')
  const quoteId = await createQuote(user.id, c.req.valid('json'))
  return c.json({ id: quoteId }, StatusCodes.CREATED)
})

// --- My sent quotes ---
quoteRoutes.get('/sent', async (c) => {
  const { user } = c.get('jwtPayload')

  const quotes = await db
    .select()
    .from(mpQuotesTable)
    .where(eq(mpQuotesTable.buyerId, user.id))
    .orderBy(desc(mpQuotesTable.createdAt))

  return c.json(quotes)
})

// --- Accept a responded quote ---
quoteRoutes.patch(
  '/:id/accept',
  zodValidator('json', z.object({ reason: z.string().max(500).optional() })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [, error] = await changeQuoteStatus(user.id, id, 'accepted', c.req.valid('json').reason)

    if (error) {
      throw Match.matchBrand(error)({
        '@/quotes/errors/QuoteNotFound': () => new NotFoundException('Cotización no encontrada'),
        '@/quotes/errors/NotQuoteParticipant': () => new ForbiddenException(),
        '@/quotes/errors/InvalidQuoteTransition': () =>
          new ValidationException({ status: ['Solo puedes aceptar cotizaciones en estado respondido'] }),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Reject a responded quote ---
quoteRoutes.patch(
  '/:id/reject',
  zodValidator('json', z.object({ reason: z.string().max(500).optional() })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [, error] = await changeQuoteStatus(user.id, id, 'rejected', c.req.valid('json').reason)

    if (error) {
      throw Match.matchBrand(error)({
        '@/quotes/errors/QuoteNotFound': () => new NotFoundException('Cotización no encontrada'),
        '@/quotes/errors/NotQuoteParticipant': () => new ForbiddenException(),
        '@/quotes/errors/InvalidQuoteTransition': () =>
          new ValidationException({ status: ['No se puede rechazar en el estado actual'] }),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Cancel quote (buyer) ---
quoteRoutes.patch(
  '/:id/cancel',
  zodValidator('json', z.object({ reason: z.string().max(500).optional() })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [, error] = await changeQuoteStatus(user.id, id, 'cancelled', c.req.valid('json').reason)

    if (error) {
      throw Match.matchBrand(error)({
        '@/quotes/errors/QuoteNotFound': () => new NotFoundException('Cotización no encontrada'),
        '@/quotes/errors/NotQuoteParticipant': () => new ForbiddenException(),
        '@/quotes/errors/InvalidQuoteTransition': () =>
          new ValidationException({ status: ['No se puede cancelar en el estado actual'] }),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// SELLER
// ============================================================

// --- My received quotes ---
quoteRoutes.get('/received', async (c) => {
  const { user } = c.get('jwtPayload')

  const quotes = await db
    .select()
    .from(mpQuotesTable)
    .where(eq(mpQuotesTable.sellerId, user.id))
    .orderBy(desc(mpQuotesTable.createdAt))

  return c.json(quotes)
})

// --- Respond to a quote with pricing ---
quoteRoutes.post(
  '/:id/respond',
  zodValidator('json', respondQuoteDto),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [, error] = await respondQuote(user.id, id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/quotes/errors/QuoteNotFound': () => new NotFoundException('Cotización no encontrada'),
        '@/quotes/errors/NotQuoteParticipant': () => new ForbiddenException(),
        '@/quotes/errors/InvalidQuoteTransition': () =>
          new ValidationException({ status: ['Solo puedes responder cotizaciones en estado enviado o visto'] }),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// ============================================================
// SHARED (buyer + seller)
// ============================================================

// --- Get quote detail ---
quoteRoutes.get('/:id', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const quote = await getQuoteForUser(id, user.id)
  if (!quote) throw new NotFoundException('Cotización no encontrada')

  const isSeller = quote.sellerId === user.id

  // Mark as viewed automatically when seller accesses for first time
  if (isSeller && quote.status === 'sent') {
    await changeQuoteStatus(user.id, id, 'viewed')
  }

  const [items, messages, attachments] = await Promise.all([
    db.select().from(mpQuoteItemsTable).where(eq(mpQuoteItemsTable.quoteId, id)),
    db
      .select()
      .from(mpQuoteMessagesTable)
      .where(eq(mpQuoteMessagesTable.quoteId, id))
      .orderBy(asc(mpQuoteMessagesTable.createdAt)),
    db
      .select()
      .from(mpQuoteAttachmentsTable)
      .where(eq(mpQuoteAttachmentsTable.quoteId, id))
      .orderBy(asc(mpQuoteAttachmentsTable.createdAt)),
  ])

  return c.json({ ...quote, items, messages, attachments })
})

// --- Get status history ---
quoteRoutes.get('/:id/history', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const quote = await getQuoteForUser(id, user.id)
  if (!quote) throw new NotFoundException('Cotización no encontrada')

  const history = await db
    .select()
    .from(mpQuoteStatusesTable)
    .where(eq(mpQuoteStatusesTable.quoteId, id))
    .orderBy(asc(mpQuoteStatusesTable.createdAt))

  return c.json(history)
})

// --- Send a message in the quote thread ---
quoteRoutes.post(
  '/:id/messages',
  zodValidator('json', z.object({ message: z.string().min(1).max(2000) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const quote = await getQuoteForUser(id, user.id)
    if (!quote) throw new NotFoundException('Cotización no encontrada')

    if (['accepted', 'rejected', 'cancelled', 'expired'].includes(quote.status)) {
      throw new ValidationException({ message: ['No se pueden enviar mensajes en cotizaciones cerradas'] })
    }

    const [inserted] = await db
      .insert(mpQuoteMessagesTable)
      .values({ quoteId: id, userId: user.id, message: c.req.valid('json').message })
      .$returningId()

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)

// --- Add attachment to quote ---
quoteRoutes.post(
  '/:id/attachments',
  zodValidator('json', z.object({
    url: z.string().url().max(500),
    filename: z.string().max(255),
    fileSize: z.number().int().positive().optional(),
    messageId: z.number().int().positive().optional(),
  })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const quote = await getQuoteForUser(id, user.id)
    if (!quote) throw new NotFoundException('Cotización no encontrada')

    const dto = c.req.valid('json')
    const [inserted] = await db
      .insert(mpQuoteAttachmentsTable)
      .values({ ...dto, quoteId: id, uploadedByUserId: user.id })
      .$returningId()

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)
