import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { hrefFor } from '../config/routes'
import { whatsappUrl } from '../lib/whatsapp'

const engineerHref = whatsappUrl()

// Hero tipográfico: el mensaje es el protagonista y el fondo (grid + glow) solo acompaña.
export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
      </div>

      <div className="container hero__content">
        <p className="pill hero__pill" data-reveal>
          <span className="pill__dot" aria-hidden="true" />
          Ingeniería de software · Costa Rica
        </p>
        <h1 id="hero-title" data-reveal>
          Tecnología que <em className="accent-tech">impulsa</em> empresas.
        </h1>
        <p className="hero__lede" data-reveal>
          Diseñamos experiencias digitales, desarrollamos soluciones tecnológicas y ayudamos a las
          empresas a crecer.
        </p>
        <div className="hero__actions" data-reveal>
          <a
            className="button button--primary button--lg"
            href={engineerHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Impulsa tu empresa <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
          </a>
          <a className="button button--ghost button--lg" href={hrefFor('servicios')}>
            Conoce nuestros servicios <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
