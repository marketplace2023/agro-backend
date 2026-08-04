import {
  boolean,
  decimal,
  foreignKey,
  int,
  mysqlTable,
  text,
  timestamp,
  tinyint,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core'
import { mpUsersTable } from '#database/schemas/users.js'
import { mpQuotesTable } from '#database/schemas/quotes.js'

export const mpRatingsTable = mysqlTable(
  'mp_ratings',
  {
    id: int('id').autoincrement().primaryKey(),
    reviewerId: int('reviewer_id').notNull(),
    targetType: varchar('target_type', { length: 20 })
      .notNull()
      .$type<'store' | 'listing' | 'user'>(),
    targetId: int('target_id').notNull(),
    rating: tinyint('rating').notNull(),
    comment: text('comment'),
    isVerifiedPurchase: boolean('is_verified_purchase').notNull().default(false),
    quoteId: int('quote_id'),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('pending')
      .$type<'pending' | 'published' | 'rejected'>(),
    ownerReply: text('owner_reply'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.reviewerId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_ratings_reviewer',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.quoteId],
      foreignColumns: [mpQuotesTable.id],
      name: 'fk_mp_ratings_quote',
    }).onDelete('set null'),
    uniqueIndex('uk_mp_ratings').on(table.reviewerId, table.targetType, table.targetId),
  ],
)

export const mpVerificationRequestsTable = mysqlTable('mp_verification_requests', {
  id: int('id').autoincrement().primaryKey(),
  userId: int('user_id').notNull(),
  requestType: varchar('request_type', { length: 30 })
    .notNull()
    .$type<'identity' | 'business' | 'organic' | 'professional'>(),
  status: varchar('status', { length: 20 })
    .notNull()
    .default('pending')
    .$type<'pending' | 'in_review' | 'approved' | 'rejected'>(),
  notes: text('notes'),
  reviewerNotes: text('reviewer_notes'),
  reviewedByUserId: int('reviewed_by_user_id'),
  reviewedAt: timestamp('reviewed_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
})

export const mpVerificationDocumentsTable = mysqlTable(
  'mp_verification_documents',
  {
    id: int('id').autoincrement().primaryKey(),
    verificationRequestId: int('verification_request_id').notNull(),
    documentType: varchar('document_type', { length: 30 })
      .notNull()
      .$type<'cedula' | 'rif' | 'registro_mercantil' | 'insai_cert' | 'other'>(),
    documentUrl: varchar('document_url', { length: 500 }).notNull(),
    filename: varchar('filename', { length: 255 }).notNull(),
    uploadedAt: timestamp('uploaded_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.verificationRequestId],
      foreignColumns: [mpVerificationRequestsTable.id],
      name: 'fk_mp_ver_docs_request',
    }).onDelete('cascade'),
  ],
)

export const mpTrustBadgesTable = mysqlTable('mp_trust_badges', {
  id: int('id').autoincrement().primaryKey(),
  entityType: varchar('entity_type', { length: 20 })
    .notNull()
    .$type<'user' | 'store'>(),
  entityId: int('entity_id').notNull(),
  badgeType: varchar('badge_type', { length: 40 })
    .notNull()
    .$type<
      | 'verified_identity'
      | 'verified_business'
      | 'organic_certified'
      | 'top_seller'
      | 'responsive'
      | 'trusted_exporter'
      | 'professional_agronomist'
      | 'quality_certified'
    >(),
  issuedByUserId: int('issued_by_user_id'),
  issuedAt: timestamp('issued_at').notNull().defaultNow(),
  expiresAt: timestamp('expires_at'),
  isActive: boolean('is_active').notNull().default(true),
})

export const mpReputationScoresTable = mysqlTable('mp_reputation_scores', {
  id: int('id').autoincrement().primaryKey(),
  entityType: varchar('entity_type', { length: 20 })
    .notNull()
    .$type<'user' | 'store'>(),
  entityId: int('entity_id').notNull(),
  totalRatings: int('total_ratings').notNull().default(0),
  averageRating: decimal('average_rating', { precision: 3, scale: 2 }).notNull().default('0.00'),
  totalReviews: int('total_reviews').notNull().default(0),
  verificationScore: tinyint('verification_score').notNull().default(0),
  responseRate: decimal('response_rate', { precision: 5, scale: 2 }).notNull().default('0.00'),
  conversionRate: decimal('conversion_rate', { precision: 5, scale: 2 }).notNull().default('0.00'),
  reputationIndex: tinyint('reputation_index').notNull().default(0),
  lastCalculatedAt: timestamp('last_calculated_at').notNull().defaultNow(),
})
