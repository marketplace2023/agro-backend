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
import { mpUsersTable } from '#database/schemas/users.js'

export const mpBlogPostsTable = mysqlTable(
  'mp_blog_posts',
  {
    id: int('id').autoincrement().primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull(),
    excerpt: text('excerpt'),
    content: text('content').notNull(),
    imageUrl: varchar('image_url', { length: 500 }),
    category: varchar('category', { length: 80 }).notNull().default('General'),
    tags: varchar('tags', { length: 500 }),
    readTimeMinutes: int('read_time_minutes').notNull().default(5),
    isPublished: boolean('is_published').notNull().default(false),
    publishedAt: timestamp('published_at'),
    authorId: int('author_id').notNull(),
    viewCount: int('view_count').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    uniqueIndex('uk_mp_blog_posts_slug').on(table.slug),
    foreignKey({
      columns: [table.authorId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_blog_posts_author',
    }),
  ],
)
