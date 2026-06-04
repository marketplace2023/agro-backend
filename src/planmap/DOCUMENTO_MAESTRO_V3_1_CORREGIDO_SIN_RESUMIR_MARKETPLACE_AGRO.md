# DOCUMENTO MAESTRO ACTUALIZADO V3.1 CORREGIDO
# MARKETPLACE AGRO / AGROBOT LATAM
## Tablas Odoo espejo + Tablas propias + Backoffice por roles vigentes + Diseño tipo Yelp completo + Funcionalidad tipo MercadoLibre completa + FUR técnicas completas

**Fecha:** 2026-06-01
**Stack:** ReactJS + NestJS + MySQL + FUR + Node.js
**Modelo ERP:** Odoo como tablas espejo sin integración electrónica directa.

---

## Resumen ejecutivo

## Criterio de corrección V3.1

Esta versión corrige el criterio aplicado en V3.0. La reducción del documento se limita exclusivamente al alcance de **usuarios, perfiles, rutas privadas, backoffice y permisos por rol**.

No deben resumirse ni eliminarse las siguientes secciones provenientes de V2.0:

1. Diseño gráfico inspirado en Yelp.
2. Funcionalidad tipo MercadoLibre.
3. FUR técnicas.
4. Tablas nativas Odoo como espejo.
5. Tablas propias del Marketplace Agro.
6. Módulos nativos Odoo.
7. Módulos propios del marketplace.
8. Librerías Node.js/NestJS.
9. Estructura VS Code frontend.
10. Estructura VS Code backend.
11. Base de datos MySQL.
12. Mapa del sitio.
13. Sprints técnicos, funcionales y de implementación.

Por lo tanto, este documento conserva el desarrollo completo del V2.0 y solo depura los roles activos según el listado aprobado: **1-9, 12, 15, 21, 22 y 27**.

Este documento actualiza el Documento Maestro del Marketplace Agro incorporando:

1. Diseño gráfico inspirado en patrones de directorio local tipo Yelp, adaptado al mercado agrícola.
2. Funcionalidad marketplace inspirada en MercadoLibre, adaptada a productos agrícolas, cosechas, fincas, insumos, maquinaria, servicios y logística.
3. Backoffice por roles con módulos y registros operativos.
4. FUR técnicas para mapa del sitio, estructura VS Code frontend, estructura VS Code backend, tablas nativas Odoo, tablas propias, módulos nativos, módulos propios y librerías Node.js.
5. Continuidad del documento maestro original de tablas Odoo espejo y tablas propias del Marketplace Agro.

---



---

# ACTUALIZACIÓN V2.0
# DISEÑO TIPO YELP + FUNCIONALIDAD TIPO MERCADOLIBRE + FUR TÉCNICAS

**Fecha de actualización:** 2026-06-01  
**Documento actualizado:** Documento Maestro Tablas Odoo + Marketplace Agro  
**Objetivo de esta actualización:** incorporar lineamientos visuales inspirados en Yelp, funcionalidades de marketplace inspiradas en MercadoLibre y nuevas FUR técnicas/funcionales para mapa del sitio, estructura VS Code, tablas, módulos y librerías Node.js.

> **Nota legal y de diseño:** esta guía usa referencias funcionales y patrones de experiencia observables en plataformas como Yelp y MercadoLibre, pero no autoriza copiar logos, marcas, nombres comerciales, identidad visual protegida, textos, interfaz exacta, componentes propietarios ni trade dress. El Marketplace Agro debe tener identidad propia adaptada al sector agrícola.

---

## 1. Principios de actualización

1. El marketplace agro debe combinar un **directorio visual de proveedores y servicios agrícolas tipo Yelp** con un **flujo transaccional, reputacional, logístico y comercial tipo MercadoLibre**.
2. El diseño debe ser agrícola, limpio, móvil, orientado a búsqueda, reseñas, ubicación, cards y confianza.
3. La funcionalidad debe permitir publicar, comprar, cotizar, guardar favoritos, preguntar, contactar, pagar, coordinar logística, calificar y administrar operaciones.
4. Las tablas Odoo siguen siendo **tablas espejo** sin integración electrónica directa.
5. Las tablas propias del marketplace son las responsables de operar la lógica agrícola digital.
6. Las FUR se convierten en el instrumento rector para registrar estructura, módulos, tablas, librerías, carpetas y mapa del sitio.
7. El backoffice debe mantenerse por rol y conectado a módulos, registros, permisos y FUR.

---

# PARTE XI — DISEÑO GRÁFICO INSPIRADO EN YELP PARA MARKETPLACE AGRO

## 2. Objetivo del diseño gráfico

Diseñar una interfaz para el Marketplace Agro que funcione como un **directorio agrícola visual**, donde los usuarios puedan descubrir tiendas, productores, proveedores, fincas, servicios agronómicos, transportistas, centros de acopio y productos agrícolas mediante búsqueda, ubicación, categorías, reseñas, fotos, filtros y perfiles públicos.

## 3. Principios visuales tipo Yelp adaptados al agro

| Elemento de referencia tipo Yelp | Adaptación al Marketplace Agro |
|---|---|
| Búsqueda principal prominente | Buscador “¿Qué necesitas?” + “¿Dónde?” |
| Directorio por ubicación | Productores, tiendas y servicios por departamento, municipio y vereda |
| Cards con reseñas | Cards de proveedores, productos, fincas y servicios con estrellas y reputación |
| Perfil de negocio | Perfil de tienda agrícola, productor, finca, asesor o transportista |
| Fotos y galería | Galerías de cosechas, maquinaria, fincas, insumos y servicios |
| Categorías visuales | Iconos agrícolas por categoría |
| Reseñas públicas | Reseñas de compradores, productores, transportistas y asesores |
| Mapas y cercanía | Vista mapa para fincas, tiendas, centros de acopio y logística |
| CTA directo | Botones de WhatsApp, cotizar, guardar y comparar |
| Experiencia móvil | Interfaz priorizada para usuarios rurales desde teléfono |

## 4. Sistema visual recomendado

### 4.1. Identidad visual agrícola propia

| Variable | Recomendación |
|---|---|
| Color primario | Verde agro / verde hoja |
| Color secundario | Amarillo cosecha / dorado maíz |
| Color de acción | Verde WhatsApp o naranja comercial |
| Color de alerta | Rojo moderado para reportes y vencimientos |
| Fondo general | Blanco cálido / gris muy claro |
| Cards | Blancas con borde suave y sombra ligera |
| Tipografía | Sans serif legible, moderna y limpia |
| Iconografía | Lineal, agrícola, simple |
| Estilo fotográfico | Imágenes reales de campo, productos, maquinaria y fincas |
| Tono visual | Confiable, rural, comercial y profesional |

### 4.2. Layout base

```txt
Pantalla pública tipo directorio agrícola

┌──────────────────────────────────────────────────────────┐
│ Header: logo | Categorías | Publicar | Radar | Login     │
├──────────────────────────────────────────────────────────┤
│ Hero buscador: ¿Qué buscas? + ¿Dónde? + botón Buscar     │
├──────────────────────────────────────────────────────────┤
│ Categorías rápidas con iconos agrícolas                  │
├──────────────────────────────────────────────────────────┤
│ Cards destacadas: productos, fincas, tiendas y servicios │
├──────────────────────────────────────────────────────────┤
│ Mapa / ubicación / resultados cercanos                   │
├──────────────────────────────────────────────────────────┤
│ Reseñas, productores destacados y CTA WhatsApp           │
└──────────────────────────────────────────────────────────┘
```

## 5. Componentes visuales principales

### 5.1. Header principal

**Componentes:**

1. Logo AgroBot Latam.
2. Menú de categorías.
3. Buscador compacto.
4. Botón “Publicar”.
5. Botón “Radar Agro”.
6. Botón “Ingresar”.
7. Botón WhatsApp.
8. Menú móvil tipo hamburguesa.

### 5.2. Buscador doble tipo directorio

```txt
[ ¿Qué necesitas? Producto, cosecha, finca, insumo... ]
[ ¿Dónde? Departamento, municipio, vereda...           ]
[ Buscar ]
```

**Registros asociados:**

1. `mp_search_logs`
2. `mp_saved_searches`
3. `mp_radar_alerts`
4. `mp_geo_locations`
5. `fur_mapa_sitio`

### 5.3. Cards tipo Yelp adaptadas al agro

Cada card debe mostrar:

1. Foto principal.
2. Título.
3. Categoría.
4. Ubicación.
5. Calificación.
6. Número de reseñas.
7. Precio o rango de precio.
8. Disponibilidad.
9. Badge verificado.
10. Botones: Ver, WhatsApp, Cotizar, Guardar.

**Ejemplo de card:**

```txt
┌──────────────────────────────────────┐
│ [Foto producto/finca/tienda]          │
│ Café pergamino seco - 10 toneladas    │
│ ⭐ 4.8 (32 reseñas) | Verificado       │
│ Caldas, Manizales                     │
│ $ / kg | Disponible esta semana       │
│ [Ver detalle] [WhatsApp] [Cotizar]    │
└──────────────────────────────────────┘
```

### 5.4. Perfil público tipo Yelp para tiendas y productores

**Aplicable a:**

1. Tienda agrícola.
2. Productor agrícola.
3. Proveedor de insumos.
4. Proveedor de maquinaria.
5. Asesor agronómico.
6. Transportista agrícola.
7. Centro de acopio.
8. Agroindustria compradora.
9. Cooperativa agrícola.

**Secciones del perfil:**

1. Portada visual.
2. Logo o foto principal.
3. Nombre comercial.
4. Categorías atendidas.
5. Ubicación.
6. Horario de atención.
7. WhatsApp.
8. Botón cotizar.
9. Galería.
10. Productos o servicios publicados.
11. Reseñas.
12. Preguntas frecuentes.
13. Mapa.
14. Certificaciones.
15. Perfil verificado.

### 5.5. Sistema de reseñas visual

**Funcionalidades:**

1. Calificación por estrellas.
2. Comentario público.
3. Fotos de experiencia.
4. Respuesta del proveedor.
5. Reporte de reseña.
6. Revisión por administrador general o flujo de moderación interna.
7. Promedio por categoría.
8. Reputación consolidada.

**Tablas:**

1. `mp_reviews`
2. `mp_review_replies`
3. `mp_review_reports`
4. `mp_reputation_scores`
5. `mp_user_badges`

### 5.6. Vista de resultados con mapa

```txt
/resultados
├── Lista de cards
├── Filtros laterales
├── Mapa de ubicación
├── Ordenamiento
├── Guardar búsqueda
└── Activar Radar
```

**Filtros recomendados:**

1. Categoría.
2. Ubicación.
3. Precio.
4. Disponibilidad.
5. Calificación.
6. Verificado.
7. Volumen.
8. Certificación.
9. Tipo de entrega.
10. Distancia.

---

# PARTE XII — FUNCIONALIDAD TIPO MERCADOLIBRE PARA MARKETPLACE AGRO

## 6. Objetivo funcional

Incorporar una capa operativa tipo marketplace transaccional que permita vender, comprar, cotizar, pagar, coordinar logística, manejar reputación, administrar tiendas, destacar publicaciones, gestionar preguntas, gestionar órdenes y ofrecer una experiencia robusta para compradores y vendedores agrícolas.

## 7. Funcionalidades núcleo tipo MercadoLibre adaptadas al agro

| Funcionalidad tipo marketplace | Adaptación al Marketplace Agro | Tablas propias |
|---|---|---|
| Publicaciones de productos | Publicaciones de cosechas, insumos, maquinaria, fincas y servicios | `mp_listings`, `mp_listing_attributes` |
| Tiendas de vendedores | Tiendas agrícolas, productores y proveedores | `mp_stores`, `mp_store_profiles` |
| Catálogo | Catálogo agrícola técnico-comercial | `mp_products`, `mp_product_variants` |
| Carrito | Carrito para insumos, maquinaria, productos empaquetados | `mp_carts`, `mp_cart_items` |
| Compra directa | Orden marketplace cuando aplique | `mp_orders`, `mp_order_items` |
| Cotización previa | Cotización para productos por volumen, cosechas y servicios | `mp_quotations`, `mp_quotation_items` |
| Preguntas al vendedor | Preguntas sobre publicaciones | `mp_questions`, `mp_question_answers` |
| Pagos | Pagos por planes, destacados, órdenes y Radar | `mp_payments`, `mp_payment_transactions` |
| Envíos | Logística agrícola propia o terceros | `mp_shipments`, `mp_shipment_quotes` |
| Reputación | Reputación de compradores, productores, tiendas y transportistas | `mp_reputation_scores` |
| Publicidad | Publicaciones destacadas y campañas | `mp_ads_campaigns`, `mp_listing_boosts` |
| Promociones | Ofertas, descuentos, combos y campañas estacionales | `mp_promotions`, `mp_promotion_rules` |
| Devoluciones/reclamos | Reclamos por entrega, calidad, pago o documentación | `mp_claims`, `mp_claim_events` |
| Favoritos | Lista de favoritos | `mp_favorites`, `mp_favorite_lists` |
| Historial | Vistas, búsquedas y contactos | `mp_listing_views`, `mp_search_logs`, `mp_whatsapp_clicks` |

## 8. Flujo funcional comprador tipo MercadoLibre

```txt
1. Buscar producto/cosecha/finca/servicio
2. Filtrar resultados
3. Abrir detalle
4. Revisar reputación del vendedor
5. Hacer pregunta o solicitar cotización
6. Guardar favorito o comparar
7. Contactar por WhatsApp
8. Comprar / reservar / cotizar
9. Coordinar pago o logística
10. Calificar experiencia
```

## 9. Flujo funcional vendedor/productor tipo MercadoLibre

```txt
1. Crear tienda o perfil productor
2. Crear publicación
3. Cargar fotos y ficha técnica
4. Definir precio, volumen, disponibilidad y entrega
5. Publicar o enviar a revisión
6. Recibir preguntas, leads y cotizaciones
7. Responder interesados
8. Gestionar orden o negociación
9. Coordinar entrega/logística
10. Recibir calificación
11. Medir estadísticas
12. Destacar publicación o activar promoción
```

## 10. Módulos funcionales tipo MercadoLibre agregados al documento

### 10.1. Módulo de tiendas agrícolas

**Registros:**

1. Tienda agrícola.
2. Perfil público de tienda.
3. Catálogo de tienda.
4. Horarios.
5. Ubicación.
6. GBP de tienda.
7. Galería.
8. Reseñas.
9. Métricas.
10. Plan comercial.

**Tablas:**

1. `mp_stores`
2. `mp_store_profiles`
3. `mp_store_locations`
4. `mp_store_hours`
5. `mp_store_gallery`
6. `mp_store_metrics`
7. `fur_tiendas`
8. `fur_gbp_tiendas`

### 10.2. Módulo de catálogo marketplace

**Registros:**

1. Producto agrícola.
2. Variante.
3. Presentación.
4. Marca.
5. Unidad de medida.
6. Ficha técnica.
7. Certificación.
8. Inventario.
9. Precio.
10. Disponibilidad.

**Tablas:**

1. `mp_products`
2. `mp_product_variants`
3. `mp_product_media`
4. `mp_product_certifications`
5. `mp_product_inventory`
6. `fur_productos`
7. `odoo_product_template`
8. `odoo_product_product`

### 10.3. Módulo de carrito y compra directa

**Aplicación:** solo para productos estandarizados: insumos, herramientas, repuestos, equipos pequeños, productos agrícolas empacados y servicios digitales.

**Registros:**

1. Carrito.
2. Ítems del carrito.
3. Orden.
4. Ítems de orden.
5. Dirección de entrega.
6. Medio de pago.
7. Estado de pago.
8. Estado de entrega.

**Tablas:**

1. `mp_carts`
2. `mp_cart_items`
3. `mp_orders`
4. `mp_order_items`
5. `mp_order_status_history`
6. `mp_payments`
7. `mp_shipments`
8. `odoo_sale_order`
9. `odoo_sale_order_line`

### 10.4. Módulo de preguntas y respuestas

**Registros:**

1. Pregunta pública.
2. Respuesta del vendedor.
3. Estado de pregunta.
4. Pregunta reportada.
5. Pregunta convertida en lead.

**Tablas:**

1. `mp_questions`
2. `mp_question_answers`
3. `mp_question_reports`
4. `mp_leads`

### 10.5. Módulo de logística y envíos agrícolas

**Registros:**

1. Solicitud de envío.
2. Cotización logística.
3. Transportista asignado.
4. Vehículo.
5. Ruta.
6. Estado del envío.
7. Evidencia de entrega.
8. Reclamo logístico.

**Tablas:**

1. `mp_shipments`
2. `mp_shipment_quotes`
3. `mp_shipment_events`
4. `mp_transport_vehicles`
5. `mp_transport_routes`
6. `mp_delivery_evidence`
7. `mp_claims`
8. `odoo_fleet_vehicle`

### 10.6. Módulo de pagos marketplace

**Registros:**

1. Pago de orden.
2. Pago de plan.
3. Pago de publicación destacada.
4. Pago de Radar.
5. Comisión marketplace.
6. Reembolso.
7. Estado de transacción.

**Tablas:**

1. `mp_payments`
2. `mp_payment_transactions`
3. `mp_payment_methods`
4. `mp_commissions`
5. `mp_refunds`
6. `mp_plan_subscriptions`
7. `odoo_account_payment`
8. `odoo_account_move`

### 10.7. Módulo de reputación tipo marketplace

**Registros:**

1. Calificación de vendedor.
2. Calificación de comprador.
3. Calificación de producto.
4. Calificación de transportista.
5. Reputación consolidada.
6. Insignias.
7. Penalizaciones.
8. Historial reputacional.

**Tablas:**

1. `mp_reviews`
2. `mp_reputation_scores`
3. `mp_user_badges`
4. `mp_reputation_events`
5. `mp_seller_metrics`
6. `mp_buyer_metrics`

### 10.8. Módulo de publicidad, destacados y promociones

**Registros:**

1. Campaña publicitaria.
2. Presupuesto.
3. Publicación destacada.
4. Promoción.
5. Cupón.
6. Segmentación.
7. Métrica de campaña.

**Tablas:**

1. `mp_ads_campaigns`
2. `mp_ads_budget_events`
3. `mp_listing_boosts`
4. `mp_promotions`
5. `mp_promotion_rules`
6. `mp_coupons`
7. `fur_ofertas_promociones`

---

# PARTE XIII — FUR MAPA DEL SITIO

## 11. Objetivo de FUR_MAPA_DEL_SITIO

Registrar de forma única todas las rutas, páginas, componentes, permisos, roles, módulos, tablas y objetivos SEO del mapa del sitio del Marketplace Agro.

## 12. Tabla FUR recomendada

**Tabla:** `fur_mapa_sitio`

| Campo | Tipo sugerido | Descripción |
|---|---|---|
| id | BIGINT PK | Identificador interno |
| fur_code | VARCHAR(80) | Código único FUR |
| route_path | VARCHAR(255) | Ruta pública o privada |
| route_name | VARCHAR(150) | Nombre funcional |
| page_type | ENUM | public, auth, dashboard, admin, detail, form |
| module_code | VARCHAR(100) | Módulo relacionado |
| parent_route_id | BIGINT FK | Ruta padre |
| allowed_roles | JSON | Roles con acceso |
| menu_label | VARCHAR(120) | Texto de menú |
| seo_title | VARCHAR(180) | Título SEO |
| seo_description | TEXT | Descripción SEO |
| layout_type | VARCHAR(80) | Tipo de layout |
| component_name | VARCHAR(120) | Componente frontend principal |
| backend_endpoint | VARCHAR(255) | Endpoint principal |
| related_tables | JSON | Tablas relacionadas |
| status | ENUM | draft, active, deprecated |
| version | VARCHAR(20) | Versión |
| created_at | DATETIME | Fecha creación |
| updated_at | DATETIME | Fecha actualización |

## 13. Registros base FUR_MAPA_DEL_SITIO

| FUR | Ruta | Tipo | Módulo | Roles |
|---|---|---|---|---|
| FUR-SITE-001 | `/` | public | Home | Todos |
| FUR-SITE-002 | `/buscar` | public | Búsqueda | Todos |
| FUR-SITE-003 | `/categorias` | public | Categorías | Todos |
| FUR-SITE-004 | `/productos-agricolas` | public | Productos agrícolas | Todos |
| FUR-SITE-005 | `/cosechas` | public | Cosechas | Todos |
| FUR-SITE-006 | `/fincas-agricolas` | public | Fincas | Todos |
| FUR-SITE-007 | `/insumos-agricolas` | public | Insumos | Todos |
| FUR-SITE-008 | `/maquinaria-agricola` | public | Maquinaria | Todos |
| FUR-SITE-009 | `/servicios-agronomicos` | public | Servicios | Todos |
| FUR-SITE-010 | `/transporte-agricola` | public | Transporte | Todos |
| FUR-SITE-011 | `/tiendas/:slug` | public | Tiendas | Todos |
| FUR-SITE-012 | `/anuncio/:slug` | detail | Publicaciones | Todos |
| FUR-SITE-013 | `/login` | auth | Autenticación | Visitante |
| FUR-SITE-014 | `/registro` | auth | Registro | Visitante |
| FUR-SITE-015 | `/app/dashboard` | dashboard | Backoffice | Registrados |
| FUR-SITE-016 | `/app/productor` | dashboard | Productor | Productor |
| FUR-SITE-017 | `/app/proveedor-insumos` | dashboard | Proveedor | Proveedor insumos |
| FUR-SITE-018 | `/app/admin` | admin | Administración | Admin |
| FUR-SITE-019 | `/radar-agricola` | public/dashboard | Radar | Todos/registrados |
| FUR-SITE-020 | `/ayuda` | public | Soporte | Todos |

---

