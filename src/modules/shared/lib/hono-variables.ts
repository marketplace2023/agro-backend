import type { AuthUserWithoutPassword } from '#database/entities/auth.js'
import type { JwtVariables } from 'hono/jwt'

export type JwtVariablesWithPayload = JwtVariables<{ user: AuthUserWithoutPassword }>

export type HonoVariables = JwtVariablesWithPayload
