# DOCUMENTO TÉCNICO OPERATIVO POR ETAPA Y POR SPRINT
# PROYECTO MARKETPLACE AGRÍCOLA AGROBOT LATAM

## Versión

- **Versión:** 1.0
- **Documento base:** Documento Maestro V3.1 corregido sin resumir
- **Tecnologías rectoras:** ReactJS, NestJS, MySQL, FUR, tablas espejo Odoo, tablas propias Marketplace Agro
- **Criterio funcional:** diseño gráfico tipo Yelp + funcionalidad tipo MercadoLibre + operación agrícola especializada
- **Propósito:** convertir el documento maestro en una guía técnica-operativa ejecutable por etapas y sprints.

---

# 1. Alcance operativo del documento

Este documento organiza la construcción del Marketplace Agrícola por etapas y sprints. Cada sprint contiene objetivo, roles impactados, módulos, FUR, tablas, tareas de frontend, backend, base de datos, entregables y criterios de aceptación.

El alcance mantiene completas las secciones técnicas, visuales y funcionales del documento maestro V3.1. La única depuración aplicada es la de usuarios y backoffice por roles vigentes.

---

# 2. Roles vigentes del proyecto

1. Usuario visitante.
2. Comprador agrícola.
3. Productor agrícola.
4. Vendedor agrícola.
5. Dueño de finca agrícola.
6. Proveedor de insumos agrícolas.
7. Proveedor de maquinaria agrícola.
8. Agrónomo o asesor técnico.
9. Transportista agrícola.
10. Administrador general.
11. Cooperativa agrícola.
12. Laboratorio agrícola.
13. Certificador agrícola.
14. Inspector de calidad.

---

# 3. Principios técnicos operativos

- No hardcodear roles, categorías, estados, permisos, filtros, rutas privadas ni módulos comerciales.
- Todas las configuraciones funcionales deben quedar parametrizadas por FUR o tablas propias.
- Las tablas Odoo son espejos de referencia, sin integración electrónica directa con el ERP Odoo.
- La lógica de negocio del marketplace se ejecuta sobre tablas propias mp_ y FUR fur_.
- El frontend debe organizarse por dominios funcionales y roles vigentes.
- El backend debe organizarse en módulos NestJS desacoplados por dominio.
- MySQL debe usar migraciones, seeds, llaves foráneas, índices y auditoría.
- Cada sprint debe producir entregables verificables y criterios de aceptación medibles.
- El diseño visual debe conservar la lógica de directorio tipo Yelp.
- La operación comercial debe conservar la lógica de marketplace tipo MercadoLibre.

---

# 4. Etapas generales de implementación

| Etapa | Nombre | Sprints | Objetivo operativo |
|---|---|---|---|
| ETAPA 0 | Preparación, gobierno documental y arquitectura base | Sprint 00 | Alinear alcance, stack, usuarios vigentes, FUR, convenciones, repositorios y estrategia de base de datos. |
| ETAPA 1 | Identidad, seguridad y backoffice por roles | Sprints 01-02 | Construir autenticación, RBAC, perfiles, backoffices y navegación privada por rol vigente. |
| ETAPA 2 | Experiencia pública tipo Yelp y marketplace tipo MercadoLibre | Sprints 03-04 | Implementar UX de directorio agrícola y flujo marketplace de publicaciones, tiendas, catálogo, reputación, preguntas y comercialización. |
| ETAPA 3 | FUR rectoras y parametrización funcional | Sprints 05-09 | Crear FUR de categorías, productos, tiendas, GBP, ofertas y promociones como instrumentos parametrizables. |
| ETAPA 4 | Núcleo transaccional del marketplace agrícola | Sprints 10-16 | Construir publicaciones, búsqueda, detalle, WhatsApp, cotizaciones, leads, Radar, favoritos, comparador y recomendaciones. |
| ETAPA 5 | Verticales agrícolas especializadas | Sprints 17-21 | Implementar módulos de fincas, insumos, maquinaria, servicios técnicos/laboratorio/certificación/inspección y logística agrícola. |
| ETAPA 6 | Confianza, monetización y administración | Sprints 22-24 | Implementar reputación, verificación, planes, pagos, promociones, moderación y backoffice administrativo. |
| ETAPA 7 | Base de datos, integraciones, QA y cierre MVP | Sprints 25-28 | Formalizar tablas Odoo espejo, tablas propias, librerías Node.js/NestJS, integraciones, pruebas, auditoría y documentación. |

---

# 5. Mapa de dependencias macro

| Dependencia | Descripción |
|---|---|
| Sprint 00 antes de todos | Define arquitectura, roles vigentes, FUR y convenciones. |
| Sprint 01 antes de backoffice | Los backoffices dependen de autenticación, roles y permisos. |
| Sprint 05 antes de publicaciones | Las publicaciones dependen de categorías, atributos y filtros. |
| Sprint 06 antes de catálogo/cosechas | Los productos y cosechas dependen de FUR_Productos. |
| Sprint 07 antes de perfiles públicos completos | Las tiendas/perfiles públicos dependen de FUR_Tiendas. |
| Sprint 10 antes de búsqueda/detalle/cotización | La búsqueda y detalle dependen de publicaciones. |
| Sprint 13 antes de leads avanzados | Muchos leads se originan desde cotizaciones. |
| Sprint 15 puede iniciar después de publicaciones y búsqueda | El Radar requiere publicaciones y criterios de búsqueda. |
| Sprint 22 después de operaciones básicas | La reputación debe nacer de interacciones reales o verificadas. |
| Sprint 25 y 26 pueden avanzar en paralelo con sprints funcionales | Las tablas espejo y propias deben acompañar la construcción del MVP. |
| Sprint 28 cierra todos los sprints | QA, auditoría y documentación validan el entregable MVP. |

---

# 6. Tabla maestra de sprints

