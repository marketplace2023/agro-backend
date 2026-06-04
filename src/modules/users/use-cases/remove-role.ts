import { db } from '#database/connection.js'
import { mpUsersToRolesTable } from '#database/schemas/users.js'
import { and, eq } from 'drizzle-orm'

export async function removeRole(userId: number, roleId: number) {
  await db
    .delete(mpUsersToRolesTable)
    .where(and(eq(mpUsersToRolesTable.userId, userId), eq(mpUsersToRolesTable.roleId, roleId)))
}
