import { authUserWithoutPassword, type AuthUserWithoutPassword } from '#database/entities/auth.js'
import { env } from '#env.js'
import { InvalidCredentials } from '#modules/auth/errors.js'
import { verifyCredentials, verifyCredentialsDto } from '#modules/auth/use-cases/verify-credentials.js'
import { Result } from 'resultable'
import { sign } from 'hono/jwt'
import { z } from 'zod'

export const loginDto = z.object({
  email: verifyCredentialsDto.shape.email,
  password: verifyCredentialsDto.shape.password,
})

export type LoginDto = z.infer<typeof loginDto>

export const login = Result.resultableFn(async function (dto: LoginDto) {
  const [user, userError] = await verifyCredentials(dto)

  if (userError) {
    return Result.err(new InvalidCredentials())
  }

  const payload: { user: AuthUserWithoutPassword; exp: number } = {
    user: authUserWithoutPassword.parse(user),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
  }

  const token = await sign(payload, env.JWT_SECRET)

  return Result.ok({ token })
})
