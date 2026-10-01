# Changelog

## 2.0.0 — 2026-10-01

Rediseño integral: Wodex pasa de una landing de software a medida a una marca de tecnología que
cubre presencia digital, crecimiento y software.

### Añadido

- Nueva identidad visual basada en el logo (azul noche, azul marca y cian), con tokens de diseño en
  `src/styles/tokens.css`.
- Secciones nuevas: Servicios en tres pilares, Problema → Solución, Desarrollo Web, Web + Marketing
  (embudo), Proceso en cinco pasos, caso de estudio de Asset Hub, Nosotros y Contacto.
- Formulario de contacto funcional por correo (Web3Forms) y por WhatsApp con mensaje prellenado.
- Botón flotante de WhatsApp.
- SEO: canonical, Open Graph y Twitter con URL absolutas, imagen OG de 1200×630, datos
  estructurados (Organization, ProfessionalService y WebSite), `sitemap.xml` y `robots.txt`
  generados en el build.
- Mapa de rutas futuras en `src/config/routes.js`.
- ESLint y Prettier con scripts `lint`, `format` y `format:check`.

### Cambiado

- El modal de contacto usa `<dialog>` nativo: foco atrapado, Escape, scroll bloqueado y foco devuelto
  al botón que lo abrió.
- Menú con estado activo por sección; en móvil se cierra con Escape, con un clic fuera o al elegir un
  enlace.
- Google Fonts se carga con `<link>` y `preconnect` en lugar de `@import`.
- Imágenes convertidas a WebP con dimensiones explícitas y carga diferida.
- Dependencias con versiones fijas; Vite y el plugin de React pasan a `devDependencies`.
- El enlace de Instagram ya no lleva parámetros de seguimiento.

### Eliminado

- Tailwind CSS, PostCSS y Autoprefixer (no se usaban).
- Recursos sin uso de la plantilla (`hero.png`, `react.svg`, `vite.svg`, `favicon.svg`,
  `icons.svg`) y los PNG/JPG originales, reemplazados por versiones optimizadas.

## 1.0.0

Versión inicial generada con `create-vite` desde Visual Studio (`wodexsystem1.esproj`).
