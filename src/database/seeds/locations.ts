import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { mpLocationsTable } from '#database/schemas/search.js'

// Estados de Venezuela + Distrito Capital, códigos ISO 3166-2:VE (sin el prefijo "VE-")
const DEPARTMENTS = [
  { name: 'Amazonas', code: 'Z' },
  { name: 'Anzoátegui', code: 'B' },
  { name: 'Apure', code: 'C' },
  { name: 'Aragua', code: 'D' },
  { name: 'Barinas', code: 'E' },
  { name: 'Bolívar', code: 'F' },
  { name: 'Carabobo', code: 'G' },
  { name: 'Cojedes', code: 'H' },
  { name: 'Delta Amacuro', code: 'Y' },
  { name: 'Falcón', code: 'I' },
  { name: 'Guárico', code: 'J' },
  { name: 'La Guaira', code: 'X' },
  { name: 'Lara', code: 'K' },
  { name: 'Mérida', code: 'L' },
  { name: 'Miranda', code: 'M' },
  { name: 'Monagas', code: 'N' },
  { name: 'Nueva Esparta', code: 'O' },
  { name: 'Portuguesa', code: 'P' },
  { name: 'Sucre', code: 'R' },
  { name: 'Táchira', code: 'S' },
  { name: 'Trujillo', code: 'T' },
  { name: 'Yaracuy', code: 'U' },
  { name: 'Zulia', code: 'V' },
  { name: 'Distrito Capital', code: 'A' },
] as const

async function seed() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'agro_db',
  })

  const db = drizzle(pool, { mode: 'default' })

  console.log('Seeding Venezuelan states...')

  await db.delete(mpLocationsTable)

  for (const dept of DEPARTMENTS) {
    await db.insert(mpLocationsTable).values({
      name: dept.name,
      type: 'department',
      code: dept.code,
      isActive: true,
    })
  }

  console.log(`✓ ${DEPARTMENTS.length} states seeded`)

  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