# PARTE XIV — FUR ESTRUCTURA DE CARPETA VS CODE FRONTEND

## 14. Objetivo

Controlar la arquitectura de carpetas del frontend ReactJS para evitar código hardcodeado, duplicado o sin relación con módulos funcionales.

## 15. Tabla FUR recomendada

**Tabla:** `fur_vscode_frontend_structure`

| Campo | Tipo | Descripción |
|---|---|---|
| id | BIGINT PK | Identificador |
| fur_code | VARCHAR(80) | Código FUR |
| path | VARCHAR(255) | Ruta de carpeta/archivo |
| layer | VARCHAR(80) | app, components, modules, services, hooks, styles |
| module_code | VARCHAR(100) | Módulo funcional |
| component_type | VARCHAR(80) | page, layout, card, form, table, widget |
| responsibility | TEXT | Responsabilidad |
| related_route | VARCHAR(255) | Ruta del sitio |
| related_api | VARCHAR(255) | Endpoint consumido |
| related_fur | VARCHAR(100) | FUR vinculada |
| node_libraries | JSON | Librerías usadas |
| status | ENUM | active, deprecated, planned |

## 16. Estructura VS Code Frontend ReactJS

```txt
frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── agrobot-logo.svg
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   ├── providers.tsx
│   │   └── permissions.ts
│   ├── assets/
│   │   ├── agro/
│   │   ├── categories/
│   │   └── illustrations/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── DashboardShell.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── DataTable.tsx
│   │   │   └── RatingStars.tsx
│   │   ├── marketplace/
│   │   │   ├── SearchBarAgro.tsx
│   │   │   ├── ListingCard.tsx
│   │   │   ├── StoreCard.tsx
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   └── MapResultsPanel.tsx
│   │   └── forms/
│   │       ├── FURFormRenderer.tsx
│   │       ├── ProductForm.tsx
│   │       ├── StoreForm.tsx
│   │       └── CategoryForm.tsx
│   ├── modules/
│   │   ├── auth/
│   │   ├── home/
│   │   ├── search/
│   │   ├── categories/
│   │   ├── listings/
│   │   ├── products/
│   │   ├── stores/
│   │   ├── carts/
│   │   ├── orders/
│   │   ├── quotations/
│   │   ├── payments/
│   │   ├── shipping/
│   │   ├── radar/
│   │   ├── reviews/
│   │   ├── promotions/
│   │   ├── backoffice/
│   │   ├── admin/
│   │   └── fur/
│   ├── services/
│   │   ├── apiClient.ts
│   │   ├── auth.service.ts
│   │   ├── listings.service.ts
│   │   ├── fur.service.ts
│   │   └── upload.service.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── usePermissions.ts
│   │   ├── useListings.ts
│   │   └── useFUR.ts
│   ├── store/
│   │   ├── auth.store.ts
│   │   ├── marketplace.store.ts
│   │   └── ui.store.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── globals.css
│   │   └── yelp-agro-inspired.css
│   ├── types/
│   └── utils/
└── package.json
```

## 17. Registros base FUR frontend

| FUR | Path | Módulo | Responsabilidad |
|---|---|---|---|
| FUR-FE-001 | `src/components/marketplace/SearchBarAgro.tsx` | Búsqueda | Buscador tipo directorio |
| FUR-FE-002 | `src/components/marketplace/ListingCard.tsx` | Publicaciones | Card tipo Yelp adaptada al agro |
| FUR-FE-003 | `src/modules/stores/pages/StoreProfilePage.tsx` | Tiendas | Perfil público de tienda/productor |
| FUR-FE-004 | `src/modules/orders` | Órdenes | Compra directa tipo marketplace |
| FUR-FE-005 | `src/modules/radar` | Radar | Alertas inteligentes |
| FUR-FE-006 | `src/modules/fur` | FUR | Administración de fichas únicas |
| FUR-FE-007 | `src/modules/backoffice` | Backoffice | Paneles por rol |
| FUR-FE-008 | `src/styles/yelp-agro-inspired.css` | Diseño | Tokens visuales estilo directorio agrícola |

---

# PARTE XV — FUR ESTRUCTURA DE CARPETA VS CODE BACKEND

## 18. Objetivo

Controlar la arquitectura NestJS del backend para que cada módulo funcional tenga controller, service, entity, DTO, repository, guard y relación con tablas/FUR.

## 19. Tabla FUR recomendada

**Tabla:** `fur_vscode_backend_structure`

| Campo | Tipo | Descripción |
|---|---|---|
| id | BIGINT PK | Identificador |
| fur_code | VARCHAR(80) | Código FUR |
| path | VARCHAR(255) | Ruta backend |
| nest_module | VARCHAR(120) | Módulo NestJS |
| artifact_type | VARCHAR(80) | module, controller, service, entity, dto, guard |
| related_table | VARCHAR(120) | Tabla principal |
| related_fur | VARCHAR(100) | FUR vinculada |
| api_prefix | VARCHAR(120) | Prefijo API |
| responsibility | TEXT | Responsabilidad |
| security_guard | VARCHAR(120) | Guard aplicado |
| status | ENUM | active, deprecated, planned |

## 20. Estructura VS Code Backend NestJS

```txt
backend/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   │   ├── database.config.ts
│   │   ├── jwt.config.ts
│   │   ├── upload.config.ts
│   │   └── swagger.config.ts
│   ├── common/
│   │   ├── decorators/
│   │   ├── filters/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── pipes/
│   │   └── utils/
│   ├── database/
│   │   ├── migrations/
│   │   ├── seeds/
│   │   └── data-source.ts
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── roles-permissions/
│   │   ├── stores/
│   │   ├── categories/
│   │   ├── products/
│   │   ├── listings/
│   │   ├── search/
│   │   ├── carts/
│   │   ├── orders/
│   │   ├── quotations/
│   │   ├── payments/
│   │   ├── shipping/
│   │   ├── questions/
│   │   ├── reviews/
│   │   ├── reputation/
│   │   ├── promotions/
│   │   ├── ads/
│   │   ├── radar/
│   │   ├── whatsapp/
│   │   ├── seo/
│   │   ├── backoffice/
│   │   ├── admin/
│   │   ├── fur/
│   │   ├── odoo-mirrors/
│   │   └── audit/
│   └── integrations/
│       ├── maps/
│       ├── mail/
│       ├── payments/
│       └── whatsapp/
├── test/
├── package.json
└── nest-cli.json
```

## 21. Registros base FUR backend

| FUR | Path | Módulo | Tabla principal |
|---|---|---|---|
| FUR-BE-001 | `src/modules/auth` | Autenticación | `mp_users` |
| FUR-BE-002 | `src/modules/stores` | Tiendas | `mp_stores` |
| FUR-BE-003 | `src/modules/products` | Productos | `mp_products` |
| FUR-BE-004 | `src/modules/listings` | Publicaciones | `mp_listings` |
| FUR-BE-005 | `src/modules/orders` | Órdenes | `mp_orders` |
| FUR-BE-006 | `src/modules/payments` | Pagos | `mp_payments` |
| FUR-BE-007 | `src/modules/radar` | Radar | `mp_radar_alerts` |
| FUR-BE-008 | `src/modules/fur` | FUR | `fur_*` |
| FUR-BE-009 | `src/modules/odoo-mirrors` | Odoo espejo | `odoo_*` |
| FUR-BE-010 | `src/modules/backoffice` | Backoffice | `mp_backoffice_*` |

---

# PARTE XVI — FUR TABLAS NATIVAS ODOO COMO ESPEJO

## 22. Objetivo

Registrar las tablas nativas Odoo que se usarán como espejo funcional en MySQL para apoyar la lógica de negocio del Marketplace Agro sin integración electrónica directa.

## 23. Tabla FUR recomendada

**Tabla:** `fur_tablas_nativas`

| Campo | Tipo | Descripción |
|---|---|---|
| id | BIGINT PK | Identificador |
| fur_code | VARCHAR(80) | Código FUR |
| odoo_model | VARCHAR(120) | Modelo Odoo origen |
| odoo_original_table | VARCHAR(120) | Tabla original Odoo |
| mirror_table | VARCHAR(120) | Tabla espejo MySQL |
| odoo_module | VARCHAR(120) | Módulo nativo Odoo |
| marketplace_use | TEXT | Uso en el marketplace |
| business_domain | VARCHAR(100) | ventas, productos, inventario, contabilidad, crm |
| mirror_strategy | ENUM | manual, import, batch, reference |
| priority | ENUM | alta, media, baja |
| replacement_table | VARCHAR(120) | Tabla propia si Odoo no soporta la lógica |
| status | ENUM | active, optional, deprecated |

## 24. Registros principales FUR_TABLAS_NATIVAS

| FUR | Modelo Odoo | Tabla espejo | Uso marketplace | Reemplazo propio cuando aplique |
|---|---|---|---|---|
| FUR-ODOO-001 | `res.partner` | `odoo_res_partner` | Contactos, clientes, proveedores | `mp_users`, `mp_stores` |
| FUR-ODOO-002 | `res.users` | `odoo_res_users` | Usuarios ERP referencia | `mp_users` |
| FUR-ODOO-003 | `res.company` | `odoo_res_company` | Empresas | `mp_companies` |
| FUR-ODOO-004 | `product.template` | `odoo_product_template` | Producto base | `mp_products` |
| FUR-ODOO-005 | `product.product` | `odoo_product_product` | Variantes | `mp_product_variants` |
| FUR-ODOO-006 | `product.category` | `odoo_product_category` | Categorías ERP | `mp_categories` |
| FUR-ODOO-007 | `uom.uom` | `odoo_uom_uom` | Unidades de medida | `cat_units` |
| FUR-ODOO-008 | `sale.order` | `odoo_sale_order` | Pedido venta referencia | `mp_orders` |
| FUR-ODOO-009 | `sale.order.line` | `odoo_sale_order_line` | Líneas de pedido | `mp_order_items` |
| FUR-ODOO-010 | `purchase.order` | `odoo_purchase_order` | Compras referencia | `mp_purchase_requests` |
| FUR-ODOO-011 | `stock.picking` | `odoo_stock_picking` | Movimientos/logística | `mp_shipments` |
| FUR-ODOO-012 | `stock.quant` | `odoo_stock_quant` | Existencias ERP | `mp_product_inventory` |
| FUR-ODOO-013 | `account.move` | `odoo_account_move` | Facturación referencia | `mp_invoices` |
| FUR-ODOO-014 | `account.payment` | `odoo_account_payment` | Pagos referencia | `mp_payments` |
| FUR-ODOO-015 | `crm.lead` | `odoo_crm_lead` | Leads CRM referencia | `mp_leads` |
| FUR-ODOO-016 | `fleet.vehicle` | `odoo_fleet_vehicle` | Vehículos referencia | `mp_transport_vehicles` |
| FUR-ODOO-017 | `website.page` | `odoo_website_page` | Páginas web referencia | `fur_mapa_sitio` |
| FUR-ODOO-018 | `ir.attachment` | `odoo_ir_attachment` | Documentos referencia | `mp_files` |
| FUR-ODOO-019 | `mail.message` | `odoo_mail_message` | Trazabilidad referencia | `audit_logs` |
| FUR-ODOO-020 | `calendar.event` | `odoo_calendar_event` | Agenda referencia | `mp_service_appointments` |

---

# PARTE XVII — FUR TABLAS PROPIAS DEL MARKETPLACE AGRO

## 25. Objetivo

Registrar las tablas propias que soportan la lógica que Odoo no cubre totalmente para marketplace agrícola, diseño tipo directorio, publicación tipo marketplace, backoffice por rol, Radar, WhatsApp, FUR, SEO, mapas y analítica.

## 26. Tabla FUR recomendada

**Tabla:** `fur_tablas_propias`

| Campo | Tipo | Descripción |
|---|---|---|
| id | BIGINT PK | Identificador |
| fur_code | VARCHAR(80) | Código FUR |
| table_name | VARCHAR(120) | Tabla propia |
| module_code | VARCHAR(100) | Módulo |
| business_purpose | TEXT | Propósito |
| primary_entity | VARCHAR(120) | Entidad principal |
| crud_roles | JSON | Roles con CRUD |
| related_odoo_table | VARCHAR(120) | Tabla espejo relacionada |
| related_fur | VARCHAR(120) | FUR relacionada |
| required_indexes | JSON | Índices necesarios |
| status | ENUM | active, planned, deprecated |

## 27. Registros principales FUR_TABLAS_PROPIAS

| FUR | Tabla propia | Módulo | Propósito |
|---|---|---|---|
| FUR-MP-001 | `mp_users` | Usuarios | Usuarios propios del marketplace |
| FUR-MP-002 | `mp_roles` | Seguridad | Roles del sistema |
| FUR-MP-003 | `mp_permissions` | Seguridad | Permisos granulares |
| FUR-MP-004 | `mp_user_profiles` | Perfiles | Datos extendidos por rol |
| FUR-MP-005 | `mp_stores` | Tiendas | Tiendas agrícolas |
| FUR-MP-006 | `mp_store_profiles` | Tiendas | Perfil público tipo directorio |
| FUR-MP-007 | `mp_categories` | Categorías | Taxonomía agrícola propia |
| FUR-MP-008 | `mp_category_attributes` | Categorías | Atributos dinámicos |
| FUR-MP-009 | `mp_products` | Productos | Catálogo agrícola propio |
| FUR-MP-010 | `mp_product_variants` | Productos | Variantes |
| FUR-MP-011 | `mp_listings` | Publicaciones | Anuncios marketplace |
| FUR-MP-012 | `mp_listing_attributes` | Publicaciones | Ficha técnica dinámica |
| FUR-MP-013 | `mp_listing_media` | Publicaciones | Fotos/videos |
| FUR-MP-014 | `mp_carts` | Carrito | Carrito compra directa |
| FUR-MP-015 | `mp_cart_items` | Carrito | Ítems del carrito |
| FUR-MP-016 | `mp_orders` | Órdenes | Órdenes marketplace |
| FUR-MP-017 | `mp_order_items` | Órdenes | Ítems de orden |
| FUR-MP-018 | `mp_quotations` | Cotizaciones | Cotizaciones B2B agrícolas |
| FUR-MP-019 | `mp_quotation_items` | Cotizaciones | Detalle de cotización |
| FUR-MP-020 | `mp_questions` | Preguntas | Preguntas al vendedor |
| FUR-MP-021 | `mp_question_answers` | Preguntas | Respuestas |
| FUR-MP-022 | `mp_payments` | Pagos | Pagos plataforma |
| FUR-MP-023 | `mp_shipments` | Logística | Envíos y transporte |
| FUR-MP-024 | `mp_reviews` | Reputación | Reseñas |
| FUR-MP-025 | `mp_reputation_scores` | Reputación | Puntaje reputacional |
| FUR-MP-026 | `mp_radar_alerts` | Radar | Alertas inteligentes |
| FUR-MP-027 | `mp_radar_matches` | Radar | Coincidencias |
| FUR-MP-028 | `mp_leads` | Leads | Oportunidades comerciales |
| FUR-MP-029 | `mp_whatsapp_clicks` | WhatsApp | Trazabilidad de contactos |
| FUR-MP-030 | `mp_promotions` | Promociones | Ofertas y campañas |
| FUR-MP-031 | `mp_ads_campaigns` | Ads | Publicidad interna |
| FUR-MP-032 | `mp_backoffice_menus` | Backoffice | Menús por rol |
| FUR-MP-033 | `mp_backoffice_widgets` | Backoffice | Widgets/KPIs por rol |
| FUR-MP-034 | `mp_seo_pages` | SEO | Páginas SEO dinámicas |
| FUR-MP-035 | `mp_files` | Archivos | Documentos e imágenes |
| FUR-MP-036 | `audit_logs` | Auditoría | Trazabilidad |

---

# PARTE XVIII — FUR MÓDULOS NATIVOS ODOO

## 28. Objetivo

Registrar los módulos nativos de Odoo que sirven como referencia funcional o fuente de tablas espejo.

## 29. Tabla FUR recomendada

**Tabla:** `fur_modulos_nativos`

| Campo | Tipo | Descripción |
|---|---|---|
| id | BIGINT PK | Identificador |
| fur_code | VARCHAR(80) | Código FUR |
| odoo_module_name | VARCHAR(120) | Nombre técnico Odoo |
| functional_name | VARCHAR(150) | Nombre funcional |
| marketplace_use | TEXT | Uso en marketplace |
| mirror_tables | JSON | Tablas espejo asociadas |
| native_coverage | ENUM | total, partial, reference |
| requires_custom_module | BOOLEAN | Indica si requiere módulo propio |
| status | ENUM | active, optional, deprecated |

## 30. Registros FUR_MODULOS_NATIVOS

| FUR | Módulo Odoo | Uso | Cobertura |
|---|---|---|---|
| FUR-MOD-ODOO-001 | Contacts | Contactos, empresas, proveedores | Parcial |
| FUR-MOD-ODOO-002 | Sales | Ventas, pedidos, cotizaciones referencia | Parcial |
| FUR-MOD-ODOO-003 | Purchase | Compras referencia | Parcial |
| FUR-MOD-ODOO-004 | Inventory | Inventario y logística referencia | Parcial |
| FUR-MOD-ODOO-005 | Accounting | Facturación y pagos referencia | Parcial |
| FUR-MOD-ODOO-006 | CRM | Leads referencia | Parcial |
| FUR-MOD-ODOO-007 | Website | Páginas web referencia | Referencia |
| FUR-MOD-ODOO-008 | eCommerce | Tienda online referencia | Parcial |
| FUR-MOD-ODOO-009 | Fleet | Vehículos referencia | Parcial |
| FUR-MOD-ODOO-010 | Calendar | Agenda referencia | Parcial |
| FUR-MOD-ODOO-011 | Documents | Archivos referencia | Parcial |
| FUR-MOD-ODOO-012 | Marketing | Campañas referencia | Referencia |
| FUR-MOD-ODOO-013 | Helpdesk | Soporte referencia | Referencia |

---

# PARTE XIX — FUR MÓDULOS PROPIOS DEL MARKETPLACE

## 31. Objetivo

Registrar todos los módulos propios que soportan la operación real del Marketplace Agro.

## 32. Tabla FUR recomendada

**Tabla:** `fur_modulos_propios`

| Campo | Tipo | Descripción |
|---|---|---|
| id | BIGINT PK | Identificador |
| fur_code | VARCHAR(80) | Código FUR |
| module_code | VARCHAR(100) | Código técnico |
| module_name | VARCHAR(150) | Nombre funcional |
| module_type | ENUM | public, marketplace, backoffice, admin, technical |
| frontend_path | VARCHAR(255) | Ruta frontend |
| backend_path | VARCHAR(255) | Ruta backend |
| main_tables | JSON | Tablas principales |
| allowed_roles | JSON | Roles habilitados |
| related_fur | JSON | FUR relacionadas |
| priority | ENUM | MVP, fase2, fase3 |
| status | ENUM | planned, active, deprecated |

## 33. Registros FUR_MODULOS_PROPIOS

| FUR | Módulo propio | Tipo | Prioridad |
|---|---|---|---|
| FUR-MOD-MP-001 | Home agrícola | public | MVP |
| FUR-MOD-MP-002 | Autenticación | technical | MVP |
| FUR-MOD-MP-003 | Usuarios y roles | backoffice | MVP |
| FUR-MOD-MP-004 | Tiendas agrícolas | marketplace | MVP |
| FUR-MOD-MP-005 | Categorías agrícolas | marketplace | MVP |
| FUR-MOD-MP-006 | Productos agrícolas | marketplace | MVP |
| FUR-MOD-MP-007 | Publicaciones | marketplace | MVP |
| FUR-MOD-MP-008 | Búsqueda y filtros | public | MVP |
| FUR-MOD-MP-009 | Detalle de publicación | public | MVP |
| FUR-MOD-MP-010 | WhatsApp leads | marketplace | MVP |
| FUR-MOD-MP-011 | Cotizaciones | marketplace | Fase 2 |
| FUR-MOD-MP-012 | Carrito | marketplace | Fase 2 |
| FUR-MOD-MP-013 | Órdenes | marketplace | Fase 2 |
| FUR-MOD-MP-014 | Pagos | marketplace | Fase 2 |
| FUR-MOD-MP-015 | Logística agrícola | marketplace | Fase 2 |
| FUR-MOD-MP-016 | Preguntas y respuestas | marketplace | Fase 2 |
| FUR-MOD-MP-017 | Reseñas y reputación | marketplace | Fase 2 |
| FUR-MOD-MP-018 | Radar Agrícola | marketplace | Fase 2 |
| FUR-MOD-MP-019 | Promociones y ads | marketplace | Fase 3 |
| FUR-MOD-MP-020 | SEO dinámico | technical | Fase 3 |
| FUR-MOD-MP-021 | Analítica | admin | Fase 3 |
| FUR-MOD-MP-022 | Backoffice por roles | backoffice | MVP |
| FUR-MOD-MP-023 | FUR Manager | admin | MVP |
| FUR-MOD-MP-024 | Odoo mirrors | technical | Fase 2 |
| FUR-MOD-MP-025 | Auditoría | technical | MVP |

---

# PARTE XX — FUR LIBRERÍAS EN NODE.JS

## 34. Objetivo

Registrar las librerías Node.js necesarias para desarrollar el backend NestJS, seguridad, base de datos, validaciones, documentación, archivos, pagos, mapas, WhatsApp, colas, logging, testing y tareas programadas.

## 35. Tabla FUR recomendada

**Tabla:** `fur_librerias_nodejs`

| Campo | Tipo | Descripción |
|---|---|---|
| id | BIGINT PK | Identificador |
| fur_code | VARCHAR(80) | Código FUR |
| package_name | VARCHAR(120) | Paquete npm |
| technical_layer | VARCHAR(80) | backend, db, auth, files, jobs, tests |
| purpose | TEXT | Uso |
| required | BOOLEAN | Requerida u opcional |
| related_module | VARCHAR(100) | Módulo relacionado |
| configuration_file | VARCHAR(255) | Archivo de configuración |
| security_notes | TEXT | Consideraciones de seguridad |
| status | ENUM | approved, optional, deprecated |

