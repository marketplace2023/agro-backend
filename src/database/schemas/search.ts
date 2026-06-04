import {
  boolean,
  decimal,
  foreignKey,
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core'
import { mpUsersTable } from '#database/schemas/users.js'
import { mpCategoriesTable } from '#database/schemas/categories.js'

export const mpLocationsTable = mysqlTable(
  'mp_locations',
  {
    id: int('id').autoincrement().primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    type: varchar('type', { length: 20 }).notNull().$type<'department' | 'municipality'>(),
    parentId: int('parent_id'),
    code: varchar('code', { length: 10 }),
    isActive: boolean('is_active').notNull().default(true),
  },
  (table) => [
    foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
      name: 'fk_mp_locations_parent',
    }),
  ],
)

export const mpSearchLogsTable = mysqlTable('mp_search_logs', {
  id: int('id').autoincrement().primaryKey(),
  userId: int('user_id'),
  query: varchar('query', { length: 255 }),
  categoryId: int('category_id'),
  filters: text('filters'),
  resultCount: int('result_count').notNull().default(0),
  ipAddress: varchar('ip_address', { length: 50 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const mpSeoPageTable = mysqlTable('mp_seo_pages', {
  id: int('id').autoincrement().primaryKey(),
  entityType: varchar('entity_type', { length: 20 })
    .notNull()
    .$type<'category' | 'subcategory' | 'listing' | 'store'>(),
  entityId: int('entity_id').notNull(),
  title: varchar('title', { length: 160 }),
  description: varchar('description', { length: 320 }),
  keywords: varchar('keywords', { length: 500 }),
  canonicalUrl: varchar('canonical_url', { length: 500 }),
  ogTitle: varchar('og_title', { length: 160 }),
  ogDescription: varchar('og_description', { length: 320 }),
  ogImageUrl: varchar('og_image_url', { length: 500 }),
  isIndexable: boolean('is_indexable').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
})

export const mpSitemapEntriesTable = mysqlTable('mp_sitemap_entries', {
  id: int('id').autoincrement().primaryKey(),
  url: varchar('url', { length: 500 }).notNull(),
  entityType: varchar('entity_type', { length: 20 }),
  entityId: int('entity_id'),
  changeFreq: varchar('change_freq', { length: 10 })
    .notNull()
    .default('weekly')
    .$type<'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'>(),
  priority: decimal('priority', { precision: 2, scale: 1 }).notNull().default('0.5'),
  lastMod: timestamp('last_mod').notNull().defaultNow(),
  isActive: boolean('is_active').notNull().default(true),
})
