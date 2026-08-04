import { db } from '#database/connection.js'
import { authUser } from '#database/entities/auth.js'
import type { AgroRoleName } from '#database/entities/users.js'
import { mpRolesTable, mpUsersTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { mpProfilesTable } from '#database/schemas/profiles.js'
import { DocumentAlreadyExists, UserAlreadyExists } from '#modules/auth/errors.js'
import { hash } from '#modules/shared/lib/hashing.js'
import { count, eq } from 'drizzle-orm'
import { z } from 'zod'

const CEDULA_REGEX = /^[VE]-?\d{6,9}$/i
const RIF_REGEX = /^[VJGPE]-?\d{8}-?\d$/i

export const signupDto = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).max(255),
    name: z.string().min(1).max(100),
    phone: z.string().min(7).max(20).optional(),
    documentType: z.enum(['cedula', 'rif']),
    documentNumber: z.string().min(6).max(20),
  })
  .refine(
    (data) =>
      data.documentType === 'cedula'
        ? CEDULA_REGEX.test(data.documentNumber)
        : RIF_REGEX.test(data.documentNumber),
    {
      message: 'Número de documento inválido',
      path: ['documentNumber'],
    },
  )

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

  const [documentCount] = await db
    .select({ count: count() })
    .from(mpProfilesTable)
    .where(eq(mpProfilesTable.documentNumber, dto.documentNumber))
    .limit(1)

  if (documentCount.count > 0) {
    return new DocumentAlreadyExists()
  }

  const [newUser] = await db
    .insert(mpUsersTable)
    .values({
      email: dto.email,
      name: dto.name,
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

  await db.insert(mpProfilesTable).values({
    userId: newUser.id,
    phone: dto.phone,
    documentType: dto.documentType,
    documentNumber: dto.documentNumber,
  })

  return authUser.parse({ ...dto, id: newUser.id })
}
