import { Result } from 'resultable'

export class CategoryNotFound extends Result.BrandedError('@/categories/errors/CategoryNotFound') {}
export class SubcategoryNotFound extends Result.BrandedError('@/categories/errors/SubcategoryNotFound') {}
export class SlugAlreadyExists extends Result.BrandedError('@/categories/errors/SlugAlreadyExists') {}
