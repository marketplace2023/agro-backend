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
import { mpCategoriesTable, mpSubcategoriesTable } from '#database/schemas/categories.js'

export const mpUnitsTable = mysqlTable('mp_units', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  symbol: varchar('symbol', { length: 20 }).notNull().unique('uk_mp_units_symbol'),
  description: varchar('description', { length: 100 }),
  isActive: boolean('is_active').notNull().default(true),
  sortOrder: int('sort_order').notNull().default(0),
})

export const mpProductsTable = mysqlTable(
  'mp_products',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull(),
    categoryId: int('category_id').notNull(),
    subcategoryId: int('subcategory_id'),
    name: varchar('name', { length: 255 }).notNull(),
    description: text('description'),
    sku: varchar('sku', { length: 100 }),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('draft')
      .$type<'active' | 'inactive' | 'draft'>(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_products_user',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [mpCategoriesTable.id],
      name: 'fk_mp_products_category',
    }),
    foreignKey({
      columns: [table.subcategoryId],
      foreignColumns: [mpSubcategoriesTable.id],
      name: 'fk_mp_products_subcategory',
    }),
  ],
)

export const mpCropBatchesTable = mysqlTable(
  'mp_crop_batches',
  {
    id: int('id').autoincrement().primaryKey(),
    productId: int('product_id').notNull(),
    batchCode: varchar('batch_code', { length: 50 }),
    volume: decimal('volume', { precision: 12, scale: 2 }).notNull(),
    unitId: int('unit_id').notNull(),
    pricePerUnit: decimal('price_per_unit', { precision: 14, scale: 2 }).notNull(),
    quality: varchar('quality', { length: 20 }).$type<'extra' | 'primera' | 'segunda' | 'tercera'>(),
    department: varchar('department', { length: 100 }),
    municipality: varchar('municipality', { length: 100 }),
    harvestDate: date('harvest_date', { mode: 'string' }),
    availableFrom: date('available_from', { mode: 'string' }),
    availableTo: date('available_to', { mode: 'string' }),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('available')
      .$type<'available' | 'reserved' | 'sold' | 'expired'>(),
    notes: text('notes'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.productId],
      foreignColumns: [mpProductsTable.id],
      name: 'fk_mp_crop_batches_product',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.unitId],
      foreignColumns: [mpUnitsTable.id],
      name: 'fk_mp_crop_batches_unit',
    }),
  ],
)

export const mpQualitySpecsTable = mysqlTable(
  'mp_quality_specs',
  {
    id: int('id').autoincrement().primaryKey(),
    productId: int('product_id').notNull(),
    batchId: int('batch_id'),
    parameter: varchar('parameter', { length: 100 }).notNull(),
    value: varchar('value', { length: 100 }).notNull(),
    unit: varchar('unit', { length: 30 }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.productId],
      foreignColumns: [mpProductsTable.id],
      name: 'fk_mp_quality_specs_product',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.batchId],
      foreignColumns: [mpCropBatchesTable.id],
      name: 'fk_mp_quality_specs_batch',
    }).onDelete('cascade'),
  ],
)

export const mpProductCertificationsTable = mysqlTable(
  'mp_product_certifications',
  {
    id: int('id').autoincrement().primaryKey(),
    productId: int('product_id').notNull(),
    certificationName: varchar('certification_name', { length: 100 }).notNull(),
    certificationCode: varchar('certification_code', { length: 100 }),
    issuedBy: varchar('issued_by', { length: 100 }),
    issuedAt: date('issued_at', { mode: 'string' }),
    expiresAt: date('expires_at', { mode: 'string' }),
    documentUrl: varchar('document_url', { length: 500 }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.productId],
      foreignColumns: [mpProductsTable.id],
      name: 'fk_mp_product_certs_product',
    }).onDelete('cascade'),
  ],
)
