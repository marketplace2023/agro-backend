import { Result } from 'resultable'

export class ProductNotFound extends Result.BrandedError('@/products/errors/ProductNotFound') {}
export class BatchNotFound extends Result.BrandedError('@/products/errors/BatchNotFound') {}
export class NotProductOwner extends Result.BrandedError('@/products/errors/NotProductOwner') {}
