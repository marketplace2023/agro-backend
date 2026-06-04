import { Result } from 'resultable'

export class UserNotFound extends Result.BrandedError('@/users/errors/UserNotFound') {}
export class RoleNotFound extends Result.BrandedError('@/users/errors/RoleNotFound') {}
export class RoleAlreadyAssigned extends Result.BrandedError('@/users/errors/RoleAlreadyAssigned') {}
