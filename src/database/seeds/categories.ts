import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import {
  mpCategoriesTable,
  mpSubcategoriesTable,
  mpCategoryAttributesTable,
  mpAttributeOptionsTable,
  mpDynamicFiltersTable,
} from '#database/schemas/categories.js'

type AttrType = 'text' | 'number' | 'select' | 'multiselect' | 'boolean' | 'date' | 'range'
type FilterType = 'range' | 'select' | 'multiselect' | 'boolean' | 'text'

const CATEGORIES = [
  { name: 'Productos Agrícolas y Cosechas', slug: 'productos-agricolas', icon: 'leaf', sortOrder: 1 },
  { name: 'Insumos Agrícolas', slug: 'insumos-agricolas', icon: 'flask-conical', sortOrder: 2 },
  { name: 'Maquinaria Agrícola', slug: 'maquinaria-agricola', icon: 'tractor', sortOrder: 3 },
  { name: 'Fincas y Predios', slug: 'fincas-predios', icon: 'map-pin', sortOrder: 4 },
  { name: 'Servicios Agronómicos', slug: 'servicios-agronomicos', icon: 'clipboard', sortOrder: 5 },
  { name: 'Transporte Agrícola', slug: 'transporte-agricola', icon: 'truck', sortOrder: 6 },
  { name: 'Laboratorio y Análisis', slug: 'laboratorio-analisis', icon: 'flask', sortOrder: 7 },
  { name: 'Certificaciones', slug: 'certificaciones', icon: 'award', sortOrder: 8 },
  { name: 'Inspección de Calidad', slug: 'inspeccion-calidad', icon: 'check-square', sortOrder: 9 },
  { name: 'Cooperativas', slug: 'cooperativas', icon: 'building', sortOrder: 10 },
] as const

const SUBCATEGORIES: Record<string, { name: string; slug: string; sortOrder: number }[]> = {
  'productos-agricolas': [
    { name: 'Frutas y Verduras', slug: 'frutas-verduras', sortOrder: 1 },
    { name: 'Granos y Cereales', slug: 'granos-cereales', sortOrder: 2 },
    { name: 'Tubérculos y Raíces', slug: 'tuberculos-raices', sortOrder: 3 },
    { name: 'Café y Cacao', slug: 'cafe-cacao', sortOrder: 4 },
    { name: 'Flores y Plantas', slug: 'flores-plantas', sortOrder: 5 },
    { name: 'Hierbas y Aromáticas', slug: 'hierbas-aromaticas', sortOrder: 6 },
    { name: 'Lácteos y Derivados', slug: 'lacteos-derivados', sortOrder: 7 },
  ],
  'insumos-agricolas': [
    { name: 'Semillas y Plántulas', slug: 'semillas-plantulas', sortOrder: 1 },
    { name: 'Fertilizantes', slug: 'fertilizantes', sortOrder: 2 },
    { name: 'Agroquímicos', slug: 'agroquimicos', sortOrder: 3 },
    { name: 'Bioinsumos', slug: 'bioinsumos', sortOrder: 4 },
    { name: 'Herramientas de Campo', slug: 'herramientas-campo', sortOrder: 5 },
    { name: 'Equipos de Riego', slug: 'equipos-riego', sortOrder: 6 },
    { name: 'Empaques y Logística', slug: 'empaques-logistica', sortOrder: 7 },
  ],
  'maquinaria-agricola': [
    { name: 'Tractores', slug: 'tractores', sortOrder: 1 },
    { name: 'Cosechadoras', slug: 'cosechadoras', sortOrder: 2 },
    { name: 'Sistemas de Riego', slug: 'sistemas-riego', sortOrder: 3 },
    { name: 'Equipos de Siembra', slug: 'equipos-siembra', sortOrder: 4 },
    { name: 'Herramientas Motorizadas', slug: 'herramientas-motorizadas', sortOrder: 5 },
    { name: 'Repuestos y Accesorios', slug: 'repuestos-accesorios', sortOrder: 6 },
  ],
  'fincas-predios': [
    { name: 'Venta de Finca', slug: 'venta-finca', sortOrder: 1 },
    { name: 'Arriendo de Finca', slug: 'arriendo-finca', sortOrder: 2 },
    { name: 'Alianza Productiva', slug: 'alianza-productiva', sortOrder: 3 },
    { name: 'Lote Agrícola', slug: 'lote-agricola', sortOrder: 4 },
  ],
  'servicios-agronomicos': [
    { name: 'Asesoría Técnica', slug: 'asesoria-tecnica', sortOrder: 1 },
    { name: 'Consultoría Agrícola', slug: 'consultoria-agricola', sortOrder: 2 },
    { name: 'Manejo de Cultivos', slug: 'manejo-cultivos', sortOrder: 3 },
    { name: 'Análisis de Suelos', slug: 'analisis-suelos', sortOrder: 4 },
  ],
  'transporte-agricola': [
    { name: 'Transporte de Cosechas', slug: 'transporte-cosechas', sortOrder: 1 },
    { name: 'Transporte de Insumos', slug: 'transporte-insumos', sortOrder: 2 },
    { name: 'Transporte de Maquinaria', slug: 'transporte-maquinaria', sortOrder: 3 },
    { name: 'Logística Refrigerada', slug: 'logistica-refrigerada', sortOrder: 4 },
  ],
  'laboratorio-analisis': [
    { name: 'Análisis de Suelos', slug: 'lab-analisis-suelos', sortOrder: 1 },
    { name: 'Análisis de Agua', slug: 'lab-analisis-agua', sortOrder: 2 },
    { name: 'Análisis Fitosanitario', slug: 'lab-fitosanitario', sortOrder: 3 },
    { name: 'Análisis de Alimentos', slug: 'lab-alimentos', sortOrder: 4 },
  ],
}

