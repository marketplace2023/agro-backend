import {
  boolean,
  foreignKey,
  int,
  json,
  mysqlTable,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core'
import { mpUsersTable } from '#database/schemas/users.js'

export const mpSettingsTable = mysqlTable('mp_settings', {
  id: int('id').autoincrement().primaryKey(),
  key: varchar('key', { length: 100 }).notNull().unique('uk_mp_settings_key'),
  value: text('value').notNull(),
  description: varchar('description', { length: 300 }),
  isPublic: boolean('is_public').notNull().default(false),
  updatedByUserId: int('updated_by_user_id'),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
})

export const mpSupportTicketsTable = mysqlTable(
  'mp_support_tickets',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    subject: varchar('subject', { length: 255 }).notNull(),
    category: varchar('category', { length: 20 })
      .notNull()
      .$type<'technical' | 'listing' | 'account' | 'payment' | 'other'>(),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('open')
      .$type<'open' | 'in_progress' | 'resolved' | 'closed'>(),
    priority: varchar('priority', { length: 10 })
      .notNull()
      .default('normal')
      .$type<'low' | 'normal' | 'high' | 'urgent'>(),
    assignedToUserId: int('assigned_to_user_id'),
    resolvedAt: timestamp('resolved_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_support_tickets_user',
    }).onDelete('cascade'),
  ],
)

export const mpSupportTicketMessagesTable = mysqlTable(
  'mp_support_ticket_messages',
  {
    id: int('id').autoincrement().primaryKey(),
    ticketId: int('ticket_id').notNull(),
    userId: int('user_id').notNull(),
    message: text('message').notNull(),
    isInternal: boolean('is_internal').notNull().default(false),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.ticketId],
      foreignColumns: [mpSupportTicketsTable.id],
      name: 'fk_mp_support_msgs_ticket',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_support_msgs_user',
    }),
  ],
)

export const mpAdminActionsTable = mysqlTable('mp_admin_actions', {
  id: int('id').autoincrement().primaryKey(),
  adminUserId: int('admin_user_id').notNull(),
  actionType: varchar('action_type', { length: 60 }).notNull(),
  entityType: varchar('entity_type', { length: 30 }),
  entityId: int('entity_id'),
  description: text('description'),
  metadata: json('metadata').$type<Record<string, unknown>>(),
  ipAddress: varchar('ip_address', { length: 50 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
