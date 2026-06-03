import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { users } from '#database/schemas/index.js'

export type User = InferSelectModel<typeof users>
export type NewUser = InferInsertModel<typeof users>
