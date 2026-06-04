import { Result } from 'resultable'

export class RoleNotFound extends Result.BrandedError('@/roles/errors/RoleNotFound') {}
export class PermissionNotFound extends Result.BrandedError('@/roles/errors/PermissionNotFound') {}
