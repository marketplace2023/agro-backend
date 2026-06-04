import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { mpUnitsTable } from '#database/schemas/products.js'

const UNITS = [
  { name: 'Kilogramo', symbol: 'kg', description: 'Unidad de masa', sortOrder: 1 },
  { name: 'Tonelada', symbol: 'ton', description: '1000 kilogramos', sortOrder: 2 },
  { name: 'Libra', symbol: 'lb', description: '453.59 gramos', sortOrder: 3 },
  { name: 'Quintal', symbol: 'qq', description: '46 kilogramos', sortOrder: 4 },
  { name: 'Bulto', symbol: 'blt', description: 'Empaque variable por producto', sortOrder: 5 },
  { name: 'Caja', symbol: 'cja', description: 'Caja estándar por producto', sortOrder: 6 },
  { name: 'Litro', symbol: 'L', description: 'Unidad de volumen', sortOrder: 7 },
  { name: 'Galón', symbol: 'gal', description: '3.785 litros', sortOrder: 8 },
  { name: 'Unidad', symbol: 'und', description: 'Pieza individual', sortOrder: 9 },
  { name: 'Docena', symbol: 'doc', description: '12 unidades', sortOrder: 10 },
  { name: 'Hectárea', symbol: 'ha', description: '10.000 m²', sortOrder: 11 },
  { name: 'Metro cuadrado', symbol: 'm²', description: 'Unidad de área', sortOrder: 12 },
  { name: 'Gramo', symbol: 'g', description: 'Unidad de masa pequeña', sortOrder: 13 },
  { name: 'Mililitro', symbol: 'mL', description: 'Unidad de volumen pequeña', sortOrder: 14 },
  { name: 'Atado', symbol: 'atd', description: 'Manojo o atado', sortOrder: 15 },
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

  console.log('Seeding units of measure...')

  for (const unit of UNITS) {
    await db
      .insert(mpUnitsTable)
      .values({ ...unit, isActive: true })
      .onDuplicateKeyUpdate({ set: { name: unit.name, description: unit.description } })
  }

  console.log(`✓ ${UNITS.length} units seeded`)

  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
