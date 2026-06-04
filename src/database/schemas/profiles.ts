import { foreignKey, int, json, mysqlTable, text, timestamp, varchar } from 'drizzle-orm/mysql-core'
import { mpUsersTable } from '#database/schemas/users.js'

export const mpProfilesTable = mysqlTable(
  'mp_profiles',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull().unique('uk_mp_profiles_user_id'),
    phone: varchar('phone', { length: 50 }),
    bio: text('bio'),
    avatarUrl: varchar('avatar_url', { length: 500 }),
    department: varchar('department', { length: 100 }),
    municipality: varchar('municipality', { length: 100 }),
    address: varchar('address', { length: 255 }),
    website: varchar('website', { length: 500 }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_profiles_user',
    }).onDelete('cascade'),
  ],
)

export const mpUserPreferencesTable = mysqlTable(
  'mp_user_preferences',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull().unique('uk_mp_user_prefs_user_id'),
    preferences: json('preferences').notNull().$type<Record<string, unknown>>(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_user_prefs_user',
    }).onDelete('cascade'),
  ],
)

export const mpAuditLogsTable = mysqlTable('mp_audit_logs', {
  id: int('id').autoincrement().primaryKey(),
  userId: int('user_id'),
  action: varchar('action', { length: 100 }).notNull(),
  entityType: varchar('entity_type', { length: 100 }),
  entityId: int('entity_id'),
  metadata: json('metadata').$type<Record<string, unknown>>(),
  ipAddress: varchar('ip_address', { length: 50 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
