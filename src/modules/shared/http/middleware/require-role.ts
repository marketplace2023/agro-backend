import { db } from '#database/connection.js'
import { mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import type { AgroRoleName } from '#database/entities/users.js'
import type { JwtVariablesWithPayload } from '#modules/shared/lib/hono-variables.js'
import { createMiddleware } from 'hono/factory'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { eq } from 'drizzle-orm'

export const requireRole = (...roles: AgroRoleName[]) =>
  createMiddleware<{ Variables: JwtVariablesWithPayload }>(async (c, next) => {
    const { user } = c.get('jwtPayload')

    const userRoles = await db
      .select({ name: mpRolesTable.name })
      .from(mpUsersToRolesTable)
      .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
      .where(eq(mpUsersToRolesTable.userId, user.id))

    const userRoleNames = userRoles.map((r) => r.name)
    const hasRole = roles.some((role) => userRoleNames.includes(role))

    if (!hasRole) {
      return c.json(
        { message: ReasonPhrases.FORBIDDEN, reason: 'Insufficient role' },
        StatusCodes.FORBIDDEN,
      )
    }

    await next()
  })