type AttrDef = {
  name: string
  label: string
  attributeType: AttrType
  unit?: string
  isRequired?: boolean
  isFilter?: boolean
  sortOrder: number
  options?: { value: string; label: string; sortOrder: number }[]
}

const CATEGORY_ATTRIBUTES: Record<string, AttrDef[]> = {
  'productos-agricolas': [
    { name: 'cultivo', label: 'Cultivo', attributeType: 'text', isRequired: true, sortOrder: 1 },
    { name: 'variedad', label: 'Variedad', attributeType: 'text', sortOrder: 2 },
    { name: 'volumen', label: 'Volumen disponible', attributeType: 'number', unit: 'kg', isRequired: true, isFilter: true, sortOrder: 3 },
    { name: 'precio_por_kg', label: 'Precio por kg', attributeType: 'number', unit: 'COP', isRequired: true, isFilter: true, sortOrder: 4 },
    {
      name: 'calidad', label: 'Calidad', attributeType: 'select', isRequired: true, isFilter: true, sortOrder: 5,
      options: [
        { value: 'extra', label: 'Extra', sortOrder: 1 },
        { value: 'primera', label: 'Primera', sortOrder: 2 },
        { value: 'segunda', label: 'Segunda', sortOrder: 3 },
        { value: 'tercera', label: 'Tercera', sortOrder: 4 },
      ],
    },
    { name: 'tiene_certificacion', label: '¿Tiene certificación?', attributeType: 'boolean', isFilter: true, sortOrder: 6 },
    { name: 'departamento', label: 'Departamento', attributeType: 'text', isRequired: true, isFilter: true, sortOrder: 7 },
    { name: 'municipio', label: 'Municipio', attributeType: 'text', isRequired: true, sortOrder: 8 },
    { name: 'disponible_desde', label: 'Disponible desde', attributeType: 'date', sortOrder: 9 },
    { name: 'disponible_hasta', label: 'Disponible hasta', attributeType: 'date', sortOrder: 10 },
  ],
  'insumos-agricolas': [
    { name: 'marca', label: 'Marca', attributeType: 'text', isRequired: true, sortOrder: 1 },
    { name: 'presentacion', label: 'Presentación', attributeType: 'text', isRequired: true, sortOrder: 2 },
    { name: 'stock', label: 'Stock disponible', attributeType: 'number', isRequired: true, isFilter: true, sortOrder: 3 },
    { name: 'precio', label: 'Precio', attributeType: 'number', unit: 'COP', isRequired: true, isFilter: true, sortOrder: 4 },
    { name: 'cultivo_aplicable', label: 'Cultivo aplicable', attributeType: 'text', sortOrder: 5 },
    { name: 'registro_ica', label: 'Registro ICA', attributeType: 'text', sortOrder: 6 },
  ],
  'maquinaria-agricola': [
    {
      name: 'condicion', label: 'Condición', attributeType: 'select', isRequired: true, isFilter: true, sortOrder: 1,
      options: [
        { value: 'nueva', label: 'Nueva', sortOrder: 1 },
        { value: 'usada', label: 'Usada', sortOrder: 2 },
        { value: 'alquiler', label: 'Alquiler', sortOrder: 3 },
      ],
    },
    { name: 'marca', label: 'Marca', attributeType: 'text', isRequired: true, sortOrder: 2 },
    { name: 'modelo', label: 'Modelo', attributeType: 'text', sortOrder: 3 },
    { name: 'ano_fabricacion', label: 'Año de fabricación', attributeType: 'number', isFilter: true, sortOrder: 4 },
    { name: 'horas_uso', label: 'Horas de uso', attributeType: 'number', unit: 'h', sortOrder: 5 },
    { name: 'precio', label: 'Precio', attributeType: 'number', unit: 'COP', isRequired: true, isFilter: true, sortOrder: 6 },
    { name: 'departamento', label: 'Departamento', attributeType: 'text', isFilter: true, sortOrder: 7 },
  ],
  'fincas-predios': [
    {
      name: 'tipo_transaccion', label: 'Tipo de transacción', attributeType: 'select', isRequired: true, isFilter: true, sortOrder: 1,
      options: [
        { value: 'venta', label: 'Venta', sortOrder: 1 },
        { value: 'arriendo', label: 'Arriendo', sortOrder: 2 },
        { value: 'alianza', label: 'Alianza productiva', sortOrder: 3 },
      ],
    },
    { name: 'extension', label: 'Extensión (ha)', attributeType: 'number', unit: 'ha', isRequired: true, isFilter: true, sortOrder: 2 },
    { name: 'precio', label: 'Precio', attributeType: 'number', unit: 'COP', isFilter: true, sortOrder: 3 },
    { name: 'tiene_riego', label: '¿Tiene riego?', attributeType: 'boolean', isFilter: true, sortOrder: 4 },
    { name: 'fuente_agua', label: 'Fuente de agua', attributeType: 'text', sortOrder: 5 },
    { name: 'departamento', label: 'Departamento', attributeType: 'text', isRequired: true, isFilter: true, sortOrder: 6 },
    { name: 'municipio', label: 'Municipio', attributeType: 'text', isRequired: true, sortOrder: 7 },
    { name: 'cultivos_actuales', label: 'Cultivos actuales', attributeType: 'text', sortOrder: 8 },
  ],
  'servicios-agronomicos': [
    { name: 'especialidad', label: 'Especialidad', attributeType: 'text', isRequired: true, sortOrder: 1 },
    { name: 'cultivos_atendidos', label: 'Cultivos que atiende', attributeType: 'text', sortOrder: 2 },
    { name: 'modalidad', label: 'Modalidad', attributeType: 'select', isFilter: true, sortOrder: 3,
      options: [
        { value: 'presencial', label: 'Presencial', sortOrder: 1 },
        { value: 'virtual', label: 'Virtual', sortOrder: 2 },
        { value: 'mixta', label: 'Mixta', sortOrder: 3 },
      ],
    },
    { name: 'precio_hora', label: 'Precio por hora', attributeType: 'number', unit: 'COP', isFilter: true, sortOrder: 4 },
    { name: 'departamento', label: 'Departamento', attributeType: 'text', isFilter: true, sortOrder: 5 },
  ],
  'transporte-agricola': [
    { name: 'tipo_carga', label: 'Tipo de carga', attributeType: 'text', isRequired: true, sortOrder: 1 },
    { name: 'capacidad_ton', label: 'Capacidad (ton)', attributeType: 'number', unit: 'ton', isFilter: true, sortOrder: 2 },
    { name: 'tiene_refrigeracion', label: '¿Refrigeración?', attributeType: 'boolean', isFilter: true, sortOrder: 3 },
    { name: 'rutas', label: 'Rutas disponibles', attributeType: 'text', sortOrder: 4 },
    { name: 'precio_km', label: 'Precio por km', attributeType: 'number', unit: 'COP', sortOrder: 5 },
  ],
}

