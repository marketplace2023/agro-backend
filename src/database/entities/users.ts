import { z } from 'zod'

export const agroRoleName = z.enum([
  'buyer',
  'producer',
  'seller',
  'farm_owner',
  'input_supplier',
  'machinery_supplier',
  'agronomist',
  'transporter',
  'admin',
  'cooperative',
  'laboratory',
  'certifier',
  'quality_inspector',
])

export type AgroRoleName = z.infer<typeof agroRoleName>

export const userId = z.number().int().positive().brand('UserId')
export type UserId = z.infer<typeof userId>

export const user = z.object({
  id: userId,
  email: z.string().email(),
  password: z.string().min(1),
  name: z.string().min(1).max(100),
  status: z.enum(['active', 'banned']),
  emailVerifiedAt: z.date().nullable(),
  createdAt: z.date(),
})

export type User = z.infer<typeof user>

export const isUserId = (value: unknown): value is UserId => {
  return userId.safeParse(value).success
}
