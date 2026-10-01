import { CLIENTS } from '../data/content'

// Clientes Wodex: empresas que ya confían en Wodex. Se conserva el ancla
// #proyectos porque el menú enlaza a esta sección.
export default function Projects() {
  return (
    <section id="proyectos" className="clients" aria-labelledby="clients-title">
      <div className="clients__glow" aria-hidden="true" />
      <div className="container clients__inner">
        <div className="clients__heading" data-reveal>
          <p className="eyebrow">Clientes Wodex</p>
          <h2 id="clients-title">Empresas que ya confían en Wodex.</h2>
        </div>

        <ul className="clients__list">
          {CLIENTS.map(({ name, tagline, description, logo, logoWidth, logoHeight }) => (
            <li key={name} className="client" data-reveal>
              <div className="client__logo">
                <span className="client__ring" aria-hidden="true" />
                <img
                  src={logo}
                  alt={name}
                  width={logoWidth}
                  height={logoHeight}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="client__body">
                <h3>{name}</h3>
                <p className="client__tagline">{tagline}</p>
                <p className="client__description">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
