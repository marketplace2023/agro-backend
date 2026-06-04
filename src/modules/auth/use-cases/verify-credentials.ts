import { db } from '#database/connection.js'
import { authUser } from '#database/entities/auth.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { PasswordDoesntMatch, UserNotFound } from '#modules/auth/errors.js'
import { check } from '#modules/shared/lib/hashing.js'
import { Result } from 'resultable'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const verifyCredentialsDto = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(255),
})

export type VerifyCredentialsDto = z.infer<typeof verifyCredentialsDto>

export const verifyCredentials = Result.resultableFn(async function (
  dto: VerifyCredentialsDto,
) {
  const [foundUser] = await db
    .select()
    .from(mpUsersTable)
    .where(eq(mpUsersTable.email, dto.email))
    .limit(1)

  if (!foundUser) {
    return Result.err(new UserNotFound())
  }

  const passwordMatches = await check(dto.password, foundUser.password)

  if (!passwordMatches) {
    return Result.err(new PasswordDoesntMatch())
  }

  return Result.ok(authUser.parse(foundUser))
})
