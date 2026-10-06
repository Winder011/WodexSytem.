# Changelog

## 2.2.0 — 2026-10-06

### Cambiado

- Hero tipográfico y centrado: eyebrow, «Tecnología que impulsa empresas.», descripción y CTAs, con
  altura que deja ver el inicio de Servicios.
- Todos los CTA comerciales abren WhatsApp en una pestaña nueva; «Hablar con un ingeniero» pasa a
  «Hablemos de tu proyecto».

### Eliminado

- Órbita animada del hero (Wodex · Web · Marketing · Software) con su CSS, keyframes y parallax.
- Modal y formulario de contacto (Web3Forms) con sus estilos y configuración.

## 2.1.0 — 2026-10-01

Enfoque en tecnología e ingeniería: menos secciones y mejor jerarquía.

### Cambiado

- Mensaje principal: «Tecnología que impulsa empresas.» (hero, SEO, imagen OG).
- El hero muestra ahora la órbita animada Wodex · Web · Marketing · Software.
- «impulsa» usa Unbounded con brillo animado y línea de escaneo.
- Soluciones: Desarrollo web, Marketing digital y Software a medida.
- «Lo que cuidamos» pasa a ser una franja breve: Diseño, UX, Rendimiento, Seguridad, Responsive y
  Escalabilidad.
- Proceso en cuatro pasos.
- Asset Hub se presenta como proyecto visual, sin formato de caso de estudio.
- Contacto: «Atención directa con un ingeniero. Sin intermediarios.» con botón a WhatsApp; el número
  ya no aparece escrito en el sitio, el README ni los datos estructurados.

### Eliminado

- Composición del hero con el mockup de café, visitas y automatización.
- Secciones «Tu negocio es bueno…», «Una web sin visitas…» y «No creamos solamente páginas bonitas».
- Bloque «Pensado para» y caso de estudio de Asset Hub.

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
