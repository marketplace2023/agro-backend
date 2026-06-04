import { db } from '#database/connection.js'
import type { UserId } from '#database/entities/users.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { existsUserById } from '#modules/auth/data-access/exists-user-by-id.js'
import { UserNotFound } from '#modules/auth/errors.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const updateUserDto = z.object({
  name: z.string().min(1).max(100),
})

export type UpdateUserDto = z.infer<typeof updateUserDto>

export const updateUser = Result.resultableFn(async function (userId: UserId, dto: UpdateUserDto) {
  const userExists = await existsUserById(userId)

  if (!userExists) {
    return Result.err(new UserNotFound())
  }

  await db.update(mpUsersTable).set(dto).where(eq(mpUsersTable.id, userId))

  return Result.okVoid()
})
