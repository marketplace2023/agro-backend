import { db } from '#database/connection.js'
import { mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { getUserById } from '#modules/users/data-access/get-user-by-id.js'
import { listUsers, listUsersQueryDto } from '#modules/users/data-access/list-users.js'
import { assignRole, assignRoleDto } from '#modules/users/use-cases/assign-role.js'
import { removeRole } from '#modules/users/use-cases/remove-role.js'
import { updateUserStatus, updateUserStatusDto } from '#modules/users/use-cases/update-user-status.js'
import { upsertProfile, upsertProfileDto } from '#modules/users/use-cases/upsert-profile.js'
import { getUserPermissions } from '#modules/users/use-cases/get-user-permissions.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { jwtMiddleware } from '#modules/shared/http/middleware/jwt-middleware.js'
import { requireRole } from '#modules/shared/http/middleware/require-role.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import { eq } from 'drizzle-orm'
import type { HonoVariables } from '#modules/shared/lib/hono-variables.js'
import { Hono } from 'hono'
import { Match } from 'resultable'
import { StatusCodes } from 'http-status-codes'

export const userRoutes = new Hono<{ Variables: HonoVariables }>()

userRoutes.use('*', jwtMiddleware)

async function isAdmin(userId: number): Promise<boolean> {
  const roles = await db
    .select({ name: mpRolesTable.name })
    .from(mpUsersToRolesTable)
    .innerJoin(mpRolesTable, eq(mpRolesTable.id, mpUsersToRolesTable.roleId))
    .where(eq(mpUsersToRolesTable.userId, userId))

  return roles.some((r) => r.name === 'admin')
}

// --- List users (admin only) ---
userRoutes.get('/', requireRole('admin'), zodValidator('query', listUsersQueryDto), async (c) => {
  const query = c.req.valid('query')
  return c.json(await listUsers(query))
})

// --- Get user by id (self or admin) ---
userRoutes.get('/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const { user: loggedIn } = c.get('jwtPayload')

  if (isNaN(id)) throw new NotFoundException('Usuario no encontrado')

  const isSelf = loggedIn.id === id
  if (!isSelf && !(await isAdmin(loggedIn.id))) {
    return c.json({ message: 'Forbidden' }, StatusCodes.FORBIDDEN)
  }

  const user = await getUserById(id)
  if (!user) throw new NotFoundException('Usuario no encontrado')

  return c.json(user)
})

// --- Update user status (admin only) ---
userRoutes.patch(
  '/:id/status',
  requireRole('admin'),
  zodValidator('json', updateUserStatusDto),
  async (c) => {
    const id = Number(c.req.param('id'))
    const [, error] = await updateUserStatus(id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/users/errors/UserNotFound': () => new NotFoundException('Usuario no encontrado'),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Assign role to user (admin only) ---
userRoutes.post(
  '/:id/roles',
  requireRole('admin'),
  zodValidator('json', assignRoleDto),
  async (c) => {
    const id = Number(c.req.param('id'))
    const [, error] = await assignRole(id, c.req.valid('json'))

    if (error) {
      throw Match.matchBrand(error)({
        '@/users/errors/UserNotFound': () => new NotFoundException('Usuario no encontrado'),
        '@/users/errors/RoleNotFound': () => new NotFoundException('Rol no encontrado'),
        '@/users/errors/RoleAlreadyAssigned': () =>
          new ValidationException({ roleId: ['El usuario ya tiene este rol asignado'] }),
      })
    }

    return c.body(null, StatusCodes.NO_CONTENT)
  },
)

// --- Remove role from user (admin only) ---
userRoutes.delete('/:id/roles/:roleId', requireRole('admin'), async (c) => {
  await removeRole(Number(c.req.param('id')), Number(c.req.param('roleId')))
  return c.body(null, StatusCodes.NO_CONTENT)
})

// --- Get effective permissions (self only) ---
userRoutes.get('/:id/permissions', async (c) => {
  const id = Number(c.req.param('id'))
  const { user: loggedIn } = c.get('jwtPayload')

  if (loggedIn.id !== id) return c.json({ message: 'Forbidden' }, StatusCodes.FORBIDDEN)

  return c.json(await getUserPermissions(id))
})

// --- Get user profile ---
userRoutes.get('/:id/profile', async (c) => {
  const id = Number(c.req.param('id'))
  const user = await getUserById(id)
  if (!user) throw new NotFoundException('Usuario no encontrado')
  return c.json(user.profile)
})

// --- Upsert user profile (self only) ---
userRoutes.put('/:id/profile', zodValidator('json', upsertProfileDto), async (c) => {
  const id = Number(c.req.param('id'))
  const { user: loggedIn } = c.get('jwtPayload')

  if (loggedIn.id !== id) return c.json({ message: 'Forbidden' }, StatusCodes.FORBIDDEN)

  await upsertProfile(id, c.req.valid('json'))
  return c.body(null, StatusCodes.NO_CONTENT)
})
