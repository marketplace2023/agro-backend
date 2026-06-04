import { db } from '#database/connection.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { UserNotFound } from '#modules/users/errors.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const updateUserStatusDto = z.object({
  status: z.enum(['active', 'banned']),
})

export type UpdateUserStatusDto = z.infer<typeof updateUserStatusDto>

export const updateUserStatus = Result.resultableFn(async function (
  userId: number,
  dto: UpdateUserStatusDto,
) {
  const [user] = await db
    .select({ id: mpUsersTable.id })
    .from(mpUsersTable)
    .where(eq(mpUsersTable.id, userId))
    .limit(1)

  if (!user) return Result.err(new UserNotFound())

  await db.update(mpUsersTable).set({ status: dto.status }).where(eq(mpUsersTable.id, userId))

  return Result.okVoid()
})