## 36. Librerías Node.js/NestJS recomendadas

| FUR | Paquete | Capa | Uso |
|---|---|---|---|
| FUR-NODE-001 | `@nestjs/core` | Backend | Núcleo NestJS |
| FUR-NODE-002 | `@nestjs/common` | Backend | Decoradores y utilidades NestJS |
| FUR-NODE-003 | `@nestjs/config` | Config | Variables de entorno |
| FUR-NODE-004 | `@nestjs/typeorm` | DB | Integración TypeORM |
| FUR-NODE-005 | `typeorm` | DB | ORM para MySQL |
| FUR-NODE-006 | `mysql2` | DB | Driver MySQL |
| FUR-NODE-007 | `class-validator` | Validación | Validar DTO |
| FUR-NODE-008 | `class-transformer` | Validación | Transformar DTO |
| FUR-NODE-009 | `@nestjs/jwt` | Auth | JWT |
| FUR-NODE-010 | `passport` | Auth | Estrategias de autenticación |
| FUR-NODE-011 | `passport-jwt` | Auth | JWT strategy |
| FUR-NODE-012 | `bcrypt` | Seguridad | Hash de contraseñas |
| FUR-NODE-013 | `helmet` | Seguridad | Headers seguros |
| FUR-NODE-014 | `cors` | Seguridad | CORS |
| FUR-NODE-015 | `@nestjs/throttler` | Seguridad | Rate limiting |
| FUR-NODE-016 | `multer` | Archivos | Uploads |
| FUR-NODE-017 | `sharp` | Imágenes | Optimización de imágenes |
| FUR-NODE-018 | `@nestjs/swagger` | Docs | Swagger OpenAPI |
| FUR-NODE-019 | `nodemailer` | Email | Correo transaccional |
| FUR-NODE-020 | `axios` | HTTP | Integraciones externas |
| FUR-NODE-021 | `bullmq` | Jobs | Colas y tareas |
| FUR-NODE-022 | `ioredis` | Cache/Jobs | Redis |
| FUR-NODE-023 | `node-cron` | Jobs | Tareas programadas |
| FUR-NODE-024 | `winston` | Logging | Logs |
| FUR-NODE-025 | `pino` | Logging | Logs alternativos |
| FUR-NODE-026 | `uuid` | Utilidad | IDs únicos |
| FUR-NODE-027 | `slugify` | SEO | Slugs SEO |
| FUR-NODE-028 | `dayjs` | Fechas | Fechas |
| FUR-NODE-029 | `zod` | Validación | Validación alternativa |
| FUR-NODE-030 | `jest` | Testing | Pruebas |
| FUR-NODE-031 | `supertest` | Testing | Pruebas e2e API |
| FUR-NODE-032 | `dotenv` | Config | Variables `.env` |
| FUR-NODE-033 | `mercadopago` | Pagos | Integración de pagos si se adopta |
| FUR-NODE-034 | `twilio` | WhatsApp/SMS | WhatsApp/SMS si se adopta |
| FUR-NODE-035 | `socket.io` | Real-time | Notificaciones tiempo real |

---

# PARTE XXI — TABLAS ADICIONALES PARA SOPORTAR DISEÑO Y FUNCIONALIDAD ACTUALIZADA

## 37. Tablas nuevas sugeridas

```sql
-- Diseño, navegación y FUR
fur_mapa_sitio
fur_vscode_frontend_structure
fur_vscode_backend_structure
fur_tablas_nativas
fur_tablas_propias
fur_modulos_nativos
fur_modulos_propios
fur_librerias_nodejs

-- Directorio tipo Yelp
mp_store_profiles
mp_store_gallery
mp_store_hours
mp_store_locations
mp_store_claims
mp_store_metrics
mp_reviews
mp_review_replies
mp_review_reports
mp_reputation_scores

-- Marketplace tipo MercadoLibre
mp_carts
mp_cart_items
mp_orders
mp_order_items
mp_order_status_history
mp_questions
mp_question_answers
mp_shipments
mp_shipment_quotes
mp_shipment_events
mp_claims
mp_claim_events
mp_ads_campaigns
mp_ads_budget_events
mp_listing_boosts
mp_promotions
mp_promotion_rules
mp_coupons
```

---

# PARTE XXII — MAPA DEL SITIO ACTUALIZADO CON DISEÑO TIPO YELP Y FUNCIONALIDAD TIPO MERCADOLIBRE

```txt
/
├── Inicio
├── Buscar
│   ├── Productos agrícolas
│   ├── Cosechas
│   ├── Fincas agrícolas
│   ├── Insumos
│   ├── Maquinaria
│   ├── Servicios agronómicos
│   └── Transporte agrícola
├── Categorías
├── Tiendas agrícolas
│   ├── Perfil de tienda
│   ├── Reseñas
│   ├── Galería
│   ├── Productos
│   ├── Preguntas
│   └── Ubicación
├── Anuncios
│   ├── Detalle de publicación
│   ├── Preguntas al vendedor
│   ├── Cotizar
│   ├── Comprar
│   ├── Guardar favorito
│   └── Reportar
├── Radar Agrícola
├── Carrito
├── Checkout
├── Mis compras
├── Mis cotizaciones
├── Mis favoritos
├── Publicar
├── Planes
├── Ayuda
└── Backoffice
    ├── Comprador
    ├── Productor
    ├── Vendedor
    ├── Proveedor de insumos
    ├── Proveedor de maquinaria
    ├── Asesor agrícola
    ├── Transportista
    ├── Moderador
    └── Administrador
```

---

# PARTE XXIII — BACKOFFICE ACTUALIZADO CON MÓDULOS Y REGISTROS TIPO DIRECTORIO + MARKETPLACE

## 38. Backoffice comprador agrícola

**Módulos:**

1. Dashboard.
2. Búsquedas guardadas.
3. Favoritos.
4. Radar Agrícola.
5. Preguntas realizadas.
6. Cotizaciones enviadas.
7. Carrito.
8. Órdenes.
9. Pagos.
10. Reseñas realizadas.
11. Reclamos.
12. Configuración.

**Registros:**

1. `mp_saved_searches`
2. `mp_favorites`
3. `mp_radar_alerts`
4. `mp_questions`
5. `mp_quotations`
6. `mp_carts`
7. `mp_orders`
8. `mp_payments`
9. `mp_reviews`
10. `mp_claims`

## 39. Backoffice productor/vendedor agrícola

**Módulos:**

1. Dashboard comercial.
2. Mi tienda/perfil público.
3. Publicaciones.
4. Catálogo.
5. Inventario.
6. Preguntas recibidas.
7. Cotizaciones recibidas.
8. Órdenes.
9. Envíos.
10. Reseñas.
11. Reputación.
12. Publicidad/destacados.
13. Promociones.
14. Pagos.
15. Analítica.

**Registros:**

1. `mp_stores`
2. `mp_store_profiles`
3. `mp_products`
4. `mp_product_inventory`
5. `mp_listings`
6. `mp_questions`
7. `mp_quotations`
8. `mp_orders`
9. `mp_shipments`
10. `mp_reviews`
11. `mp_reputation_scores`
12. `mp_ads_campaigns`
13. `mp_promotions`
14. `mp_payments`
15. `mp_seller_metrics`

## 40. Backoffice proveedor de insumos

**Módulos:** catálogo, inventario, publicaciones, cotizaciones, preguntas, órdenes, promociones, reseñas, reputación, pagos y analítica.

**Registros:** `mp_products`, `mp_product_variants`, `mp_product_inventory`, `mp_listings`, `mp_quotations`, `mp_questions`, `mp_orders`, `mp_promotions`, `mp_reviews`, `mp_payments`.

## 41. Backoffice proveedor de maquinaria

**Módulos:** catálogo de maquinaria, venta, alquiler, repuestos, inspecciones, preguntas, cotizaciones, órdenes, logística, destacados y reputación.

**Registros:** `mp_products`, `mp_listings`, `mp_equipment_specs`, `mp_quotations`, `mp_questions`, `mp_orders`, `mp_shipments`, `mp_reviews`, `mp_reputation_scores`.

## 42. Backoffice asesor agrícola

**Módulos:** perfil profesional, servicios, agenda, solicitudes, cotizaciones, reseñas, reputación, documentos, publicaciones destacadas y analítica.

**Registros:** `mp_service_profiles`, `mp_service_catalog`, `mp_service_appointments`, `mp_quotations`, `mp_reviews`, `mp_reputation_scores`, `mp_files`, `mp_listing_boosts`.

## 43. Backoffice transportista agrícola

**Módulos:** vehículos, rutas, disponibilidad, cotizaciones, envíos, evidencias, reclamos, reseñas, reputación y pagos.

**Registros:** `mp_transport_vehicles`, `mp_transport_routes`, `mp_shipment_quotes`, `mp_shipments`, `mp_delivery_evidence`, `mp_claims`, `mp_reviews`, `mp_reputation_scores`, `mp_payments`.

## 44. Backoffice administrador

**Módulos:** usuarios, roles, tiendas, publicaciones, categorías, FUR, Odoo mirrors, órdenes, pagos, logística, Radar, SEO, reputación, moderación, analítica, configuración y auditoría.

**Registros:** todos los registros `mp_*`, `fur_*`, `odoo_*`, `cat_*`, `audit_*`.

---

# PARTE XXIV — SPRINTS RECOMENDADOS PARA IMPLEMENTAR LA ACTUALIZACIÓN

## Sprint A — Diseño visual y UX tipo directorio agrícola

1. Sistema visual.
2. Header y buscador doble.
3. Cards tipo Yelp adaptadas al agro.
4. Perfil público de tienda/productor.
5. Reseñas visuales.
6. Filtros laterales.
7. Vista mapa.

## Sprint B — Funcionalidad marketplace tipo MercadoLibre

1. Tiendas agrícolas.
2. Publicaciones avanzadas.
3. Preguntas al vendedor.
4. Cotizaciones.
5. Carrito.
6. Órdenes.
7. Pagos.
8. Envíos.
9. Reputación.
10. Promociones.

## Sprint C — FUR técnicas

1. FUR mapa del sitio.
2. FUR estructura frontend.
3. FUR estructura backend.
4. FUR tablas nativas.
5. FUR tablas propias.
6. FUR módulos nativos.
7. FUR módulos propios.
8. FUR librerías Node.js.

## Sprint D — Backoffice por rol actualizado

1. Usuario visitante, solo rutas públicas.
2. Comprador agrícola.
3. Productor agrícola.
4. Vendedor agrícola.
5. Dueño de finca agrícola.
6. Proveedor de insumos agrícolas.
7. Proveedor de maquinaria agrícola.
8. Agrónomo o asesor técnico.
9. Transportista agrícola.
10. Cooperativa agrícola.
11. Laboratorio agrícola.
12. Certificador agrícola.
13. Inspector de calidad.
14. Administrador general.

---


# PARTE XXIV-B — LISTADO DE SPRINTS VIGENTE V3.1 SIN RESUMIR SECCIONES TÉCNICAS

## Criterio rector de sprints

Los sprints se actualizan para trabajar únicamente con los perfiles vigentes, pero conservan completo el alcance técnico, visual y funcional del documento V2.0. Por lo tanto, los sprints de diseño Yelp, funcionalidad MercadoLibre, FUR, Odoo espejo, tablas propias, VS Code, Node.js y mapa del sitio no se eliminan ni se resumen.

## Sprint 00 — Preparación, alcance y arquitectura base

**Objetivo:** establecer el alcance V3.1, confirmar usuarios vigentes, definir arquitectura ReactJS + NestJS + MySQL y preparar convenciones de FUR.

**Roles impactados:** todos los roles vigentes.

**Registros principales:** FUR_Usuarios, FUR_Modulos, FUR_Sprint.

**Entregables:** documento rector de alcance, matriz de roles, matriz de módulos, arquitectura base, lineamientos anti-hardcoding y parámetros globales.

## Sprint 01 — Autenticación, usuarios, roles y permisos

**Objetivo:** implementar registro, login, recuperación, roles, permisos, guards, sesiones y perfiles base.

**Roles impactados:** visitante, comprador, productor, vendedor, dueño de finca, proveedor de insumos, proveedor de maquinaria, asesor técnico, transportista, cooperativa, laboratorio, certificador, inspector y administrador.

**Registros principales:** usuarios, roles, permisos, perfiles, verificación y preferencias.

## Sprint 02 — FUR_Usuarios y backoffice por rol vigente

**Objetivo:** construir fichas de usuario y backoffices específicos para cada perfil vigente.

**Backoffices incluidos:** comprador, productor, vendedor, dueño de finca, proveedor de insumos, proveedor de maquinaria, asesor agrícola, transportista, cooperativa, laboratorio, certificador, inspector de calidad y administrador.

## Sprint 03 — Diseño gráfico tipo Yelp completo

**Objetivo:** implementar experiencia visual tipo directorio local agrícola con buscador por necesidad y ubicación, cards, perfiles, reseñas, galería y mapas.

**Entregables:** design system agrícola, componentes de búsqueda, cards de publicación, perfil público, reseñas, mapa de resultados y layouts responsive.

## Sprint 04 — Funcionalidad tipo MercadoLibre completa

**Objetivo:** implementar lógica marketplace: publicaciones, catálogo, tiendas, preguntas, carrito, cotizaciones, pagos, logística, reputación y promociones.

**Entregables:** flujo comprador, flujo vendedor, catálogo marketplace, publicación destacada, preguntas al vendedor, compra/cotización y reputación comercial.

## Sprint 05 — FUR_Categorias y taxonomía agrícola

**Objetivo:** desarrollar categorías, subcategorías, atributos y filtros dinámicos para productos agrícolas, cosechas, fincas, insumos, maquinaria, servicios técnicos, transporte, laboratorios, certificadores e inspecciones.

## Sprint 06 — FUR_Productos: productos agrícolas y cosechas

**Objetivo:** implementar registros de productos agrícolas, cosechas, disponibilidad, volumen, calidad, certificación, unidad de medida, precio y ubicación.

## Sprint 07 — FUR_Tiendas y perfiles públicos tipo Yelp

**Objetivo:** construir tiendas, perfiles públicos, reputación, ubicación, fotos, horarios, contacto, GBP y reseñas.

## Sprint 08 — FUR_GBP de tiendas y presencia local

**Objetivo:** parametrizar datos tipo Google Business Profile para tiendas, productores, proveedores, laboratorios, certificadores e inspectores.

## Sprint 09 — FUR_Ofertas y Promociones

**Objetivo:** crear promociones, destacados, cupones, publicaciones impulsadas, campañas internas y reglas de vigencia.

## Sprint 10 — Publicaciones agrícolas y fichas técnicas

**Objetivo:** implementar creación, edición, borrador, revisión, publicación, destacado, vencimiento, pausa, disponibilidad y eliminación lógica.

## Sprint 11 — Búsqueda, filtros, SEO y mapa del sitio

**Objetivo:** implementar buscador agrícola, filtros por categoría, ubicación, precio, disponibilidad, volumen, certificación, reputación y páginas SEO.

## Sprint 12 — Detalle de publicación y contacto WhatsApp

**Objetivo:** construir páginas de detalle con ficha técnica, galería, datos del anunciante, WhatsApp, solicitud de cotización, favoritos, compartir, reportar y recomendaciones.

## Sprint 13 — Cotizaciones y negociación

**Objetivo:** permitir solicitudes formales de cotización para productos, cosechas, insumos, maquinaria, servicios, transporte, laboratorios, certificaciones e inspecciones.

## Sprint 14 — Leads y oportunidades comerciales

**Objetivo:** registrar leads originados por WhatsApp, cotización, favoritos, formularios, Radar y campañas.

## Sprint 15 — Radar Agrícola AgroBot

**Objetivo:** implementar alertas inteligentes por categoría, ubicación, precio, volumen, certificación, disponibilidad y coincidencias.

## Sprint 16 — Favoritos, comparador y recomendaciones

**Objetivo:** permitir guardar, comparar y recomendar publicaciones relevantes según búsqueda, ubicación, favoritos y comportamiento.

## Sprint 17 — Módulo de fincas, lotes y predios agrícolas

**Objetivo:** publicar predios, ventas, arriendos, alianzas productivas, ubicación, agua, riego, infraestructura, documentos, fotos y visitas.

## Sprint 18 — Módulo de insumos agrícolas

**Objetivo:** gestionar catálogo de semillas, fertilizantes, agroquímicos, bioinsumos, sustratos, herramientas, inventario y fichas técnicas.

## Sprint 19 — Módulo de maquinaria agrícola

**Objetivo:** publicar maquinaria nueva, usada, alquiler, repuestos, equipos, fichas técnicas, estado físico, precio, ubicación e inspección.

## Sprint 20 — Servicios agronómicos, laboratorio, certificación e inspección

**Objetivo:** implementar servicios técnicos para asesor agrícola, laboratorio agrícola, certificador agrícola e inspector de calidad.

## Sprint 21 — Transporte agrícola y logística

**Objetivo:** construir rutas, vehículos, capacidad, disponibilidad, cotización logística, documentos, viajes, reputación y seguimiento.

## Sprint 22 — Reputación, reseñas y verificación

**Objetivo:** implementar calificaciones, reseñas públicas, perfil verificado, documentos, medallas de confianza, historial e índice de confiabilidad.

## Sprint 23 — Planes, pagos y monetización

**Objetivo:** implementar planes por rol vigente, publicaciones destacadas, Radar pago, promociones, pasarela, comprobantes, facturas y vencimientos.

## Sprint 24 — Administración general y moderación

**Objetivo:** construir backoffice maestro para administrar usuarios, roles, permisos, publicaciones, categorías, FUR, pagos, reportes, soporte, auditoría y configuración.

## Sprint 25 — Tablas nativas Odoo espejo

**Objetivo:** crear estructura MySQL espejo de tablas nativas Odoo requeridas para lógica de negocio, sin integración electrónica directa con Odoo.

## Sprint 26 — Tablas propias del Marketplace Agro

**Objetivo:** implementar tablas propias para usuarios, publicaciones, productos, tiendas, categorías, FUR, Radar, leads, cotizaciones, reputación, pagos, soporte y auditoría.

## Sprint 27 — Librerías Node.js/NestJS e integraciones

**Objetivo:** instalar y parametrizar librerías para API, ORM, validación, autenticación, archivos, logs, documentación, correos, WhatsApp, pagos, mapas y reportes.

## Sprint 28 — QA, auditoría, documentación y cierre MVP

**Objetivo:** validar flujos por rol, permisos, seguridad, consistencia de FUR, estructura VS Code, base de datos, mapa del sitio, SEO, pruebas y documentación final.

---

# PARTE XXV — CONCLUSIÓN DE LA ACTUALIZACIÓN

Con esta actualización, el Documento Maestro queda fortalecido en tres dimensiones:

1. **Diseño gráfico y experiencia:** se adopta una experiencia tipo directorio local visual, con búsqueda por necesidad y ubicación, cards con reputación, perfiles públicos, reseñas, fotos y mapas.
2. **Funcionalidad marketplace:** se incorpora operación tipo marketplace robusto con tiendas, publicaciones, preguntas, cotizaciones, carrito, órdenes, pagos, envíos, reputación, promociones y publicidad.
3. **Gobernanza técnica:** se agregan FUR para mapa del sitio, estructura de carpetas frontend/backend, tablas nativas Odoo, tablas propias, módulos nativos, módulos propios y librerías Node.js.

El resultado es una arquitectura más completa para desarrollar un Marketplace Agro moderno, administrable, escalable y preparado para operar como ecosistema agrícola digital.


---

# DOCUMENTO BASE V1.0 INCORPORADO

# DOCUMENTO MAESTRO
# TABLAS DE BASE DE DATOS ODOO + TABLAS PROPIAS
# MARKETPLACE AGRO / MARKETPLACE AGRÍCOLA AGROBOT LATAM

**Versión:** 1.0
**Fecha:** 2026-06-01
**Stack:** ReactJS + NestJS + MySQL + FUR + Node.js
**Modelo ERP:** Odoo como fuente funcional mediante tablas espejo, sin integración electrónica directa.

---

## 0. Alcance

Este documento define el listado maestro de tablas para desarrollar un **Marketplace Agro / Marketplace Agrícola** que soporte productos agrícolas, cosechas, fincas, lotes, insumos, maquinaria, servicios agronómicos, logística agrícola, WhatsApp, Radar AgroBot, leads, cotizaciones, reputación, pagos, SEO, administración, analítica y FUR.

El documento usa el enfoque funcional del marketplace agrícola trabajado previamente: usuarios especializados, categorías agrícolas, publicaciones, búsqueda, WhatsApp, cotizaciones, leads, Radar Agrícola, paneles por perfil, administración, moderación, reputación, pagos, SEO, analítica, soporte, legalidad, integraciones y gobernanza.

---

# PARTE I — PRINCIPIOS DE ARQUITECTURA

## 1. Principios rectores

- Las tablas nativas de Odoo se modelan como **tablas espejo** en MySQL.
- No existe integración electrónica directa entre Odoo y el marketplace.
- No se consumen APIs de Odoo en tiempo real.
- El marketplace posee su propia lógica de negocio y sus propias tablas transaccionales.
- Odoo sirve como referencia funcional ERP: contactos, productos, ventas, compras, inventario, contabilidad, pagos, CRM, website, flota y documentos.
- Las tablas espejo se nombran con prefijo `odoo_`.
- Las tablas propias del marketplace se nombran con prefijo `mp_`.
- Las FUR se nombran con prefijo `fur_`.
- Los catálogos generales se nombran con prefijo `cat_`.
- La auditoría se nombra con prefijo `audit_`.