| Sprint | Etapa | Nombre | Resultado esperado |
|---|---|---|---|
| 00 | ETAPA 0 | Preparación, alcance y arquitectura base | Establecer el alcance V3.1, confirmar usuarios vigentes, definir arquitectura ReactJS + NestJS + MySQL y preparar convenciones de FUR. |
| 01 | ETAPA 1 | Autenticación, usuarios, roles y permisos | Implementar registro, login, recuperación, roles, permisos, guards, sesiones y perfiles base. |
| 02 | ETAPA 1 | FUR_Usuarios y backoffice por rol vigente | Construir fichas de usuario y backoffices específicos para cada perfil vigente. |
| 03 | ETAPA 2 | Diseño gráfico tipo Yelp completo | Implementar experiencia visual tipo directorio local agrícola con buscador por necesidad y ubicación, cards, perfiles, reseñas, galería y mapas. |
| 04 | ETAPA 2 | Funcionalidad tipo MercadoLibre completa | Implementar lógica marketplace: publicaciones, catálogo, tiendas, preguntas, carrito, cotizaciones, pagos, logística, reputación y promociones. |
| 05 | ETAPA 3 | FUR_Categorias y taxonomía agrícola | Desarrollar categorías, subcategorías, atributos y filtros dinámicos para todos los verticales agrícolas vigentes. |
| 06 | ETAPA 3 | FUR_Productos: productos agrícolas y cosechas | Implementar registros de productos agrícolas, cosechas, disponibilidad, volumen, calidad, certificación, unidad de medida, precio y ubicación. |
| 07 | ETAPA 3 | FUR_Tiendas y perfiles públicos tipo Yelp | Construir tiendas, perfiles públicos, reputación, ubicación, fotos, horarios, contacto, GBP y reseñas. |
| 08 | ETAPA 3 | FUR_GBP de tiendas y presencia local | Parametrizar datos tipo Google Business Profile para tiendas, productores, proveedores, laboratorios, certificadores e inspectores. |
| 09 | ETAPA 3 | FUR_Ofertas y Promociones | Crear promociones, destacados, cupones, publicaciones impulsadas, campañas internas y reglas de vigencia. |
| 10 | ETAPA 4 | Publicaciones agrícolas y fichas técnicas | Implementar creación, edición, borrador, revisión, publicación, destacado, vencimiento, pausa, disponibilidad y eliminación lógica. |
| 11 | ETAPA 4 | Búsqueda, filtros, SEO y mapa del sitio | Implementar buscador agrícola, filtros por categoría, ubicación, precio, disponibilidad, volumen, certificación, reputación y páginas SEO. |
| 12 | ETAPA 4 | Detalle de publicación y contacto WhatsApp | Construir páginas de detalle con ficha técnica, galería, datos del anunciante, WhatsApp, solicitud de cotización, favoritos, compartir, reportar y recomendaciones. |
| 13 | ETAPA 4 | Cotizaciones y negociación | Permitir solicitudes formales de cotización para productos, cosechas, insumos, maquinaria, servicios, transporte, laboratorios, certificaciones e inspecciones. |
| 14 | ETAPA 4 | Leads y oportunidades comerciales | Registrar leads originados por WhatsApp, cotización, favoritos, formularios, Radar y campañas. |
| 15 | ETAPA 4 | Radar Agrícola AgroBot | Implementar alertas inteligentes por categoría, ubicación, precio, volumen, certificación, disponibilidad y coincidencias. |
| 16 | ETAPA 4 | Favoritos, comparador y recomendaciones | Permitir guardar, comparar y recomendar publicaciones relevantes según búsqueda, ubicación, favoritos y comportamiento. |
| 17 | ETAPA 5 | Módulo de fincas, lotes y predios agrícolas | Publicar predios, ventas, arriendos, alianzas productivas, ubicación, agua, riego, infraestructura, documentos, fotos y visitas. |
| 18 | ETAPA 5 | Módulo de insumos agrícolas | Gestionar catálogo de semillas, fertilizantes, agroquímicos, bioinsumos, sustratos, herramientas, inventario y fichas técnicas. |
| 19 | ETAPA 5 | Módulo de maquinaria agrícola | Publicar maquinaria nueva, usada, alquiler, repuestos, equipos, fichas técnicas, estado físico, precio, ubicación e inspección. |
| 20 | ETAPA 5 | Servicios agronómicos, laboratorio, certificación e inspección | Implementar servicios técnicos para asesor agrícola, laboratorio agrícola, certificador agrícola e inspector de calidad. |
| 21 | ETAPA 5 | Transporte agrícola y logística | Construir rutas, vehículos, capacidad, disponibilidad, cotización logística, documentos, viajes, reputación y seguimiento. |
| 22 | ETAPA 6 | Reputación, reseñas y verificación | Implementar calificaciones, reseñas públicas, perfil verificado, documentos, medallas de confianza, historial e índice de confiabilidad. |
| 23 | ETAPA 6 | Planes, pagos y monetización | Implementar planes por rol vigente, publicaciones destacadas, Radar pago, promociones, pasarela, comprobantes, facturas y vencimientos. |
| 24 | ETAPA 6 | Administración general y moderación | Construir backoffice maestro para administrar usuarios, roles, permisos, publicaciones, categorías, FUR, pagos, reportes, soporte, auditoría y configuración. |
| 25 | ETAPA 7 | Tablas nativas Odoo espejo | Crear estructura MySQL espejo de tablas nativas Odoo requeridas para lógica de negocio, sin integración electrónica directa con Odoo. |
| 26 | ETAPA 7 | Tablas propias del Marketplace Agro | Implementar tablas propias para usuarios, publicaciones, productos, tiendas, categorías, FUR, Radar, leads, cotizaciones, reputación, pagos, soporte y auditoría. |
| 27 | ETAPA 7 | Librerías Node.js/NestJS e integraciones | Instalar y parametrizar librerías para API, ORM, validación, autenticación, archivos, logs, documentación, correos, WhatsApp, pagos, mapas y reportes. |
| 28 | ETAPA 7 | QA, auditoría, documentación y cierre MVP | Validar flujos por rol, permisos, seguridad, consistencia de FUR, estructura VS Code, base de datos, mapa del sitio, SEO, pruebas y documentación final. |

---

# 7. Desarrollo técnico-operativo por sprint

## Sprint 00 — Preparación, alcance y arquitectura base

**Etapa:** ETAPA 0

**Objetivo operativo:** Establecer el alcance V3.1, confirmar usuarios vigentes, definir arquitectura ReactJS + NestJS + MySQL y preparar convenciones de FUR.

**Roles impactados:** Todos los roles vigentes.

**Módulos relacionados:** Gobernanza funcional, arquitectura, configuración general, repositorios, FUR_Sprint, FUR_Modulos.

**FUR relacionadas:** FUR_Usuarios, FUR_Modulos, FUR_Sprint, FUR Mapa del Sitio, FUR Estructura VS Code Frontend, FUR Estructura VS Code Backend.

**Tablas principales:** mp_users, mp_roles, mp_permissions, mp_role_permissions, fur_sprints, fur_modulos, mp_settings, mp_audit_logs.

### Tareas backend NestJS

- Crear proyecto NestJS modular con configuración por entorno.
- Definir módulos base: auth, users, roles, permissions, settings, audit.
- Configurar TypeORM/Prisma para MySQL según decisión técnica.
- Crear DTO base, validaciones y estrategia de errores.

### Tareas frontend ReactJS

- Crear proyecto ReactJS con Vite o Next según definición del equipo.
- Definir layout público, layout privado y layout admin.
- Crear router base y estructura de carpetas por dominio.
- Parametrizar tema visual agrícola.

### Tareas base de datos MySQL

- Crear base MySQL del marketplace.
- Definir convención mp_, fur_ y odoo_.
- Preparar migraciones base.
- Crear tablas de auditoría y configuración global.

### Entregables del sprint

- Documento rector de alcance.
- Matriz de roles vigentes.
- Repositorio frontend.
- Repositorio backend.
- Script inicial de base de datos.
- Convención de nombres y lineamientos anti-hardcoding.

### Criterios de aceptación

- El equipo reconoce un único listado de roles vigentes.
- Existe repositorio funcional para frontend y backend.
- Existe conexión backend-MySQL.
- Las FUR base quedan definidas como tablas o esquemas operativos.
- Se documentan reglas para no hardcodear categorías, roles, permisos ni estados.

---

## Sprint 01 — Autenticación, usuarios, roles y permisos

**Etapa:** ETAPA 1

**Objetivo operativo:** Implementar registro, login, recuperación, roles, permisos, guards, sesiones y perfiles base.

**Roles impactados:** Visitante, comprador, productor, vendedor, dueño de finca, proveedor de insumos, proveedor de maquinaria, asesor técnico, transportista, cooperativa, laboratorio, certificador, inspector y administrador.

**Módulos relacionados:** Auth, usuarios, roles, permisos, perfiles, seguridad, sesiones.

**FUR relacionadas:** FUR_Usuarios.

**Tablas principales:** mp_users, mp_profiles, mp_roles, mp_permissions, mp_role_permissions, mp_user_roles, mp_user_sessions, mp_password_resets, mp_verifications.

### Tareas backend NestJS

- Crear endpoints de registro, login, refresh token y recuperación.
- Implementar JWT, bcrypt, guards y decorators por permiso.
- Crear seed de roles vigentes.
- Crear endpoint de perfil propio y actualización de datos.

### Tareas frontend ReactJS

- Pantalla de login.
- Pantalla de registro por tipo de usuario.
- Pantalla de recuperación de contraseña.
- Middleware de rutas privadas por rol.

### Tareas base de datos MySQL

- Crear tablas de usuarios, perfiles y permisos.
- Seed de roles vigentes.
- Seed de permisos base por módulo.

### Entregables del sprint

- API de autenticación.
- UI de acceso.
- Matriz RBAC inicial.
- Registro funcional de usuario por rol.
- Control de sesión y logout.

### Criterios de aceptación

