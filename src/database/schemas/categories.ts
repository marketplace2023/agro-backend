import {
  boolean,
  foreignKey,
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core'

export const mpCategoriesTable = mysqlTable('mp_categories', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 120 }).notNull().unique('uk_mp_categories_slug'),
  description: text('description'),
  icon: varchar('icon', { length: 100 }),
  imageUrl: varchar('image_url', { length: 500 }),
  isActive: boolean('is_active').notNull().default(true),
  sortOrder: int('sort_order').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
})

export const mpSubcategoriesTable = mysqlTable(
  'mp_subcategories',
  {
    id: int('id').autoincrement().primaryKey(),
    categoryId: int('category_id').notNull(),
    name: varchar('name', { length: 100 }).notNull(),
    slug: varchar('slug', { length: 120 }).notNull().unique('uk_mp_subcategories_slug'),
    description: text('description'),
    icon: varchar('icon', { length: 100 }),
    isActive: boolean('is_active').notNull().default(true),
    sortOrder: int('sort_order').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [mpCategoriesTable.id],
      name: 'fk_mp_subcategories_category',
    }).onDelete('cascade'),
  ],
)

export const mpCategoryAttributesTable = mysqlTable(
  'mp_category_attributes',
  {
    id: int('id').autoincrement().primaryKey(),
    categoryId: int('category_id'),
    subcategoryId: int('subcategory_id'),
    name: varchar('name', { length: 100 }).notNull(),
    label: varchar('label', { length: 100 }).notNull(),
    attributeType: varchar('attribute_type', { length: 30 })
      .notNull()
      .$type<'text' | 'number' | 'select' | 'multiselect' | 'boolean' | 'date' | 'range'>(),
    unit: varchar('unit', { length: 30 }),
    isRequired: boolean('is_required').notNull().default(false),
    isFilter: boolean('is_filter').notNull().default(false),
    sortOrder: int('sort_order').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [mpCategoriesTable.id],
      name: 'fk_mp_cat_attrs_category',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.subcategoryId],
      foreignColumns: [mpSubcategoriesTable.id],
      name: 'fk_mp_cat_attrs_subcategory',
    }).onDelete('cascade'),
  ],
)

export const mpAttributeOptionsTable = mysqlTable(
  'mp_attribute_options',
  {
    id: int('id').autoincrement().primaryKey(),
    attributeId: int('attribute_id').notNull(),
    value: varchar('value', { length: 100 }).notNull(),
    label: varchar('label', { length: 100 }).notNull(),
    sortOrder: int('sort_order').notNull().default(0),
  },
  (table) => [
    foreignKey({
      columns: [table.attributeId],
      foreignColumns: [mpCategoryAttributesTable.id],
      name: 'fk_mp_attr_options_attribute',
    }).onDelete('cascade'),
  ],
)

export const mpDynamicFiltersTable = mysqlTable(
  'mp_dynamic_filters',
  {
    id: int('id').autoincrement().primaryKey(),
    categoryId: int('category_id'),
    subcategoryId: int('subcategory_id'),
    attributeId: int('attribute_id'),
    filterType: varchar('filter_type', { length: 30 })
      .notNull()
      .$type<'range' | 'select' | 'multiselect' | 'boolean' | 'text'>(),
    label: varchar('label', { length: 100 }).notNull(),
    isActive: boolean('is_active').notNull().default(true),
    sortOrder: int('sort_order').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [mpCategoriesTable.id],
      name: 'fk_mp_dyn_filters_category',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.subcategoryId],
      foreignColumns: [mpSubcategoriesTable.id],
      name: 'fk_mp_dyn_filters_subcategory',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.attributeId],
      foreignColumns: [mpCategoryAttributesTable.id],
      name: 'fk_mp_dyn_filters_attribute',
    }).onDelete('set null'),
  ],
)
