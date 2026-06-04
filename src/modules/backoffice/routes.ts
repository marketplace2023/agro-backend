import { db } from '#database/connection.js'
import { mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { mpBackofficeMenusTable, mpBackofficeWidgetsTable } from '#database/schemas/backoffice.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { eq, and } from 'drizzle-orm'
import { Hono } from 'hono'

export const backofficeRoutes = new Hono<{ Variables: HonoVariables }>()

backofficeRoutes.use('*', jwtMiddleware)

// --- Get menu for current user (based on their primary role) ---
backofficeRoutes.get('/menu', async (c) => {
  const { user } = c.get('jwtPayload')

  const userRoles = await db
    .select({ name: mpRolesTable.name })
    .from(mpUsersToRolesTable)
    .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
    .where(eq(mpUsersToRolesTable.userId, user.id))

  if (userRoles.length === 0) {
    return c.json({ menus: [] })
  }

  const roleNames = userRoles.map((r) => r.name)

  // Collect menus for all user roles, deduplicated by path
  const allMenuItems = await db
    .select({
      id: mpBackofficeMenusTable.id,
      roleName: mpBackofficeMenusTable.roleName,
      label: mpBackofficeMenusTable.label,
      icon: mpBackofficeMenusTable.icon,
      path: mpBackofficeMenusTable.path,
      sortOrder: mpBackofficeMenusTable.sortOrder,
    })
    .from(mpBackofficeMenusTable)
    .where(and(
      eq(mpBackofficeMenusTable.isActive, true),
    ))
    .orderBy(mpBackofficeMenusTable.roleName, mpBackofficeMenusTable.sortOrder)

  const filtered = allMenuItems.filter((item) => roleNames.includes(item.roleName))

  return c.json({ menus: filtered })
})

// --- Get dashboard widgets for current user ---
backofficeRoutes.get('/dashboard', async (c) => {
  const { user } = c.get('jwtPayload')

  const userRoles = await db
    .select({ name: mpRolesTable.name })
    .from(mpUsersToRolesTable)
    .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
    .where(eq(mpUsersToRolesTable.userId, user.id))

  const roleNames = userRoles.map((r) => r.name)

  const allWidgets = await db
    .select({
      id: mpBackofficeWidgetsTable.id,
      roleName: mpBackofficeWidgetsTable.roleName,
      widgetType: mpBackofficeWidgetsTable.widgetType,
      title: mpBackofficeWidgetsTable.title,
      config: mpBackofficeWidgetsTable.config,
      sortOrder: mpBackofficeWidgetsTable.sortOrder,
    })
    .from(mpBackofficeWidgetsTable)
    .where(eq(mpBackofficeWidgetsTable.isActive, true))
    .orderBy(mpBackofficeWidgetsTable.roleName, mpBackofficeWidgetsTable.sortOrder)

  const filtered = allWidgets.filter((w) => roleNames.includes(w.roleName))

  return c.json({ widgets: filtered, roles: roleNames })
})