- Un usuario puede registrarse con rol válido.
- Un usuario no puede acceder a rutas no autorizadas.
- El administrador puede consultar usuarios registrados.
- Las contraseñas se almacenan cifradas.
- Los roles eliminados del alcance no aparecen en registro ni backoffice.

---

## Sprint 02 — FUR_Usuarios y backoffice por rol vigente

**Etapa:** ETAPA 1

**Objetivo operativo:** Construir fichas de usuario y backoffices específicos para cada perfil vigente.

**Roles impactados:** Comprador, productor, vendedor, dueño de finca, proveedor de insumos, proveedor de maquinaria, asesor agrícola, transportista, cooperativa, laboratorio, certificador, inspector de calidad y administrador.

**Módulos relacionados:** Backoffice por rol, dashboards, menú privado, widgets, registros por perfil.

**FUR relacionadas:** FUR_Usuarios, FUR_Modulos.

**Tablas principales:** mp_backoffice_menus, mp_backoffice_widgets, mp_role_dashboards, mp_user_preferences, mp_profiles, mp_role_permissions.

### Tareas backend NestJS

- Crear API de menú por rol.
- Crear servicio de dashboard por rol.
- Crear endpoints de actualización de FUR_Usuarios.
- Crear endpoint de permisos efectivos por usuario.

### Tareas frontend ReactJS

- Crear carpetas /app por rol vigente.
- Crear dashboard base por rol.
- Crear menú lateral dinámico.
- Crear componentes de métricas y accesos rápidos.

### Tareas base de datos MySQL

- Crear tablas de menús, widgets y preferencias.
- Relacionar módulos disponibles por rol.
- Registrar backoffice vigente por rol.

### Entregables del sprint

- Backoffice funcional por rol vigente.
- Dashboard inicial por rol.
- FUR_Usuarios completa.
- Menú privado parametrizado.

### Criterios de aceptación

- Cada rol vigente tiene ruta privada propia.
- Los menús se cargan desde base de datos o configuración parametrizada.
- No existen backoffices de roles eliminados.
- El administrador puede activar/desactivar módulos por rol.

---

## Sprint 03 — Diseño gráfico tipo Yelp completo

**Etapa:** ETAPA 2

**Objetivo operativo:** Implementar experiencia visual tipo directorio local agrícola con buscador por necesidad y ubicación, cards, perfiles, reseñas, galería y mapas.

**Roles impactados:** Visitante, comprador, productor, vendedor, tiendas, proveedores, asesores, laboratorios, certificadores, inspectores y administrador.

**Módulos relacionados:** Diseño visual, directorio agrícola, cards, perfiles públicos, reseñas, mapa de resultados.

**FUR relacionadas:** FUR Mapa del Sitio, FUR_Tiendas, FUR_Categorias, FUR_GBP de tiendas.

**Tablas principales:** mp_public_pages, mp_store_profiles, mp_reviews, mp_media_assets, mp_locations, mp_gbp_profiles, mp_listings.

### Tareas backend NestJS

- Crear endpoints públicos de búsqueda tipo directorio.
- Crear endpoints de perfiles públicos.
- Crear endpoint de reseñas y calificaciones públicas.
- Crear API de assets para galería.

### Tareas frontend ReactJS

- Crear home con buscador doble: qué busca + dónde.
- Crear cards tipo Yelp para publicaciones y perfiles.
- Crear vista de resultados con mapa.
- Crear perfil público con fotos, reseñas, datos, contacto y ubicación.

### Tareas base de datos MySQL

- Crear registros de perfiles públicos.
- Crear estructura de reseñas.
- Crear ubicaciones y metadatos visuales.
- Crear categorías visibles en home.

### Entregables del sprint

- Design system agrícola.
- Home tipo directorio.
- Cards agrícolas.
- Página de resultados con mapa.
- Perfil público tipo Yelp.
- Sistema visual de reseñas.

### Criterios de aceptación

- El visitante puede buscar por necesidad y ubicación.
- La card muestra reputación, categoría, ubicación y CTA.
- El perfil público muestra datos completos del oferente.
- La UI es responsive y mantiene identidad agrícola.

---

## Sprint 04 — Funcionalidad tipo MercadoLibre completa

**Etapa:** ETAPA 2

**Objetivo operativo:** Implementar lógica marketplace: publicaciones, catálogo, tiendas, preguntas, carrito, cotizaciones, pagos, logística, reputación y promociones.

**Roles impactados:** Comprador, productor, vendedor, dueño de finca, proveedor de insumos, proveedor de maquinaria, asesor, transportista, cooperativa y administrador.

**Módulos relacionados:** Marketplace, tiendas, catálogo, preguntas, carrito/cotización, órdenes, pagos, envíos, reputación, promociones.

**FUR relacionadas:** FUR_Productos, FUR_Tiendas, FUR_Ofertas y Promociones, FUR_Modulos.

**Tablas principales:** mp_stores, mp_products, mp_listings, mp_questions, mp_answers, mp_carts, mp_cart_items, mp_orders, mp_order_items, mp_payments, mp_shipments, mp_promotions, mp_reputation_scores.

### Tareas backend NestJS

- Crear APIs de tiendas, catálogo, preguntas y publicaciones.
- Crear base de carrito/cotización según tipo de producto.
- Crear estructura de órdenes y estados.
- Crear servicios de reputación y promociones.

### Tareas frontend ReactJS

- Crear flujo comprador.
- Crear flujo vendedor/productor.
- Crear preguntas al vendedor.
- Crear catálogo por tienda.
- Crear UI de carrito o solicitud de cotización.

### Tareas base de datos MySQL

- Crear tablas marketplace tipo catálogo.
- Crear estados de publicación, orden y pregunta.
- Crear promociones y reputación.

### Entregables del sprint

- Flujo comprador tipo marketplace.
- Flujo vendedor/productor.
- Preguntas y respuestas.
- Catálogo por tienda.
- Base de carrito/cotización.
- Promociones y reputación comercial.

### Criterios de aceptación

- Un comprador puede consultar, preguntar, cotizar o agregar según el tipo de producto.
- Un vendedor puede responder preguntas.
- Las tiendas tienen catálogo público.
- Los estados comerciales son parametrizables.

---

## Sprint 05 — FUR_Categorias y taxonomía agrícola

**Etapa:** ETAPA 3

**Objetivo operativo:** Desarrollar categorías, subcategorías, atributos y filtros dinámicos para todos los verticales agrícolas vigentes.

**Roles impactados:** Todos los roles que publican, buscan, cotizan o administran categorías.

**Módulos relacionados:** Categorías, subcategorías, atributos, filtros, taxonomía agrícola.

**FUR relacionadas:** FUR_Categorias.

**Tablas principales:** mp_categories, mp_subcategories, mp_category_attributes, mp_attribute_options, mp_dynamic_filters, fur_categorias.

### Tareas backend NestJS

- Crear CRUD de categorías y subcategorías.
- Crear atributos dinámicos por categoría.
- Crear filtros derivados de atributos.
- Crear validaciones por vertical.

### Tareas frontend ReactJS

- Crear admin de categorías.
- Crear selector de categoría para publicar.
- Crear filtros dinámicos en búsqueda.
- Crear páginas públicas por categoría.

### Tareas base de datos MySQL

- Seed de categorías agrícolas.
- Seed de subcategorías.
- Atributos por vertical.

### Entregables del sprint

- Taxonomía agrícola completa.
- FUR_Categorias operativa.
- Filtros dinámicos.
- Categorías públicas SEO.

### Criterios de aceptación

- Las categorías no están hardcodeadas.
- Cada categoría define sus propios atributos.
- El buscador carga filtros según categoría.
- El administrador puede activar/desactivar categorías.

---

## Sprint 06 — FUR_Productos: productos agrícolas y cosechas

**Etapa:** ETAPA 3

**Objetivo operativo:** Implementar registros de productos agrícolas, cosechas, disponibilidad, volumen, calidad, certificación, unidad de medida, precio y ubicación.

**Roles impactados:** Productor agrícola, vendedor agrícola, cooperativa, comprador, administrador.

