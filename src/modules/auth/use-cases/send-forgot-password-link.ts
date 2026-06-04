import { db } from '#database/connection.js'
import { mpPasswordResetsTable } from '#database/schemas/users.js'
import { env } from '#env.js'
import { getUserByEmail } from '#modules/auth/data-access/get-user-by-email.js'
import { UserNotFound } from '#modules/auth/errors.js'
import { ResetPasswordEmail } from '#modules/mail/emails/reset-password-email.js'
import { sendMail } from '#modules/mail/smtp-mailer.js'
import { sign } from '#modules/shared/lib/jwt.js'
import { z } from 'zod'

export const sendForgotPasswordLinkDto = z.object({ email: z.string().email() })

export type SendForgotPasswordLinkDto = z.infer<typeof sendForgotPasswordLinkDto>

export async function sendForgotPasswordLink(
  dto: SendForgotPasswordLinkDto,
): Promise<void | UserNotFound> {
  const user = await getUserByEmail(dto.email)

  if (!user) {
    return new UserNotFound()
  }

  const token = await sign(user, env.JWT_PASSWORD_RESET_SECRET, { expiresIn: '10m' })

  await db.insert(mpPasswordResetsTable).values({ token, email: user.email })

  await sendMail(new ResetPasswordEmail({ to: user.email, resetPasswordToken: token }))
}
