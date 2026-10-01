import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import HeroVisual from './HeroVisual'
import { hrefFor } from '../config/routes'
import { PILLARS } from '../data/content'
import { useOpenContact } from '../lib/contact'

export default function Hero() {
  const openContact = useOpenContact()
  const stageRef = useRef(null)

  // Parallax sutil con el puntero: solo en dispositivos con mouse y sin reduced
  // motion. Se escriben variables CSS en un rAF; no hay re-render de React.
  useEffect(() => {
    const stage = stageRef.current
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!stage || !fine || reduce) return undefined

    let frame = 0
    const onMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5
        const y = event.clientY / window.innerHeight - 0.5
        stage.style.setProperty('--px', x.toFixed(3))
        stage.style.setProperty('--py', y.toFixed(3))
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
      </div>

      <div className="container hero__layout">
        <div className="hero__copy">
          <p className="pill hero__pill" data-reveal>
            <span className="pill__dot" aria-hidden="true" />
            Desarrollo web · Marketing · Software
          </p>
          <h1 id="hero-title" data-reveal>
            Tecnología que <em className="accent-serif">impulsa</em> negocios.
          </h1>
          <p className="hero__lede" data-reveal>
            Diseñamos experiencias digitales, desarrollamos soluciones tecnológicas y ayudamos a los
            negocios a crecer.
          </p>
          <div className="hero__actions" data-reveal>
            <button
              type="button"
              className="button button--primary button--lg"
              onClick={() => openContact()}
            >
              Impulsa tu negocio <ArrowUpRight aria-hidden="true" />
            </button>
            <a className="button button--ghost button--lg" href={hrefFor('servicios')}>
              Conoce nuestros servicios <ArrowDown aria-hidden="true" />
            </a>
          </div>

          <ul className="hero__pillars" aria-label="Lo que hacemos" data-reveal>
            {PILLARS.map(({ key, label, icon: Icon }) => (
              <li key={key}>
                <Icon aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__stage" ref={stageRef} data-reveal>
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
