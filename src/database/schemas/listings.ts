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
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpCategoriesTable, mpSubcategoriesTable, mpCategoryAttributesTable } from '#database/schemas/categories.js'
import { mpProductsTable } from '#database/schemas/products.js'

export const mpListingsTable = mysqlTable(
  'mp_listings',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    storeId: int('store_id'),
    categoryId: int('category_id').notNull(),
    subcategoryId: int('subcategory_id'),
    productId: int('product_id'),
    title: varchar('title', { length: 255 }).notNull(),
    description: text('description'),
    price: decimal('price', { precision: 14, scale: 2 }),
    priceUnit: varchar('price_unit', { length: 10 }).default('USD'),
    listingType: varchar('listing_type', { length: 20 })
      .notNull()
      .default('sale')
      .$type<'sale' | 'rent' | 'service' | 'quote' | 'alliance'>(),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('draft')
      .$type<'draft' | 'pending_review' | 'published' | 'paused' | 'sold' | 'rejected' | 'expired' | 'deleted'>(),
    isFeatured: boolean('is_featured').notNull().default(false),
    featuredUntil: timestamp('featured_until'),
    expiresAt: timestamp('expires_at'),
    department: varchar('department', { length: 100 }),
    municipality: varchar('municipality', { length: 100 }),
    latitude: decimal('latitude', { precision: 10, scale: 7 }),
    longitude: decimal('longitude', { precision: 10, scale: 7 }),
    slug: varchar('slug', { length: 300 }).notNull().unique('uk_mp_listings_slug'),
    viewCount: int('view_count').notNull().default(0),
    whatsappClicks: int('whatsapp_clicks').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_listings_user',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.storeId],
      foreignColumns: [mpStoresTable.id],
      name: 'fk_mp_listings_store',
    }).onDelete('set null'),
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [mpCategoriesTable.id],
      name: 'fk_mp_listings_category',
    }),
    foreignKey({
      columns: [table.subcategoryId],
      foreignColumns: [mpSubcategoriesTable.id],
      name: 'fk_mp_listings_subcategory',
    }),
    foreignKey({
      columns: [table.productId],
      foreignColumns: [mpProductsTable.id],
      name: 'fk_mp_listings_product',
    }).onDelete('set null'),
  ],
)

export const mpListingMediaTable = mysqlTable(
  'mp_listing_media',
  {
    id: int('id').autoincrement().primaryKey(),
    listingId: int('listing_id').notNull(),
    mediaType: varchar('media_type', { length: 10 })
      .notNull()
      .default('image')
      .$type<'image' | 'video' | 'document'>(),
    url: varchar('url', { length: 500 }).notNull(),
    caption: varchar('caption', { length: 200 }),
    isPrimary: boolean('is_primary').notNull().default(false),
    sortOrder: int('sort_order').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.listingId],
      foreignColumns: [mpListingsTable.id],
      name: 'fk_mp_listing_media_listing',
    }).onDelete('cascade'),
  ],
)

export const mpListingAttributesTable = mysqlTable(
  'mp_listing_attributes',
  {
    id: int('id').autoincrement().primaryKey(),
    listingId: int('listing_id').notNull(),
    attributeId: int('attribute_id').notNull(),
    value: varchar('value', { length: 500 }).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.listingId],
      foreignColumns: [mpListingsTable.id],
      name: 'fk_mp_listing_attrs_listing',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.attributeId],
      foreignColumns: [mpCategoryAttributesTable.id],
      name: 'fk_mp_listing_attrs_attribute',
    }).onDelete('cascade'),
  ],
)

export const mpListingStatusesTable = mysqlTable(
  'mp_listing_statuses',
  {
    id: int('id').autoincrement().primaryKey(),
    listingId: int('listing_id').notNull(),
    fromStatus: varchar('from_status', { length: 20 }),
    toStatus: varchar('to_status', { length: 20 }).notNull(),
    reason: text('reason'),
    changedByUserId: int('changed_by_user_id'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.listingId],
      foreignColumns: [mpListingsTable.id],
      name: 'fk_mp_listing_statuses_listing',
    }).onDelete('cascade'),
  ],
)

export const mpModerationQueueTable = mysqlTable(
  'mp_moderation_queue',
  {
    id: int('id').autoincrement().primaryKey(),
    listingId: int('listing_id').notNull(),
    assignedToUserId: int('assigned_to_user_id'),
    priority: varchar('priority', { length: 10 })
      .notNull()
      .default('normal')
      .$type<'normal' | 'high'>(),
    reason: text('reason'),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('pending')
      .$type<'pending' | 'in_review' | 'resolved'>(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.listingId],
      foreignColumns: [mpListingsTable.id],
      name: 'fk_mp_moderation_listing',
    }).onDelete('cascade'),
  ],
)
