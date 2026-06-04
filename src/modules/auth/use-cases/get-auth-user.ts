import { getUserByEmail } from '#modules/auth/data-access/get-user-by-email.js'
import { UserNotFound } from '#modules/auth/errors.js'
import { Result } from 'resultable'

export const getAuthUser = Result.resultableFn(async function (email: string) {
  const user = await getUserByEmail(email)

  if (!user) {
    return Result.err(new UserNotFound())
  }

  return Result.ok(user)
})
