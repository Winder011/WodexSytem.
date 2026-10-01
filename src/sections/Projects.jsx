import { ArrowUpRight, Boxes, LayoutDashboard, Search, Server, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import jsmLogo from '../assets/clients/jsm.webp'
import { CASE_STUDY } from '../data/content'
import { useOpenContact } from '../lib/contact'

const rows = [
  ['Laptop · Contabilidad', 'Asignado', 'ok'],
  ['Servidor · Rack 02', 'Mantenimiento', 'warn'],
  ['Impresora · Bodega', 'En tránsito', 'info'],
  ['Router · Sucursal 3', 'Asignado', 'ok'],
]

export default function Projects() {
  const openContact = useOpenContact()

  return (
    <section id="proyectos" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Proyectos"
          title={
            <>
              Construido para operar <span className="text-muted">todos los días.</span>
            </>
          }
        >
          Herramientas reales, usadas por equipos reales. Este es uno de los sistemas que hemos
          desarrollado.
        </SectionHeading>

        <article className="case" aria-labelledby="case-title">
          <div className="case__visual" data-reveal>
            <AssetHubMock />
          </div>

          <div className="case__content" data-reveal>
            <p className="eyebrow">Caso de estudio</p>
            <h3 id="case-title" className="case__title">
              {CASE_STUDY.name}
            </h3>
            <p className="case__kind">{CASE_STUDY.kind}</p>

            <dl className="case__steps">
              {CASE_STUDY.steps.map(([term, detail]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
              <div>
                <dt>Componentes</dt>
                <dd>
                  <ul className="case__stack">
                    {CASE_STUDY.stack.map((item) => (
                      <li key={item} className="tag tag--small">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </article>

        <div className="projects__row">
          <figure className="client-card" data-reveal>
            <div className="client-card__logo">
              <img
                src={jsmLogo}
                alt="JSM Servicentros"
                width="180"
                height="97"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              <p className="eyebrow">Cliente</p>
              <h3>JSM Servicentros</h3>
              <p>
                Desarrollamos soluciones para optimizar su control tecnológico y operativo. Una
                relación construida proyecto a proyecto.
              </p>
            </figcaption>
          </figure>

          <div className="next-card" data-reveal>
            <p className="eyebrow">Tu proyecto</p>
            <h3>El próximo caso puede ser el tuyo.</h3>
            <button type="button" className="button button--ghost" onClick={() => openContact()}>
              Cuéntanos tu idea <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Representación ilustrativa de la interfaz de Asset Hub (no es una captura).
function AssetHubMock() {
  return (
    <div className="app-mock" aria-hidden="true">
      <div className="app-mock__side">
        <span className="app-mock__brand">
          <Boxes /> Asset Hub
        </span>
        <span className="is-active">
          <LayoutDashboard /> Panel
        </span>
        <span>
          <Boxes /> Activos
        </span>
        <span>
          <Wrench /> Mantenimiento
        </span>
        <span>
          <Server /> Infraestructura
        </span>
      </div>
      <div className="app-mock__main">
        <div className="app-mock__top">
          <strong>Activos</strong>
          <span className="app-mock__search">
            <Search /> Buscar activo…
          </span>
        </div>
        <div className="app-mock__stats">
          <div>
            <small>Registrados</small>
            <b>Inventario</b>
            <i style={{ '--w': '78%' }} />
          </div>
          <div>
            <small>Mantenimiento</small>
            <b>Programado</b>
            <i style={{ '--w': '42%' }} />
          </div>
          <div>
            <small>Movimientos</small>
            <b>Historial</b>
            <i style={{ '--w': '64%' }} />
          </div>
        </div>
        <div className="app-mock__table">
          {rows.map(([name, state, tone]) => (
            <div key={name} className="app-mock__row">
              <span className="app-mock__thumb" />
              <span>{name}</span>
              <em data-tone={tone}>{state}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
