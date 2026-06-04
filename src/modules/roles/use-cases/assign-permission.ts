import { db } from '#database/connection.js'
import { mpPermissionsTable, mpRolesTable, mpRolesToPermissionsTable } from '#database/schemas/users.js'
import { PermissionNotFound, RoleNotFound } from '#modules/roles/errors.js'
import { Result } from 'resultable'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const assignPermissionDto = z.object({
  permissionId: z.number().int().positive(),
})

export type AssignPermissionDto = z.infer<typeof assignPermissionDto>

export const assignPermission = Result.resultableFn(async function (
  roleId: number,
  dto: AssignPermissionDto,
) {
  const [role] = await db
    .select({ id: mpRolesTable.id })
    .from(mpRolesTable)
    .where(eq(mpRolesTable.id, roleId))
    .limit(1)

  if (!role) return Result.err(new RoleNotFound())

  const [permission] = await db
    .select({ id: mpPermissionsTable.id })
    .from(mpPermissionsTable)
    .where(eq(mpPermissionsTable.id, dto.permissionId))
    .limit(1)

  if (!permission) return Result.err(new PermissionNotFound())

  await db
    .insert(mpRolesToPermissionsTable)
    .values({ roleId, permissionId: dto.permissionId })
    .onDuplicateKeyUpdate({ set: { roleId } })

  return Result.okVoid()
})