**Módulos relacionados:** Productos, cosechas, fichas técnicas, inventario comercial, calidad, certificaciones.

**FUR relacionadas:** FUR_Productos.

**Tablas principales:** mp_products, mp_crop_products, mp_crop_batches, mp_quality_specs, mp_product_certifications, mp_units, fur_productos.

### Tareas backend NestJS

- Crear CRUD de productos agrícolas.
- Crear registro de lotes/cosechas.
- Crear validaciones de volumen, precio y unidad.
- Crear vínculo producto-publicación.

### Tareas frontend ReactJS

- Formulario de producto/cosecha.
- Vista de inventario comercial.
- Ficha técnica del producto.
- Panel de productos para productor/vendedor/cooperativa.

### Tareas base de datos MySQL

- Crear tablas de productos, cosechas, calidades y certificaciones.
- Seed de unidades de medida.
- Relación con categorías.

### Entregables del sprint

- FUR_Productos completa.
- Registro de cosechas.
- Ficha técnica agrícola.
- Inventario comercial base.

### Criterios de aceptación

- Un productor puede registrar una cosecha con volumen, calidad, precio y ubicación.
- La cosecha puede convertirse en publicación.
- La ficha permite certificaciones y fotos.
- Las unidades de medida son parametrizadas.

---

## Sprint 07 — FUR_Tiendas y perfiles públicos tipo Yelp

**Etapa:** ETAPA 3

**Objetivo operativo:** Construir tiendas, perfiles públicos, reputación, ubicación, fotos, horarios, contacto, GBP y reseñas.

**Roles impactados:** Productor, vendedor, proveedor de insumos, proveedor de maquinaria, asesor, transportista, cooperativa, laboratorio, certificador, inspector.

**Módulos relacionados:** Tiendas, perfiles públicos, directorio, reputación, galería, horarios, contacto.

**FUR relacionadas:** FUR_Tiendas, FUR_GBP de tiendas.

**Tablas principales:** mp_stores, mp_store_profiles, mp_store_hours, mp_store_contacts, mp_store_media, mp_gbp_profiles, mp_reviews, fur_tiendas.

### Tareas backend NestJS

- Crear CRUD de tiendas/perfiles.
- Crear API de horarios y contactos.
- Crear API de galería.
- Crear endpoints públicos SEO de tienda.

### Tareas frontend ReactJS

- Formulario de tienda/perfil.
- Página pública de tienda.
- Galería y reseñas.
- Panel de tienda por rol.

### Tareas base de datos MySQL

- Crear tablas de tiendas, horarios, contactos, media y GBP.
- Relación tienda-usuario-rol.

### Entregables del sprint

- FUR_Tiendas operativa.
- Perfil público tipo Yelp.
- Tienda con catálogo y reseñas.
- Datos de contacto y ubicación.

### Criterios de aceptación

- Cada oferente vigente puede tener perfil público.
- El perfil muestra publicaciones asociadas.
- El administrador puede verificar o suspender una tienda.
- La tienda es indexable para SEO.

---

## Sprint 08 — FUR_GBP de tiendas y presencia local

**Etapa:** ETAPA 3

**Objetivo operativo:** Parametrizar datos tipo Google Business Profile para tiendas, productores, proveedores, laboratorios, certificadores e inspectores.

**Roles impactados:** Productor, vendedor, proveedores, asesor, transportista, cooperativa, laboratorio, certificador, inspector, administrador.

**Módulos relacionados:** GBP, presencia local, NAP, horarios, ubicación, categorías locales, SEO local.

**FUR relacionadas:** FUR_GBP de las tiendas.

**Tablas principales:** mp_gbp_profiles, mp_store_profiles, mp_locations, mp_store_hours, mp_store_categories, mp_seo_pages.

### Tareas backend NestJS

- Crear API de perfil local tipo GBP.
- Crear validaciones NAP.
- Crear endpoint de mapa local y datos de contacto.
- Crear estado de verificación local.

### Tareas frontend ReactJS

- Formulario GBP.
- Bloque de datos locales en perfil público.
- Vista de ubicación y horarios.
- Componentes SEO local.

### Tareas base de datos MySQL

- Crear tabla GBP.
- Relacionar con tienda/perfil.
- Crear campos de NAP, horario y zona.

### Entregables del sprint

- FUR_GBP operativa.
- Presencia local por tienda.
- Datos NAP normalizados.
- Bloque local visible en perfiles.

### Criterios de aceptación

- Los perfiles cuentan con nombre, dirección/zona, teléfono y horario.
- La ubicación puede ser aproximada por seguridad.
- El perfil queda listo para SEO local.

---

## Sprint 09 — FUR_Ofertas y Promociones

**Etapa:** ETAPA 3

**Objetivo operativo:** Crear promociones, destacados, cupones, publicaciones impulsadas, campañas internas y reglas de vigencia.

**Roles impactados:** Productor, vendedor, proveedores, cooperativa, laboratorio, certificador, inspector, administrador.

**Módulos relacionados:** Ofertas, promociones, destacados, cupones, campañas, reglas comerciales.

**FUR relacionadas:** FUR_Ofertas y Promociones.

**Tablas principales:** mp_promotions, mp_coupons, mp_featured_listings, mp_campaigns, mp_promotion_rules, fur_ofertas_promociones.

### Tareas backend NestJS

- Crear CRUD de promociones.
- Crear reglas de vigencia y elegibilidad.
- Crear servicio de destacados.
- Crear validación de cupones.

### Tareas frontend ReactJS

- Panel de promociones.
- Formulario de oferta.
- Componentes visuales de destacado.
- Vista de campañas en admin.

### Tareas base de datos MySQL

- Crear tablas de campañas, promociones y cupones.
- Relación promoción-publicación-tienda.

### Entregables del sprint

- FUR_Ofertas operativa.
- Publicaciones destacadas.
- Cupones y campañas.
- Reglas de vigencia.

### Criterios de aceptación

- Una promoción tiene fecha inicio/fin.
- Una publicación destacada se diferencia visualmente.
- El administrador puede aprobar o pausar campañas.

---

## Sprint 10 — Publicaciones agrícolas y fichas técnicas

**Etapa:** ETAPA 4

**Objetivo operativo:** Implementar creación, edición, borrador, revisión, publicación, destacado, vencimiento, pausa, disponibilidad y eliminación lógica.

**Roles impactados:** Productor, vendedor, dueño de finca, proveedor de insumos, proveedor de maquinaria, asesor, transportista, cooperativa, laboratorio, certificador, inspector, administrador, moderación admin.

**Módulos relacionados:** Publicaciones, fichas técnicas, workflow de publicación, archivos, documentos, estados.

**FUR relacionadas:** FUR_Productos, FUR_Tiendas, FUR_Categorias, FUR_Modulos.

**Tablas principales:** mp_listings, mp_listing_statuses, mp_listing_media, mp_listing_documents, mp_listing_attributes, mp_listing_reviews, mp_moderation_queue.

### Tareas backend NestJS

- Crear CRUD de publicaciones.
- Crear workflow de estados.
- Crear carga de media/documentos.
- Crear validación por categoría y rol.

### Tareas frontend ReactJS

- Formulario multipaso de publicación.
- Vista previa.
- Listado de mis anuncios.
- Panel de moderación.

### Tareas base de datos MySQL

- Crear tablas de publicaciones y atributos.
- Crear estados de publicación.
- Crear relación con tienda, producto y categoría.

### Entregables del sprint

- Publicador agrícola.
- Ficha técnica por categoría.
- Gestión de estados.
- Moderación básica.

### Criterios de aceptación

- Un usuario autorizado puede crear anuncio.
- El anuncio pasa por estados definidos.
- La ficha técnica cambia según categoría.
- La eliminación es lógica y auditable.

---

## Sprint 11 — Búsqueda, filtros, SEO y mapa del sitio

**Etapa:** ETAPA 4