## 2. Convención de nombres

| Tipo | Prefijo | Ejemplo |
|---|---:|---|
| Tabla espejo Odoo | `odoo_` | `odoo_res_partner` |
| Tabla propia marketplace | `mp_` | `mp_listings` |
| Tabla FUR | `fur_` | `fur_productos` |
| Catálogo general | `cat_` | `cat_departments` |
| Auditoría | `audit_` | `audit_logs` |

## 3. Regla de decisión: Odoo espejo vs tabla propia

| Necesidad | ¿Tabla Odoo espejo? | ¿Tabla propia marketplace? | Decisión |
|---|---:|---:|---|
| Contactos, empresas, clientes y proveedores | Sí | Sí | Usar Odoo como referencia y marketplace para operación |
| Productos base y unidades de medida | Sí | Sí | Odoo referencia, marketplace especializa agricultura |
| Categorías comerciales agrícolas | Parcial | Sí | Crear taxonomía propia |
| Publicaciones clasificadas | No suficiente | Sí | Tabla propia obligatoria |
| Productos agrícolas y cosechas | No suficiente | Sí | Tabla propia obligatoria |
| Fincas, lotes y predios | No | Sí | Tabla propia obligatoria |
| Radar AgroBot | No | Sí | Tabla propia obligatoria |
| WhatsApp, leads y seguimiento | Parcial | Sí | Tabla propia obligatoria |
| Cotizaciones B2B agrícolas | Parcial | Sí | Tabla propia obligatoria |
| Pagos, planes y promociones | Parcial | Sí | Tabla propia obligatoria |
| GBP de tiendas | No | Sí | Tabla propia obligatoria |
| FUR | No | Sí | Tabla propia obligatoria |

# PARTE II — TABLAS NATIVAS ODOO COMO ESPEJOS

## 4. Núcleo técnico y metadatos Odoo

## 4. Tablas espejo Odoo — Núcleo técnico y metadatos

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_ir_model | ir.model | Registro de modelos Odoo | Media |
| odoo_ir_model_fields | ir.model.fields | Diccionario de campos de modelos Odoo | Media |
| odoo_ir_module_module | ir.module.module | Módulos instalados en Odoo | Baja |
| odoo_ir_attachment | ir.attachment | Archivos, imágenes, fichas técnicas y documentos | Alta |
| odoo_ir_config_parameter | ir.config_parameter | Parámetros del ERP | Baja |
| odoo_ir_sequence | ir.sequence | Secuencias documentales | Media |
| odoo_mail_message | mail.message | Mensajes y trazabilidad | Media |
| odoo_mail_activity | mail.activity | Actividades comerciales | Media |
| odoo_mail_followers | mail.followers | Seguimiento de objetos | Baja |

## 5. Tablas espejo Odoo — Usuarios, empresas, contactos y permisos

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_res_users | res.users | Usuarios ERP de referencia | Alta |
| odoo_res_partner | res.partner | Contactos, compradores, productores y proveedores | Alta |
| odoo_res_company | res.company | Empresas, tiendas y aliados | Alta |
| odoo_res_groups | res.groups | Grupos y roles ERP | Media |
| odoo_res_users_groups_rel | relación res.users/res.groups | Relación usuario-grupo | Media |
| odoo_res_country | res.country | Países | Alta |
| odoo_res_country_state | res.country.state | Estados/departamentos | Alta |
| odoo_res_currency | res.currency | Monedas | Alta |
| odoo_res_currency_rate | res.currency.rate | Tasas de cambio | Media |
| odoo_res_partner_bank | res.partner.bank | Cuentas bancarias referenciales | Media |

## 6. Tablas espejo Odoo — Productos, variantes, categorías y unidades

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_product_template | product.template | Producto base genérico | Alta |
| odoo_product_product | product.product | Variante de producto | Alta |
| odoo_product_category | product.category | Categoría interna ERP | Alta |
| odoo_product_public_category | product.public.category | Categoría pública ecommerce | Alta |
| odoo_product_attribute | product.attribute | Atributos: variedad, calibre, presentación | Alta |
| odoo_product_attribute_value | product.attribute.value | Valores de atributos | Alta |
| odoo_product_template_attribute_line | product.template.attribute.line | Relación producto-atributos | Media |
| odoo_product_template_attribute_value | product.template.attribute.value | Combinaciones de atributos | Media |
| odoo_product_supplierinfo | product.supplierinfo | Proveedor por producto | Media |
| odoo_uom_uom | uom.uom | kg, tonelada, caja, saco, lote | Alta |
| odoo_uom_category | uom.category | Categorías de unidades de medida | Alta |
| odoo_product_pricelist | product.pricelist | Listas de precios | Media |
| odoo_product_pricelist_item | product.pricelist.item | Reglas de precios | Media |

## 7. Tablas espejo Odoo — Ventas, CRM, cotizaciones y agenda

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_sale_order | sale.order | Cotizaciones y pedidos ERP | Alta |
| odoo_sale_order_line | sale.order.line | Líneas de cotización/pedido | Alta |
| odoo_sale_report | sale.report | Reportes de venta | Media |
| odoo_crm_lead | crm.lead | Leads y oportunidades ERP | Alta |
| odoo_crm_stage | crm.stage | Etapas CRM | Media |
| odoo_crm_team | crm.team | Equipos comerciales | Media |
| odoo_calendar_event | calendar.event | Citas, visitas y reuniones | Alta |
| odoo_resource_calendar | resource.calendar | Horarios de disponibilidad | Media |

## 8. Tablas espejo Odoo — Compras y proveedores

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_purchase_order | purchase.order | Órdenes de compra | Media |
| odoo_purchase_order_line | purchase.order.line | Líneas de compra | Media |
| odoo_purchase_report | purchase.report | Reportes de compra | Baja |
| odoo_account_payment_term | account.payment.term | Términos de pago | Media |
| odoo_account_fiscal_position | account.fiscal.position | Posiciones fiscales | Baja |

## 9. Tablas espejo Odoo — Inventario, almacenes y logística

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_stock_warehouse | stock.warehouse | Bodegas y centros de acopio | Alta |
| odoo_stock_location | stock.location | Ubicaciones internas/externas | Alta |
| odoo_stock_quant | stock.quant | Cantidad disponible por ubicación | Alta |
| odoo_stock_picking | stock.picking | Operaciones logísticas | Media |
| odoo_stock_picking_type | stock.picking.type | Tipos de operación logística | Media |
| odoo_stock_move | stock.move | Movimiento de producto | Media |
| odoo_stock_move_line | stock.move.line | Detalle de movimiento | Media |
| odoo_stock_lot | stock.lot | Lotes y trazabilidad | Alta |
| odoo_stock_route | stock.route | Rutas logísticas | Media |
| odoo_stock_rule | stock.rule | Reglas de abastecimiento | Baja |
| odoo_stock_package_type | stock.package.type | Tipos de empaque | Media |
| odoo_stock_quant_package | stock.quant.package | Paquetes | Media |

## 10. Tablas espejo Odoo — Contabilidad, pagos y facturación

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_account_move | account.move | Facturas y asientos contables | Alta |
| odoo_account_move_line | account.move.line | Líneas de factura/asiento | Alta |
| odoo_account_account | account.account | Cuentas contables | Baja |
| odoo_account_journal | account.journal | Diarios contables | Media |
| odoo_account_payment | account.payment | Pagos | Alta |
| odoo_payment_provider | payment.provider | Pasarelas de pago | Media |
| odoo_payment_transaction | payment.transaction | Transacciones | Alta |
| odoo_account_tax | account.tax | Impuestos | Media |
| odoo_account_payment_method | account.payment.method | Métodos de pago | Media |

## 11. Tablas espejo Odoo — Website, ecommerce, blog y SEO

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_website | website | Sitios web | Media |
| odoo_website_menu | website.menu | Menús públicos | Media |
| odoo_website_page | website.page | Páginas públicas | Media |
| odoo_website_visitor | website.visitor | Visitantes | Baja |
| odoo_website_track | website.track | Tracking web | Baja |
| odoo_blog_blog | blog.blog | Blogs | Media |
| odoo_blog_post | blog.post | Artículos | Media |
| odoo_website_sale_extra_field | website.sale.extra.field | Campos ecommerce extra | Baja |
| odoo_website_snippet_filter | website.snippet.filter | Filtros de snippets | Baja |

## 12. Tablas espejo Odoo — Proyectos, servicios, soporte y agenda

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_project_project | project.project | Proyectos y servicios | Media |
| odoo_project_task | project.task | Tareas y solicitudes técnicas | Media |
| odoo_project_tags | project.tags | Etiquetas de servicios | Baja |
| odoo_helpdesk_ticket | helpdesk.ticket | Tickets de soporte si existe módulo | Media |
| odoo_resource_resource | resource.resource | Recursos humanos/técnicos | Baja |

## 13. Tablas espejo Odoo — Flota, transporte y mantenimiento

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_fleet_vehicle | fleet.vehicle | Vehículos de transporte agrícola | Alta |
| odoo_fleet_vehicle_model | fleet.vehicle.model | Modelos de vehículos | Media |
| odoo_fleet_vehicle_model_brand | fleet.vehicle.model.brand | Marcas de vehículos | Media |
| odoo_fleet_vehicle_log_contract | fleet.vehicle.log.contract | Contratos de flota | Baja |
| odoo_fleet_vehicle_log_services | fleet.vehicle.log.services | Servicios/mantenimientos | Media |
| odoo_fleet_vehicle_odometer | fleet.vehicle.odometer | Odómetro | Baja |
| odoo_maintenance_equipment | maintenance.equipment | Equipos y maquinaria | Media |
| odoo_maintenance_request | maintenance.request | Solicitudes de mantenimiento | Baja |

## 14. Tablas espejo Odoo — Documentos, firma y conocimiento

| Tabla espejo MySQL | Modelo Odoo origen | Uso en marketplace agro | Prioridad |
|---|---|---|---|
| odoo_documents_document | documents.document | Documentos empresariales | Media |
| odoo_documents_folder | documents.folder | Carpetas documentales | Baja |
| odoo_sign_request | sign.request | Solicitudes de firma | Baja |
| odoo_sign_template | sign.template | Plantillas de firma | Baja |
| odoo_knowledge_article | knowledge.article | Base de conocimiento | Baja |

## 15. Campos comunes recomendados para tablas espejo Odoo

```sql
id BIGINT AUTO_INCREMENT PRIMARY KEY,
odoo_id BIGINT NULL,
name VARCHAR(255) NULL,
active BOOLEAN DEFAULT TRUE,
raw_json JSON NULL,
source_version VARCHAR(50) NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
```

# PARTE III — TABLAS PROPIAS DEL MARKETPLACE AGRO

## 16. Tablas propias — Usuarios, roles y perfiles

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_users | Usuarios del marketplace | FUR_Usuarios |
| mp_user_profiles | Datos extendidos por perfil | FUR_Usuarios |
| mp_roles | Roles propios | FUR_Usuarios |
| mp_permissions | Permisos granulares | FUR_Modulos |
| mp_role_permissions | Relación rol-permiso | FUR_Modulos |
| mp_user_roles | Relación usuario-rol | FUR_Usuarios |
| mp_user_preferences | Preferencias agrícolas | FUR_Usuarios |
| mp_user_locations | Ubicaciones del usuario | FUR_Usuarios |
| mp_user_verifications | Verificación de identidad, empresa o documentos | FUR_Usuarios |
| mp_user_sessions | Sesiones activas | FUR_Usuarios |
| mp_user_devices | Dispositivos y tokens push | FUR_Usuarios |

## 17. Tablas propias — Tiendas, empresas y perfiles comerciales

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_stores | Tiendas, empresas, productores, proveedores | FUR_Tiendas |
| mp_store_profiles | Perfil comercial extendido | FUR_Tiendas |
| mp_store_contacts | Contactos de tienda | FUR_Tiendas |
| mp_store_locations | Sedes, fincas, bodegas y centros de acopio | FUR_Tiendas |
| mp_store_business_hours | Horarios de atención | FUR_Tiendas |
| mp_store_documents | Documentos comerciales | FUR_Tiendas |
| mp_store_verifications | Verificaciones de tienda | FUR_Tiendas |
| mp_store_members | Usuarios vinculados a tienda | FUR_Tiendas |
| mp_store_metrics | Métricas comerciales | FUR_Tiendas |
| mp_store_social_links | Redes sociales | FUR_GBP de las tiendas |

## 18. Tablas propias — Categorías, taxonomía y filtros agrícolas

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_categories | Categorías principales | FUR_Categorias |
| mp_subcategories | Subcategorías | FUR_Categorias |
| mp_category_attributes | Atributos dinámicos por categoría | FUR_Categorias |
| mp_category_attribute_options | Valores posibles de atributos | FUR_Categorias |
| mp_category_filters | Filtros visibles por categoría | FUR_Categorias |
| mp_category_seo | SEO por categoría | FUR_Categorias |
| mp_category_templates | Plantillas de publicación | FUR_Categorias |
| mp_category_rules | Reglas de publicación | FUR_Categorias |
| mp_category_moderation_rules | Reglas de moderación por categoría | FUR_Categorias |
| mp_category_fur_schema | Campos FUR por categoría | FUR_Categorias |

## 19. Tablas propias — Productos, cosechas e inventario comercial

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_products | Producto principal del marketplace | FUR_Productos |
| mp_product_variants | Variantes comerciales | FUR_Productos |
| mp_product_attributes | Atributos del producto | FUR_Productos |
| mp_product_attribute_values | Valores de atributos | FUR_Productos |
| mp_product_media | Fotos y videos | FUR_Productos |
| mp_product_documents | Fichas técnicas, certificados, hojas de seguridad | FUR_Productos |
| mp_product_certifications | Certificaciones agrícolas | FUR_Productos |
| mp_product_prices | Precios por unidad, volumen o contrato | FUR_Productos |
| mp_product_inventory | Inventario comercial del marketplace | FUR_Productos |
| mp_product_stock_movements | Movimientos propios de inventario | FUR_Productos |
| mp_product_units | Unidades comerciales | FUR_Productos |
| mp_product_quality_specs | Calidad, calibre, empaque, madurez | FUR_Productos |
| mp_product_traceability | Trazabilidad del producto/cosecha | FUR_Productos |

## 20. Tablas propias — Especialización agrícola: cosechas

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_crop_products | Productos agrícolas por cultivo | FUR_Productos |
| mp_crop_varieties | Variedades agrícolas | FUR_Productos |
| mp_crop_harvests | Cosechas disponibles | FUR_Productos |
| mp_crop_harvest_batches | Lotes de cosecha | FUR_Productos |
| mp_crop_quality_grades | Grados de calidad | FUR_Productos |
| mp_crop_packaging_types | Cajas, sacos, bultos, canastillas | FUR_Productos |
| mp_crop_availability_calendar | Calendario de disponibilidad | FUR_Productos |
| mp_crop_contract_futures | Productos bajo contrato futuro | FUR_Productos |
| mp_crop_inspections | Inspecciones de calidad | FUR_Productos |
| mp_crop_certifications | Certificaciones orgánicas/BPA/etc. | FUR_Productos |

## 21. Tablas propias — Fincas, lotes y predios agrícolas

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_farms | Fincas agrícolas | FUR_Productos |
| mp_farm_lots | Lotes o subdivisiones del predio | FUR_Productos |
| mp_farm_infrastructure | Infraestructura productiva | FUR_Productos |
| mp_farm_water_resources | Agua, riego y drenaje | FUR_Productos |
| mp_farm_soil_info | Información de suelo | FUR_Productos |
| mp_farm_current_uses | Uso actual del predio | FUR_Productos |
| mp_farm_documents | Documentos de finca | FUR_Productos |
| mp_farm_media | Fotos y videos | FUR_Productos |
| mp_farm_visit_requests | Solicitudes de visita | FUR_Productos |
| mp_farm_comparables | Comparables de predios | FUR_Productos |

## 22. Tablas propias — Insumos agrícolas

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_agro_inputs | Insumos agrícolas | FUR_Productos |
| mp_agro_input_types | Semillas, fertilizantes, biofertilizantes, agroquímicos | FUR_Categorias |
| mp_agro_input_brands | Marcas | FUR_Productos |
| mp_agro_input_presentations | Presentaciones | FUR_Productos |
| mp_agro_input_technical_sheets | Fichas técnicas | FUR_Productos |
| mp_agro_input_safety_sheets | Hojas de seguridad | FUR_Productos |
| mp_agro_input_recommended_crops | Cultivos recomendados | FUR_Productos |
| mp_agro_input_application_methods | Métodos de aplicación | FUR_Productos |
| mp_agro_input_prices | Precios por volumen | FUR_Productos |
| mp_agro_input_inventory | Inventario de insumos | FUR_Productos |

## 23. Tablas propias — Maquinaria, equipos y herramientas agrícolas

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_machinery | Maquinaria agrícola | FUR_Productos |
| mp_machinery_types | Tractores, sembradoras, cosechadoras, motobombas | FUR_Categorias |
| mp_machinery_brands | Marcas | FUR_Productos |
| mp_machinery_models | Modelos | FUR_Productos |
| mp_machinery_conditions | Nueva, usada, alquiler | FUR_Productos |
| mp_machinery_specs | Ficha técnica | FUR_Productos |
| mp_machinery_media | Fotos y videos | FUR_Productos |
| mp_machinery_documents | Documentos | FUR_Productos |
| mp_machinery_availability | Disponibilidad | FUR_Productos |
| mp_machinery_rental_rates | Tarifas de alquiler | FUR_Productos |
| mp_machinery_inspection_requests | Solicitudes de inspección | FUR_Productos |

## 24. Tablas propias — Servicios agronómicos y técnicos

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_agronomic_services | Servicios agronómicos | FUR_Productos |
| mp_service_specialties | Especialidades | FUR_Categorias |
| mp_service_provider_profiles | Perfil profesional | FUR_Usuarios |
| mp_service_coverage_zones | Zonas de cobertura | FUR_Usuarios |
| mp_service_rates | Tarifas | FUR_Productos |
| mp_service_availability | Disponibilidad/agenda | FUR_Productos |
| mp_service_requests | Solicitudes de servicio | FUR_Productos |
| mp_service_visits | Visitas técnicas | FUR_Productos |
| mp_service_reports | Informes técnicos | FUR_Productos |
| mp_service_documents | Certificados/documentos | FUR_Productos |
| mp_service_reviews | Reseñas del servicio | FUR_Productos |

## 25. Tablas propias — Logística y transporte agrícola

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_transport_services | Servicios de transporte | FUR_Productos |
| mp_transport_vehicles | Vehículos | FUR_Productos |
| mp_transport_vehicle_documents | Documentos del vehículo | FUR_Productos |
| mp_transport_routes | Rutas frecuentes | FUR_Productos |
| mp_transport_rates | Tarifas | FUR_Productos |
| mp_transport_availability | Disponibilidad | FUR_Productos |
| mp_transport_requests | Solicitudes de transporte | FUR_Productos |
| mp_transport_quotes | Cotizaciones de transporte | FUR_Productos |
| mp_transport_trips | Viajes realizados | FUR_Productos |
| mp_transport_trip_events | Eventos del viaje | FUR_Productos |
| mp_transport_cargo_conditions | Refrigerado, seco, consolidado, completo | FUR_Productos |

## 26. Tablas propias — Publicaciones, anuncios y estado comercial

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_listings | Publicaciones principales | FUR_Productos |
| mp_listing_types | Tipo: producto, finca, insumo, maquinaria, servicio, transporte | FUR_Categorias |
| mp_listing_statuses | Estados posibles | FUR_Modulos |
| mp_listing_status_history | Historial de cambios de estado | FUR_Modulos |
| mp_listing_media | Multimedia de publicación | FUR_Productos |
| mp_listing_documents | Documentos de publicación | FUR_Productos |
| mp_listing_locations | Ubicación de publicación | FUR_Productos |
| mp_listing_tags | Etiquetas | FUR_Categorias |
| mp_listing_featured | Publicaciones destacadas | FUR_Ofertas y Promociones |
| mp_listing_reports | Reportes de publicación | FUR_Modulos |
| mp_listing_views | Visualizaciones | FUR_Modulos |
| mp_listing_clicks | Clics de contacto | FUR_Modulos |

## 27. Tablas propias — Cotizaciones, negociación y órdenes propias

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_quotes | Cotizaciones | FUR_Productos |
| mp_quote_items | Ítems de cotización | FUR_Productos |
| mp_quote_status_history | Historial de estados | FUR_Modulos |
| mp_quote_attachments | Archivos adjuntos | FUR_Productos |
| mp_negotiations | Negociaciones | FUR_Modulos |
| mp_negotiation_messages | Mensajes de negociación | FUR_Modulos |
| mp_purchase_intentions | Intenciones de compra | FUR_Modulos |
| mp_sale_intentions | Intenciones de venta | FUR_Modulos |
| mp_order_requests | Solicitudes de orden | FUR_Modulos |
| mp_order_request_items | Ítems de solicitud | FUR_Modulos |

## 28. Tablas propias — Leads, CRM y oportunidades comerciales

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_leads | Leads comerciales | FUR_Modulos |
| mp_lead_sources | Fuente: WhatsApp, Radar, SEO, cotización, formulario | FUR_Modulos |
| mp_lead_statuses | Estados del lead | FUR_Modulos |
| mp_lead_activities | Actividades comerciales | FUR_Modulos |
| mp_lead_notes | Notas internas | FUR_Modulos |
| mp_lead_assignments | Asignación a vendedor/agente | FUR_Modulos |
| mp_lead_scores | Puntuación o prioridad | FUR_Modulos |
| mp_lead_conversions | Conversión de lead | FUR_Modulos |
| mp_lead_exports | Exportaciones | FUR_Modulos |
| mp_lead_whatsapp_events | Eventos de WhatsApp vinculados | FUR_Modulos |

