import { db, use } from '#database/connection.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { SlugAlreadyExists, StoreAlreadyExists } from '#modules/stores/errors.js'
import { and, count, eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const ONBOARD_STORE_ROLES = [
  'producer',
  'seller',
  'farm_owner',
  'input_supplier',
  'machinery_supplier',
  'agronomist',
  'transporter',
  'cooperative',
  'laboratory',
  'certifier',
  'quality_inspector',
] as const

export const onboardStoreDto = z.object({
  roleType: z.enum(ONBOARD_STORE_ROLES),
  name: z.string().min(2).max(150),
  slug: z.string().min(2).max(170).regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),
  description: z.string().max(2000).optional(),
  department: z.string().max(100).optional(),
  municipality: z.string().max(100).optional(),
})

export type OnboardStoreDto = z.infer<typeof onboardStoreDto>

export const onboardStore = Result.resultableFn(async function (userId: number, dto: OnboardStoreDto) {
  const [existing] = await db
    .select({ count: count() })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.userId, userId))

  if (existing.count > 0) return Result.err(new StoreAlreadyExists())

  // Assign the chosen business role to the user (keep buyer role, add new one)
  const [role] = await db
    .select({ id: mpRolesTable.id })
    .from(mpRolesTable)
    .where(eq(mpRolesTable.name, dto.roleType))
    .limit(1)

  if (role) {
    const [existingAssignment] = await db
      .select({ userId: mpUsersToRolesTable.userId })
      .from(mpUsersToRolesTable)
      .where(and(eq(mpUsersToRolesTable.userId, userId), eq(mpUsersToRolesTable.roleId, role.id)))
      .limit(1)

    if (!existingAssignment) {
      await db.insert(mpUsersToRolesTable).values({ userId, roleId: role.id })
    }
  }

  const { roleType, ...storeData } = dto

  const [result, error] = await use((db) =>
    db
      .insert(mpStoresTable)
      .values({ ...storeData, userId, roleType, status: 'pending' })
      .$returningId(),
  )

  if (error) {
    if (error.reason === 'unique_violation') return Result.err(new SlugAlreadyExists())
    throw error.cause
  }

  return Result.ok(result[0].id)
})
