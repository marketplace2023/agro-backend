import { env } from '#env.js'
import { isMailable, MailingError, type Email, type Mailable, type SendMail } from '#modules/mail/mailing.js'
import * as nodemailer from 'nodemailer'
import { Result } from 'resultable'

const smtpTransport = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: env.MAIL_PORT,
  secure: env.MAIL_SECURE,
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASSWORD,
  },
})

export const sendMail: SendMail = Result.resultableFn(async (email: Email | Mailable) => {
  const [emailToSend, emailToSendError] = isMailable(email)
    ? await email.toEmail()
    : Result.ok(email)

  if (emailToSendError) {
    return Result.err(emailToSendError)
  }

  const result = await Result.tryCatch(
    () => smtpTransport.sendMail(emailToSend),
    (cause) => new MailingError({ cause }),
  )

  return Result.map(result, () => void 0)
})
