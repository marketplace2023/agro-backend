import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { mpBlogPostsTable } from '#database/schemas/blog.js'
import { mpUsersTable } from '#database/schemas/users.js'
import { eq } from 'drizzle-orm'

const ARTICLES = [
  {
    title: 'El impacto de la IA en la optimización del riego por goteo',
    slug: 'ia-optimizacion-riego-goteo',
    excerpt: 'Descubre cómo los nuevos algoritmos están ayudando a reducir el consumo de agua en un 35% sin afectar la calidad del cultivo.',
    content: `<h2>La revolución del riego inteligente</h2>
<p>La adopción de tecnologías de vanguardia en el campo no es solo una tendencia, es una necesidad imperativa para la sostenibilidad de la producción en el siglo XXI. El uso de drones equipados con cámaras multiespectrales, combinado con algoritmos de Inteligencia Artificial, está permitiendo a los productores reducir el desperdicio de agua en hasta un 30% en regiones críticas de Latinoamérica.</p>

<h2>El impacto de la visión computacional en el campo</h2>
<p>A diferencia de los métodos de riego tradicionales, que a menudo se basan en calendarios fijos o mediciones de suelo dispersas, la IA analiza imágenes aéreas en tiempo real para identificar niveles de estrés hídrico planta por planta.</p>
<ul>
  <li>Mapeo térmico de alta resolución para detectar fugas.</li>
  <li>Integración con estaciones meteorológicas locales.</li>
  <li>Automatización de válvulas de riego mediante IoT.</li>
</ul>

<blockquote>"La tecnología no reemplaza la sabiduría del productor, la potencia. Un algoritmo puede detectar la falta de agua, pero el agrónomo decide la estrategia de largo plazo."</blockquote>

<h2>¿Cómo empezar la transición?</h2>
<p>Muchos productores temen que la inversión inicial sea prohibitiva. Sin embargo, en el mercado actual existen opciones de financiamiento y servicios compartidos que hacen que esta tecnología sea accesible incluso para medianos productores.</p>`,
    imageUrl: '/farm-bg.png',
    category: 'Tecnología',
    tags: '#IA,#Riego,#IoT,#AgroTech',
    readTimeMinutes: 8,
    isPublished: true,
  },
  {
    title: 'Proyecciones del precio del maíz para el Q4 2026',
    slug: 'precio-maiz-q4-2026',
    excerpt: 'Análisis detallado de los factores que impulsarán los precios del maíz durante el último trimestre del año, con perspectivas para exportadores.',
    content: `<h2>Contexto del mercado</h2>
<p>El mercado global de maíz enfrenta un escenario complejo en el segundo semestre de 2026. Las tensiones climáticas en los principales países productores, combinadas con la creciente demanda de biocombustibles, están generando presión alcista sobre los precios.</p>

<h2>Factores clave a monitorear</h2>
<p>Según los datos del último informe USDA, la producción global se contrajo un 4% respecto al ciclo anterior. Esto, sumado a inventarios ajustados, sugiere un piso de precios más alto para el Q4.</p>
<ul>
  <li>Reducción de stocks en EEUU y Brasil.</li>
  <li>Demanda sostenida desde China y el sudeste asiático.</li>
  <li>Efecto La Niña sobre las cosechas sudamericanas.</li>
</ul>

<h2>Oportunidades para productores venezolanos</h2>
<p>Para los productores nacionales, este panorama representa una ventana de oportunidad. La apertura de nuevos canales de exportación regional puede compensar la volatilidad interna.</p>`,
    imageUrl: '/bg-cafe.png',
    category: 'Mercado',
    tags: '#Maíz,#PrecioMaíz,#Exportación,#AgroFinanzas',
    readTimeMinutes: 6,
    isPublished: true,
  },
  {
    title: 'Fertilizantes orgánicos: Guía para la transición exitosa',
    slug: 'fertilizantes-organicos-guia-transicion',
    excerpt: 'Todo lo que necesitas saber para migrar de fertilizantes sintéticos a orgánicos sin perder rendimiento en la primera temporada.',
    content: `<h2>¿Por qué hacer el cambio?</h2>
<p>La demanda de productos orgánicos certificados creció un 22% en los mercados latinoamericanos durante 2025. Más allá de la tendencia de mercado, la transición a fertilizantes orgánicos mejora la salud del suelo a largo plazo y reduce la dependencia de insumos importados.</p>

<h2>Los 5 pasos de la transición</h2>
<ol>
  <li><strong>Análisis de suelo completo</strong>: Antes de cambiar, conoce tu punto de partida.</li>
  <li><strong>Plan de nutrición progresivo</strong>: No elimines los sintéticos de golpe.</li>
  <li><strong>Selección de biofertilizantes</strong>: Rhizobium para leguminosas, Azospirillum para gramíneas.</li>
  <li><strong>Compostaje in situ</strong>: Aprovecha los residuos de cosecha.</li>
  <li><strong>Monitoreo bimensual</strong>: Ajusta según evolución del suelo.</li>
</ol>

<blockquote>"La transición orgánica no es un sprint, es un maratón. Los mejores resultados se ven a partir del tercer año." — Ing. Carmen Vidal, especialista en suelos.</blockquote>

<h2>Resultados esperados</h2>
<p>Con una gestión adecuada, es posible mantener entre el 85% y 95% del rendimiento en el primer año de transición, con mejoras sostenidas en los ciclos siguientes.</p>`,
    imageUrl: '/farm-bg.png',
    category: 'Sostenibilidad',
    tags: '#Fertilizantes,#BioTecnología,#Orgánico,#Suelos',
    readTimeMinutes: 10,
    isPublished: true,
  },
  {
    title: 'Rastreo Satelital: Cómo anticiparse a los cambios climáticos extremos',
    slug: 'rastreo-satelital-cambios-climaticos',
    excerpt: 'Análisis de las mejores herramientas digitales para el monitoreo en tiempo real de parcelas y predicción de granizadas o sequías.',
    content: `<h2>El satélite como aliado del productor</h2>
<p>Las plataformas de monitoreo satelital accesibles para pequeños y medianos productores han cambiado radicalmente la gestión del riesgo climático. Con resoluciones de hasta 3 metros, hoy es posible detectar zonas de estrés en el cultivo antes de que sean visibles a simple vista.</p>

<h2>Herramientas disponibles en el mercado</h2>
<p>Plataformas como Sentinel Hub, Planet Labs y las soluciones regionales ofrecen índices de vegetación (NDVI), humedad del suelo y alertas tempranas de heladas a precios accesibles para cualquier productor.</p>

<h2>Caso de estudio: Protección frente a heladas tardías</h2>
<p>Un grupo de productores de papa en la región andina redujo sus pérdidas por heladas en un 60% al implementar alertas satelitales integradas con sistemas de riego antiheladas automatizados.</p>`,
    imageUrl: '/bg-cafe.png',
    category: 'Tecnología',
    tags: '#IoT,#Satélite,#ClimaAgro,#Monitoreo',
    readTimeMinutes: 5,
    isPublished: true,
  },
  {
    title: 'Selección de Semillas: Calidad sobre precio en la nueva zafra',
    slug: 'seleccion-semillas-calidad-zafra',
    excerpt: 'Por qué invertir un 15% más en semillas certificadas puede resultar en un aumento del 40% en la rentabilidad final del lote.',
    content: `<h2>El costo real de la semilla barata</h2>
<p>En épocas de ajuste, muchos productores buscan reducir costos en la semilla. Sin embargo, los datos de los últimos tres ciclos muestran que la inversión en semillas certificadas de alta pureza genética genera retornos superiores al 35% frente a materiales no certificados.</p>

<h2>Variables a considerar en la selección</h2>
<ul>
  <li><strong>Pureza genética</strong>: Garantiza uniformidad de planta y cosecha.</li>
  <li><strong>Poder germinativo</strong>: Mínimo 90% para cultivos comerciales.</li>
  <li><strong>Resistencia a enfermedades</strong>: Clave en años con alta presión de patógenos.</li>
  <li><strong>Adaptación local</strong>: Prefiere materiales con trayectoria en tu zona.</li>
</ul>

<h2>El papel de los certificadores</h2>
<p>En Venezuela y la región, el INIA y certificadoras privadas ofrecen programas de semillas mejoradas con excelente relación costo-beneficio. Consulta el catálogo de variedades disponibles para la próxima zafra.</p>`,
    imageUrl: '/farm-bg.png',
    category: 'Cultivos',
    tags: '#Semillas,#Cosecha2026,#Genética,#Zafra',
    readTimeMinutes: 7,
    isPublished: true,
  },
  {
    title: 'Exportaciones venezolanas: oportunidades en mercados regionales',
    slug: 'exportaciones-venezolanas-mercados-regionales',
    excerpt: 'Un repaso por los principales destinos de exportación y cómo aprovechar los acuerdos comerciales vigentes para productores nacionales.',
    content: `<h2>El contexto exportador</h2>
<p>A pesar de los desafíos logísticos, Venezuela cuenta con ventajas comparativas significativas en rubros como cacao, café, plátano y productos de la pesca. Los acuerdos de complementación económica con países del Caribe y Centro América abren canales formales para pequeños y medianos exportadores.</p>

<h2>Principales mercados de destino</h2>
<p>Los destinos más activos para productos agrícolas venezolanos en 2025-2026 incluyen Trinidad y Tobago, Curazao, Colombia y algunos nichos en el mercado europeo de cacao fino de aroma.</p>

<h2>Pasos para iniciar la exportación</h2>
<ol>
  <li>Registro ante el SENIAT y SENCAMER para certificación fitosanitaria.</li>
  <li>Identificación del buyer mediante plataformas B2B como TierraMarket.</li>
  <li>Negociación de términos FOB o CIF según capacidad logística.</li>
  <li>Gestión de financiamiento exportador con la banca pública.</li>
</ol>`,
    imageUrl: '/bg-cafe.png',
    category: 'Mercado',
    tags: '#Exportación,#Cacao,#AgroFinanzas,#Venezuela',
    readTimeMinutes: 9,
    isPublished: true,
  },
]

async function seed() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'agro_db',
  })

  const db = drizzle(pool, { mode: 'default' })

  console.log('Seeding blog posts...')

  // Use first admin user as author; fallback to first user in the system
  const [adminUser] = await db
    .select({ id: mpUsersTable.id })
    .from(mpUsersTable)
    .limit(1)

  if (!adminUser) {
    console.error('No users found. Create at least one user before seeding blog posts.')
    await pool.end()
    process.exit(1)
  }

  const authorId = adminUser.id

  for (const article of ARTICLES) {
    await db
      .insert(mpBlogPostsTable)
      .values({
        ...article,
        authorId,
        publishedAt: new Date(),
      })
      .onDuplicateKeyUpdate({
        set: {
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          category: article.category,
          tags: article.tags,
          readTimeMinutes: article.readTimeMinutes,
          isPublished: true,
          publishedAt: new Date(),
        },
      })
  }

  console.log(`✓ ${ARTICLES.length} blog posts seeded`)

  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
