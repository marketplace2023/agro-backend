import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { env } from '#env.js'
import * as schema from '#database/schemas/index.js'
import { Result } from 'resultable'

const pool = mysql.createPool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
})

export const db = drizzle(pool, { schema, mode: 'default' })
export type Database = typeof db
export type DatabaseClient = typeof db | Parameters<Parameters<typeof db.transaction>[0]>[0]

export class DatabaseError extends Result.BrandedError('@/database/DatabaseError') {
  constructor(
    public readonly cause: Error,
    public readonly reason: 'unique_violation' | 'foreign_key_violation',
  ) {
    super()
  }
}

function isMysqlError(
  error: unknown,
): error is Error & { code: 'ER_DUP_ENTRY' | 'ER_NO_REFERENCED_ROW_2' | (string & {}) } {
  return error instanceof Error && 'code' in error
}

function matchMysqlError(error: unknown) {
  if (!isMysqlError(error)) return null

  switch (error.code) {
    case 'ER_DUP_ENTRY':
      return new DatabaseError(error, 'unique_violation')
    case 'ER_NO_REFERENCED_ROW_2':
      return new DatabaseError(error, 'foreign_key_violation')
    default:
      return null
  }
}

export async function use<T>(fn: (client: typeof db) => Promise<T>) {
  return Result.tryCatch(
    () => fn(db),
    (cause) => {
      const error = matchMysqlError(cause)
      if (error !== null) return error
      throw cause
    },
  )
}
