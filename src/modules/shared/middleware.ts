import { createMiddleware } from 'hono/factory'
import pino from 'pino'
import { env } from '#env.js'

export const logger = pino({
  transport:
    env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty', options: { colorize: true } }
      : undefined,
})

export const httpLogger = createMiddleware(async (c, next) => {
  const start = Date.now()
  await next()
  logger.info({
    method: c.req.method,
    path: c.req.path,
    status: c.res.status,
    ms: Date.now() - start,
  })
})
