import { Result } from 'resultable'

export class UserNotFound extends Result.BrandedError('@/auth/errors/UserNotFound') {}

export class PasswordDoesntMatch extends Result.BrandedError('@/auth/errors/PasswordDoesntMatch') {}

export class UserAlreadyExists extends Error {
  public readonly __brand = '@/auth/errors/UserAlreadyExists'
}

export class DocumentAlreadyExists extends Error {
  public readonly __brand = '@/auth/errors/DocumentAlreadyExists'
}

export class InvalidCredentials extends Result.BrandedError('@/auth/errors/InvalidCredentials') {}
