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
import { mpListingsTable } from '#database/schemas/listings.js'
import { mpCategoriesTable, mpSubcategoriesTable } from '#database/schemas/categories.js'

export const mpRadarAlertsTable = mysqlTable(
  'mp_radar_alerts',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    name: varchar('name', { length: 150 }).notNull(),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('active')
      .$type<'active' | 'paused' | 'expired' | 'cancelled'>(),
    notifyEmail: boolean('notify_email').notNull().default(true),
    notifyInApp: boolean('notify_in_app').notNull().default(true),
    lastTriggeredAt: timestamp('last_triggered_at'),
    matchCount: int('match_count').notNull().default(0),
    expiresAt: timestamp('expires_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_radar_alerts_user',
    }).onDelete('cascade'),
  ],
)

// Each alert has one or more criteria that ALL must match (AND logic)
export const mpRadarCriteriaTable = mysqlTable(
  'mp_radar_criteria',
  {
    id: int('id').autoincrement().primaryKey(),
    alertId: int('alert_id').notNull(),
    criteriaType: varchar('criteria_type', { length: 30 })
      .notNull()
      .$type<
        | 'category'
        | 'subcategory'
        | 'listing_type'
        | 'department'
        | 'municipality'
        | 'min_price'
        | 'max_price'
        | 'keyword'
        | 'verified_store'
        | 'has_certification'
      >(),
    value: varchar('value', { length: 255 }).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.alertId],
      foreignColumns: [mpRadarAlertsTable.id],
      name: 'fk_mp_radar_criteria_alert',
    }).onDelete('cascade'),
  ],
)

export const mpRadarMatchesTable = mysqlTable(
  'mp_radar_matches',
  {
    id: int('id').autoincrement().primaryKey(),
    alertId: int('alert_id').notNull(),
    listingId: int('listing_id').notNull(),
    notified: boolean('notified').notNull().default(false),
    matchedAt: timestamp('matched_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.alertId],
      foreignColumns: [mpRadarAlertsTable.id],
      name: 'fk_mp_radar_matches_alert',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.listingId],
      foreignColumns: [mpListingsTable.id],
      name: 'fk_mp_radar_matches_listing',
    }).onDelete('cascade'),
  ],
)

export const mpNotificationsTable = mysqlTable(
  'mp_notifications',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    type: varchar('type', { length: 30 })
      .notNull()
      .$type<
        | 'radar_match'
        | 'quote_received'
        | 'quote_responded'
        | 'quote_accepted'
        | 'quote_rejected'
        | 'review_received'
        | 'verification_approved'
        | 'verification_rejected'
        | 'listing_approved'
        | 'listing_rejected'
        | 'system'
      >(),
    title: varchar('title', { length: 150 }).notNull(),
    body: text('body'),
    entityType: varchar('entity_type', { length: 20 }),
    entityId: int('entity_id'),
    isRead: boolean('is_read').notNull().default(false),
    readAt: timestamp('read_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_notifications_user',
    }).onDelete('cascade'),
  ],
)
