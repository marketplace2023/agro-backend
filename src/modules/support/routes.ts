import { db } from '#database/connection.js'
import {
  mpSupportTicketsTable,
  mpSupportTicketMessagesTable,
} from '#database/schemas/admin.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ForbiddenException } from '#modules/shared/http/exceptions/forbidden-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { and, asc, desc, eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

export const supportRoutes = new Hono<{ Variables: HonoVariables }>()

supportRoutes.use('*', jwtMiddleware)

const createTicketDto = z.object({
  subject: z.string().min(5).max(255),
  category: z.enum(['technical', 'listing', 'account', 'payment', 'other']),
  message: z.string().min(10).max(5000),
})

// --- Create ticket ---
supportRoutes.post('/tickets', zodValidator('json', createTicketDto), async (c) => {
  const { user } = c.get('jwtPayload')
  const { message, ...ticketData } = c.req.valid('json')

  const [inserted] = await db
    .insert(mpSupportTicketsTable)
    .values({ ...ticketData, userId: user.id, status: 'open', priority: 'normal' })
    .$returningId()

  // Add first message
  await db.insert(mpSupportTicketMessagesTable).values({
    ticketId: inserted.id,
    userId: user.id,
    message,
  })

  return c.json({ id: inserted.id }, StatusCodes.CREATED)
})

// --- My tickets ---
supportRoutes.get('/tickets', async (c) => {
  const { user } = c.get('jwtPayload')

  const tickets = await db
    .select()
    .from(mpSupportTicketsTable)
    .where(eq(mpSupportTicketsTable.userId, user.id))
    .orderBy(desc(mpSupportTicketsTable.createdAt))

  return c.json(tickets)
})

// --- Get ticket detail with messages ---
supportRoutes.get('/tickets/:id', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const [ticket] = await db
    .select()
    .from(mpSupportTicketsTable)
    .where(eq(mpSupportTicketsTable.id, id))
    .limit(1)

  if (!ticket) throw new NotFoundException('Ticket no encontrado')
  if (ticket.userId !== user.id) throw new ForbiddenException()

  const messages = await db
    .select()
    .from(mpSupportTicketMessagesTable)
    .where(
      and(
        eq(mpSupportTicketMessagesTable.ticketId, id),
        eq(mpSupportTicketMessagesTable.isInternal, false),
      ),
    )
    .orderBy(asc(mpSupportTicketMessagesTable.createdAt))

  return c.json({ ...ticket, messages })
})

// --- Reply to ticket ---
supportRoutes.post(
  '/tickets/:id/messages',
  zodValidator('json', z.object({ message: z.string().min(1).max(5000) })),
  async (c) => {
    const { user } = c.get('jwtPayload')
    const id = Number(c.req.param('id'))

    const [ticket] = await db
      .select({ userId: mpSupportTicketsTable.userId, status: mpSupportTicketsTable.status })
      .from(mpSupportTicketsTable)
      .where(eq(mpSupportTicketsTable.id, id))
      .limit(1)

    if (!ticket) throw new NotFoundException('Ticket no encontrado')
    if (ticket.userId !== user.id) throw new ForbiddenException()
    if (ticket.status === 'closed') {
      throw new ValidationException({ message: ['No se pueden enviar mensajes en tickets cerrados'] })
    }

    const [inserted] = await db
      .insert(mpSupportTicketMessagesTable)
      .values({ ticketId: id, userId: user.id, message: c.req.valid('json').message })
      .$returningId()

    return c.json({ id: inserted.id }, StatusCodes.CREATED)
  },
)

// --- Close ticket (user) ---
supportRoutes.patch('/tickets/:id/close', async (c) => {
  const { user } = c.get('jwtPayload')
  const id = Number(c.req.param('id'))

  const [ticket] = await db
    .select({ userId: mpSupportTicketsTable.userId })
    .from(mpSupportTicketsTable)
    .where(eq(mpSupportTicketsTable.id, id))
    .limit(1)

  if (!ticket) throw new NotFoundException('Ticket no encontrado')
  if (ticket.userId !== user.id) throw new ForbiddenException()

  await db
    .update(mpSupportTicketsTable)
    .set({ status: 'closed', resolvedAt: new Date() })
    .where(eq(mpSupportTicketsTable.id, id))

  return c.body(null, StatusCodes.NO_CONTENT)
})
