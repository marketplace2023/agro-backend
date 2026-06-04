import { db } from '#database/connection.js'
import { mpRolesTable, mpUsersTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { mpProfilesTable } from '#database/schemas/profiles.js'
import { eq } from 'drizzle-orm'

export async function getUserById(id: number) {
  const [user] = await db
    .select({
      id: mpUsersTable.id,
      email: mpUsersTable.email,
      name: mpUsersTable.name,
      status: mpUsersTable.status,
      emailVerifiedAt: mpUsersTable.emailVerifiedAt,
      createdAt: mpUsersTable.createdAt,
    })
    .from(mpUsersTable)
    .where(eq(mpUsersTable.id, id))
    .limit(1)

  if (!user) return null

  const roles = await db
    .select({ id: mpRolesTable.id, name: mpRolesTable.name, description: mpRolesTable.description })
    .from(mpUsersToRolesTable)
    .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
    .where(eq(mpUsersToRolesTable.userId, id))

  const [profile] = await db
    .select()
    .from(mpProfilesTable)
    .where(eq(mpProfilesTable.userId, id))
    .limit(1)

  return { ...user, roles, profile: profile ?? null }
}
