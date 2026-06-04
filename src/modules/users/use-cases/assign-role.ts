import { db } from '#database/connection.js'
import { mpRolesTable, mpUsersTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { RoleAlreadyAssigned, RoleNotFound, UserNotFound } from '#modules/users/errors.js'
import { Result } from 'resultable'
import { count, and, eq } from 'drizzle-orm'
import { z } from 'zod'

export const assignRoleDto = z.object({
  roleId: z.number().int().positive(),
})

export type AssignRoleDto = z.infer<typeof assignRoleDto>

export const assignRole = Result.resultableFn(async function (userId: number, dto: AssignRoleDto) {
  const [user] = await db
    .select({ id: mpUsersTable.id })
    .from(mpUsersTable)
    .where(eq(mpUsersTable.id, userId))
    .limit(1)

  if (!user) return Result.err(new UserNotFound())

  const [role] = await db
    .select({ id: mpRolesTable.id })
    .from(mpRolesTable)
    .where(eq(mpRolesTable.id, dto.roleId))
    .limit(1)

  if (!role) return Result.err(new RoleNotFound())

  const [existing] = await db
    .select({ count: count() })
    .from(mpUsersToRolesTable)
    .where(and(eq(mpUsersToRolesTable.userId, userId), eq(mpUsersToRolesTable.roleId, dto.roleId)))

  if (existing.count > 0) return Result.err(new RoleAlreadyAssigned())

  await db.insert(mpUsersToRolesTable).values({ userId, roleId: dto.roleId })

  return Result.okVoid()
})