## 29. Tablas propias — WhatsApp y automatización conversacional

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_whatsapp_templates | Plantillas de mensajes | FUR_Modulos |
| mp_whatsapp_events | Eventos de clic/contacto | FUR_Modulos |
| mp_whatsapp_conversations | Conversaciones iniciadas | FUR_Modulos |
| mp_whatsapp_messages | Mensajes registrados | FUR_Modulos |
| mp_whatsapp_lead_links | Relación WhatsApp-lead | FUR_Modulos |
| mp_whatsapp_campaigns | Campañas | FUR_Modulos |
| mp_whatsapp_campaign_recipients | Destinatarios | FUR_Modulos |
| mp_whatsapp_automation_rules | Reglas automáticas | FUR_Modulos |
| mp_whatsapp_optins | Consentimiento WhatsApp | FUR_Modulos |
| mp_whatsapp_metrics | Métricas de WhatsApp | FUR_Modulos |

## 30. Tablas propias — Radar Agrícola AgroBot

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_radar_alerts | Alertas creadas por usuarios | FUR_Modulos |
| mp_radar_alert_criteria | Criterios de búsqueda | FUR_Modulos |
| mp_radar_matches | Coincidencias encontradas | FUR_Modulos |
| mp_radar_match_scores | Puntuación de coincidencia | FUR_Modulos |
| mp_radar_notifications | Notificaciones enviadas | FUR_Modulos |
| mp_radar_subscriptions | Suscripciones al Radar | FUR_Ofertas y Promociones |
| mp_radar_payments | Pagos del Radar | FUR_Ofertas y Promociones |
| mp_radar_status_history | Historial de alerta | FUR_Modulos |
| mp_radar_recommendations | Recomendaciones generadas | FUR_Modulos |
| mp_radar_lead_conversions | Conversión de alerta en lead | FUR_Modulos |

## 31. Tablas propias — Favoritos, comparador y recomendaciones

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_favorite_lists | Listas de favoritos | FUR_Modulos |
| mp_favorites | Elementos favoritos | FUR_Modulos |
| mp_compare_lists | Listas de comparación | FUR_Modulos |
| mp_compare_items | Elementos comparados | FUR_Modulos |
| mp_recently_viewed | Vistos recientemente | FUR_Modulos |
| mp_recommendations | Recomendaciones | FUR_Modulos |
| mp_recommendation_events | Eventos de recomendación | FUR_Modulos |
| mp_similarity_index | Índice de similitud | FUR_Modulos |
| mp_price_alerts | Alertas de precio | FUR_Modulos |
| mp_availability_alerts | Alertas de disponibilidad | FUR_Modulos |

## 32. Tablas propias — Reputación, reseñas y verificaciones

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_reviews | Reseñas | FUR_Modulos |
| mp_ratings | Calificaciones | FUR_Modulos |
| mp_review_replies | Respuestas a reseñas | FUR_Modulos |
| mp_verifications | Verificaciones | FUR_Usuarios |
| mp_verification_documents | Documentos de verificación | FUR_Usuarios |
| mp_trust_badges | Insignias de confianza | FUR_Modulos |
| mp_user_trust_badges | Insignias por usuario | FUR_Modulos |
| mp_reports | Reportes de usuarios/publicaciones | FUR_Modulos |
| mp_report_actions | Acciones tomadas | FUR_Modulos |
| mp_blacklist | Lista negra | FUR_Modulos |

## 33. Tablas propias — Planes, pagos, promociones y monetización

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_plans | Planes comerciales | FUR_Ofertas y Promociones |
| mp_plan_features | Características por plan | FUR_Ofertas y Promociones |
| mp_subscriptions | Suscripciones | FUR_Ofertas y Promociones |
| mp_subscription_payments | Pagos de suscripción | FUR_Ofertas y Promociones |
| mp_payments | Pagos generales | FUR_Ofertas y Promociones |
| mp_invoices | Facturas propias | FUR_Ofertas y Promociones |
| mp_coupons | Cupones | FUR_Ofertas y Promociones |
| mp_promotions | Promociones | FUR_Ofertas y Promociones |
| mp_promotion_rules | Reglas de promoción | FUR_Ofertas y Promociones |
| mp_featured_packages | Paquetes de destacados | FUR_Ofertas y Promociones |
| mp_commissions | Comisiones | FUR_Ofertas y Promociones |

## 34. Tablas propias — Google Business Profile de tiendas

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_store_gbp_profiles | Perfil GBP de la tienda | FUR_GBP de las tiendas |
| mp_store_gbp_locations | Ubicaciones GBP | FUR_GBP de las tiendas |
| mp_store_gbp_categories | Categorías GBP | FUR_GBP de las tiendas |
| mp_store_gbp_posts | Publicaciones GBP | FUR_GBP de las tiendas |
| mp_store_gbp_reviews | Reseñas GBP | FUR_GBP de las tiendas |
| mp_store_gbp_questions | Preguntas GBP | FUR_GBP de las tiendas |
| mp_store_gbp_photos | Fotos GBP | FUR_GBP de las tiendas |
| mp_store_gbp_metrics | Métricas GBP | FUR_GBP de las tiendas |
| mp_store_gbp_sync_logs | Bitácora manual de control | FUR_GBP de las tiendas |
| mp_store_gbp_recommendations | Recomendaciones SEO local | FUR_GBP de las tiendas |

## 35. Tablas propias — SEO, páginas públicas, blog y mapa del sitio

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_seo_pages | Páginas SEO | FUR_Modulos |
| mp_seo_metadata | Meta títulos, descripciones, OG | FUR_Modulos |
| mp_seo_routes | Rutas públicas indexables | FUR_Modulos |
| mp_seo_sitemaps | Sitemaps generados | FUR_Modulos |
| mp_seo_redirects | Redirecciones | FUR_Modulos |
| mp_blog_categories | Categorías de blog | FUR_Modulos |
| mp_blog_posts | Artículos | FUR_Modulos |
| mp_blog_tags | Etiquetas | FUR_Modulos |
| mp_blog_post_tags | Relación post-etiqueta | FUR_Modulos |
| mp_landing_pages | Landing pages agrícolas | FUR_Modulos |
| mp_public_pages | Páginas públicas no blog | FUR_Modulos |
| mp_site_navigation | Menús del sitio | FUR_Modulos |
| mp_site_footer_links | Enlaces de footer | FUR_Modulos |
| mp_site_banners | Banners | FUR_Modulos |

## 36. Tablas propias — Notificaciones, soporte y atención

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| mp_notifications | Notificaciones internas | FUR_Modulos |
| mp_notification_templates | Plantillas | FUR_Modulos |
| mp_notification_channels | Canales: email, WhatsApp, push | FUR_Modulos |
| mp_notification_logs | Historial | FUR_Modulos |
| mp_support_tickets | Tickets | FUR_Modulos |
| mp_support_ticket_messages | Mensajes de ticket | FUR_Modulos |
| mp_support_categories | Categorías de soporte | FUR_Modulos |
| mp_support_statuses | Estados | FUR_Modulos |
| mp_faq_categories | Categorías FAQ | FUR_Modulos |
| mp_faq_items | Preguntas frecuentes | FUR_Modulos |
| mp_knowledge_base_articles | Base de conocimiento | FUR_Modulos |

## 37. Tablas propias — Geolocalización y catálogos territoriales

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| cat_countries | Países | FUR_Modulos |
| cat_departments | Departamentos/estados | FUR_Modulos |
| cat_municipalities | Municipios | FUR_Modulos |
| cat_veredas | Veredas/zonas rurales | FUR_Modulos |
| cat_geo_zones | Zonas comerciales | FUR_Modulos |
| cat_agro_regions | Regiones agrícolas | FUR_Modulos |
| mp_geo_points | Puntos geográficos | FUR_Modulos |
| mp_geo_polygons | Polígonos | FUR_Modulos |
| mp_coverage_zones | Zonas de cobertura | FUR_Modulos |
| mp_route_points | Puntos de rutas | FUR_Modulos |

## 38. Tablas propias — Auditoría, moderación, seguridad y gobernanza

| Tabla propia | Propósito | FUR relacionado |
|---|---|---|
| audit_logs | Bitácora general | FUR_Modulos |
| audit_entity_changes | Cambios por entidad | FUR_Modulos |
| audit_login_events | Eventos de acceso | FUR_Modulos |
| audit_permission_changes | Cambios de permisos | FUR_Modulos |
| audit_data_exports | Exportaciones | FUR_Modulos |
| mp_moderation_queue | Cola de moderación | FUR_Modulos |
| mp_moderation_actions | Acciones de moderación | FUR_Modulos |
| mp_policy_acceptances | Aceptación de términos | FUR_Modulos |
| mp_governance_rules | Reglas internas | FUR_Modulos |
| mp_governance_decisions | Decisiones operativas | FUR_Modulos |

# PARTE IV — PERFILES DE USUARIO Y CATEGORÍAS

## 39. Perfiles de usuario soportados

Esta versión V3.1 conserva únicamente los usuarios aprobados por alcance funcional. La reducción aplica solo a perfiles y backoffice; las demás secciones técnicas, visuales y funcionales del documento V2.0 se mantienen completas.

| N.º original | Perfil vigente | Descripción breve |
|---:|---|---|
| 1 | Usuario visitante | Perfil público no autenticado. Navega, busca y consulta información pública sin acceso a backoffice privado. |
| 2 | Comprador agrícola | Usuario que busca, compara, cotiza y contacta productores, proveedores, asesores, laboratorios, certificadores o transportistas. |
| 3 | Productor agrícola | Usuario que publica cosechas, productos agrícolas, fincas, disponibilidad, volumen, precios, certificaciones y oportunidades comerciales. |
| 4 | Vendedor agrícola | Usuario comercial que gestiona publicaciones, productos, precios, cotizaciones, leads, promociones y reputación dentro del marketplace. |
| 5 | Dueño de finca agrícola | Propietario o responsable de predios agrícolas que publica fincas, lotes, arriendos, ventas o alianzas productivas. |
| 6 | Proveedor de insumos agrícolas | Empresa o persona que ofrece semillas, fertilizantes, agroquímicos, sustratos, sistemas de riego, herramientas e insumos agrícolas. |
| 7 | Proveedor de maquinaria agrícola | Empresa o persona que vende o alquila tractores, sembradoras, cosechadoras, fumigadoras, motobombas, repuestos y equipos agrícolas. |
| 8 | Agrónomo o asesor técnico | Profesional que ofrece servicios de asesoría en cultivos, manejo de plagas, análisis de suelo, riego, fertilización y certificaciones. |
| 9 | Transportista agrícola | Usuario o empresa que presta transporte de productos, cosechas, insumos, maquinaria y carga agrícola. |
| 12 | Administrador general | Usuario interno con control maestro de usuarios, módulos, permisos, publicaciones, categorías, pagos, reportes, FUR, auditoría y configuración. |
| 15 | Cooperativa agrícola | Organización que agrupa productores y gestiona oferta colectiva, asociados, publicaciones, oportunidades comerciales y negociaciones conjuntas. |
| 21 | Laboratorio agrícola | Entidad que ofrece análisis de suelo, agua, foliar, residuos, calidad, fertilidad, inocuidad y resultados técnicos para el sector agrícola. |
| 22 | Certificador agrícola | Entidad o profesional que valida buenas prácticas agrícolas, producción orgánica, trazabilidad, calidad y requisitos técnicos o comerciales. |
| 27 | Inspector de calidad | Profesional encargado de verificar calidad, calibre, empaque, estado del producto, documentación, certificaciones y condiciones de entrega. |

### Regla documental V3.1

Los perfiles no incluidos en esta tabla no forman parte del alcance vigente de desarrollo. Pueden conservarse como alcance futuro, pero no deben aparecer como backoffice activo, ruta privada obligatoria, sprint principal ni permiso operativo inicial.

## 40. Categorías completas del marketplace agro

1. Productos agrícolas y cosechas.
2. Fincas, lotes y predios agrícolas.
3. Insumos agrícolas.
4. Maquinaria, equipos y herramientas agrícolas.
5. Servicios agronómicos y técnicos.
6. Logística y transporte agrícola.
7. Centros de acopio.
8. Servicios de empaque.
9. Almacenamiento agrícola.
10. Laboratorios agrícolas.
11. Certificadoras.
12. Seguros agrícolas.
13. Financiamiento agrícola.
14. Exportadores.
15. Agroindustrias compradoras.
16. Cooperativas.
17. Asociaciones de productores.
18. Viveros.
19. Plantuladoras.
20. Servicios de drones.
21. Servicios de monitoreo satelital.
22. Servicios de riego.
23. Servicios de instalación agrícola.
24. Servicios de mantenimiento.
25. Educación y capacitación agrícola.
26. Bolsa de empleo agrícola.

## 41. Subcategorías mínimas por vertical

### Productos agrícolas y cosechas
- Frutas frescas
- Hortalizas
- Verduras
- Granos
- Cereales
- Tubérculos
- Raíces
- Leguminosas
- Café
- Cacao
- Cultivos permanentes
- Cultivos transitorios
- Flores
- Ornamentales
- Productos orgánicos
- Productos convencionales
- Productos certificados
- Productos en cosecha disponible
- Productos bajo contrato futuro
- Productos para agroindustria

### Fincas, lotes y predios agrícolas
- Fincas en venta
- Fincas en arriendo
- Lotes rurales
- Predios para cultivos transitorios
- Predios para cultivos permanentes
- Haciendas agrícolas
- Parcelas productivas
- Terrenos agroindustriales
- Predios con riego
- Predios para invernaderos
- Predios para agroexportación
- Predios para cultivos orgánicos
- Predios con infraestructura productiva
- Predios con casa
- Predios con bodegas
- Predios con agua

### Insumos agrícolas
- Semillas
- Fertilizantes
- Biofertilizantes
- Agroquímicos
- Herbicidas
- Fungicidas
- Insecticidas
- Coadyuvantes
- Sustratos
- Enmiendas agrícolas
- Sistemas de riego
- Plásticos agrícolas
- Mallas agrícolas
- Coberturas
- Herramientas menores
- Equipos de aplicación
- Elementos de protección
- Bandejas de germinación
- Empaques agrícolas
- Material de vivero

### Maquinaria, equipos y herramientas agrícolas
- Tractores
- Sembradoras
- Cosechadoras
- Fumigadoras
- Motobombas
- Sistemas de riego tecnificado
- Equipos de postcosecha
- Equipos de almacenamiento
- Herramientas manuales
- Repuestos agrícolas
- Implementos agrícolas
- Arados
- Rastras
- Guadañas
- Desbrozadoras
- Equipos de empaque
- Equipos de clasificación
- Maquinaria nueva
- Maquinaria usada
- Maquinaria en alquiler

### Servicios agronómicos y técnicos
- Asesoría en cultivos
- Manejo integrado de plagas
- Fertilización
- Nutrición vegetal
- Análisis de suelo
- Análisis foliar
- Diseño de sistemas de riego
- Certificaciones agrícolas
- Buenas prácticas agrícolas
- Agricultura orgánica
- Agricultura de precisión
- Monitoreo de cultivos
- Planes de siembra
- Manejo postcosecha
- Asistencia técnica en finca
- Consultoría agroindustrial
- Topografía agrícola
- Drones agrícolas
- Capacitación agrícola
- Auditorías técnicas

### Logística y transporte agrícola
- Transporte de frutas
- Transporte de hortalizas
- Transporte de granos
- Transporte de cereales
- Transporte de tubérculos
- Transporte de insumos agrícolas
- Transporte refrigerado
- Transporte de carga seca
- Transporte por ruta
- Transporte por departamento
- Transporte nacional
- Transporte local
- Transporte a centro de acopio
- Transporte a mercado mayorista
- Transporte a agroindustria
- Transporte para exportación
- Carga consolidada
- Carga completa
- Última milla agrícola
- Servicios de empaque y carga

# PARTE V — FUR: FICHAS ÚNICAS DE REGISTRO

## 42. Tablas FUR obligatorias

| Tabla FUR | Propósito | Módulos conectados |
|---|---|---|
| fur_usuarios | Ficha única de usuario | Usuarios, roles y perfiles |
| fur_productos | Ficha única de producto/anuncio | Productos, cosechas, insumos, maquinaria, fincas, servicios |
| fur_tiendas | Ficha única de tienda | Tiendas, proveedores, productores, asesores |
| fur_categorias | Ficha única de categoría | Taxonomía, filtros y SEO |
| fur_modulos | Ficha única de módulo funcional | Permisos, roadmap y configuración |
| fur_gbp_tiendas | Ficha Google Business Profile | SEO local y tiendas |
| fur_ofertas_promociones | Ficha de ofertas y promociones | Planes, promociones, destacados |
| fur_sprints | Ficha de sprint | Roadmap, desarrollo y gestión técnica |

## 43. Campos mínimos por FUR

### fur_usuarios

`id`, `user_id`, `fur_code`, `profile_type`, `legal_name`, `commercial_name`, `document_type`, `document_number`, `phone`, `whatsapp`, `email`, `country_id`, `department_id`, `municipality_id`, `verification_status`, `raw_json`, `created_at`, `updated_at`

### fur_productos

`id`, `product_id`, `listing_id`, `fur_code`, `product_type`, `category_id`, `subcategory_id`, `name`, `description`, `unit_id`, `price`, `currency_code`, `availability_status`, `quality_json`, `documents_json`, `raw_json`, `created_at`, `updated_at`

### fur_tiendas

`id`, `store_id`, `fur_code`, `store_type`, `commercial_name`, `legal_name`, `tax_id`, `main_category_id`, `whatsapp`, `email`, `address`, `location_json`, `verification_status`, `raw_json`

### fur_categorias

`id`, `category_id`, `fur_code`, `name`, `parent_id`, `slug`, `description`, `required_fields_json`, `optional_fields_json`, `filters_json`, `seo_json`, `moderation_rules_json`

### fur_modulos

`id`, `module_code`, `name`, `description`, `business_area`, `priority`, `status`, `permissions_json`, `dependencies_json`, `routes_json`, `tables_json`

### fur_gbp_tiendas

`id`, `store_id`, `gbp_location_name`, `gbp_category`, `address`, `phone`, `website_url`, `business_hours_json`, `services_json`, `posts_json`, `reviews_summary_json`, `optimization_status`

### fur_ofertas_promociones

`id`, `promotion_id`, `fur_code`, `promotion_type`, `name`, `description`, `start_date`, `end_date`, `discount_type`, `discount_value`, `rules_json`, `status`

### fur_sprints

`id`, `sprint_code`, `name`, `objective`, `start_date`, `end_date`, `status`, `epics_json`, `stories_json`, `tasks_json`, `acceptance_criteria_json`, `tables_json`, `modules_json`

# PARTE VI — MAPEO ODOO ESPEJO VS TABLAS PROPIAS

| Funcionalidad | Tabla espejo Odoo | Tabla propia marketplace |
|---|---|---|
| Contactos | `odoo_res_partner` | `mp_users`, `mp_user_profiles` |
| Empresas | `odoo_res_company` | `mp_stores`, `mp_store_profiles` |
| Productos base | `odoo_product_template` | `mp_products` |
| Variantes | `odoo_product_product` | `mp_product_variants` |
| Categorías | `odoo_product_category`, `odoo_product_public_category` | `mp_categories`, `mp_subcategories` |
| Unidades | `odoo_uom_uom` | `mp_product_units` |
| Inventario | `odoo_stock_quant` | `mp_product_inventory`, `mp_crop_harvests` |
| Ventas/cotizaciones | `odoo_sale_order` | `mp_quotes` |
| Leads | `odoo_crm_lead` | `mp_leads` |
| Pagos | `odoo_payment_transaction` | `mp_payments` |
| Facturas | `odoo_account_move` | `mp_invoices` |
| Vehículos | `odoo_fleet_vehicle` | `mp_transport_vehicles` |
| Agenda | `odoo_calendar_event` | `mp_service_availability`, `mp_service_visits` |
| Documentos | `odoo_ir_attachment` | `mp_product_documents`, `mp_farm_documents` |
| Blog | `odoo_blog_post` | `mp_blog_posts` |
| Radar | No aplica | `mp_radar_alerts`, `mp_radar_matches` |
| WhatsApp | No suficiente | `mp_whatsapp_events`, `mp_whatsapp_templates` |
| FUR | No aplica | `fur_usuarios`, `fur_productos`, `fur_tiendas`, etc. |

# PARTE VII — ESTRUCTURA DE CARPETAS EN VS CODE

## 44. Repositorio general

```txt
marketplace-agro/
├── README.md
├── package.json
├── docker-compose.yml
├── .env.example
├── docs/
│   ├── 00_documento_maestro/
│   ├── 01_mapa_sitio/
│   ├── 02_base_datos/
│   ├── 03_fur/
│   ├── 04_sprints/
│   └── 05_api/
├── frontend/
├── backend/
├── database/
├── sitemap/
├── scripts/
└── infrastructure/
```

## 45. Frontend ReactJS

```txt
frontend/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── .env.example
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── assets/
    ├── config/
    ├── app/
    │   ├── providers/
    │   ├── layouts/
    │   └── router/
    ├── shared/
    │   ├── components/
    │   ├── hooks/
    │   ├── services/
    │   ├── utils/
    │   ├── constants/
    │   └── types/
    ├── modules/
    │   ├── auth/
    │   ├── home/
    │   ├── users/
    │   ├── stores/
    │   ├── categories/
    │   ├── products/
    │   ├── listings/
    │   ├── farms/
    │   ├── inputs/
    │   ├── machinery/
    │   ├── services/
    │   ├── transport/
    │   ├── search/
    │   ├── radar/
    │   ├── whatsapp/
    │   ├── quotes/
    │   ├── leads/
    │   ├── favorites/
    │   ├── reviews/
    │   ├── payments/
    │   ├── notifications/
    │   ├── seo/
    │   ├── blog/
    │   ├── support/
    │   ├── fur/
    │   ├── admin/
    └── styles/
```

