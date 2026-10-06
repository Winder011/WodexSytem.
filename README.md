# Wodex System — sitio web

Sitio de **Wodex System**, empresa de tecnología en Costa Rica: desarrollo web, marketing digital y
software a medida. _Tecnología que impulsa empresas._

Construido con React 19 y Vite 8, sin frameworks de CSS: un sistema de diseño propio en CSS con
variables.

## Requisitos

- Node.js 20 o superior
- npm

## Puesta en marcha

```bash
npm install
cp .env.example .env   # y completa los valores
npm run dev            # http://localhost:54077
```

| Script                 | Qué hace                                             |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                               |
| `npm run build`        | Build de producción en `dist/`                       |
| `npm run preview`      | Sirve el build localmente                            |
| `npm run lint`         | ESLint                                               |
| `npm run format`       | Formatea el código con Prettier                      |
| `npm run format:check` | Verifica el formato sin modificar (útil en CI)       |

## Variables de entorno

| Variable        | Uso                                                                                   |
| --------------- | ------------------------------------------------------------------------------------- |
| `VITE_SITE_URL` | URL pública sin barra final. Alimenta canonical, Open Graph, schema, sitemap y robots |

En Cloudflare Pages (u otro hosting) defínela en la configuración del proyecto **antes** del build:
Vite la incrusta en tiempo de compilación.

### Contacto

Todos los CTA comerciales (hero, header, servicios, desarrollo web, contacto y botón flotante)
abren WhatsApp en una pestaña nueva con un mensaje prellenado. No hay formulario ni modal. El
número se configura en `src/config/site.js` (`whatsappNumber`) y nunca se muestra escrito en la
interfaz.

## Estructura

```
src/
  config/      site.js (datos de la marca y WhatsApp)
               routes.js (rutas actuales y futuras; también lo lee vite.config.js)
  data/        content.js (textos e íconos de cada sección)
  components/  piezas compartidas: Header, Footer, WhatsAppFab, Brand…
  sections/    secciones de la página: Hero, Services, WebDevelopment, Quality, Process…
  pages/       Home.jsx compone las secciones
  hooks/       useReveal (animaciones al hacer scroll), useActiveSection
  lib/         armado de los enlaces y mensajes de WhatsApp
  styles/      tokens.css → base.css → components.css → sections.css → motion.css
public/        favicon, apple-touch-icon, og-image.png (1200×630)
```

### Crecer hacia varias páginas

`src/config/routes.js` ya reserva `/servicios`, `/desarrollo-web`, `/marketing`, `/publicidad`,
`/software`, `/proyectos`, `/nosotros` y `/contacto`. Las secciones son independientes, así que una
página nueva se arma reutilizándolas. Al agregar un router (por ejemplo React Router), crea la
página, cambia `hrefFor` para que devuelva `path` y marca la ruta con `indexed: true` para que entre
al `sitemap.xml`.

## Sistema de diseño

- **Paleta** tomada del logo: azul noche `#070b14`, azul marca `#2f6bed` y acento cian `#3fc8ec`.
- **Tipografía**: Geist (texto y títulos), Geist Mono (etiquetas), Instrument Serif itálica para
  palabras destacadas y Unbounded solo para «impulsa» en el hero (subconjunto de 7 letras).
- Todos los colores, espacios, radios, sombras y tiempos de animación están en
  `src/styles/tokens.css`.
- Las animaciones respetan `prefers-reduced-motion` y el contenido es visible sin JavaScript.

## Carpetas `.agents/`, `.claude/` y `.codex/`

Contienen skills y hooks de asistentes de IA (registrados en `skills-lock.json`). No forman parte
del sitio ni del build; se conservan porque el flujo de trabajo del proyecto los utiliza.
