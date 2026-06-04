import { db } from '#database/connection.js'
import { mpProfilesTable } from '#database/schemas/profiles.js'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const upsertProfileDto = z.object({
  phone: z.string().max(50).optional(),
  bio: z.string().max(1000).optional(),
  avatarUrl: z.string().url().max(500).optional(),
  department: z.string().max(100).optional(),
  municipality: z.string().max(100).optional(),
  address: z.string().max(255).optional(),
  website: z.string().url().max(500).optional(),
})

export type UpsertProfileDto = z.infer<typeof upsertProfileDto>

export async function upsertProfile(userId: number, dto: UpsertProfileDto) {
  const [existing] = await db
    .select({ id: mpProfilesTable.id })
    .from(mpProfilesTable)
    .where(eq(mpProfilesTable.userId, userId))
    .limit(1)

  if (existing) {
    await db.update(mpProfilesTable).set(dto).where(eq(mpProfilesTable.userId, userId))
  } else {
    await db.insert(mpProfilesTable).values({ userId, ...dto })
  }
}