async function seed() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'agro_db',
  })

  const db = drizzle(pool, { mode: 'default' })

  console.log('Seeding categories...')

  // Insert categories
  await db.delete(mpCategoryAttributesTable)
  await db.delete(mpSubcategoriesTable)
  await db.delete(mpCategoriesTable)

  for (const cat of CATEGORIES) {
    const [inserted] = await db
      .insert(mpCategoriesTable)
      .values({ ...cat, isActive: true })
      .$returningId()

    console.log(`  ✓ Category: ${cat.name}`)

    // Insert subcategories
    const subs = SUBCATEGORIES[cat.slug] ?? []
    for (const sub of subs) {
      await db
        .insert(mpSubcategoriesTable)
        .values({ ...sub, categoryId: inserted.id, isActive: true })
    }

    // Insert category-level attributes
    const attrs = CATEGORY_ATTRIBUTES[cat.slug] ?? []
    for (const attr of attrs) {
      const { options, ...attrData } = attr
      const [insertedAttr] = await db
        .insert(mpCategoryAttributesTable)
        .values({ ...attrData, categoryId: inserted.id })
        .$returningId()

      if (options?.length) {
        await db.insert(mpAttributeOptionsTable).values(
          options.map((o) => ({ ...o, attributeId: insertedAttr.id })),
        )
      }

      if (attr.isFilter) {
        const filterType: FilterType =
          attr.attributeType === 'number' || attr.attributeType === 'range'
            ? 'range'
            : attr.attributeType === 'select'
              ? 'select'
              : attr.attributeType === 'multiselect'
                ? 'multiselect'
                : attr.attributeType === 'boolean'
                  ? 'boolean'
                  : 'text'

        await db.insert(mpDynamicFiltersTable).values({
          categoryId: inserted.id,
          attributeId: insertedAttr.id,
          filterType,
          label: attr.label,
          sortOrder: attr.sortOrder,
          isActive: true,
        })
      }
    }
  }

  const catCount = CATEGORIES.length
  const subCount = Object.values(SUBCATEGORIES).flat().length
  const attrCount = Object.values(CATEGORY_ATTRIBUTES).flat().length
  console.log(`\n✓ ${catCount} categories, ${subCount} subcategories, ${attrCount} attributes seeded`)

  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