**Objetivo operativo:** Implementar buscador agrícola, filtros por categoría, ubicación, precio, disponibilidad, volumen, certificación, reputación y páginas SEO.

**Roles impactados:** Visitante, comprador, todos los oferentes, administrador.

**Módulos relacionados:** Búsqueda, filtros, SEO, sitemap, páginas públicas, resultados.

**FUR relacionadas:** FUR MAPA DEL SITIO, FUR_Categorias, FUR_Productos, FUR_Tiendas.

**Tablas principales:** mp_search_logs, mp_dynamic_filters, mp_seo_pages, mp_sitemap_entries, mp_public_pages, mp_locations, mp_listings.

### Tareas backend NestJS

- Crear API de búsqueda.
- Crear filtros dinámicos.
- Crear generador de rutas SEO.
- Crear registro de búsquedas.

### Tareas frontend ReactJS

- Página de resultados.
- Filtros laterales.
- Paginación y ordenamiento.
- Mapa del sitio público.

### Tareas base de datos MySQL

- Crear índices de búsqueda.
- Crear tabla sitemap.
- Crear tabla SEO por categoría/perfil/publicación.

### Entregables del sprint

- Buscador agrícola.
- Filtros avanzados.
- Sitemap funcional.
- Páginas SEO por categoría y perfil.

### Criterios de aceptación

- La búsqueda devuelve resultados por categoría y ubicación.
- Los filtros se ajustan a la categoría.
- Las páginas públicas tienen URL amigable.
- El mapa del sitio refleja rutas vigentes.

---

## Sprint 12 — Detalle de publicación y contacto WhatsApp

**Etapa:** ETAPA 4

**Objetivo operativo:** Construir páginas de detalle con ficha técnica, galería, datos del anunciante, WhatsApp, solicitud de cotización, favoritos, compartir, reportar y recomendaciones.

**Roles impactados:** Visitante, comprador, oferentes, administrador.

**Módulos relacionados:** Detalle, WhatsApp, galería, ficha, favoritos, compartir, reportes, recomendaciones.

**FUR relacionadas:** FUR_Productos, FUR_Tiendas, FUR_Categorias.

**Tablas principales:** mp_listings, mp_listing_media, mp_whatsapp_clicks, mp_favorites, mp_reports, mp_recommendations, mp_leads.

### Tareas backend NestJS

- Crear endpoint de detalle público.
- Crear tracking de clics WhatsApp.
- Crear reporte de anuncio.
- Crear favoritos y recomendaciones básicas.

### Tareas frontend ReactJS

- Página detalle de publicación.
- Botón WhatsApp con mensaje prellenado.
- Galería.
- Botones favorito, compartir y reportar.

### Tareas base de datos MySQL

- Crear tabla de clics WhatsApp.
- Crear favoritos y reportes.
- Relacionar leads por contacto.

### Entregables del sprint

- Detalle completo de publicación.
- Contacto WhatsApp medible.
- Reporte de publicación.
- Favoritos desde detalle.

### Criterios de aceptación

- El detalle muestra ficha completa.
- El clic WhatsApp genera registro.
- El usuario puede solicitar cotización desde detalle.
- El visitante puede ver información pública segura.

---

## Sprint 13 — Cotizaciones y negociación

**Etapa:** ETAPA 4

**Objetivo operativo:** Permitir solicitudes formales de cotización para productos, cosechas, insumos, maquinaria, servicios, transporte, laboratorios, certificaciones e inspecciones.

**Roles impactados:** Comprador, productor, vendedor, proveedores, asesor, transportista, laboratorio, certificador, inspector, cooperativa.

**Módulos relacionados:** Cotizaciones, negociación, estados, mensajes, archivos, conversión a lead/orden.

**FUR relacionadas:** FUR_Productos, FUR_Tiendas, FUR_Modulos.

**Tablas principales:** mp_quotes, mp_quote_items, mp_quote_messages, mp_quote_statuses, mp_quote_attachments, mp_leads, mp_orders.

### Tareas backend NestJS

- Crear CRUD de cotizaciones.
- Crear estados de cotización.
- Crear mensajes de negociación.
- Crear conversión a lead/orden.

### Tareas frontend ReactJS

- Formulario de solicitud de cotización.
- Bandeja de cotizaciones recibidas.
- Bandeja de cotizaciones enviadas.
- Vista de negociación.

### Tareas base de datos MySQL

- Crear tablas de cotizaciones y mensajes.
- Relacionar con publicaciones y usuarios.
- Registrar archivos adjuntos.

### Entregables del sprint

- Módulo de cotización.
- Negociación básica.
- Estados de cotización.
- Historial comercial.

### Criterios de aceptación

- El comprador puede enviar solicitud formal.
- El oferente puede responder.
- Los estados cambian con trazabilidad.
- La cotización genera lead avanzado.

---

## Sprint 14 — Leads y oportunidades comerciales

**Etapa:** ETAPA 4

**Objetivo operativo:** Registrar leads originados por WhatsApp, cotización, favoritos, formularios, Radar y campañas.

**Roles impactados:** Productor, vendedor, proveedores, asesor, transportista, cooperativa, laboratorio, certificador, inspector, administrador.

**Módulos relacionados:** Leads, CRM simple, oportunidades, seguimiento, notas, conversión.

**FUR relacionadas:** FUR_Modulos, FUR_Ofertas y Promociones.

**Tablas principales:** mp_leads, mp_lead_sources, mp_lead_statuses, mp_lead_notes, mp_lead_assignments, mp_campaigns, mp_whatsapp_clicks.

### Tareas backend NestJS

- Crear servicio de captura de leads.
- Crear estados de lead.
- Crear notas y seguimiento.
- Crear reporte de origen.

### Tareas frontend ReactJS

- Panel de leads por rol.
- Detalle de lead.
- Filtros por estado y origen.
- Notas internas.

### Tareas base de datos MySQL

- Crear tablas CRM.
- Relacionar lead con fuente.
- Relacionar lead con publicación y usuario.

### Entregables del sprint

- CRM básico del marketplace.
- Leads por origen.
- Seguimiento comercial.
- Reportes de conversión.

### Criterios de aceptación

- Todo clic o cotización relevante puede generar lead.
- El oferente ve sus leads propios.
- El administrador ve todos los leads.
- Cada lead tiene origen, estado y trazabilidad.

---

## Sprint 15 — Radar Agrícola AgroBot

**Etapa:** ETAPA 4

**Objetivo operativo:** Implementar alertas inteligentes por categoría, ubicación, precio, volumen, certificación, disponibilidad y coincidencias.

**Roles impactados:** Comprador, productor, vendedor, cooperativa, administrador.

**Módulos relacionados:** Radar, alertas, coincidencias, notificaciones, preferencias, renovación.

**FUR relacionadas:** FUR_Modulos, FUR_Categorias, FUR_Productos.

**Tablas principales:** mp_radar_alerts, mp_radar_criteria, mp_radar_matches, mp_notifications, mp_search_logs, mp_leads.

### Tareas backend NestJS

- Crear CRUD de alertas.
- Crear motor de coincidencias.
- Crear job de evaluación de alertas.
- Crear notificación por coincidencia.

### Tareas frontend ReactJS

- Formulario de alerta Radar.
- Panel mis alertas.
- Vista de coincidencias.
- Acciones pausar, editar, renovar y cancelar.

### Tareas base de datos MySQL

- Crear tablas Radar.
- Crear criterios parametrizados.
- Crear historial de matches.

### Entregables del sprint

- Radar Agrícola funcional.
- Alertas por criterios.
- Coincidencias registradas.
- Conversión de match a lead.

### Criterios de aceptación

- El usuario crea una alerta válida.
- El sistema detecta publicaciones coincidentes.
- La coincidencia queda registrada.
- El usuario recibe notificación parametrizada.

---

## Sprint 16 — Favoritos, comparador y recomendaciones

**Etapa:** ETAPA 4

**Objetivo operativo:** Permitir guardar, comparar y recomendar publicaciones relevantes según búsqueda, ubicación, favoritos y comportamiento.

