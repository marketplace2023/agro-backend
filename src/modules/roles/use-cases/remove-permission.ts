import { db } from '#database/connection.js'
import { mpRolesToPermissionsTable } from '#database/schemas/users.js'
import { and, eq } from 'drizzle-orm'

export async function removePermission(roleId: number, permissionId: number) {
  await db
    .delete(mpRolesToPermissionsTable)
    .where(
      and(
        eq(mpRolesToPermissionsTable.roleId, roleId),
        eq(mpRolesToPermissionsTable.permissionId, permissionId),
      ),
    )
}
