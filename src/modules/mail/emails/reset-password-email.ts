import { Result } from 'resultable'
import { type Email, type Mailable, MailingError } from '#modules/mail/mailing.js'
import { env } from '#env.js'

export type ResetPasswordEmailConfig = {
  to: string
  resetPasswordToken: string
}

export class ResetPasswordEmail implements Mailable {
  private readonly from: string
  private readonly to: string
  private readonly resetPasswordLink: string

  constructor(config: ResetPasswordEmailConfig) {
    this.from = env.MAIL_FROM
    this.to = config.to
    this.resetPasswordLink = `${env.FRONTEND_URL}/reset-password?token=${encodeURIComponent(config.resetPasswordToken)}`
  }

  async toEmail(): Promise<Result.Result<Email, MailingError>> {
    return Result.tryCatch(
      async () => ({
        from: this.from,
        to: this.to,
        subject: 'Recuperación de contraseña - Marketplace Agro',
        text: this.getTextContent(),
        html: this.getHtmlContent(),
      }),
      (cause) => new MailingError({ cause }),
    )
  }

  private getTextContent(): string {
    return (
      `Hola,\n\n` +
      `Hemos recibido una solicitud para restablecer tu contraseña en Marketplace Agro.\n\n` +
      `Recupera tu contraseña en: ${this.resetPasswordLink}\n\n` +
      `Este enlace expira en 10 minutos.\n\n` +
      `Si no solicitaste este cambio, ignora este mensaje.`
    )
  }

  private getHtmlContent(): string {
    return `
      <h1>Recuperación de contraseña</h1>
      <p>Hemos recibido una solicitud para restablecer tu contraseña en Marketplace Agro.</p>
      <p>
        <a href="${this.resetPasswordLink}" target="_blank">Recuperar contraseña</a>
      </p>
      <p>Este enlace expira en 10 minutos.</p>
      <p>Si no solicitaste este cambio, ignora este mensaje.</p>
    `
  }
}
