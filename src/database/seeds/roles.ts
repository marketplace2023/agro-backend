import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { mpRolesTable } from '#database/schemas/users.js'

const AGRO_ROLES = [
  { name: 'buyer', description: 'Comprador agrícola' },
  { name: 'producer', description: 'Productor agrícola' },
  { name: 'seller', description: 'Vendedor agrícola' },
  { name: 'farm_owner', description: 'Dueño de finca agrícola' },
  { name: 'input_supplier', description: 'Proveedor de insumos agrícolas' },
  { name: 'machinery_supplier', description: 'Proveedor de maquinaria agrícola' },
  { name: 'agronomist', description: 'Agrónomo o asesor técnico' },
  { name: 'transporter', description: 'Transportista agrícola' },
  { name: 'admin', description: 'Administrador general' },
  { name: 'cooperative', description: 'Cooperativa agrícola' },
  { name: 'laboratory', description: 'Laboratorio agrícola' },
  { name: 'certifier', description: 'Certificador agrícola' },
  { name: 'quality_inspector', description: 'Inspector de calidad' },
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

  console.log('Seeding agro roles...')

  for (const role of AGRO_ROLES) {
    await db
      .insert(mpRolesTable)
      .values(role)
      .onDuplicateKeyUpdate({ set: { description: role.description } })
  }

  console.log(`✓ ${AGRO_ROLES.length} roles seeded`)

  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
