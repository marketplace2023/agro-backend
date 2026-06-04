import {
  boolean,
  decimal,
  foreignKey,
  int,
  json,
  mysqlTable,
  text,
  timestamp,
  tinyint,
  varchar,
} from 'drizzle-orm/mysql-core'
import { mpUsersTable } from '#database/schemas/users.js'
import { mpCategoriesTable } from '#database/schemas/categories.js'

export const mpStoresTable = mysqlTable(
  'mp_stores',
  {
    id: int('id').autoincrement().primaryKey(),
    userId: int('user_id').notNull().unique('uk_mp_stores_user_id'),
    roleType: varchar('role_type', { length: 50 }).notNull(),
    name: varchar('name', { length: 150 }).notNull(),
    slug: varchar('slug', { length: 170 }).notNull().unique('uk_mp_stores_slug'),
    description: text('description'),
    logoUrl: varchar('logo_url', { length: 500 }),
    bannerUrl: varchar('banner_url', { length: 500 }),
    department: varchar('department', { length: 100 }),
    municipality: varchar('municipality', { length: 100 }),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('pending')
      .$type<'active' | 'inactive' | 'suspended' | 'pending'>(),
    isVerified: boolean('is_verified').notNull().default(false),
    verifiedAt: timestamp('verified_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_stores_user',
    }).onDelete('cascade'),
  ],
)

export const mpStoreProfilesTable = mysqlTable(
  'mp_store_profiles',
  {
    id: int('id').autoincrement().primaryKey(),
    storeId: int('store_id').notNull().unique('uk_mp_store_profiles_store_id'),
    tagline: varchar('tagline', { length: 200 }),
    about: text('about'),
    yearFounded: int('year_founded'),
    specialties: text('specialties'),
    certifications: json('certifications').$type<string[]>(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.storeId],
      foreignColumns: [mpStoresTable.id],
      name: 'fk_mp_store_profiles_store',
    }).onDelete('cascade'),
  ],
)

export const mpStoreHoursTable = mysqlTable(
  'mp_store_hours',
  {
    id: int('id').autoincrement().primaryKey(),
    storeId: int('store_id').notNull(),
    dayOfWeek: tinyint('day_of_week').notNull(),
    openTime: varchar('open_time', { length: 5 }),
    closeTime: varchar('close_time', { length: 5 }),
    isClosed: boolean('is_closed').notNull().default(false),
  },
  (table) => [
    foreignKey({
      columns: [table.storeId],
      foreignColumns: [mpStoresTable.id],
      name: 'fk_mp_store_hours_store',
    }).onDelete('cascade'),
  ],
)

export const mpStoreContactsTable = mysqlTable(
  'mp_store_contacts',
  {
    id: int('id').autoincrement().primaryKey(),
    storeId: int('store_id').notNull(),
    contactType: varchar('contact_type', { length: 20 })
      .notNull()
      .$type<'phone' | 'whatsapp' | 'email' | 'website' | 'instagram' | 'facebook'>(),
    value: varchar('value', { length: 255 }).notNull(),
    label: varchar('label', { length: 50 }),
    isPrimary: boolean('is_primary').notNull().default(false),
    sortOrder: int('sort_order').notNull().default(0),
  },
  (table) => [
    foreignKey({
      columns: [table.storeId],
      foreignColumns: [mpStoresTable.id],
      name: 'fk_mp_store_contacts_store',
    }).onDelete('cascade'),
  ],
)

export const mpStoreMediaTable = mysqlTable(
  'mp_store_media',
  {
    id: int('id').autoincrement().primaryKey(),
    storeId: int('store_id').notNull(),
    mediaType: varchar('media_type', { length: 10 })
      .notNull()
      .default('image')
      .$type<'image' | 'video'>(),
    url: varchar('url', { length: 500 }).notNull(),
    caption: varchar('caption', { length: 200 }),
    isPrimary: boolean('is_primary').notNull().default(false),
    sortOrder: int('sort_order').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.storeId],
      foreignColumns: [mpStoresTable.id],
      name: 'fk_mp_store_media_store',
    }).onDelete('cascade'),
  ],
)

export const mpGbpProfilesTable = mysqlTable(
  'mp_gbp_profiles',
  {
    id: int('id').autoincrement().primaryKey(),
    storeId: int('store_id').notNull().unique('uk_mp_gbp_store_id'),
    businessName: varchar('business_name', { length: 150 }).notNull(),
    address: varchar('address', { length: 300 }),
    addressReference: varchar('address_reference', { length: 300 }),
    latitude: decimal('latitude', { precision: 10, scale: 7 }),
    longitude: decimal('longitude', { precision: 10, scale: 7 }),
    postalCode: varchar('postal_code', { length: 20 }),
    phone: varchar('phone', { length: 30 }),
    website: varchar('website', { length: 500 }),
    googlePlaceId: varchar('google_place_id', { length: 200 }),
    isLocationApproximate: boolean('is_location_approximate').notNull().default(true),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.storeId],
      foreignColumns: [mpStoresTable.id],
      name: 'fk_mp_gbp_profiles_store',
    }).onDelete('cascade'),
  ],
)

export const mpReviewsTable = mysqlTable(
  'mp_reviews',
  {
    id: int('id').autoincrement().primaryKey(),
    storeId: int('store_id').notNull(),
    userId: int('user_id').notNull(),
    rating: tinyint('rating').notNull(),
    comment: text('comment'),
    ownerReply: text('owner_reply'),
    isVerified: boolean('is_verified').notNull().default(false),
    status: varchar('status', { length: 20 })
      .notNull()
      .default('pending')
      .$type<'pending' | 'published' | 'rejected'>(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.storeId],
      foreignColumns: [mpStoresTable.id],
      name: 'fk_mp_reviews_store',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_reviews_user',
    }).onDelete('cascade'),
  ],
)
