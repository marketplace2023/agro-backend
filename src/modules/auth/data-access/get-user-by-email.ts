import { db } from '#database/connection.js'
import { mpRolesTable, mpUsersTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { eq, sql } from 'drizzle-orm'
import { z } from 'zod'

export const authUserPublicSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  name: z.string().min(1).max(100),
  roles: z.array(z.string()).default([]),
})

export type AuthUserPublic = z.infer<typeof authUserPublicSchema>

export async function getUserByEmail(email: string): Promise<AuthUserPublic | null> {
  const [row] = await db
    .select({
      id: mpUsersTable.id,
      email: mpUsersTable.email,
      name: mpUsersTable.name,
      roles: sql<string>`COALESCE(JSON_ARRAYAGG(${mpRolesTable.name}), JSON_ARRAY())`,
    })
    .from(mpUsersTable)
    .leftJoin(mpUsersToRolesTable, eq(mpUsersToRolesTable.userId, mpUsersTable.id))
    .leftJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
    .where(eq(mpUsersTable.email, email))
    .groupBy(mpUsersTable.id)
    .limit(1)

  if (!row) return null

  const rawRoles: unknown = typeof row.roles === 'string' ? JSON.parse(row.roles) : row.roles
  const roles = (Array.isArray(rawRoles) ? rawRoles : []).filter(Boolean) as string[]

  return authUserPublicSchema.parse({ ...row, roles })
}
