import { Boxes, LayoutDashboard, Search, Server, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import jsmLogo from '../assets/clients/jsm.webp'
import { PROJECT } from '../data/content'

const rows = [
  ['Laptop · Contabilidad', 'Asignado', 'ok'],
  ['Servidor · Rack 02', 'Mantenimiento', 'warn'],
  ['Impresora · Bodega', 'En tránsito', 'info'],
  ['Router · Sucursal 3', 'Asignado', 'ok'],
]

export default function Projects() {
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
          Herramientas reales, usadas por equipos reales.
        </SectionHeading>

        <figure className="showcase" data-reveal>
          <div className="showcase__stage">
            <AssetHubMock />
          </div>
          <figcaption className="showcase__caption">
            <div>
              <h3>{PROJECT.name}</h3>
              <p>{PROJECT.kind}</p>
            </div>
            <ul className="showcase__tags" aria-label="Componentes">
              {PROJECT.tags.map((tag) => (
                <li key={tag} className="tag tag--small">
                  {tag}
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>

        <div className="trust-strip" data-reveal>
          <p className="eyebrow">Confían en nosotros</p>
          <div className="trust-strip__client">
            <span className="trust-strip__logo">
              <img
                src={jsmLogo}
                alt="JSM Servicentros"
                width="120"
                height="65"
                loading="lazy"
                decoding="async"
              />
            </span>
            <p>
              <strong>JSM Servicentros</strong>
              Soluciones para su control tecnológico y operativo.
            </p>
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
