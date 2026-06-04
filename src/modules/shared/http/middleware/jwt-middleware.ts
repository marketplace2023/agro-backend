import { env } from '#env.js'
import type { JwtVariablesWithPayload } from '#modules/shared/lib/hono-variables.js'
import type { Context } from 'hono'
import { createMiddleware } from 'hono/factory'
import { jwt } from 'hono/jwt'
import { deleteCookie, setCookie } from 'hono/cookie'

export const JWT_COOKIE_NAME = 'X-Access-Token'

export const jwtMiddleware = createMiddleware<{ Variables: JwtVariablesWithPayload }>(
  async (c, next) => {
    return jwt({ secret: env.JWT_SECRET, cookie: JWT_COOKIE_NAME, alg: 'HS256' })(c, next)
  },
)

const cookieOptions = {
  httpOnly: true,
  secure: true,
  maxAge: 60 * 60 * 24 * 365,
  sameSite: env.NODE_ENV === 'production' ? ('lax' as const) : ('none' as const),
  path: '/',
} as const

export async function setJwtCookie(c: Context, token: string) {
  return setCookie(c, JWT_COOKIE_NAME, token, cookieOptions)
}

export async function deleteJwtCookie(c: Context) {
  return deleteCookie(c, JWT_COOKIE_NAME, cookieOptions)
}
