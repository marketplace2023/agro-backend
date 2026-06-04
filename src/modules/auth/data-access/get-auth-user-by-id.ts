import { db } from '#database/connection.js'
import { authUser } from '#database/entities/auth.js'
import type { UserId } from '#database/entities/users.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { eq } from 'drizzle-orm'

export async function getAuthUserById(id: UserId) {
  const [user] = await db
    .select({
      id: mpUsersTable.id,
      name: mpUsersTable.name,
      email: mpUsersTable.email,
      password: mpUsersTable.password,
    })
    .from(mpUsersTable)
    .where(eq(mpUsersTable.id, id))
    .limit(1)

  if (!user) return null

  return authUser.parse(user)
}
