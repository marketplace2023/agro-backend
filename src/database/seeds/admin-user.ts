import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import bcrypt from 'bcrypt'
import { mpUsersTable, mpRolesTable, mpUsersToRolesTable } from '#database/schemas/users.js'
import { eq } from 'drizzle-orm'

const ADMIN = {
  name:     'Administrador',
  email:    'admin@tierramarket.com',
  password: 'Admin1234!',
}

async function seed() {
  const pool = mysql.createPool({
    host:     process.env.DB_HOST     ?? 'localhost',
    port:     Number(process.env.DB_PORT ?? 3306),
    user:     process.env.DB_USER     ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME     ?? 'agro_db',
  })

  const db = drizzle(pool, { mode: 'default' })

  console.log('Seeding admin user…')

  // 1. Hash password
  const hashed = await bcrypt.hash(ADMIN.password, 10)

  // 2. Upsert user
  const existing = await db
    .select({ id: mpUsersTable.id })
    .from(mpUsersTable)
    .where(eq(mpUsersTable.email, ADMIN.email))
    .limit(1)

  let userId: number

  if (existing.length > 0) {
    userId = existing[0].id
    await db
      .update(mpUsersTable)
      .set({ password: hashed, name: ADMIN.name, status: 'active', emailVerifiedAt: new Date() })
      .where(eq(mpUsersTable.id, userId))
    console.log(`✓ Usuario existente actualizado (id=${userId})`)
  } else {
    const [inserted] = await db
      .insert(mpUsersTable)
      .values({
        name:            ADMIN.name,
        email:           ADMIN.email,
        password:        hashed,
        status:          'active',
        emailVerifiedAt: new Date(),
      })
      .$returningId()
    userId = inserted.id
    console.log(`✓ Usuario creado (id=${userId})`)
  }

  // 3. Get admin role id
  const [adminRole] = await db
    .select({ id: mpRolesTable.id })
    .from(mpRolesTable)
    .where(eq(mpRolesTable.name, 'admin'))
    .limit(1)

  if (!adminRole) {
    console.error('✗ Rol "admin" no encontrado. Ejecuta primero: npm run seed:roles')
    await pool.end()
    process.exit(1)
  }

  // 4. Assign role (ignore duplicate)
  await db
    .insert(mpUsersToRolesTable)
    .values({ userId, roleId: adminRole.id })
    .onDuplicateKeyUpdate({ set: { userId } })

  console.log(`✓ Rol "admin" asignado`)
  console.log('')
  console.log('─────────────────────────────────────')
  console.log('  Credenciales del administrador:')
  console.log(`  Email:    ${ADMIN.email}`)
  console.log(`  Password: ${ADMIN.password}`)
  console.log('─────────────────────────────────────')

  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
