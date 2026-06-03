import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { env } from '#env.js'
import * as schema from '#database/schemas/index.js'

const pool = mysql.createPool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
})

export const db = drizzle(pool, { schema, mode: 'default' })
export type Database = typeof db

export class DatabaseError extends Error {
  constructor(
    message: string,
    public readonly code: 'UNIQUE_CONSTRAINT' | 'FOREIGN_KEY' | 'UNKNOWN',
  ) {
    super(message)
    this.name = 'DatabaseError'
  }
}

export function parseDatabaseError(error: unknown): DatabaseError {
  if (error instanceof Error && 'code' in error) {
    const mysqlCode = (error as { code: string }).code
    if (mysqlCode === 'ER_DUP_ENTRY') return new DatabaseError('Duplicate entry', 'UNIQUE_CONSTRAINT')
    if (mysqlCode === 'ER_NO_REFERENCED_ROW_2') return new DatabaseError('Foreign key constraint failed', 'FOREIGN_KEY')
  }
  return new DatabaseError('Database error', 'UNKNOWN')
}
