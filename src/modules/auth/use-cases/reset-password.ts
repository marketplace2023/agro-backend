import { db } from '#database/connection.js'
import { authUserWithoutPassword, type AuthUserWithoutPassword } from '#database/entities/auth.js'
import { mpPasswordResetsTable, mpUsersTable } from '#database/schemas/users.js'
import { env } from '#env.js'
import { InvalidCredentials } from '#modules/auth/errors.js'
import { hash } from '#modules/shared/lib/hashing.js'
import { verify } from '#modules/shared/lib/jwt.js'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const resetPasswordDto = z.object({
  token: z.string().min(1).max(500),
  password: z.string().min(8).max(255),
})

export type ResetPasswordDto = z.infer<typeof resetPasswordDto>

export async function resetPassword(dto: ResetPasswordDto) {
  const [passwordReset] = await db
    .select()
    .from(mpPasswordResetsTable)
    .where(eq(mpPasswordResetsTable.token, dto.token))
    .limit(1)

  if (!passwordReset) {
    return new InvalidCredentials()
  }

  let payload: AuthUserWithoutPassword

  try {
    payload = authUserWithoutPassword.parse(
      await verify<AuthUserWithoutPassword>(dto.token, env.JWT_PASSWORD_RESET_SECRET),
    )
  } catch {
    return new InvalidCredentials()
  }

  await db.transaction(async (tx) => {
    await tx
      .update(mpUsersTable)
      .set({ password: await hash(dto.password) })
      .where(eq(mpUsersTable.id, payload.id))

    await tx
      .delete(mpPasswordResetsTable)
      .where(eq(mpPasswordResetsTable.id, passwordReset.id))
  })
}
