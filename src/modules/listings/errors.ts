import { Result } from 'resultable'

export class ListingNotFound extends Result.BrandedError('@/listings/errors/ListingNotFound') {}
export class NotListingOwner extends Result.BrandedError('@/listings/errors/NotListingOwner') {}
export class InvalidStatusTransition extends Result.BrandedError('@/listings/errors/InvalidStatusTransition') {}
