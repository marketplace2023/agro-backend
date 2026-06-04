import {
  foreignKey,
  int,
  mysqlTable,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core'

export const mpUsersTable = mysqlTable('mp_users', {
  id: int('id').autoincrement().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique('uk_mp_users_email'),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  status: varchar('status', { length: 50 }).notNull().$type<'active' | 'banned'>(),
  emailVerifiedAt: timestamp('email_verified_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
})

export const mpRolesTable = mysqlTable('mp_roles', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique('uk_mp_roles_name'),
  description: varchar('description', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const mpPermissionsTable = mysqlTable('mp_permissions', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 255 }).notNull().unique('uk_mp_permissions_name'),
  description: varchar('description', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const mpUsersToRolesTable = mysqlTable(
  'mp_users_to_roles',
  {
    userId: int('user_id').notNull(),
    roleId: int('role_id').notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [mpUsersTable.id],
      name: 'fk_mp_users_to_roles_user',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.roleId],
      foreignColumns: [mpRolesTable.id],
      name: 'fk_mp_users_to_roles_role',
    }).onDelete('cascade'),
    uniqueIndex('uk_mp_users_to_roles').on(table.userId, table.roleId),
  ],
)

export const mpRolesToPermissionsTable = mysqlTable(
  'mp_roles_to_permissions',
  {
    roleId: int('role_id').notNull(),
    permissionId: int('permission_id').notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.roleId],
      foreignColumns: [mpRolesTable.id],
      name: 'fk_mp_roles_to_permissions_role',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.permissionId],
      foreignColumns: [mpPermissionsTable.id],
      name: 'fk_mp_roles_to_permissions_permission',
    }).onDelete('cascade'),
    uniqueIndex('uk_mp_roles_to_permissions').on(table.roleId, table.permissionId),
  ],
)

export const mpPasswordResetsTable = mysqlTable('mp_password_resets', {
  id: int('id').autoincrement().primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  token: varchar('token', { length: 500 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
