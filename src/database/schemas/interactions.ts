import {
  boolean,
  decimal,
  foreignKey,
  int,
  mysqlTable,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core'
import { mpUsersTable } from '#database/schemas/users.js'
import { mpListingsTable } from '#database/schemas/listings.js'
import { mpStoresTable } from '#database/schemas/stores.js'

export const mpWhatsappClicksTable = mysqlTable('mp_whatsapp_clicks', {
  id: int('id').autoincrement().primaryKey(),
  listingId: int('listing_id'),
  storeId: int('store_id'),
  userId: int('user_id'),
  ipAddress: varchar('ip_address', { length: 50 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const mpFavoritesTable = mysqlTable(
  'mp_favorites',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    entityType: varchar('entity_type', { length: 20 })
      .notNull()
      .$type<'listing' | 'store'>(),
    entityId: int('entity_id').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_favorites_user',
    }).onDelete('cascade'),
    uniqueIndex('uk_mp_favorites').on(table.userId, table.entityType, table.entityId),
  ],
)

export const mpReportsTable = mysqlTable('mp_reports', {
  id: int('id').autoincrement().primaryKey(),
  userId: int('user_id'),
  entityType: varchar('entity_type', { length: 20 })
    .notNull()
    .$type<'listing' | 'store' | 'review'>(),
  entityId: int('entity_id').notNull(),
  reason: varchar('reason', { length: 100 })
    .notNull()
    .$type<'spam' | 'fraud' | 'offensive' | 'duplicate' | 'incorrect_info' | 'other'>(),
  description: text('description'),
  status: varchar('status', { length: 20 })
    .notNull()
    .default('pending')
    .$type<'pending' | 'reviewed' | 'dismissed'>(),
  reviewedByUserId: int('reviewed_by_user_id'),
  reviewedAt: timestamp('reviewed_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const mpRecommendationsTable = mysqlTable(
  'mp_recommendations',
  {
    id: int('id').autoincrement().primaryKey(),
    baseListingId: int('base_listing_id').notNull(),
    recommendedListingId: int('recommended_listing_id').notNull(),
    score: decimal('score', { precision: 5, scale: 4 }).notNull().default('0.5000'),
    reason: varchar('reason', { length: 50 })
      .$type<'same_category' | 'same_location' | 'same_seller' | 'manual'>(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.baseListingId],
      foreignColumns: [mpListingsTable.id],
      name: 'fk_mp_recs_base',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.recommendedListingId],
      foreignColumns: [mpListingsTable.id],
      name: 'fk_mp_recs_recommended',
    }).onDelete('cascade'),
    uniqueIndex('uk_mp_recommendations').on(table.baseListingId, table.recommendedListingId),
  ],
)

export const mpLeadsTable = mysqlTable('mp_leads', {
  id: int('id').autoincrement().primaryKey(),
  ownerId: int('owner_id').notNull(),
  contactUserId: int('contact_user_id'),
  listingId: int('listing_id'),
  storeId: int('store_id'),
  leadType: varchar('lead_type', { length: 20 })
    .notNull()
    .$type<'whatsapp' | 'quote' | 'favorite' | 'contact_form' | 'radar'>(),
  status: varchar('status', { length: 20 })
    .notNull()
    .default('new')
    .$type<'new' | 'contacted' | 'converted' | 'lost'>(),
  notes: text('notes'),
  contactName: varchar('contact_name', { length: 100 }),
  contactPhone: varchar('contact_phone', { length: 50 }),
  contactEmail: varchar('contact_email', { length: 255 }),
  ipAddress: varchar('ip_address', { length: 50 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
})
