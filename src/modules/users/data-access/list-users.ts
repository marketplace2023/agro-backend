import { db } from '#database/connection.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { count, desc, ilike, eq, and, type SQL } from 'drizzle-orm'
import { z } from 'zod'

export const listUsersQueryDto = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
  status: z.enum(['active', 'banned']).optional(),
})

export type ListUsersQuery = z.infer<typeof listUsersQueryDto>

export async function listUsers(query: ListUsersQuery) {
  const offset = (query.page - 1) * query.limit

  const where: SQL[] = []
  if (query.search) {
    where.push(ilike(mpUsersTable.name, `%${query.search}%`))
  }
  if (query.status) {
    where.push(eq(mpUsersTable.status, query.status))
  }

  const whereClause = where.length > 0 ? and(...where) : undefined

  const [users, [{ total }]] = await Promise.all([
    db
      .select({
        id: mpUsersTable.id,
        email: mpUsersTable.email,
        name: mpUsersTable.name,
        status: mpUsersTable.status,
        createdAt: mpUsersTable.createdAt,
      })
      .from(mpUsersTable)
      .where(whereClause)
      .orderBy(desc(mpUsersTable.createdAt))
      .limit(query.limit)
      .offset(offset),
    db.select({ total: count() }).from(mpUsersTable).where(whereClause),
  ])

  return { users, total, page: query.page, limit: query.limit }
}
