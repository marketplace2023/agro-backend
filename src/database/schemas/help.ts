import {
  boolean,
  foreignKey,
  int,
  mysqlTable,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core'

export const mpHelpCategoriesTable = mysqlTable('mp_help_categories', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull(),
  description: text('description'),
  imageUrl: varchar('image_url', { length: 500 }),
  icon: varchar('icon', { length: 50 }),
  sortOrder: int('sort_order').notNull().default(0),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
}, (table) => [
  uniqueIndex('uk_mp_help_categories_slug').on(table.slug),
])

export const mpHelpArticlesTable = mysqlTable(
  'mp_help_articles',
  {
    id: int('id').autoincrement().primaryKey(),
    categoryId: int('category_id').notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull(),
    excerpt: text('excerpt'),
    content: text('content').notNull(),
    type: varchar('type', { length: 30 })
      .notNull()
      .default('faq')
      .$type<'faq' | 'guide' | 'tutorial' | 'policy' | 'announcement'>(),
    isFeatured: boolean('is_featured').notNull().default(false),
    isPublished: boolean('is_published').notNull().default(true),
    sortOrder: int('sort_order').notNull().default(0),
    viewCount: int('view_count').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    uniqueIndex('uk_mp_help_articles_slug').on(table.slug),
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [mpHelpCategoriesTable.id],
      name: 'fk_mp_help_articles_category',
    }).onDelete('cascade'),
  ],
)
