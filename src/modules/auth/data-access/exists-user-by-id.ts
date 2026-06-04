import { db } from '#database/connection.js'
import type { UserId } from '#database/entities/users.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { eq } from 'drizzle-orm'

export async function existsUserById(id: UserId): Promise<boolean> {
  const [user] = await db
    .select({ id: mpUsersTable.id })
    .from(mpUsersTable)
    .where(eq(mpUsersTable.id, id))
    .limit(1)

  return !!user
}