### Librerías frontend recomendadas

| Librería | Uso |
|---|---|
| react | UI principal |
| react-router-dom | Rutas |
| @tanstack/react-query | Data fetching/cache |
| axios | Cliente HTTP |
| zustand | Estado global ligero |
| react-hook-form | Formularios |
| zod | Validación |
| @hookform/resolvers | Resolver Zod |
| tailwindcss | Estilos |
| lucide-react | Iconos |
| dayjs | Fechas |
| react-dropzone | Carga de archivos |
| @react-google-maps/api | Mapas Google |
| mapbox-gl | Mapas alternativos |
| recharts | Gráficos |
| sonner | Notificaciones UI |

## 46. Backend NestJS

```txt
backend/
├── package.json
├── nest-cli.json
├── tsconfig.json
├── .env.example
└── src/
    ├── main.ts
    ├── app.module.ts
    ├── config/
    ├── common/
    │   ├── decorators/
    │   ├── filters/
    │   ├── guards/
    │   ├── interceptors/
    │   ├── pipes/
    │   └── utils/
    ├── database/
    │   ├── entities/
    │   ├── migrations/
    │   ├── seeders/
    │   └── data-source.ts
    ├── modules/
    │   ├── auth/
    │   ├── users/
    │   ├── roles/
    │   ├── permissions/
    │   ├── stores/
    │   ├── categories/
    │   ├── products/
    │   ├── listings/
    │   ├── farms/
    │   ├── agro-inputs/
    │   ├── machinery/
    │   ├── agronomic-services/
    │   ├── transport/
    │   ├── search/
    │   ├── radar/
    │   ├── whatsapp/
    │   ├── quotes/
    │   ├── leads/
    │   ├── favorites/
    │   ├── recommendations/
    │   ├── reviews/
    │   ├── verifications/
    │   ├── payments/
    │   ├── promotions/
    │   ├── notifications/
    │   ├── seo/
    │   ├── blog/
    │   ├── support/
    │   ├── fur/
    │   ├── odoo-mirror/
    │   ├── files/
    │   ├── audit/
    │   ├── admin/
    └── integrations/
        ├── whatsapp/
        ├── email/
        ├── maps/
        ├── payments/
        └── storage/
```

### Librerías backend recomendadas

| Librería | Uso |
|---|---|
| `@nestjs/core` | Framework backend |
| `@nestjs/common` | Núcleo NestJS |
| `@nestjs/config` | Configuración |
| `@nestjs/typeorm` | Integración TypeORM |
| `typeorm` | ORM |
| `mysql2` | Driver MySQL |
| `class-validator` | Validación DTO |
| `class-transformer` | Transformación DTO |
| `@nestjs/passport` | Autenticación |
| `passport-jwt` | JWT |
| `bcrypt` o `argon2` | Hash de contraseñas |
| `@nestjs/jwt` | Tokens |
| `@nestjs/swagger` | Documentación API |
| `helmet` | Seguridad HTTP |
| `@nestjs/throttler` | Rate limit |
| `multer` | Uploads |
| `sharp` | Procesamiento de imágenes |
| `nodemailer` | Email |
| `bullmq` | Colas |
| `ioredis` | Redis |
| `exceljs` | Exportación Excel |
| `csv-writer` | Exportación CSV |
| `winston` o `pino` | Logging |
| `googleapis` | Google APIs |
| `zod` | Validación compartida |

## 47. Base de datos

```txt
database/
├── README.md
├── mysql/
│   ├── 00_create_database.sql
│   ├── 01_catalogs/
│   ├── 02_odoo_mirror/
│   ├── 03_marketplace_core/
│   ├── 04_agro_verticals/
│   ├── 05_business/
│   ├── 06_fur/
│   ├── 07_seo_content/
│   ├── 08_audit_governance/
│   └── seeds/
└── diagrams/
    ├── erd_marketplace_agro.drawio
    └── erd_marketplace_agro.png
```

## 48. Mapa del sitio

```txt
sitemap/
├── README.md
├── public/
│   ├── home.md
│   ├── categorias.md
│   ├── productos-agricolas.md
│   ├── cosechas.md
│   ├── fincas-agricolas.md
│   ├── insumos-agricolas.md
│   ├── maquinaria-agricola.md
│   ├── servicios-agronomicos.md
│   ├── transporte-agricola.md
│   ├── radar-agricola.md
│   ├── blog.md
│   └── ayuda.md
├── auth/
├── dashboards/
├── admin/
└── sitemap.xml.template
```

# PARTE VIII — RUTAS API Y SPRINTS

## 49. Rutas API base

| Módulo | Ruta base API |
|---|---|
| Auth | `/api/auth` |
| Usuarios | `/api/users` |
| Roles | `/api/roles` |
| Tiendas | `/api/stores` |
| Categorías | `/api/categories` |
| Productos | `/api/products` |
| Publicaciones | `/api/listings` |
| Cosechas | `/api/crops` |
| Fincas | `/api/farms` |
| Insumos | `/api/agro-inputs` |
| Maquinaria | `/api/machinery` |
| Servicios | `/api/agronomic-services` |
| Transporte | `/api/transport` |
| Búsqueda | `/api/search` |
| Radar | `/api/radar` |
| WhatsApp | `/api/whatsapp` |
| Cotizaciones | `/api/quotes` |
| Leads | `/api/leads` |
| Favoritos | `/api/favorites` |
| Reputación | `/api/reviews` |
| Pagos | `/api/payments` |
| Promociones | `/api/promotions` |
| Notificaciones | `/api/notifications` |
| SEO | `/api/seo` |
| Blog | `/api/blog` |
| FUR | `/api/fur` |
| Odoo espejo | `/api/odoo-mirror` |
| Admin | `/api/admin` |

## 50. Sprints recomendados

| Sprint | Objetivo | Tablas principales |
|---|---|---|
| Sprint 00 | Preparación, arquitectura y alcance | `fur_sprints`, `fur_modulos` |
| Sprint 01 | Auth, usuarios, roles y permisos | `mp_users`, `mp_roles`, `mp_permissions`, `fur_usuarios` |
| Sprint 02 | Categorías y taxonomía agrícola | `mp_categories`, `mp_subcategories`, `fur_categorias` |
| Sprint 03 | Tiendas y perfiles comerciales | `mp_stores`, `mp_store_profiles`, `fur_tiendas` |
| Sprint 04 | Productos y cosechas | `mp_products`, `mp_crop_harvests`, `fur_productos` |
| Sprint 05 | Fincas agrícolas | `mp_farms`, `mp_farm_lots` |
| Sprint 06 | Insumos agrícolas | `mp_agro_inputs`, `mp_agro_input_prices` |
| Sprint 07 | Maquinaria agrícola | `mp_machinery`, `mp_machinery_specs` |
| Sprint 08 | Servicios agronómicos | `mp_agronomic_services`, `mp_service_requests` |
| Sprint 09 | Transporte agrícola | `mp_transport_services`, `mp_transport_routes` |
| Sprint 10 | Publicaciones y detalle | `mp_listings`, `mp_listing_media`, `mp_listing_documents` |
| Sprint 11 | Búsqueda y filtros | `mp_category_filters`, `mp_search_events` |
| Sprint 12 | WhatsApp y leads | `mp_whatsapp_events`, `mp_leads` |
| Sprint 13 | Cotizaciones | `mp_quotes`, `mp_quote_items` |
| Sprint 14 | Radar Agrícola | `mp_radar_alerts`, `mp_radar_matches` |
| Sprint 15 | Favoritos y comparador | `mp_favorites`, `mp_compare_lists` |
| Sprint 16 | Reputación y verificación | `mp_reviews`, `mp_verifications` |
| Sprint 17 | Pagos, planes y promociones | `mp_plans`, `mp_payments`, `fur_ofertas_promociones` |
| Sprint 18 | SEO, blog y sitemap | `mp_seo_pages`, `mp_blog_posts` |
| Sprint 19 | Administración y moderación | `mp_moderation_queue`, `audit_logs` |
| Sprint 20 | Reportes, analítica y gobernanza | `mp_recommendations`, `mp_governance_rules` |

# PARTE IX — DDL BASE DE REFERENCIA

## 51. Ejemplo tabla `mp_users`

```sql
CREATE TABLE mp_users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  odoo_res_user_id BIGINT NULL,
  odoo_res_partner_id BIGINT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(50) NULL,
  whatsapp VARCHAR(50) NULL,
  password_hash VARCHAR(255) NOT NULL,
  status ENUM('active','inactive','blocked','pending_verification') DEFAULT 'pending_verification',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME NULL
);
```

## 52. Ejemplo tabla `mp_listings`

```sql
CREATE TABLE mp_listings (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  store_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  category_id BIGINT NOT NULL,
  subcategory_id BIGINT NULL,
  product_id BIGINT NULL,
  listing_type VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NULL,
  price DECIMAL(15,2) NULL,
  currency_code VARCHAR(10) DEFAULT 'COP',
  unit_id BIGINT NULL,
  status ENUM('draft','review','published','featured','paused','sold','rented','expired','rejected','blocked') DEFAULT 'draft',
  location_json JSON NULL,
  attributes_json JSON NULL,
  published_at DATETIME NULL,
  expires_at DATETIME NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME NULL
);
```

## 53. Ejemplo tabla `fur_productos`

