import { db } from '#database/connection.js'
import { use } from '#database/connection.js'
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { SlugAlreadyExists, StoreAlreadyExists } from '#modules/stores/errors.js'
import { count, eq } from 'drizzle-orm'
import { Result } from 'resultable'
import { z } from 'zod'

export const createStoreDto = z.object({
  name: z.string().min(2).max(150),
  slug: z.string().min(2).max(170).regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),
  description: z.string().max(2000).optional(),
  department: z.string().max(100).optional(),
  municipality: z.string().max(100).optional(),
})

export type CreateStoreDto = z.infer<typeof createStoreDto>

export const createStore = Result.resultableFn(async function (userId: number, dto: CreateStoreDto) {
  const [existing] = await db
    .select({ count: count() })
    .from(mpStoresTable)
    .where(eq(mpStoresTable.userId, userId))

  if (existing.count > 0) return Result.err(new StoreAlreadyExists())

  const [primaryRole] = await db
    .select({ name: mpRolesTable.name })
    .from(mpUsersToRolesTable)
    .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
    .where(eq(mpUsersToRolesTable.userId, userId))
    .limit(1)

  const roleType = primaryRole?.name ?? 'seller'

  const [result, error] = await use((db) =>
    db.insert(mpStoresTable).values({ ...dto, userId, roleType, status: 'pending' }).$returningId(),
  )

  if (error) {
    if (error.reason === 'unique_violation') return Result.err(new SlugAlreadyExists())
    throw error.cause
  }

  return Result.ok(result[0].id)
})
