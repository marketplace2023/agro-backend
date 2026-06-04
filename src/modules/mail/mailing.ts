import type { Url } from 'node:url'
import { Result } from 'resultable'

interface BaseEmailAttachment {
  filename: string
  contentType?: string
  cid?: string
  contentDisposition?: 'inline' | 'attachment'
}

interface EmailAttachmentWithContent extends BaseEmailAttachment {
  content: string | Buffer
}

interface EmailAttachmentWithPath extends BaseEmailAttachment {
  path: string | Url
}

export type EmailAttachment = EmailAttachmentWithContent | EmailAttachmentWithPath

export interface Email {
  from: string
  sender?: string
  to: string | string[]
  subject: string
  text: string
  html: string
  attachments?: EmailAttachment[]
}

export class MailingError extends Result.BrandedError('@/mail/mailing/MailingError') {
  public readonly cause: unknown
  constructor(params: { message?: string; cause: unknown }) {
    super()
    this.cause = params.cause
  }
}

export interface Mailable {
  toEmail(): Promise<Result.Result<Email, MailingError>>
}

export function isMailable(value: unknown): value is Mailable {
  return (
    typeof value === 'object' &&
    value !== null &&
    'toEmail' in value &&
    typeof (value as Mailable).toEmail === 'function'
  )
}

export interface SendMail {
  (email: Email | Mailable): Promise<Result.Result<void, MailingError>>
}
