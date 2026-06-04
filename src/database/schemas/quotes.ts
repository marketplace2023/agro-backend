import {
  boolean,
  date,
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
import { mpStoresTable } from '#database/schemas/stores.js'
import { mpUnitsTable } from '#database/schemas/products.js'

export const mpQuotesTable = mysqlTable(
  'mp_quotes',
  {
    id: int('id').autoincrement().primaryKey(),
    buyerId: int('buyer_id').notNull(),
    sellerId: int('seller_id').notNull(),
    listingId: int('listing_id'),
    storeId: int('store_id'),
    subject: varchar('subject', { length: 255 }).notNull(),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('sent')
      .$type<'draft' | 'sent' | 'viewed' | 'responded' | 'accepted' | 'rejected' | 'expired' | 'cancelled'>(),
    totalAmount: decimal('total_amount', { precision: 14, scale: 2 }),
    validUntil: date('valid_until', { mode: 'string' }),
    buyerNotes: text('buyer_notes'),
    sellerNotes: text('seller_notes'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({ columns: [table.buyerId], foreignColumns: [mpUsersTable.id], name: 'fk_mp_quotes_buyer' }).onDelete('cascade'),
    foreignKey({ columns: [table.sellerId], foreignColumns: [mpUsersTable.id], name: 'fk_mp_quotes_seller' }),
    foreignKey({ columns: [table.listingId], foreignColumns: [mpListingsTable.id], name: 'fk_mp_quotes_listing' }).onDelete('set null'),
    foreignKey({ columns: [table.storeId], foreignColumns: [mpStoresTable.id], name: 'fk_mp_quotes_store' }).onDelete('set null'),
  ],
)

export const mpQuoteItemsTable = mysqlTable(
  'mp_quote_items',
  {
    id: int('id').autoincrement().primaryKey(),
    quoteId: int('quote_id').notNull(),
    description: varchar('description', { length: 255 }).notNull(),
    quantity: decimal('quantity', { precision: 12, scale: 2 }).notNull(),
    unitId: int('unit_id'),
    unitPrice: decimal('unit_price', { precision: 14, scale: 2 }),
    totalPrice: decimal('total_price', { precision: 14, scale: 2 }),
    notes: text('notes'),
  },
  (table) => [
    foreignKey({ columns: [table.quoteId], foreignColumns: [mpQuotesTable.id], name: 'fk_mp_quote_items_quote' }).onDelete('cascade'),
    foreignKey({ columns: [table.unitId], foreignColumns: [mpUnitsTable.id], name: 'fk_mp_quote_items_unit' }),
  ],
)

export const mpQuoteMessagesTable = mysqlTable(
  'mp_quote_messages',
  {
    id: int('id').autoincrement().primaryKey(),
    quoteId: int('quote_id').notNull(),
    userId: int('user_id').notNull(),
    message: text('message').notNull(),
    isInternal: boolean('is_internal').notNull().default(false),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({ columns: [table.quoteId], foreignColumns: [mpQuotesTable.id], name: 'fk_mp_quote_msgs_quote' }).onDelete('cascade'),
    foreignKey({ columns: [table.userId], foreignColumns: [mpUsersTable.id], name: 'fk_mp_quote_msgs_user' }),
  ],
)

export const mpQuoteStatusesTable = mysqlTable(
  'mp_quote_statuses',
  {
    id: int('id').autoincrement().primaryKey(),
    quoteId: int('quote_id').notNull(),
    fromStatus: varchar('from_status', { length: 20 }),
    toStatus: varchar('to_status', { length: 20 }).notNull(),
    reason: text('reason'),
    changedByUserId: int('changed_by_user_id'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({ columns: [table.quoteId], foreignColumns: [mpQuotesTable.id], name: 'fk_mp_quote_statuses_quote' }).onDelete('cascade'),
  ],
)

export const mpQuoteAttachmentsTable = mysqlTable(
  'mp_quote_attachments',
  {
    id: int('id').autoincrement().primaryKey(),
    quoteId: int('quote_id').notNull(),
    messageId: int('message_id'),
    url: varchar('url', { length: 500 }).notNull(),
    filename: varchar('filename', { length: 255 }).notNull(),
    fileSize: int('file_size'),
    uploadedByUserId: int('uploaded_by_user_id').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({ columns: [table.quoteId], foreignColumns: [mpQuotesTable.id], name: 'fk_mp_quote_attachments_quote' }).onDelete('cascade'),
    foreignKey({ columns: [table.messageId], foreignColumns: [mpQuoteMessagesTable.id], name: 'fk_mp_quote_attachments_msg' }).onDelete('set null'),
  ],
)
