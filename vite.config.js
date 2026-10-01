import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { ROUTES } from './src/config/routes.js'

// Sustituye %SITE_URL% en index.html y genera robots.txt y sitemap.xml a partir de
// VITE_SITE_URL, para que todas las URL absolutas salgan de una sola fuente.
function seoFiles(siteUrl) {
  return {
    name: 'wodex-seo-files',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      const urls = ROUTES.filter((route) => route.indexed)
        .map(
          (route) => `  <url><loc>${siteUrl}${route.path}</loc><lastmod>${today}</lastmod></url>`,
        )
        .join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const siteUrl = (env.VITE_SITE_URL || 'https://wodexsystem.com').replace(/\/$/, '')

  return {
    plugins: [react(), seoFiles(siteUrl)],
    define: { 'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl) },
    server: { port: 54077 },
  }
})
