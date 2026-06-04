import type { UserId } from '#database/entities/users.js'
import { InvalidCredentials, UserNotFound } from '#modules/auth/errors.js'
import { verifyCredentials } from '#modules/auth/use-cases/verify-credentials.js'
import { getAuthUserById } from '#modules/auth/data-access/get-auth-user-by-id.js'
import { hash } from '#modules/shared/lib/hashing.js'
import { db } from '#database/connection.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const updatePasswordDto = z
  .object({
    currentPassword: z.string().min(8, 'La contraseña actual debe tener al menos 8 caracteres'),
    newPassword: z.string().min(8, 'La nueva contraseña debe tener al menos 8 caracteres'),
    confirmNewPassword: z
      .string()
      .min(8, 'La confirmación de la nueva contraseña debe tener al menos 8 caracteres'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: 'Las contraseñas nuevas no coinciden',
  })

export type UpdatePasswordDto = z.infer<typeof updatePasswordDto>

export const updatePassword = Result.resultableFn(async function (
  userId: UserId,
  dto: UpdatePasswordDto,
) {
  const user = await getAuthUserById(userId)

  if (!user) {
    return Result.err(new UserNotFound())
  }

  const [, credentialsError] = await verifyCredentials({
    email: user.email,
    password: dto.currentPassword,
  })

  if (credentialsError) {
    return Result.err(new InvalidCredentials())
  }

  await db
    .update(mpUsersTable)
    .set({ password: await hash(dto.newPassword) })
    .where(eq(mpUsersTable.id, userId))

  return Result.okVoid()
})
