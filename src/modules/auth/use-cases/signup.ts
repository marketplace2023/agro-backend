import { db } from '#database/connection.js'
import { authUser } from '#database/entities/auth.js'
import type { AgroRoleName } from '#database/entities/users.js'
import { mpRolesTable, mpUsersTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { UserAlreadyExists } from '#modules/auth/errors.js'
import { hash } from '#modules/shared/lib/hashing.js'
import { count, eq } from 'drizzle-orm'
import { z } from 'zod'

export const signupDto = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
  name: z.string().min(1).max(100),
})

export type SignupDto = z.infer<typeof signupDto>

export async function signup(dto: SignupDto) {
  const [usersCount] = await db
    .select({ count: count() })
    .from(mpUsersTable)
    .where(eq(mpUsersTable.email, dto.email))
    .limit(1)

  if (usersCount.count > 0) {
    return new UserAlreadyExists()
  }

  const [newUser] = await db
    .insert(mpUsersTable)
    .values({
      ...dto,
      password: await hash(dto.password),
      status: 'active',
    })
    .$returningId()

  const [buyerRole] = await db
    .select()
    .from(mpRolesTable)
    .where(eq(mpRolesTable.name, 'buyer' satisfies AgroRoleName))
    .limit(1)

  if (!buyerRole) {
    throw new Error('Role "buyer" not found — run seeds first')
  }

  await db.insert(mpUsersToRolesTable).values({ userId: newUser.id, roleId: buyerRole.id })

  return authUser.parse({ ...dto, id: newUser.id })
}
