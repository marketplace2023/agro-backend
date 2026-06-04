import { Result } from 'resultable'

export class StoreNotFound extends Result.BrandedError('@/stores/errors/StoreNotFound') {}
export class StoreAlreadyExists extends Result.BrandedError('@/stores/errors/StoreAlreadyExists') {}
export class SlugAlreadyExists extends Result.BrandedError('@/stores/errors/SlugAlreadyExists') {}
export class NotStoreOwner extends Result.BrandedError('@/stores/errors/NotStoreOwner') {}
export class AlreadyReviewed extends Result.BrandedError('@/stores/errors/AlreadyReviewed') {}
