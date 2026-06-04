import { db } from '#database/connection.js'
import { mpAdminActionsTable } from '#database/schemas/admin.js'

export async function logAdminAction(params: {
  adminUserId: number
  actionType: string
  entityType?: string
  entityId?: number
  description?: string
  metadata?: Record<string, unknown>
  ipAddress?: string
}) {
  await db.insert(mpAdminActionsTable).values(params).catch(() => {})
}
