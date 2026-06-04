import { db } from '#database/connection.js'
import {
  mpPermissionsTable,
  mpRolesTable,
  mpRolesToPermissionsTable,
  mpUsersToRolesTable,
} from '#database/schemas/users.js'
import type { JwtVariablesWithPayload } from '#modules/shared/lib/hono-variables.js'
import { createMiddleware } from 'hono/factory'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { and, count, eq } from 'drizzle-orm'

export async function userHasPermission(
  userId: number,
  permissionIdOrName: number | string,
): Promise<boolean> {
  const permissionWhere =
    typeof permissionIdOrName === 'number'
      ? eq(mpPermissionsTable.id, permissionIdOrName)
      : eq(mpPermissionsTable.name, permissionIdOrName)

  const [result] = await db
    .select({ count: count() })
    .from(mpPermissionsTable)
    .innerJoin(
      mpRolesToPermissionsTable,
      eq(mpPermissionsTable.id, mpRolesToPermissionsTable.permissionId),
    )
    .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpRolesToPermissionsTable.roleId))
    .innerJoin(mpUsersToRolesTable, eq(mpRolesToPermissionsTable.roleId, mpUsersToRolesTable.roleId))
    .where(and(permissionWhere, eq(mpUsersToRolesTable.userId, userId)))

  return result.count > 0
}

export const checkPermissions = (permissions: (number | string)[]) =>
  createMiddleware<{ Variables: JwtVariablesWithPayload }>(async (c, next) => {
    const { user } = c.get('jwtPayload')

    for (const permission of permissions) {
      const has = await userHasPermission(user.id, permission)

      if (!has) {
        return c.json(
          {
            message: ReasonPhrases.FORBIDDEN,
            reason: `Missing permission: ${permission}`,
          },
          StatusCodes.FORBIDDEN,
        )
      }
    }

    await next()
  })