**Roles impactados:** Comprador, todos los oferentes, administrador.

**Módulos relacionados:** Favoritos, listas, comparador, recomendaciones, historial.

**FUR relacionadas:** FUR_Productos, FUR_Categorias, FUR_Tiendas.

**Tablas principales:** mp_favorites, mp_favorite_lists, mp_comparisons, mp_comparison_items, mp_recommendations, mp_user_activity.

### Tareas backend NestJS

- Crear favoritos.
- Crear listas de favoritos.
- Crear comparador por categoría.
- Crear recomendaciones base.

### Tareas frontend ReactJS

- Botón favorito.
- Vista mis favoritos.
- Comparador de publicaciones.
- Sección recomendados.

### Tareas base de datos MySQL

- Crear favoritos y comparaciones.
- Registrar actividad básica.
- Relacionar recomendaciones con usuario.

### Entregables del sprint

- Favoritos.
- Comparador.
- Recomendaciones.
- Historial de actividad básico.

### Criterios de aceptación

- El usuario puede guardar publicaciones.
- El usuario puede comparar elementos compatibles.
- Las recomendaciones no muestran publicaciones inactivas.
- Las listas son privadas por usuario.

---

## Sprint 17 — Módulo de fincas, lotes y predios agrícolas

**Etapa:** ETAPA 5

**Objetivo operativo:** Publicar predios, ventas, arriendos, alianzas productivas, ubicación, agua, riego, infraestructura, documentos, fotos y visitas.

**Roles impactados:** Dueño de finca agrícola, comprador, cooperativa, administrador.

**Módulos relacionados:** Fincas, lotes, predios, visitas, documentos, mapa, infraestructura.

**FUR relacionadas:** FUR_Productos, FUR_Categorias, FUR_Tiendas.

**Tablas principales:** mp_farms, mp_farm_features, mp_farm_documents, mp_farm_visits, mp_locations, mp_listings, mp_listing_media.

### Tareas backend NestJS

- Crear CRUD de predios.
- Crear gestión de documentos.
- Crear solicitud de visita.
- Crear filtros por área, agua, riego e infraestructura.

### Tareas frontend ReactJS

- Formulario de finca/lote.
- Detalle de predio.
- Agenda de visita.
- Mapa de ubicación aproximada.

### Tareas base de datos MySQL

- Crear tablas de fincas y características.
- Relacionar predio con publicación.
- Registrar visitas.

### Entregables del sprint

- Módulo de fincas.
- Ficha técnica de predio.
- Visitas.
- Documentos y galería.

### Criterios de aceptación

- El dueño de finca puede publicar un predio.
- El comprador puede solicitar visita.
- El mapa protege ubicación exacta si aplica.
- El predio se puede marcar vendido/arrendado.

---

## Sprint 18 — Módulo de insumos agrícolas

**Etapa:** ETAPA 5

**Objetivo operativo:** Gestionar catálogo de semillas, fertilizantes, agroquímicos, bioinsumos, sustratos, herramientas, inventario y fichas técnicas.

**Roles impactados:** Proveedor de insumos, comprador, productor, cooperativa, administrador.

**Módulos relacionados:** Insumos, catálogo, inventario, fichas técnicas, hojas de seguridad, cotización.

**FUR relacionadas:** FUR_Productos, FUR_Tiendas, FUR_Categorias.

**Tablas principales:** mp_agro_inputs, mp_input_specs, mp_inventory, mp_product_documents, mp_products, mp_listings, mp_quotes.

### Tareas backend NestJS

- Crear CRUD de insumos.
- Crear inventario de proveedor.
- Crear documentos técnicos.
- Crear cotización por insumo.

### Tareas frontend ReactJS

- Panel proveedor de insumos.
- Formulario de insumo.
- Ficha técnica pública.
- Inventario y precios.

### Tareas base de datos MySQL

- Crear tablas de insumos y especificaciones.
- Relacionar inventario con tienda.
- Crear documentos técnicos.

### Entregables del sprint

- Catálogo de insumos.
- Inventario de proveedor.
- Ficha técnica.
- Cotización de insumos.

### Criterios de aceptación

- El proveedor puede crear insumos con ficha técnica.
- El comprador puede cotizar.
- El inventario actualiza disponibilidad.
- Los documentos son visibles según permiso.

---

## Sprint 19 — Módulo de maquinaria agrícola

**Etapa:** ETAPA 5

**Objetivo operativo:** Publicar maquinaria nueva, usada, alquiler, repuestos, equipos, fichas técnicas, estado físico, precio, ubicación e inspección.

**Roles impactados:** Proveedor de maquinaria, comprador, productor, inspector, administrador.

**Módulos relacionados:** Maquinaria, equipos, repuestos, alquiler, inspección, fichas técnicas.

**FUR relacionadas:** FUR_Productos, FUR_Tiendas, FUR_Categorias.

**Tablas principales:** mp_machinery, mp_machinery_specs, mp_machinery_rentals, mp_spare_parts, mp_inspection_requests, mp_products, mp_listings.

### Tareas backend NestJS

- Crear CRUD de maquinaria.
- Crear estado nuevo/usado/alquiler.
- Crear solicitud de inspección.
- Crear ficha técnica de equipo.

### Tareas frontend ReactJS

- Panel proveedor de maquinaria.
- Formulario de equipo.
- Detalle de maquinaria.
- Solicitud de inspección.

### Tareas base de datos MySQL

- Crear tablas maquinaria y repuestos.
- Crear relación inspección-publicación.
- Crear alquileres si aplica.

### Entregables del sprint

- Módulo maquinaria.
- Ficha técnica de equipo.
- Alquiler y venta.
- Inspección solicitada.

### Criterios de aceptación

- El proveedor publica maquinaria con estado y precio.
- El comprador puede cotizar o solicitar inspección.
- La publicación distingue venta y alquiler.
- El inspector puede recibir solicitud relacionada.

---

## Sprint 20 — Servicios agronómicos, laboratorio, certificación e inspección

**Etapa:** ETAPA 5

**Objetivo operativo:** Implementar servicios técnicos para asesor agrícola, laboratorio agrícola, certificador agrícola e inspector de calidad.

**Roles impactados:** Agrónomo/asesor, laboratorio, certificador, inspector de calidad, productor, comprador, administrador.

**Módulos relacionados:** Servicios técnicos, laboratorio, certificación, inspección, agenda, solicitudes, documentos.

**FUR relacionadas:** FUR_Tiendas, FUR_Modulos, FUR_Categorias.

**Tablas principales:** mp_services, mp_service_requests, mp_service_appointments, mp_lab_tests, mp_certification_requests, mp_quality_inspections, mp_professional_documents.

### Tareas backend NestJS

- Crear CRUD de servicios técnicos.
- Crear solicitudes de laboratorio.
- Crear solicitudes de certificación.
- Crear solicitudes de inspección.
- Crear agenda de servicios.

### Tareas frontend ReactJS

- Backoffice asesor.
- Backoffice laboratorio.
- Backoffice certificador.
- Backoffice inspector.
- Formularios de solicitud.

### Tareas base de datos MySQL

- Crear tablas de servicios y solicitudes.
- Relacionar con publicaciones, productos o fincas.
- Crear documentos y resultados.

### Entregables del sprint

- Servicios agronómicos.
- Laboratorio agrícola.
- Certificación agrícola.
- Inspección de calidad.
- Agenda y resultados.

### Criterios de aceptación

- Un productor puede solicitar servicio técnico.
- Laboratorio puede recibir y gestionar pruebas.
- Certificador puede gestionar solicitudes.
- Inspector puede emitir resultado de inspección.

---

## Sprint 21 — Transporte agrícola y logística

**Etapa:** ETAPA 5

**Objetivo operativo:** Construir rutas, vehículos, capacidad, disponibilidad, cotización logística, documentos, viajes, reputación y seguimiento.

