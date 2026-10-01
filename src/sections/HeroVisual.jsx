import { Check, Lock, Star, Zap } from 'lucide-react'

// Composición ilustrativa (HTML + CSS, sin imágenes): un sitio web, una tarjeta
// de crecimiento y un flujo automatizado. Representa los tres pilares de Wodex.
// Es decorativa: el contenido real está en el texto del hero.
export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__orbit hero-visual__orbit--a" />
      <div className="hero-visual__orbit hero-visual__orbit--b" />

      <div className="mock-browser depth-1">
        <div className="mock-browser__bar">
          <span />
          <span />
          <span />
          <div className="mock-browser__url">
            <Lock /> tunegocio.cr
          </div>
        </div>
        <div className="mock-browser__body">
          <div className="mock-site__nav">
            <i className="mock-site__logo" />
            <i />
            <i />
            <i />
            <b>Reservar</b>
          </div>
          <div className="mock-site__hero">
            <div>
              <small>Café de especialidad · San José</small>
              <strong>Café hecho con calma.</strong>
              <i />
              <i className="short" />
              <div className="mock-site__ctas">
                <b>Ver menú</b>
                <b className="ghost">WhatsApp</b>
              </div>
            </div>
            <div className="mock-site__photo" />
          </div>
          <div className="mock-site__cards">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      <div className="mock-card mock-card--growth depth-2">
        <div className="mock-card__head">
          <span>Visitas al sitio</span>
          <em>
            <Zap /> En vivo
          </em>
        </div>
        <svg className="mock-chart" viewBox="0 0 220 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hero-chart-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity=".35" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 66 C22 62 34 54 52 56 S84 40 104 42 S140 26 160 28 S196 10 220 6 V80 H0Z"
            fill="url(#hero-chart-fill)"
          />
          <path
            className="mock-chart__line"
            d="M0 66 C22 62 34 54 52 56 S84 40 104 42 S140 26 160 28 S196 10 220 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            pathLength="1"
          />
        </svg>
        <div className="mock-card__legend">
          <span>Ene</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Abr</span>
        </div>
      </div>

      <div className="mock-card mock-card--flow depth-3">
        <span className="mock-card__label">Automatización</span>
        <ol>
          <li>
            <Check /> Nuevo pedido recibido
          </li>
          <li>
            <Check /> Inventario actualizado
          </li>
          <li className="is-running">
            <span className="mock-spinner" /> Avisando al cliente
          </li>
        </ol>
      </div>

      <div className="mock-chip depth-2">
        <Star /> Cliente nuevo por WhatsApp
      </div>
    </div>
  )
}
