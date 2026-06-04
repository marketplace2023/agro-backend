import { db } from '#database/connection.js'
import {
  mpPermissionsTable,
  mpRolesTable,
  mpRolesToPermissionsTable,
} from '#database/schemas/users.js'
import { assignPermission, assignPermissionDto } from '#modules/roles/use-cases/assign-permission.js'
import { removePermission } from '#modules/roles/use-cases/remove-permission.js'
import { RoleNotFound, PermissionNotFound } from '#modules/roles/errors.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import { eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { Match } from 'resultable'
import { StatusCodes } from 'http-status-codes'

export const roleRoutes = new Hono()

roleRoutes.use('*', jwtMiddleware)

// --- List all roles ---
roleRoutes.get('/', async (c) => {
  const roles = await db
    .select({ id: mpRolesTable.id, name: mpRolesTable.name, description: mpRolesTable.description })
    .from(mpRolesTable)
    .orderBy(mpRolesTable.name)

  return c.json(roles)
})

// --- Get role with its permissions ---
roleRoutes.get('/:id', async (c) => {
  const id = Number(c.req.param('id'))

  const [role] = await db
    .select({ id: mpRolesTable.id, name: mpRolesTable.name, description: mpRolesTable.description })
    .from(mpRolesTable)
    .where(eq(mpRolesTable.id, id))
    .limit(1)

  if (!role) throw new NotFoundException('Rol no encontrado')

  const permissions = await db
    .select({
      id: mpPermissionsTable.id,
      name: mpPermissionsTable.name,
      description: mpPermissionsTable.description,
    })
    .from(mpPermissionsTable)
    .innerJoin(
      mpRolesToPermissionsTable,
      eq(mpPermissionsTable.id, mpRolesToPermissionsTable.permissionId),
    )
    .where(eq(mpRolesToPermissionsTable.roleId, id))

  return c.json({ ...role, permissions })
})

// --- List all permissions ---
roleRoutes.get('/permissions/all', requireRole('admin'), async (c) => {
  const permissions = await db
    .select({ id: mpPermissionsTable.id, name: mpPermissionsTable.name, description: mpPermissionsTable.description })
    .from(mpPermissionsTable)
    .orderBy(mpPermissionsTable.name)

  return c.json(permissions)
})

// --- Assign permission to role (admin only) ---
roleRoutes.post(
  '/:id/permissions',
  requireRole('admin'),
  zodValidator('json', assignPermissionDto),
  async (c) => {
    const id = Number(c.req.param('id'))
    const [, error] = await assignPermission(id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/roles/errors/RoleNotFound': () => new NotFoundException('Rol no encontrado'),
        '@/roles/errors/PermissionNotFound': () => new NotFoundException('Permiso no encontrado'),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Remove permission from role (admin only) ---
roleRoutes.delete('/:id/permissions/:permissionId', requireRole('admin'), async (c) => {
  await removePermission(Number(c.req.param('id')), Number(c.req.param('permissionId')))
  return c.body(null, StatusCodes.NO_CONTENT)
})