```sql
CREATE TABLE fur_productos (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  fur_code VARCHAR(50) NOT NULL UNIQUE,
  product_id BIGINT NULL,
  listing_id BIGINT NULL,
  product_type VARCHAR(100) NOT NULL,
  category_id BIGINT NOT NULL,
  subcategory_id BIGINT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NULL,
  unit_id BIGINT NULL,
  price DECIMAL(15,2) NULL,
  currency_code VARCHAR(10) DEFAULT 'COP',
  availability_status VARCHAR(50) DEFAULT 'available',
  quality_json JSON NULL,
  documents_json JSON NULL,
  raw_json JSON NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

# PARTE X — PRIORIZACIÓN MVP

## 54. Tablas propias mínimas para MVP

1. `mp_users`
2. `mp_roles`
3. `mp_permissions`
4. `mp_stores`
5. `mp_categories`
6. `mp_subcategories`
7. `mp_products`
8. `mp_crop_harvests`
9. `mp_listings`
10. `mp_listing_media`
11. `mp_quotes`
12. `mp_leads`
13. `mp_whatsapp_events`
14. `mp_radar_alerts`
15. `fur_usuarios`
16. `fur_productos`
17. `fur_tiendas`
18. `fur_categorias`
19. `fur_modulos`
20. `audit_logs`

## 55. Tablas espejo Odoo mínimas para MVP

1. `odoo_res_partner`
2. `odoo_res_users`
3. `odoo_res_company`
4. `odoo_product_template`
5. `odoo_product_product`
6. `odoo_product_category`
7. `odoo_product_public_category`
8. `odoo_uom_uom`
9. `odoo_uom_category`
10. `odoo_sale_order`
11. `odoo_sale_order_line`
12. `odoo_crm_lead`
13. `odoo_stock_quant`
14. `odoo_stock_lot`
15. `odoo_account_move`
16. `odoo_payment_transaction`
17. `odoo_ir_attachment`
18. `odoo_res_country`
19. `odoo_res_country_state`
20. `odoo_res_currency`

# CIERRE

El Marketplace Agro debe sostenerse con una arquitectura mixta: tablas espejo de Odoo para conservar compatibilidad conceptual con el ERP y tablas propias para resolver la operación especializada del marketplace agrícola. La lógica principal del negocio debe residir en las tablas propias del marketplace, especialmente en publicaciones, FUR, Radar AgroBot, WhatsApp, leads, cotizaciones, reputación, pagos y taxonomía agrícola.

---

# ANEXO INCORPORADO — BACKOFFICE POR ROLES

# ANEXO MAESTRO — BACKOFFICE POR ROLES DEL MARKETPLACE AGRO

## AgroBot Latam / Marketplace Agrícola

**Documento complementario del Documento Maestro de Tablas Odoo + Marketplace Agro**  
**Stack recomendado:** ReactJS + NestJS + MySQL + FUR + tablas espejo Odoo  
**Objetivo:** incorporar los backoffice por rol que no fueron desarrollados en el documento anterior, indicando para cada rol sus módulos internos, registros administrados, FUR relacionados, tablas propias del marketplace y tablas espejo Odoo que pueden alimentar la lógica de negocio.

---

# 1. Criterio rector de backoffice por roles

El marketplace agro debe manejar **backoffice diferenciados por rol**, no un único panel genérico. Cada usuario debe ver únicamente los módulos, registros, acciones y reportes que correspondan a su función comercial, técnica, logística, administrativa o institucional.

El backoffice debe cumplir estos principios:

1. **Menú por rol:** cada perfil tiene navegación propia.
2. **Permisos por módulo:** cada rol puede crear, leer, editar, aprobar, rechazar, pausar o eliminar según su nivel.
3. **Registros propios y compartidos:** algunos registros pertenecen al usuario, otros son visibles por relación comercial.
4. **FUR como ficha única de registro:** todos los registros importantes deben conectarse con una FUR.
5. **Odoo como espejo:** las tablas Odoo no operan electrónicamente con el marketplace; se usan como modelo de referencia o tablas espejo replicadas.
6. **Marketplace como núcleo operativo:** cuando Odoo no cubre la lógica de negocio agrícola, se crean tablas propias del marketplace.
7. **Trazabilidad:** toda acción relevante debe quedar en bitácora.
8. **Escalabilidad:** los roles deben permitir nuevos perfiles agrícolas sin romper la arquitectura.

---

# 2. Rutas base de backoffice por rol vigente

El usuario visitante no tiene backoffice privado. Su operación se soporta en rutas públicas del sitio: `/`, `/buscar`, `/categorias`, `/anuncio/:slug`, `/tienda/:slug`, `/ayuda`, `/login` y `/registro`.

```txt
/app
├── /dashboard
├── /comprador
├── /productor
├── /vendedor
├── /dueno-finca
├── /proveedor-insumos
├── /proveedor-maquinaria
├── /asesor-agricola
├── /transportista
├── /cooperativa
├── /laboratorio
├── /certificador
├── /inspector-calidad
└── /admin
```

---

# 3. FUR base utilizadas por los backoffice

## 3.1. FUR principales solicitadas

| FUR | Uso dentro del backoffice |
|---|---|
| FUR_Usuarios | Registro maestro de usuarios, roles, perfiles, documentos, permisos y verificación. |
| FUR_Productos | Registro maestro de productos agrícolas, cosechas, insumos, maquinaria y servicios publicables. |
| FUR_Tiendas | Registro maestro de tiendas, perfiles comerciales, proveedores, productores y vitrinas públicas. |
| FUR_Categorias | Registro de categorías, subcategorías, filtros, atributos y reglas por vertical agrícola. |
| FUR_Modulos | Registro de módulos funcionales, permisos, rutas, componentes y reglas de acceso. |
| FUR_GBP_Tiendas | Registro de Google Business Profile asociado a tiendas, proveedores, productores o sedes. |
| FUR_Ofertas_Promociones | Registro de descuentos, promociones, publicaciones destacadas, campañas y vigencias. |
| FUR_Sprint | Registro del roadmap, épicas, historias, tareas, criterios de aceptación y entregables. |

## 3.2. FUR complementarias recomendadas

| FUR complementaria | Uso recomendado |
|---|---|
| FUR_Publicaciones | Control de anuncios, estados, imágenes, documentos y vigencia. |
| FUR_Cotizaciones | Solicitudes de precio, negociación y respuestas. |
| FUR_Leads | Oportunidades comerciales generadas por WhatsApp, formularios, Radar o cotización. |
| FUR_Radar | Alertas inteligentes, criterios de búsqueda y coincidencias. |
| FUR_Reputacion | Reseñas, calificaciones, verificación y confianza. |
| FUR_Logistica | Vehículos, rutas, viajes, cotizaciones logísticas y entregas. |
| FUR_Servicios_Tecnicos | Servicios agronómicos, visitas, diagnósticos y agenda técnica. |
| FUR_Documentos | Archivos, certificados, fichas técnicas, soportes legales y documentos de validación. |
| FUR_Pagos | Planes, pagos, facturación, renovaciones y membresías. |
| FUR_Auditoria | Bitácora de acciones, eventos, cambios y trazabilidad. |

---

# 4. Tablas base comunes a todos los backoffice

## 4.1. Tablas propias del marketplace

| Tabla MySQL | Función |
|---|---|
| mk_users | Usuarios del marketplace. |
| mk_user_profiles | Datos extendidos de perfil. |
| mk_roles | Roles del sistema. |
| mk_permissions | Permisos funcionales. |
| mk_user_roles | Relación usuarios-roles. |
| mk_role_permissions | Permisos asignados por rol. |
| mk_stores | Tiendas, vitrinas y perfiles comerciales. |
| mk_categories | Categorías y subcategorías agrícolas. |
| mk_category_attributes | Atributos dinámicos por categoría. |
| mk_products | Productos, cosechas, insumos, maquinaria y servicios publicables. |
| mk_listings | Publicaciones/anuncios. |
| mk_listing_media | Fotos y videos de publicaciones. |
| mk_documents | Documentos, fichas técnicas y certificados. |
| mk_quotes | Solicitudes de cotización. |
| mk_quote_items | Detalle de productos o servicios cotizados. |
| mk_leads | Leads comerciales. |
| mk_radar_alerts | Alertas Radar Agrícola. |
| mk_radar_matches | Coincidencias del Radar. |
| mk_favorites | Favoritos por usuario. |
| mk_comparisons | Listas de comparación. |
| mk_reviews | Reseñas y calificaciones. |
| mk_verifications | Validaciones de identidad, empresa, finca o profesional. |
| mk_plans | Planes comerciales. |
| mk_subscriptions | Suscripciones activas. |
| mk_payments | Pagos y comprobantes. |
| mk_promotions | Ofertas y promociones. |
| mk_notifications | Notificaciones internas. |
| mk_whatsapp_events | Eventos de contacto por WhatsApp. |
| mk_support_tickets | Soporte y tickets. |
| mk_audit_logs | Auditoría y trazabilidad. |
| mk_gbp_profiles | Google Business Profile de tiendas o sedes. |
| mk_sprints | Sprints del desarrollo. |
| mk_sprint_epics | Épicas por sprint. |
| mk_sprint_stories | Historias de usuario. |
| mk_sprint_tasks | Tareas técnicas y funcionales. |

## 4.2. Tablas espejo Odoo sugeridas

Estas tablas son **copias espejo** de modelos nativos Odoo. No implican integración electrónica directa con Odoo.

| Tabla espejo MySQL | Tabla/modelo Odoo base | Uso lógico en marketplace |
|---|---|---|
| odoo_res_partner | res.partner | Contactos, empresas, proveedores, clientes. |
| odoo_res_users | res.users | Usuarios espejo de Odoo. |
| odoo_res_company | res.company | Empresas y compañías. |
| odoo_product_template | product.template | Productos base. |
| odoo_product_product | product.product | Variantes de producto. |
| odoo_product_category | product.category | Categorías comerciales. |
| odoo_product_pricelist | product.pricelist | Listas de precios. |
| odoo_sale_order | sale.order | Pedidos de venta espejo. |
| odoo_sale_order_line | sale.order.line | Líneas de venta. |
| odoo_purchase_order | purchase.order | Órdenes de compra. |
| odoo_purchase_order_line | purchase.order.line | Líneas de compra. |
| odoo_stock_quant | stock.quant | Existencias disponibles. |
| odoo_stock_move | stock.move | Movimientos de inventario. |
| odoo_stock_picking | stock.picking | Operaciones logísticas. |
| odoo_stock_location | stock.location | Ubicaciones de inventario. |
| odoo_account_move | account.move | Facturas y asientos contables. |
| odoo_account_move_line | account.move.line | Detalles contables. |
| odoo_payment_transaction | payment.transaction | Transacciones de pago. |
| odoo_crm_lead | crm.lead | Oportunidades comerciales. |
| odoo_project_project | project.project | Proyectos internos o sprints. |
| odoo_project_task | project.task | Tareas espejo. |
| odoo_calendar_event | calendar.event | Agenda de visitas y citas. |
| odoo_helpdesk_ticket | helpdesk.ticket | Tickets de soporte. |
| odoo_hr_employee | hr.employee | Personal interno y responsables administrativos del marketplace. |
| odoo_res_country | res.country | Países. |
| odoo_res_country_state | res.country.state | Estados/departamentos. |
| odoo_utm_campaign | utm.campaign | Campañas comerciales. |
| odoo_utm_source | utm.source | Fuente de tráfico. |
| odoo_utm_medium | utm.medium | Medio de campaña. |

---

# 5. Matriz general de backoffice por rol vigente

| N.º original | Rol vigente | Ruta sugerida | Backoffice | Tipo de acceso |
|---:|---|---|---|---|
| 1 | Usuario visitante | Rutas públicas | Sitio público sin backoffice privado | Visitante |
| 2 | Comprador agrícola | /app/comprador | Backoffice de compra, búsqueda, favoritos, Radar y cotizaciones | Cliente/comprador |
| 3 | Productor agrícola | /app/productor | Backoffice de producción, cosechas, publicaciones y leads | Vendedor/productor |
| 4 | Vendedor agrícola | /app/vendedor | Backoffice comercial multiventa | Vendedor |
| 5 | Dueño de finca agrícola | /app/dueno-finca | Backoffice inmobiliario rural agrícola | Propietario |
| 6 | Proveedor de insumos agrícolas | /app/proveedor-insumos | Backoffice de catálogo e inventario de insumos | Proveedor |
| 7 | Proveedor de maquinaria agrícola | /app/proveedor-maquinaria | Backoffice de maquinaria, equipos y repuestos | Proveedor |
| 8 | Agrónomo o asesor técnico | /app/asesor-agricola | Backoffice de servicios técnicos, agenda y solicitudes | Prestador técnico |
| 9 | Transportista agrícola | /app/transportista | Backoffice logístico, rutas, vehículos y cotizaciones | Prestador logístico |
| 12 | Administrador general | /app/admin | Backoffice maestro de administración, FUR, seguridad y configuración | Superadmin |
| 15 | Cooperativa agrícola | /app/cooperativa | Backoffice colectivo de asociados, oferta y compras agrupadas | Organización |
| 21 | Laboratorio agrícola | /app/laboratorio | Backoffice de análisis, muestras, resultados y documentos técnicos | Técnico |
| 22 | Certificador agrícola | /app/certificador | Backoffice de auditorías, certificados y trazabilidad | Técnico/legal |
| 27 | Inspector de calidad | /app/inspector-calidad | Backoffice de inspección, control de calidad y evidencias | Técnico |

---

# 6. Backoffice del Usuario Visitante

## 6.1. Objetivo

El usuario visitante no cuenta con un backoffice privado. Su experiencia se concentra en el sitio público, el buscador, las categorías, las páginas de detalle, las fichas públicas tipo Yelp, el contacto inicial y las rutas de autenticación.

## 6.2. Menú público habilitado

1. Inicio.
2. Buscar.
3. Categorías agrícolas.
4. Productos y cosechas.
5. Fincas agrícolas.
6. Insumos.
7. Maquinaria.
8. Servicios agronómicos.
9. Transporte agrícola.
10. Laboratorios.
11. Certificadores.
12. Ayuda.
13. Iniciar sesión.
14. Registrarse.

## 6.3. Registros que puede consultar

1. Publicaciones públicas.
2. Categorías y subcategorías públicas.
3. Perfiles públicos de tiendas, productores, proveedores, laboratorios y certificadores.
4. Reseñas públicas.
5. Páginas SEO.
6. Preguntas frecuentes.
7. Contenido educativo.

## 6.4. FUR relacionadas

1. FUR_MAPA_DEL_SITIO.
2. FUR_Categorias.
3. FUR_Modulos.
4. FUR_Productos, solo lectura pública.
5. FUR_Tiendas, solo lectura pública.

## 6.5. Tablas principales

1. mk_site_pages.
2. mk_categories.
3. mk_category_tree.
4. mk_listings.
5. mk_listing_media.
6. mk_store_profiles.
7. mk_reviews.
8. mk_seo_pages.
9. mk_blog_posts.

---

# 6. Backoffice del Comprador Agrícola

## 6.1. Objetivo

Permitir que el comprador agrícola busque oportunidades, cree alertas, solicite cotizaciones, compare opciones y gestione contactos comerciales.

## 6.2. Menú del backoffice

```txt
Comprador Agrícola
├── Dashboard
├── Mi Perfil
├── Mis Búsquedas
├── Radar Agrícola
├── Favoritos
├── Comparador
├── Cotizaciones Enviadas
├── Contactos por WhatsApp
├── Solicitudes de Transporte
├── Solicitudes Técnicas
├── Recomendaciones
├── Calificaciones Realizadas
├── Notificaciones
├── Soporte
└── Configuración
```

## 6.3. Módulos habilitados

1. Dashboard de comprador.
2. Perfil y preferencias agrícolas.
3. Buscador avanzado.
4. Radar Agrícola.
5. Favoritos.
6. Comparador.
7. Cotizaciones enviadas.
8. Contactos WhatsApp.
9. Historial de publicaciones vistas.
10. Recomendaciones.
11. Calificaciones.
12. Reportes de actividad.
13. Soporte.
14. Notificaciones.
15. Seguridad de cuenta.

## 6.4. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil comprador | Crear / editar / consultar |
| Preferencias agrícolas | Crear / editar |
| Búsquedas guardadas | Crear / editar / eliminar |
| Alertas Radar | Crear / pausar / renovar / cancelar |
| Favoritos | Crear / eliminar |
| Comparaciones | Crear / editar / eliminar |
| Cotizaciones enviadas | Crear / consultar / cancelar |
| Contactos WhatsApp | Consultar historial |
| Reseñas | Crear / editar dentro de ventana permitida |
| Tickets de soporte | Crear / consultar |

## 6.5. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Cotizaciones.
3. FUR_Radar.
4. FUR_Leads.
5. FUR_Reputacion.
6. FUR_Documentos.

## 6.6. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_users, mk_user_profiles, mk_radar_alerts, mk_radar_matches, mk_favorites, mk_comparisons, mk_quotes, mk_quote_items, mk_whatsapp_events, mk_reviews, mk_notifications, mk_support_tickets |
| Odoo espejo | odoo_res_partner, odoo_crm_lead, odoo_sale_order, odoo_sale_order_line |

---

# 7. Backoffice del Productor Agrícola

## 7.1. Objetivo

Gestionar cosechas, productos agrícolas, inventario disponible, leads, cotizaciones y ventas generadas desde la plataforma.

## 7.2. Menú del backoffice

```txt
Productor Agrícola
├── Dashboard
├── Perfil del Productor
├── Mis Cosechas
├── Mis Productos Agrícolas
├── Inventario de Cosechas
├── Publicar Cosecha
├── Mis Publicaciones
├── Leads Recibidos
├── Cotizaciones Recibidas
├── Contactos por WhatsApp
├── Radar de Demanda
├── Documentos y Certificaciones
├── Promociones
├── Estadísticas
├── Reputación
├── Planes y Pagos
├── Notificaciones
├── Soporte
└── Configuración
```

## 7.3. Módulos habilitados

1. Dashboard de productor.
2. Perfil productivo.
3. Gestión de cosechas.
4. Gestión de productos agrícolas.
5. Inventario disponible.
6. Publicaciones.
7. Fichas técnicas.
8. Documentos y certificaciones.
9. Leads.
10. Cotizaciones.
11. WhatsApp.
12. Promociones.
13. Estadísticas.
14. Reputación.
15. Pagos y planes.
16. Notificaciones.
17. Soporte.

## 7.4. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil productor | Crear / editar |
| Productos agrícolas | Crear / editar / pausar / eliminar lógico |
| Cosechas | Crear / editar / publicar / marcar vendida |
| Inventario de cosecha | Crear / editar / ajustar |
| Publicaciones | Crear / editar / pausar / renovar / destacar |
| Fotos y videos | Cargar / eliminar |
| Certificaciones | Cargar / solicitar validación |
| Leads recibidos | Consultar / cambiar estado / agregar nota |
| Cotizaciones recibidas | Responder / aceptar / rechazar |
| Promociones | Crear / activar / pausar |
| Reseñas recibidas | Consultar / responder |

## 7.5. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Productos.
3. FUR_Tiendas.
4. FUR_Categorias.
5. FUR_Publicaciones.
6. FUR_Cotizaciones.
7. FUR_Leads.
8. FUR_Documentos.
9. FUR_Ofertas_Promociones.
10. FUR_Reputacion.

## 7.6. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_users, mk_user_profiles, mk_stores, mk_products, mk_listings, mk_listing_media, mk_documents, mk_quotes, mk_quote_items, mk_leads, mk_whatsapp_events, mk_promotions, mk_reviews, mk_payments, mk_subscriptions, mk_notifications |
| Odoo espejo | odoo_res_partner, odoo_product_template, odoo_product_product, odoo_product_category, odoo_stock_quant, odoo_sale_order, odoo_sale_order_line, odoo_crm_lead |

---

# 8. Backoffice del Vendedor Agrícola

## 8.1. Objetivo

Administrar catálogo, publicaciones, precios, disponibilidad, promociones, leads y oportunidades comerciales.

## 8.2. Menú del backoffice

```txt
Vendedor Agrícola
├── Dashboard Comercial
├── Perfil Comercial
├── Tienda / Vitrina
├── Catálogo
├── Publicaciones
├── Precios
├── Inventario
├── Ofertas y Promociones
├── Leads
├── Cotizaciones
├── WhatsApp
├── Clientes Interesados
├── Estadísticas
├── Reputación
├── GBP de la Tienda
├── Planes y Pagos
└── Configuración
```

## 8.3. Módulos habilitados

1. Dashboard comercial.
2. Perfil comercial.
3. Tienda/vitrina.
4. Catálogo.
5. Publicaciones.
6. Precios.
7. Inventario.
8. Promociones.
9. Cotizaciones.
10. Leads.
11. WhatsApp.
12. Clientes interesados.
13. GBP.
14. Reputación.
15. Estadísticas.
16. Planes y pagos.

## 8.4. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil comercial | Crear / editar |
| Tienda | Crear / editar / activar / pausar |
| Catálogo | Crear / editar / importar / exportar |
| Productos | Crear / editar / pausar |
| Publicaciones | Crear / editar / renovar / destacar |
| Precios | Crear / editar |
| Inventario | Ajustar / consultar |
| Promociones | Crear / editar / activar / vencer |
| Leads | Gestionar pipeline |
| Cotizaciones | Responder / negociar / cerrar |
| GBP | Crear / editar datos internos |

## 8.5. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Tiendas.
3. FUR_Productos.
4. FUR_Categorias.
5. FUR_GBP_Tiendas.
6. FUR_Ofertas_Promociones.
7. FUR_Cotizaciones.
8. FUR_Leads.
9. FUR_Reputacion.

## 8.6. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_stores, mk_gbp_profiles, mk_products, mk_listings, mk_categories, mk_category_attributes, mk_promotions, mk_quotes, mk_leads, mk_whatsapp_events, mk_reviews, mk_payments, mk_subscriptions |
| Odoo espejo | odoo_res_partner, odoo_product_template, odoo_product_product, odoo_product_pricelist, odoo_stock_quant, odoo_sale_order, odoo_crm_lead |

---

# 9. Backoffice del Dueño de Finca Agrícola

## 9.1. Objetivo

Gestionar fincas, lotes, predios agrícolas, visitas, documentos, leads inmobiliarios rurales y publicaciones asociadas.

## 9.2. Menú del backoffice

```txt
Dueño de Finca Agrícola
├── Dashboard
├── Perfil del Propietario
├── Mis Fincas / Predios
├── Publicar Finca
├── Documentos del Predio
├── Galería
├── Solicitudes de Visita
├── Leads de Interesados
├── Cotizaciones / Propuestas
├── Mapa y Ubicación
├── Comparables
├── Estadísticas
├── Reputación
├── Planes y Pagos
└── Configuración
```

## 9.3. Módulos habilitados

1. Dashboard propietario.
2. Perfil propietario.
3. Registro de fincas.
4. Publicaciones inmobiliarias rurales.
5. Documentos.
6. Galería.
7. Solicitudes de visita.
8. Leads.
9. Propuestas comerciales.
10. Geolocalización.
11. Comparables.
12. Estadísticas.
13. Reputación.
14. Planes.

## 9.4. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil propietario | Crear / editar |
| Finca agrícola | Crear / editar / publicar / pausar |
| Lote rural | Crear / editar / publicar / pausar |
| Predio agroindustrial | Crear / editar / publicar / pausar |
| Documentos del predio | Cargar / actualizar / solicitar validación |
| Galería | Cargar / ordenar / eliminar |
| Solicitudes de visita | Consultar / aceptar / rechazar / reagendar |
| Leads | Consultar / gestionar |
| Publicaciones | Renovar / destacar / marcar vendido/arrendado |

## 9.5. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Productos.
3. FUR_Publicaciones.
4. FUR_Documentos.
5. FUR_Leads.
6. FUR_Reputacion.
7. FUR_Ofertas_Promociones.

## 9.6. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_users, mk_user_profiles, mk_products, mk_listings, mk_listing_media, mk_documents, mk_leads, mk_quotes, mk_reviews, mk_payments, mk_notifications |
| Odoo espejo | odoo_res_partner, odoo_product_template, odoo_crm_lead, odoo_calendar_event |

---

# 10. Backoffice del Proveedor de Insumos Agrícolas

## 10.1. Objetivo

Gestionar productos, fichas técnicas, inventario, cotizaciones, promociones, leads y reputación del proveedor.

## 10.2. Menú del backoffice

```txt
Proveedor de Insumos
├── Dashboard
├── Perfil del Proveedor
├── Tienda / Vitrina
├── Catálogo de Insumos
├── Crear Insumo
├── Inventario
├── Fichas Técnicas
├── Hojas de Seguridad
├── Certificaciones
├── Precios por Volumen
├── Cotizaciones Recibidas
├── Leads
├── Promociones
├── WhatsApp
├── GBP de la Tienda
├── Estadísticas
├── Reputación
├── Planes y Pagos
└── Configuración
```

## 10.3. Módulos habilitados

1. Dashboard proveedor.
2. Perfil del proveedor.
3. Tienda/vitrina.
4. Catálogo de insumos.
5. Inventario.
6. Fichas técnicas.
7. Documentos de seguridad.
8. Certificaciones.
9. Precios por volumen.
10. Cotizaciones.
11. Leads.
12. Promociones.
13. WhatsApp.
14. GBP.
15. Estadísticas.
16. Reputación.
17. Pagos y planes.

## 10.4. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil proveedor | Crear / editar |
| Tienda | Crear / editar |
| Insumos | Crear / editar / pausar / publicar |
| Inventario | Ajustar / consultar |
| Fichas técnicas | Cargar / actualizar |
| Hojas de seguridad | Cargar / actualizar |
| Certificaciones | Cargar / solicitar validación |
| Precios | Crear / editar por volumen |
| Cotizaciones | Responder / negociar / cerrar |
| Promociones | Crear / activar / pausar |
| Leads | Gestionar |

## 10.5. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Tiendas.
3. FUR_Productos.
4. FUR_Categorias.
5. FUR_GBP_Tiendas.
6. FUR_Ofertas_Promociones.
7. FUR_Cotizaciones.
8. FUR_Documentos.
9. FUR_Leads.

## 10.6. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_stores, mk_products, mk_listings, mk_documents, mk_quotes, mk_quote_items, mk_leads, mk_promotions, mk_gbp_profiles, mk_reviews, mk_payments |
| Odoo espejo | odoo_res_partner, odoo_product_template, odoo_product_product, odoo_product_category, odoo_stock_quant, odoo_product_pricelist, odoo_sale_order |

---

# 11. Backoffice del Proveedor de Maquinaria Agrícola

## 11.1. Objetivo

Administrar publicaciones de maquinaria nueva, usada, alquiler, repuestos, servicios asociados, cotizaciones y disponibilidad.

## 11.2. Menú del backoffice

```txt
Proveedor de Maquinaria
├── Dashboard
├── Perfil Comercial
├── Tienda / Vitrina
├── Catálogo de Maquinaria
├── Maquinaria Nueva
├── Maquinaria Usada
├── Maquinaria en Alquiler
├── Repuestos
├── Publicar Equipo
├── Inventario de Equipos
├── Fichas Técnicas
├── Cotizaciones Recibidas
├── Solicitudes de Inspección
├── Leads
├── Promociones
├── Estadísticas
├── Reputación
├── Planes y Pagos
└── Configuración
```

## 11.3. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil comercial | Crear / editar |
| Maquinaria | Crear / editar / publicar / pausar |
| Repuestos | Crear / editar / publicar / pausar |
| Alquileres | Crear / editar disponibilidad |
| Inventario de equipos | Consultar / ajustar |
| Fichas técnicas | Cargar / actualizar |
| Cotizaciones | Responder / negociar |
| Solicitudes de inspección | Aceptar / rechazar / agendar |
| Promociones | Crear / activar / pausar |
| Leads | Gestionar |

## 11.4. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Tiendas.
3. FUR_Productos.
4. FUR_Categorias.
5. FUR_Documentos.
6. FUR_Cotizaciones.
7. FUR_Leads.
8. FUR_Ofertas_Promociones.
9. FUR_Reputacion.

## 11.5. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_products, mk_listings, mk_listing_media, mk_documents, mk_quotes, mk_quote_items, mk_leads, mk_promotions, mk_reviews, mk_payments |
| Odoo espejo | odoo_product_template, odoo_product_product, odoo_stock_quant, odoo_sale_order, odoo_crm_lead |

---

# 12. Backoffice del Asesor Agrícola / Agrónomo

## 12.1. Objetivo

Gestionar servicios técnicos, agenda, visitas, clientes, diagnósticos, documentos profesionales, cotizaciones y reputación.

## 12.2. Menú del backoffice

```txt
Asesor Agrícola
├── Dashboard
├── Perfil Profesional
├── Especialidades
├── Servicios Ofrecidos
├── Publicar Servicio
├── Agenda
├── Solicitudes Recibidas
├── Cotizaciones de Servicio
├── Clientes
├── Visitas Técnicas
├── Diagnósticos
├── Documentos Profesionales
├── Reseñas y Calificaciones
├── Estadísticas
├── Promocionar Servicio
├── Planes y Pagos
└── Configuración
```

## 12.3. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil profesional | Crear / editar |
| Especialidades | Crear / editar |
| Servicios | Crear / editar / publicar / pausar |
| Agenda | Crear / editar disponibilidad |
| Solicitudes | Aceptar / rechazar / reagendar |
| Cotizaciones de servicio | Responder / cerrar |
| Clientes | Consultar |
| Visitas técnicas | Crear / cerrar |
| Diagnósticos | Crear / editar / adjuntar |
| Documentos profesionales | Cargar / actualizar |
| Reseñas | Consultar / responder |

## 12.4. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Servicios_Tecnicos.
3. FUR_Publicaciones.
4. FUR_Cotizaciones.
5. FUR_Documentos.
6. FUR_Reputacion.
7. FUR_Leads.

## 12.5. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_users, mk_user_profiles, mk_products, mk_listings, mk_quotes, mk_leads, mk_documents, mk_reviews, mk_notifications, mk_support_tickets |
| Odoo espejo | odoo_res_partner, odoo_calendar_event, odoo_crm_lead, odoo_project_task |

---

# 13. Backoffice del Transportista Agrícola

## 13.1. Objetivo

Gestionar vehículos, rutas, disponibilidad, solicitudes de transporte, cotizaciones, viajes y reputación logística.

## 13.2. Menú del backoffice

```txt
Transportista Agrícola
├── Dashboard
├── Perfil del Transportista
├── Vehículos
├── Documentos del Vehículo
├── Rutas Frecuentes
├── Disponibilidad
├── Publicar Servicio de Transporte
├── Solicitudes Recibidas
├── Cotizaciones Enviadas
├── Viajes Programados
├── Viajes Realizados
├── Tarifas por Ruta
├── Zonas de Cobertura
├── Reseñas y Calificaciones
├── Estadísticas
├── Planes y Pagos
└── Configuración
```

## 13.3. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil transportista | Crear / editar |
| Vehículos | Crear / editar / activar / pausar |
| Documentos vehículo | Cargar / actualizar |
| Rutas | Crear / editar / publicar |
| Disponibilidad | Crear / editar |
| Solicitudes | Aceptar / rechazar |
| Cotizaciones | Crear / enviar / cerrar |
| Viajes | Programar / iniciar / finalizar |
| Tarifas | Crear / editar |
| Reseñas | Consultar / responder |

## 13.4. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Logistica.
3. FUR_Publicaciones.
4. FUR_Cotizaciones.
5. FUR_Documentos.
6. FUR_Reputacion.
7. FUR_Leads.

## 13.5. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_users, mk_user_profiles, mk_products, mk_listings, mk_documents, mk_quotes, mk_quote_items, mk_leads, mk_reviews, mk_notifications |
| Odoo espejo | odoo_res_partner, odoo_stock_picking, odoo_stock_move, odoo_calendar_event, odoo_crm_lead |

---

# 16. Backoffice de Cooperativa o Asociación Agrícola

## 16.1. Objetivo

Gestionar productores asociados, publicaciones colectivas, inventario agregado, centros de acopio, leads, cotizaciones y reportes por asociado.

## 16.2. Menú del backoffice

```txt
Cooperativa / Asociación
├── Dashboard
├── Perfil Institucional
├── Asociados
├── Productores Miembros
├── Publicaciones Colectivas
├── Inventario Consolidado
├── Centros de Acopio
├── Cotizaciones Recibidas
├── Leads
├── Documentos Institucionales
├── Certificaciones
├── Ofertas y Campañas
├── Reportes por Asociado
├── Reputación
├── Planes y Pagos
└── Configuración
```

## 16.3. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil institucional | Crear / editar |
| Asociados | Crear / editar / desactivar |
| Productores miembros | Vincular / desvincular |
| Publicaciones colectivas | Crear / editar / publicar |
| Inventario consolidado | Crear / actualizar |
| Centros de acopio | Crear / editar |
| Cotizaciones | Responder / asignar a asociado |
| Leads | Gestionar / asignar |
| Certificaciones | Cargar / solicitar validación |
| Reportes | Consultar / exportar |

## 16.4. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Tiendas.
3. FUR_Productos.
4. FUR_Publicaciones.
5. FUR_Cotizaciones.
6. FUR_Leads.
7. FUR_Documentos.
8. FUR_Reputacion.

## 16.5. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_users, mk_user_profiles, mk_stores, mk_products, mk_listings, mk_documents, mk_quotes, mk_leads, mk_reviews, mk_payments |
| Odoo espejo | odoo_res_partner, odoo_product_template, odoo_stock_quant, odoo_crm_lead, odoo_sale_order |

---

# 20. Backoffice del Laboratorio Agrícola

## 20.1. Objetivo

Gestionar servicios de análisis de suelo, agua, foliar, residuos, resultados, documentos y agenda técnica.

## 20.2. Menú del backoffice

```txt
Laboratorio Agrícola
├── Dashboard
├── Perfil del Laboratorio
├── Servicios de Análisis
├── Solicitudes Recibidas
├── Agenda de Muestreo
├── Muestras
├── Resultados
├── Documentos Técnicos
├── Cotizaciones
├── Clientes
├── Reseñas
├── Estadísticas
└── Configuración
```

## 20.3. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil laboratorio | Crear / editar |
| Servicios análisis | Crear / editar / publicar |
| Solicitudes | Aceptar / rechazar / agendar |
| Muestras | Registrar / actualizar estado |
| Resultados | Crear / adjuntar / publicar al cliente |
| Documentos técnicos | Cargar / actualizar |
| Cotizaciones | Responder / cerrar |
| Clientes | Consultar |
| Reseñas | Consultar / responder |

## 20.4. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Servicios_Tecnicos.
3. FUR_Documentos.
4. FUR_Cotizaciones.
5. FUR_Reputacion.

## 20.5. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_products, mk_listings, mk_documents, mk_quotes, mk_leads, mk_reviews, mk_notifications |
| Odoo espejo | odoo_res_partner, odoo_calendar_event, odoo_project_task, odoo_crm_lead |

---

# 21. Backoffice del Certificador Agrícola

## 21.1. Objetivo

Gestionar solicitudes de certificación, auditorías, documentos, evidencias, estados de certificación y vigencias.

## 21.2. Menú del backoffice

```txt
Certificador Agrícola
├── Dashboard
├── Perfil Certificador
├── Servicios de Certificación
├── Solicitudes Recibidas
├── Auditorías
├── Evidencias
├── Certificados Emitidos
├── Vigencias
├── Documentos
├── Cotizaciones
├── Clientes
├── Reportes
└── Configuración
```

## 21.3. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil certificador | Crear / editar |
| Servicio certificación | Crear / editar / publicar |
| Solicitudes | Aceptar / rechazar / programar |
| Auditorías | Crear / editar / cerrar |
| Evidencias | Cargar / validar |
| Certificados | Emitir / renovar / vencer |
| Vigencias | Crear / actualizar |
| Cotizaciones | Responder / cerrar |
| Documentos | Cargar / actualizar |

## 21.4. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Servicios_Tecnicos.
3. FUR_Documentos.
4. FUR_Cotizaciones.
5. FUR_Reputacion.
6. FUR_Auditoria.

## 21.5. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_products, mk_listings, mk_documents, mk_quotes, mk_leads, mk_reviews, mk_audit_logs |
| Odoo espejo | odoo_res_partner, odoo_calendar_event, odoo_project_task, odoo_crm_lead |

---

# 24. Backoffice del Inspector de Calidad

## 24.1. Objetivo

Gestionar inspecciones, solicitudes, resultados, documentos, evidencias y calificaciones técnicas.

## 24.2. Menú del backoffice

```txt
Inspector de Calidad
├── Dashboard
├── Perfil Inspector
├── Servicios de Inspección
├── Solicitudes Recibidas
├── Agenda
├── Inspecciones Programadas
├── Resultados de Inspección
├── Evidencias
├── Documentos
├── Cotizaciones
├── Reseñas
└── Configuración
```

## 24.3. Registros que administra

| Registro | Acción permitida |
|---|---|
| Perfil inspector | Crear / editar |
| Servicios inspección | Crear / editar / publicar |
| Solicitudes | Aceptar / rechazar / agendar |
| Inspecciones | Crear / actualizar / cerrar |
| Resultados | Crear / adjuntar / publicar al cliente |
| Evidencias | Cargar / actualizar |
| Documentos | Cargar / actualizar |
| Cotizaciones | Responder / cerrar |
| Reseñas | Consultar / responder |

## 24.4. FUR relacionadas

1. FUR_Usuarios.
2. FUR_Servicios_Tecnicos.
3. FUR_Documentos.
4. FUR_Cotizaciones.
5. FUR_Reputacion.
6. FUR_Auditoria.

## 24.5. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | mk_products, mk_listings, mk_documents, mk_quotes, mk_leads, mk_reviews, mk_audit_logs, mk_notifications |
| Odoo espejo | odoo_res_partner, odoo_calendar_event, odoo_project_task, odoo_crm_lead |

---

# 29. Backoffice del Administrador General

## 29.1. Objetivo

Controlar toda la plataforma: usuarios, roles, permisos, FUR, categorías, publicaciones, pagos, módulos, configuración, auditoría, SEO, soporte y roadmap.

## 29.2. Menú del backoffice

```txt
Administrador General
├── Dashboard General
├── Usuarios
├── Roles y Permisos
├── FUR
│   ├── FUR_Usuarios
│   ├── FUR_Productos
│   ├── FUR_Tiendas
│   ├── FUR_Categorias
│   ├── FUR_Modulos
│   ├── FUR_GBP_Tiendas
│   ├── FUR_Ofertas_Promociones
│   └── FUR_Sprint
├── Categorías y Atributos
├── Productos y Publicaciones
├── Tiendas y GBP
├── Cotizaciones
├── Leads
├── Radar Agrícola
├── Ofertas y Promociones
├── Planes y Pagos
├── Reputación y Verificación
├── Moderación
├── Notificaciones
├── SEO y Contenido
├── Soporte
├── Reportes
├── Auditoría
├── Configuración General
└── Roadmap / Sprints
```

## 29.3. Módulos habilitados

1. Dashboard global.
2. Gestión de usuarios.
3. Gestión de roles.
4. Gestión de permisos.
5. Gestión de FUR.
6. Gestión de categorías.
7. Gestión de atributos.
8. Gestión de productos.
9. Gestión de publicaciones.
10. Gestión de tiendas.
11. Gestión de GBP.
12. Gestión de cotizaciones.
13. Gestión de leads.
14. Gestión de Radar.
15. Gestión de promociones.
16. Gestión de planes.
17. Gestión de pagos.
18. Gestión de reputación.
19. Gestión de verificaciones.
20. Gestión de moderación.
21. Gestión de notificaciones.
22. Gestión SEO.
23. Gestión de blog.
24. Gestión de soporte.
25. Gestión de reportes.
26. Gestión de auditoría.
27. Gestión de configuración.
28. Gestión de sprints.

## 29.4. Registros que administra

| Registro | Acción permitida |
|---|---|
| Usuarios | Crear / editar / activar / suspender / eliminar lógico |
| Roles | Crear / editar / asignar |
| Permisos | Crear / editar / asignar |
| Módulos | Crear / editar / activar / pausar |
| Categorías | Crear / editar / ordenar / desactivar |
| Atributos | Crear / editar / asignar |
| Productos | Consultar / editar / bloquear |
| Publicaciones | Aprobar / rechazar / bloquear / destacar |
| Tiendas | Crear / editar / validar / suspender |
| GBP | Crear / editar / validar |
| Cotizaciones | Consultar / auditar |
| Leads | Consultar / asignar / exportar |
| Radar | Consultar / activar / pausar / auditar |
| Promociones | Crear / editar / aprobar |
| Pagos | Consultar / validar / auditar |
| Planes | Crear / editar / activar |
| Verificaciones | Aprobar / rechazar |
| Sprints | Crear / editar / cerrar |
| Auditoría | Consultar / exportar |

## 29.5. FUR relacionadas

1. Todas las FUR principales.
2. FUR_Auditoria.
3. FUR_Documentos.
4. FUR_Pagos.
5. FUR_Radar.
6. FUR_Leads.
7. FUR_Reputacion.

## 29.6. Tablas principales

| Tipo | Tablas |
|---|---|
| Marketplace | Todas las tablas mk_* |
| Odoo espejo | Todas las tablas odoo_* disponibles como espejo |

---

# 30. Matriz CRUD resumida por rol vigente

| Rol vigente | Usuarios | Productos / Servicios | Publicaciones | Cotizaciones | Leads | Radar | Pagos | Moderación | Reportes |
|---|---|---|---|---|---|---|---|---|---|
| Usuario visitante | No | R público | R público | No | No | No | No | Reportar público | No |
| Comprador agrícola | R/U propio | R | R | C/R/U propio | R propio | C/R/U propio | R propio | Reportar | R propio |
| Productor agrícola | R/U propio | C/R/U propio | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |
| Vendedor agrícola | R/U propio | C/R/U propio | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |
| Dueño finca agrícola | R/U propio | C/R/U predios | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |
| Proveedor insumos agrícolas | R/U propio | C/R/U propio | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |
| Proveedor maquinaria agrícola | R/U propio | C/R/U propio | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |
| Agrónomo / asesor técnico | R/U propio | C/R/U servicios | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |
| Transportista agrícola | R/U propio | C/R/U servicios | C/R/U propio | C/R/U propio | R/U propio | R propio | R propio | No | R propio |
| Administrador general | C/R/U/D lógico | C/R/U/D lógico | C/R/U/D lógico | C/R/U/D lógico | C/R/U/D lógico | C/R/U/D lógico | C/R/U | C/R/U/D lógico | C/R/export |
| Cooperativa agrícola | R/U propio/asociados | C/R/U colectivo | C/R/U colectivo | C/R/U colectivo | R/U colectivo | C/R/U propio | R propio | No | R colectivo |
| Laboratorio agrícola | R/U propio | C/R/U servicios/resultados | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |
| Certificador agrícola | R/U propio | C/R/U certificaciones | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |
| Inspector de calidad | R/U propio | C/R/U inspecciones | C/R/U propio | R/U propio | R/U propio | R propio | R propio | No | R propio |

**Leyenda:** C = Crear, R = Leer, U = Actualizar, D lógico = eliminar/desactivar sin borrado físico.

---

# 31. Registros maestros por FUR y backoffice

## 31.1. FUR_Usuarios

Registros:

1. Usuario.
2. Perfil.
3. Rol.
4. Permisos.
5. Documentos de identidad.
6. Verificación.
7. Preferencias.
8. Ubicación.
9. WhatsApp.
10. Estado de cuenta.

Backoffice que lo usan:

1. Comprador agrícola.
2. Productor agrícola.
3. Vendedor agrícola.
4. Dueño de finca agrícola.
5. Proveedor de insumos agrícolas.
6. Proveedor de maquinaria agrícola.
7. Agrónomo o asesor técnico.
8. Transportista agrícola.
9. Cooperativa agrícola.
10. Laboratorio agrícola.
11. Certificador agrícola.
12. Inspector de calidad.
13. Administrador general.

## 31.2. FUR_Productos

Registros:

1. Producto agrícola.
2. Cosecha.
3. Insumo.
4. Maquinaria.
5. Servicio técnico.
6. Servicio logístico.
7. Finca/predio como producto publicable.
8. Ficha técnica.
9. Precio.
10. Inventario.

Backoffice que lo usan:

1. Productor.
2. Vendedor.
3. Dueño de finca.
4. Proveedor de insumos.
5. Proveedor de maquinaria.
6. Asesor agrícola.
7. Transportista.
8. Administrador.

## 31.3. FUR_Tiendas

Registros:

1. Tienda.
2. Vitrina pública.
3. Perfil comercial.
4. Sede.
5. Zona de cobertura.
6. Horarios.
7. Contactos.
8. Catálogo asociado.
9. Reputación.
10. Estado de tienda.

Backoffice que lo usan:

1. Vendedor.
2. Productor.
3. Proveedor de insumos.
4. Proveedor de maquinaria.
5. Cooperativa.
6. Centro de acopio.
7. Administrador.

## 31.4. FUR_Categorias

Registros:

1. Categoría.
2. Subcategoría.
3. Atributo.
4. Filtro.
5. Unidad de medida.
6. Regla de publicación.
7. Plantilla de ficha técnica.
8. Icono.
9. Orden.
10. Estado.

Backoffice que lo usan:

1. Administrador.
2. Productor agrícola.
3. Vendedor agrícola.
4. Dueño de finca agrícola.
5. Proveedor de insumos agrícolas.
6. Proveedor de maquinaria agrícola.
7. Cooperativa agrícola.
8. Laboratorio agrícola.
9. Certificador agrícola.
10. Inspector de calidad.
11. Todos los roles publicadores vigentes.

## 31.5. FUR_Modulos

Registros:

1. Módulo.
2. Submódulo.
3. Ruta.
4. Componente frontend.
5. Servicio backend.
6. Permisos.
7. Rol autorizado.
8. Estado del módulo.
9. Dependencias.
10. Configuración.

Backoffice que lo usan:

1. Administrador.
2. Equipo técnico.
3. Inspector de calidad con lectura cuando aplique a inspecciones.
4. Certificador agrícola con lectura cuando aplique a certificaciones.
5. Laboratorio agrícola con lectura cuando aplique a resultados técnicos.

## 31.6. FUR_GBP_Tiendas

Registros:

1. Perfil GBP.
2. Tienda relacionada.
3. Nombre comercial.
4. Dirección.
5. Teléfono.
6. Categoría GBP.
7. Horario.
8. URL.
9. Estado.
10. Observaciones SEO local.

Backoffice que lo usan:

1. Vendedor agrícola.
2. Productor agrícola con tienda.
3. Dueño de finca agrícola con perfil público.
4. Proveedor de insumos agrícolas.
5. Proveedor de maquinaria agrícola.
6. Cooperativa agrícola.
7. Laboratorio agrícola.
8. Certificador agrícola.
9. Administrador general.

## 31.7. FUR_Ofertas_Promociones

Registros:

1. Oferta.
2. Promoción.
3. Cupón.
4. Publicación destacada.
5. Campaña.
6. Fecha inicio.
7. Fecha fin.
8. Descuento.
9. Estado.
10. Métricas.

Backoffice que lo usan:

1. Productor agrícola.
2. Vendedor agrícola.
3. Proveedor de insumos agrícolas.
4. Proveedor de maquinaria agrícola.
5. Dueño de finca agrícola cuando publique predios destacados.
6. Cooperativa agrícola.
7. Laboratorio agrícola.
8. Certificador agrícola.
9. Administrador general.

## 31.8. FUR_Sprint

Registros:

1. Sprint.
2. Épica.
3. Historia de usuario.
4. Tarea.
5. Criterio de aceptación.
6. Responsable.
7. Estado.
8. Prioridad.
9. Entregable.
10. Evidencia.

Backoffice que lo usan:

1. Administrador.
2. Equipo técnico.
3. Product owner.
4. Scrum master.

---

# 32. Estructura VS Code recomendada para backoffice por roles

## 32.1. Frontend ReactJS

```txt
frontend/
├── src/
│   ├── app/
│   │   ├── routes/
│   │   │   ├── public/
│   │   │   └── private/
│   │   ├── layouts/
│   │   │   ├── PublicLayout.tsx
│   │   │   ├── AuthLayout.tsx
│   │   │   ├── BackofficeLayout.tsx
│   │   │   └── AdminLayout.tsx
│   │   └── guards/
│   │       ├── AuthGuard.tsx
│   │       ├── RoleGuard.tsx
│   │       └── PermissionGuard.tsx
│   ├── modules/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── usuarios/
│   │   ├── roles-permisos/
│   │   ├── fur/
│   │   ├── categorias/
│   │   ├── productos/
│   │   ├── publicaciones/
│   │   ├── tiendas/
│   │   ├── gbp/
│   │   ├── cotizaciones/
│   │   ├── leads/
│   │   ├── radar/
│   │   ├── ofertas-promociones/
│   │   ├── pagos-planes/
│   │   ├── reputacion/
│   │   ├── moderacion/
│   │   ├── notificaciones/
│   │   ├── soporte/
│   │   ├── reportes/
│   │   ├── auditoria/
│   │   └── sprints/
│   ├── backoffices/
│   │   ├── comprador/
│   │   ├── productor/
│   │   ├── vendedor/
│   │   ├── dueno-finca/
│   │   ├── proveedor-insumos/
│   │   ├── proveedor-maquinaria/
│   │   ├── asesor-agricola/
│   │   ├── transportista/
│   │   ├── cooperativa/
│   │   ├── laboratorio/
│   │   ├── certificador/
│   │   ├── inspector-calidad/
│   │   └── admin/
│   ├── components/
│   │   ├── forms/
│   │   ├── tables/
│   │   ├── cards/
│   │   ├── charts/
│   │   ├── modals/
│   │   └── navigation/
│   ├── services/
│   ├── hooks/
│   ├── store/
│   ├── types/
│   ├── utils/
│   └── config/
```

## 32.2. Backend NestJS

```txt
backend/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   ├── common/
│   │   ├── guards/
│   │   ├── decorators/
│   │   ├── interceptors/
│   │   ├── filters/
│   │   └── pipes/
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── roles/
│   │   ├── permissions/
│   │   ├── fur/
│   │   ├── categories/
│   │   ├── products/
│   │   ├── listings/
│   │   ├── stores/
│   │   ├── gbp/
│   │   ├── quotes/
│   │   ├── leads/
│   │   ├── radar/
│   │   ├── promotions/
│   │   ├── payments/
│   │   ├── reviews/
│   │   ├── moderation/
│   │   ├── notifications/
│   │   ├── support/
│   │   ├── reports/
│   │   ├── audit/
│   │   ├── files/
│   │   ├── sprints/
│   │   └── odoo-mirrors/
│   ├── backoffice/
│   │   ├── comprador/
│   │   ├── productor/
│   │   ├── vendedor/
│   │   ├── proveedor-insumos/
│   │   ├── proveedor-maquinaria/
│   │   ├── asesor-agricola/
│   │   ├── transportista/
│   │   ├── cooperativa/
│   │   ├── laboratorio/
│   │   ├── certificador/
│   │   ├── inspector-calidad/
│   │   └── admin/
│   └── database/
│       ├── entities/
│       ├── migrations/
│       ├── seeders/
│       └── mysql/
```

## 32.3. Base de datos

```txt
database/
├── mysql/
│   ├── schema/
│   │   ├── 01_security_roles_permissions.sql
│   │   ├── 02_fur_master_tables.sql
│   │   ├── 03_marketplace_core.sql
│   │   ├── 04_backoffice_role_tables.sql
│   │   ├── 05_odoo_mirror_tables.sql
│   │   ├── 06_indexes.sql
│   │   └── 07_views.sql
│   ├── seeds/
│   │   ├── roles.seed.sql
│   │   ├── permissions.seed.sql
│   │   ├── modules.seed.sql
│   │   ├── categories.seed.sql
│   │   └── backoffice_menus.seed.sql
│   └── docs/
│       ├── ERD_BACKOFFICE_ROLES.md
│       ├── MATRIZ_CRUD_ROLES.md
│       └── FUR_RELACIONES.md
```

---

# 33. Tablas propias adicionales para soportar backoffice por roles

Además de las tablas del documento maestro, se recomienda agregar estas tablas específicas para backoffice:

| Tabla | Función |
|---|---|
| mk_backoffice_menus | Menús visibles por rol. |
| mk_backoffice_menu_items | Ítems de menú y rutas internas. |
| mk_role_dashboard_widgets | Widgets habilitados por rol. |
| mk_role_module_access | Acceso de roles a módulos. |
| mk_role_record_permissions | Permisos CRUD por tipo de registro. |
| mk_user_backoffice_preferences | Preferencias de backoffice por usuario. |
| mk_backoffice_shortcuts | Accesos rápidos configurables. |
| mk_backoffice_activity_feed | Feed de actividad por rol. |
| mk_backoffice_kpis | KPIs calculados por backoffice. |
| mk_backoffice_saved_filters | Filtros guardados por usuario/rol. |
| mk_backoffice_exports | Historial de exportaciones. |
| mk_backoffice_bulk_actions | Acciones masivas permitidas. |
| mk_backoffice_approval_flows | Flujos de aprobación por módulo. |
| mk_backoffice_notifications_rules | Reglas de notificación por rol. |
| mk_backoffice_onboarding_steps | Onboarding por rol. |

---

# 34. Ejemplo de definición de permisos por módulo

```txt
Módulo: Publicaciones
├── comprador: read_public
├── productor: create_own, read_own, update_own, pause_own, renew_own
├── vendedor: create_own, read_own, update_own, pause_own, renew_own, promote_own
├── proveedor_insumos: create_own, read_own, update_own, promote_own
├── proveedor_maquinaria: create_own, read_own, update_own, promote_own
├── asesor_agricola: create_own_service, read_own, update_own
├── transportista: create_own_route, read_own, update_own
├── cooperativa: create_collective, read_collective, update_collective
├── laboratorio: create_own_service, read_own, update_own, upload_results
├── certificador: create_own_service, read_own, update_own, issue_certificate
├── inspector_calidad: create_inspection, read_assigned, update_assigned, upload_evidence
└── admin: create_all, read_all, update_all, delete_logical, approve, reject, block
```

---

# 35. Conclusión del anexo

Este anexo completa el documento maestro incorporando los **backoffice por roles** que requiere el Marketplace Agro. Cada rol cuenta con un panel propio, módulos específicos, registros administrables, FUR relacionadas y tablas de soporte.

La arquitectura recomendada permite que el marketplace agro funcione como una plataforma especializada, escalable y gobernada por permisos, donde cada actor del ecosistema agrícola tiene una experiencia operativa diferente: compradores, productores, vendedores, proveedores, asesores, transportistas, cooperativas, laboratorios, certificadores, inspectores de calidad y administradores generales.

El uso de FUR garantiza orden documental y trazabilidad. Las tablas propias del marketplace soportan la lógica agrícola especializada, mientras que las tablas espejo Odoo sirven como referencia estructural y contable sin requerir integración electrónica directa.



# NOTA FINAL V3.1

Esta versión no resume el diseño tipo Yelp, la funcionalidad tipo MercadoLibre, las FUR técnicas, las tablas Odoo espejo, las tablas propias, los módulos nativos, los módulos propios, las librerías Node.js, la estructura VS Code, el mapa del sitio ni la arquitectura de sprints.

La única reducción aplicada frente al documento V2.0 es la depuración del universo de usuarios y backoffices activos al listado aprobado: 1-9, 12, 15, 21, 22 y 27.
