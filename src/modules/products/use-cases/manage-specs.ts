import { db } from '#database/connection.js'
import { mpQualitySpecsTable, mpProductCertificationsTable } from '#database/schemas/products.js'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const createQualitySpecDto = z.object({
  batchId: z.number().int().positive().optional(),
  parameter: z.string().min(1).max(100),
  value: z.string().min(1).max(100),
  unit: z.string().max(30).optional(),
})

export type CreateQualitySpecDto = z.infer<typeof createQualitySpecDto>

export const createCertificationDto = z.object({
  certificationName: z.string().min(1).max(100),
  certificationCode: z.string().max(100).optional(),
  issuedBy: z.string().max(100).optional(),
  issuedAt: z.string().date().optional(),
  expiresAt: z.string().date().optional(),
  documentUrl: z.string().url().max(500).optional(),
})

export type CreateCertificationDto = z.infer<typeof createCertificationDto>

export async function addQualitySpec(productId: number, dto: CreateQualitySpecDto) {
  const [inserted] = await db
    .insert(mpQualitySpecsTable)
    .values({ ...dto, productId })
    .$returningId()
  return inserted.id
}

export async function deleteQualitySpec(specId: number) {
  await db.delete(mpQualitySpecsTable).where(eq(mpQualitySpecsTable.id, specId))
}

export async function addCertification(productId: number, dto: CreateCertificationDto) {
  const [inserted] = await db
    .insert(mpProductCertificationsTable)
    .values({ ...dto, productId })
    .$returningId()
  return inserted.id
}

export async function deleteCertification(certId: number) {
  await db.delete(mpProductCertificationsTable).where(eq(mpProductCertificationsTable.id, certId))
}