**Roles impactados:** Transportista agrícola, comprador, productor, vendedor, cooperativa, administrador.

**Módulos relacionados:** Transporte, vehículos, rutas, cotización logística, viajes, seguimiento.

**FUR relacionadas:** FUR_Tiendas, FUR_Modulos, FUR_Categorias.

**Tablas principales:** mp_transporters, mp_vehicles, mp_transport_routes, mp_transport_quotes, mp_shipments, mp_trip_tracking, mp_vehicle_documents.

### Tareas backend NestJS

- Crear perfil transportista.
- Crear vehículos y rutas.
- Crear cotización logística.
- Crear viajes y seguimiento básico.

### Tareas frontend ReactJS

- Backoffice transportista.
- Formulario de vehículo.
- Solicitud de transporte.
- Panel de viajes.

### Tareas base de datos MySQL

- Crear tablas transporte.
- Relacionar viajes con publicaciones/cotizaciones.
- Registrar documentos del vehículo.

### Entregables del sprint

- Módulo transporte.
- Vehículos y rutas.
- Cotización logística.
- Seguimiento de viajes.

### Criterios de aceptación

- El transportista registra vehículos.
- El comprador/productor solicita transporte.
- La cotización logística tiene estado.
- El viaje puede cerrarse y calificarse.

---

## Sprint 22 — Reputación, reseñas y verificación

**Etapa:** ETAPA 6

**Objetivo operativo:** Implementar calificaciones, reseñas públicas, perfil verificado, documentos, medallas de confianza, historial e índice de confiabilidad.

**Roles impactados:** Todos los roles registrados y administrador.

**Módulos relacionados:** Reseñas, reputación, verificación, documentos, medallas, confianza.

**FUR relacionadas:** FUR_Usuarios, FUR_Tiendas, FUR_Modulos.

**Tablas principales:** mp_reviews, mp_ratings, mp_verification_requests, mp_verification_documents, mp_trust_badges, mp_reputation_scores.

### Tareas backend NestJS

- Crear API de reseñas.
- Crear verificación documental.
- Crear cálculo de reputación.
- Crear medallas de confianza.

### Tareas frontend ReactJS

- Bloque de reseñas en perfiles.
- Formulario de reseña.
- Panel de verificación.
- Indicadores de confianza.

### Tareas base de datos MySQL

- Crear tablas de reseñas, documentos y reputación.
- Relacionar calificación con operación o interacción.

### Entregables del sprint

- Reseñas públicas.
- Reputación por perfil.
- Verificación documental.
- Medallas de confianza.

### Criterios de aceptación

- Solo usuarios autorizados pueden reseñar según regla definida.
- El administrador puede aprobar verificaciones.
- El perfil muestra reputación visible.
- Los documentos sensibles tienen control de acceso.

---

## Sprint 23 — Planes, pagos y monetización

**Etapa:** ETAPA 6

**Objetivo operativo:** Implementar planes por rol vigente, publicaciones destacadas, Radar pago, promociones, pasarela, comprobantes, facturas y vencimientos.

**Roles impactados:** Todos los roles comerciales y administrador.

**Módulos relacionados:** Planes, pagos, suscripciones, promociones, destacados, facturación.

**FUR relacionadas:** FUR_Ofertas y Promociones, FUR_Modulos, FUR_Usuarios.

**Tablas principales:** mp_plans, mp_subscriptions, mp_payments, mp_invoices, mp_payment_methods, mp_featured_listings, mp_plan_limits.

### Tareas backend NestJS

- Crear planes por rol.
- Crear suscripciones.
- Crear pagos y comprobantes.
- Crear límites por plan.

### Tareas frontend ReactJS

- Página de planes.
- Checkout/pago.
- Panel financiero del usuario.
- Panel admin de pagos.

### Tareas base de datos MySQL

- Crear tablas de planes, pagos y facturas.
- Relacionar plan con rol y permisos comerciales.

### Entregables del sprint

- Monetización base.
- Planes por rol.
- Pagos.
- Publicaciones destacadas pagas.
- Radar pago.

### Criterios de aceptación

- Un usuario puede activar un plan.
- El plan habilita límites y beneficios.
- El pago queda registrado.
- El administrador puede revisar pagos y vencimientos.

---

## Sprint 24 — Administración general y moderación

**Etapa:** ETAPA 6

**Objetivo operativo:** Construir backoffice maestro para administrar usuarios, roles, permisos, publicaciones, categorías, FUR, pagos, reportes, soporte, auditoría y configuración.

**Roles impactados:** Administrador general.

**Módulos relacionados:** Admin, moderación, soporte, configuración, reportes, auditoría, permisos.

**FUR relacionadas:** Todas las FUR rectoras.

**Tablas principales:** mp_admin_actions, mp_moderation_queue, mp_support_tickets, mp_settings, mp_audit_logs, mp_reports, mp_users, mp_listings.

### Tareas backend NestJS

- Crear APIs admin.
- Crear moderación de publicaciones.
- Crear configuración global.
- Crear soporte y auditoría.

### Tareas frontend ReactJS

- Panel admin general.
- Gestión de usuarios.
- Gestión de publicaciones.
- Gestión FUR.
- Moderación y soporte.

### Tareas base de datos MySQL

- Crear tablas admin, soporte y auditoría.
- Crear bitácora de acciones críticas.

### Entregables del sprint

- Backoffice admin.
- Moderación.
- Soporte.
- Configuración.
- Auditoría.

### Criterios de aceptación

- El admin gestiona usuarios y publicaciones.
- Toda acción crítica se audita.
- El admin puede parametrizar categorías, roles y módulos.
- Los reportes principales están disponibles.

---

## Sprint 25 — Tablas nativas Odoo espejo

**Etapa:** ETAPA 7

**Objetivo operativo:** Crear estructura MySQL espejo de tablas nativas Odoo requeridas para lógica de negocio, sin integración electrónica directa con Odoo.

**Roles impactados:** Administrador, equipo técnico.

**Módulos relacionados:** Odoo espejo, catálogos nativos, productos, contactos, ventas, compras, inventario, contabilidad, website.

**FUR relacionadas:** FUR TABLAS NATIVAS, FUR MODULOS NATIVOS.

**Tablas principales:** odoo_res_partner, odoo_res_users, odoo_product_template, odoo_product_product, odoo_product_category, odoo_uom_uom, odoo_sale_order, odoo_sale_order_line, odoo_stock_picking, odoo_account_move, odoo_crm_lead, entre otras definidas.

### Tareas backend NestJS

- Crear entidades espejo solo lectura lógica.
- Crear servicios de consulta de tablas espejo.
- Crear importación manual/controlada si aplica.
- Crear documentación de correspondencia Odoo-Marketplace.

### Tareas frontend ReactJS

- Pantallas admin de consulta Odoo espejo.
- Indicadores de datos nativos disponibles.
- Vista de relación Odoo espejo vs tabla propia.

### Tareas base de datos MySQL

- Crear tablas espejo con prefijo odoo_.
- Crear campos de trazabilidad: odoo_original_id, sync_source, imported_at, checksum.
- No crear integración electrónica directa.

### Entregables del sprint

- DDL Odoo espejo.
- FUR Tablas Nativas.
- Mapa Odoo espejo vs marketplace.
- Consulta administrativa.

### Criterios de aceptación

- Las tablas son copias espejo sin integración directa.
- La lógica marketplace no modifica Odoo real.
- Cada tabla espejo tiene trazabilidad.
- Se documenta uso de cada tabla por módulo.

---

## Sprint 26 — Tablas propias del Marketplace Agro

**Etapa:** ETAPA 7

**Objetivo operativo:** Implementar tablas propias para usuarios, publicaciones, productos, tiendas, categorías, FUR, Radar, leads, cotizaciones, reputación, pagos, soporte y auditoría.

**Roles impactados:** Administrador, equipo técnico, todos los roles según módulo.

**Módulos relacionados:** Modelo de datos propio completo.

