import { db } from '#database/connection.js'
import {
  mpPermissionsTable,
  mpRolesToPermissionsTable,
  mpUsersToRolesTable,
} from '#database/schemas/users.js'
import { eq } from 'drizzle-orm'

export async function getUserPermissions(userId: number) {
  return db
    .select({
      id: mpPermissionsTable.id,
      name: mpPermissionsTable.name,
      description: mpPermissionsTable.description,
    })
    .from(mpPermissionsTable)
    .innerJoin(
      mpRolesToPermissionsTable,
      eq(mpPermissionsTable.id, mpRolesToPermissionsTable.permissionId),
    )
    .innerJoin(
      mpUsersToRolesTable,
      eq(mpRolesToPermissionsTable.roleId, mpUsersToRolesTable.roleId),
    )
    .where(eq(mpUsersToRolesTable.userId, userId))
}
