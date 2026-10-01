import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { PILLARS } from '../data/content'
import { useOpenContact } from '../lib/contact'

// Sigue el puntero para el brillo de la tarjeta; solo escribe variables CSS.
const trackPointer = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export default function Services() {
  const openContact = useOpenContact()

  return (
    <section id="servicios" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="Soluciones"
          title={
            <>
              Tres soluciones.{' '}
              <span className="text-muted">Un mismo objetivo: que tu empresa avance.</span>
            </>
          }
        >
          Puedes empezar por una y sumar las demás cuando lo necesites. Todo se diseña para trabajar
          en conjunto.
        </SectionHeading>

        <ul className="pillars">
          {PILLARS.map(({ key, label, title, text, icon: Icon, items, projectType }, index) => (
            <li
              key={key}
              className={`pillar pillar--${key} spotlight`}
              onPointerMove={trackPointer}
              data-reveal
              style={{ '--delay': `${index * 90}ms` }}
            >
              <div className="pillar__head">
                <span className="pillar__icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="pillar__index">0{index + 1}</span>
              </div>
              <p className="eyebrow">{label}</p>
              <h3>{title}</h3>
              <p className="pillar__text">{text}</p>
              <ul className="pillar__items">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                type="button"
                className="text-button"
                onClick={() => openContact(projectType)}
              >
                Consultar sobre {label.toLowerCase()} <ArrowRight aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
