import { db } from '#database/connection.js'
import { authUserWithoutPassword, type AuthUserWithoutPassword } from '#database/entities/auth.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { eq } from 'drizzle-orm'

export async function getUserByEmail(email: string): Promise<AuthUserWithoutPassword | null> {
  const [user] = await db
    .select()
    .from(mpUsersTable)
    .where(eq(mpUsersTable.email, email))
    .limit(1)

  if (!user) return null

  return authUserWithoutPassword.parse(user)
}