**FUR relacionadas:** FUR TABLAS PROPIAS, FUR_Usuarios, FUR_Productos, FUR_Tiendas, FUR_Categorias, FUR_Modulos.

**Tablas principales:** Todas las tablas mp_ y fur_ definidas en el documento maestro.

### Tareas backend NestJS

- Crear entidades y repositorios.
- Crear migraciones.
- Crear relaciones y constraints.
- Crear seed de catálogos base.

### Tareas frontend ReactJS

- Validar pantallas contra estructura real de datos.
- Ajustar formularios según constraints.
- Mostrar estados y catálogos desde API.

### Tareas base de datos MySQL

- Crear modelo relacional completo.
- Índices por búsqueda y relaciones.
- Llaves foráneas y auditoría.

### Entregables del sprint

- DDL propio completo.
- Migraciones.
- Seed base.
- Diccionario de datos.

### Criterios de aceptación

- Las tablas propias soportan todos los módulos MVP.
- No existen campos críticos sin definición.
- Los formularios guardan contra tablas reales.
- El diccionario de datos queda documentado.

---

## Sprint 27 — Librerías Node.js/NestJS e integraciones

**Etapa:** ETAPA 7

**Objetivo operativo:** Instalar y parametrizar librerías para API, ORM, validación, autenticación, archivos, logs, documentación, correos, WhatsApp, pagos, mapas y reportes.

**Roles impactados:** Equipo técnico y administrador.

**Módulos relacionados:** Backend técnico, integraciones, documentación API, seguridad, archivos, logs.

**FUR relacionadas:** FUR LIBRERÍAS EN NODE.JS, FUR_Modulos.

**Tablas principales:** mp_integrations, mp_integration_logs, mp_files, mp_notifications, mp_payments, mp_audit_logs.

### Tareas backend NestJS

- Instalar NestJS modules necesarios.
- Configurar validation, swagger, rate limit, logging.
- Configurar archivos, correos, WhatsApp, pagos y mapas según alcance.
- Crear módulo de integraciones desacoplado.

### Tareas frontend ReactJS

- Consumir documentación Swagger.
- Manejar errores normalizados.
- Integrar componentes de carga de archivos y mapas.
- Conectar notificaciones.

### Tareas base de datos MySQL

- Crear logs de integración.
- Crear tablas de archivos y notificaciones.
- Registrar eventos de integración.

### Entregables del sprint

- FUR librerías Node.js.
- Configuración técnica.
- Swagger/OpenAPI.
- Módulo integraciones.
- Logs técnicos.

### Criterios de aceptación

- Las librerías están documentadas con finalidad.
- Las integraciones no quedan hardcodeadas.
- La API queda documentada.
- Los errores y logs son consistentes.

---

## Sprint 28 — QA, auditoría, documentación y cierre MVP

**Etapa:** ETAPA 7

**Objetivo operativo:** Validar flujos por rol, permisos, seguridad, consistencia de FUR, estructura VS Code, base de datos, mapa del sitio, SEO, pruebas y documentación final.

**Roles impactados:** Todos los roles vigentes, administrador, equipo QA.

**Módulos relacionados:** QA, pruebas, auditoría, documentación, cierre MVP, despliegue controlado.

**FUR relacionadas:** FUR_Sprint, todas las FUR rectoras.

**Tablas principales:** mp_audit_logs, mp_test_cases, mp_release_notes, mp_known_issues, mp_settings.

### Tareas backend NestJS

- Crear pruebas unitarias y e2e críticas.
- Validar permisos y guards.
- Validar endpoints principales.
- Auditar logs y trazabilidad.

### Tareas frontend ReactJS

- Probar flujos por rol.
- Validar responsive.
- Validar estados vacíos y errores.
- Validar accesibilidad básica.

### Tareas base de datos MySQL

- Validar integridad referencial.
- Validar seeds.
- Validar migraciones en ambiente limpio.
- Validar backups.

### Entregables del sprint

- Plan QA.
- Casos de prueba.
- Checklist de cierre MVP.
- Documentación técnica.
- Manual operativo por rol.
- Release notes.

### Criterios de aceptación

- Todos los flujos críticos pasan QA.
- No hay rutas privadas accesibles sin permiso.
- Las FUR están consistentes.
- El MVP queda documentado y listo para despliegue controlado.

---

# 8. Estructura operativa de carpetas VS Code

## 8.1. Repositorio general

```text
marketplace-agro/
├── frontend/
├── backend/
├── database/
├── docs/
│   ├── fur/
│   ├── sprints/
│   ├── qa/
│   └── arquitectura/
├── deployments/
└── README.md
```

## 8.2. Frontend ReactJS

```text
frontend/src/
├── app/
│   ├── public/
│   ├── comprador/
│   ├── productor/
│   ├── vendedor/
│   ├── dueno-finca/
│   ├── proveedor-insumos/
│   ├── proveedor-maquinaria/
│   ├── asesor-agricola/
│   ├── transportista/
│   ├── cooperativa/
│   ├── laboratorio/
│   ├── certificador/
│   ├── inspector-calidad/
│   └── admin/
├── components/
│   ├── yelp-directory/
│   ├── mercado-marketplace/
│   ├── listings/
│   ├── stores/
│   ├── fur/
│   └── shared/
├── features/
├── services/
├── hooks/
├── routes/
├── layouts/
└── config/
```

## 8.3. Backend NestJS

```text
backend/src/
├── auth/
├── users/
├── roles-permissions/
├── backoffice/
├── categories/
├── products/
├── stores/
├── gbp/
├── listings/
├── quotes/
├── leads/
├── radar/
├── favorites-comparator/
├── farms/
├── inputs/
├── machinery/
├── services-agronomic/
├── transport/
├── reputation/
├── payments-plans/
├── moderation/
├── odoo-mirror/
├── fur/
├── integrations/
├── notifications/
├── audit/
└── common/
```

## 8.4. Base de datos

```text
database/
├── migrations/
├── seeds/
├── ddl/
│   ├── odoo_mirror/
│   ├── marketplace_mp/
│   └── fur/
├── dictionaries/
├── diagrams/
└── backups/
```

---

# 9. Plantilla operativa obligatoria para cada sprint

Cada sprint debe documentarse con el siguiente formato dentro de `docs/sprints/`:

```markdown
# SPRINT_XX_NOMBRE_DEL_SPRINT

## 1. Objetivo
## 2. Roles impactados
## 3. Módulos funcionales
## 4. FUR relacionadas
## 5. Tablas nativas Odoo espejo
## 6. Tablas propias Marketplace Agro
## 7. Endpoints backend
## 8. Pantallas frontend
## 9. Migraciones y seeds
## 10. Historias de usuario
## 11. Tareas técnicas
## 12. Criterios de aceptación
## 13. Casos de prueba
## 14. Riesgos
## 15. Entregables
```

---

# 10. Definición de terminado general

- Código versionado en repositorio.
- Migraciones ejecutables en ambiente limpio.
- Seeds actualizados cuando el sprint lo requiera.
- Endpoints documentados en Swagger/OpenAPI.
- Pantallas responsive verificadas.
- Permisos validados según rol vigente.
- FUR actualizadas si el sprint afecta registros rectores.
- Casos de prueba documentados.
- Errores controlados y mensajes claros.
- Auditoría habilitada para acciones críticas.
- Sin hardcoding de categorías, roles, permisos, estados o rutas funcionales.
- Documentación técnica y operativa del sprint actualizada.

---

# 11. Cierre operativo

El proyecto debe ejecutarse respetando las etapas y dependencias anteriores. El MVP no debe considerarse cerrado hasta completar el Sprint 28, validar todos los roles vigentes, confirmar consistencia de FUR, verificar tablas Odoo espejo, validar tablas propias, probar flujos por rol y generar la documentación técnica final.

La reducción de usuarios aprobada no elimina ni resume las secciones técnicas, visuales y funcionales del documento maestro. Solo reduce el alcance de backoffice, permisos, rutas privadas y matrices de operación asociadas a roles no vigentes.