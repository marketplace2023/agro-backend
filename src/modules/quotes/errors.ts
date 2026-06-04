import { Result } from 'resultable'

export class QuoteNotFound extends Result.BrandedError('@/quotes/errors/QuoteNotFound') {}
export class NotQuoteParticipant extends Result.BrandedError('@/quotes/errors/NotQuoteParticipant') {}
export class InvalidQuoteTransition extends Result.BrandedError('@/quotes/errors/InvalidQuoteTransition') {}
