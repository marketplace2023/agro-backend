import { boolean, int, json, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const mpBackofficeMenusTable = mysqlTable('mp_backoffice_menus', {
  id: int('id').autoincrement().primaryKey(),
  roleName: varchar('role_name', { length: 100 }).notNull(),
  label: varchar('label', { length: 100 }).notNull(),
  icon: varchar('icon', { length: 100 }),
  path: varchar('path', { length: 255 }).notNull(),
  sortOrder: int('sort_order').notNull().default(0),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const mpBackofficeWidgetsTable = mysqlTable('mp_backoffice_widgets', {
  id: int('id').autoincrement().primaryKey(),
  roleName: varchar('role_name', { length: 100 }).notNull(),
  widgetType: varchar('widget_type', { length: 50 }).notNull().$type<'count' | 'chart' | 'list' | 'stat'>(),
  title: varchar('title', { length: 100 }).notNull(),
  config: json('config').notNull().$type<Record<string, unknown>>(),
  sortOrder: int('sort_order').notNull().default(0),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
