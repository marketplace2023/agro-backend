import {
  boolean,
  date,
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
import { mpLeadsTable } from '#database/schemas/interactions.js'

export const mpLeadNotesTable = mysqlTable(
  'mp_lead_notes',
  {
    id: int('id').autoincrement().primaryKey(),
    leadId: int('lead_id').notNull(),
    userId: int('user_id').notNull(),
    note: text('note').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
  },
  (table) => [
    foreignKey({ columns: [table.leadId], foreignColumns: [mpLeadsTable.id], name: 'fk_mp_lead_notes_lead' }).onDelete('cascade'),
    foreignKey({ columns: [table.userId], foreignColumns: [mpUsersTable.id], name: 'fk_mp_lead_notes_user' }),
  ],
)

export const mpLeadActivitiesTable = mysqlTable(
  'mp_lead_activities',
  {
    id: int('id').autoincrement().primaryKey(),
    leadId: int('lead_id').notNull(),
    userId: int('user_id').notNull(),
    activityType: varchar('activity_type', { length: 20 })
      .notNull()
      .$type<'call' | 'email' | 'whatsapp' | 'visit' | 'meeting' | 'note' | 'status_change'>(),
    description: text('description'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({ columns: [table.leadId], foreignColumns: [mpLeadsTable.id], name: 'fk_mp_lead_activities_lead' }).onDelete('cascade'),
    foreignKey({ columns: [table.userId], foreignColumns: [mpUsersTable.id], name: 'fk_mp_lead_activities_user' }),
  ],
)

export const mpCampaignsTable = mysqlTable('mp_campaigns', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 150 }).notNull(),
  type: varchar('type', { length: 20 })
    .notNull()
    .$type<'email' | 'whatsapp' | 'promotion' | 'featured' | 'other'>(),
  status: varchar('status', { length: 20 })
    .notNull()
    .default('draft')
    .$type<'draft' | 'active' | 'paused' | 'ended'>(),
  description: text('description'),
  budget: decimal('budget', { precision: 12, scale: 2 }),
  startDate: date('start_date', { mode: 'string' }),
  endDate: date('end_date', { mode: 'string' }),
  createdByUserId: int('created_by_user_id').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
})

export const mpLeadCampaignsTable = mysqlTable(
  'mp_lead_campaigns',
  {
    id: int('id').autoincrement().primaryKey(),
    leadId: int('lead_id').notNull(),
    campaignId: int('campaign_id').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [
    foreignKey({ columns: [table.leadId], foreignColumns: [mpLeadsTable.id], name: 'fk_mp_lead_campaigns_lead' }).onDelete('cascade'),
    foreignKey({ columns: [table.campaignId], foreignColumns: [mpCampaignsTable.id], name: 'fk_mp_lead_campaigns_campaign' }).onDelete('cascade'),
    uniqueIndex('uk_mp_lead_campaigns').on(table.leadId, table.campaignId),
  ],
)
