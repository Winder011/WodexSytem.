import logo from '../assets/logo.webp'
import { CONNECTED, PRINCIPLES } from '../data/content'

export default function About() {
  return (
    <section id="nosotros" className="section about" aria-labelledby="about-title">
      <div className="container about__layout">
        <div className="about__copy">
          <p className="eyebrow" data-reveal>
            Nosotros
          </p>
          <h2 id="about-title" data-reveal>
            No creamos solamente <span className="text-muted">páginas bonitas.</span>
          </h2>
          <p className="about__lede" data-reveal>
            Creamos experiencias y herramientas digitales pensadas para ayudar a los negocios a
            crecer. Wodex System es un equipo de Costa Rica que une diseño, desarrollo, marketing y
            automatización en un mismo lugar, para que no tengas que coordinar a varios proveedores
            distintos.
          </p>

          <ul className="principles">
            {PRINCIPLES.map(([title, text], index) => (
              <li key={title} data-reveal style={{ '--delay': `${index * 70}ms` }}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="ecosystem" data-reveal>
          <svg className="ecosystem__lines" viewBox="0 0 400 400" aria-hidden="true">
            <circle cx="200" cy="200" r="150" />
            <circle cx="200" cy="200" r="96" />
            <path d="M200 50 V150 M350 200 H250 M200 350 V250 M50 200 H150" />
          </svg>
          <div className="ecosystem__core">
            <img src={logo} alt="" width="56" height="41" loading="lazy" decoding="async" />
            <span>Wodex</span>
          </div>
          <ul aria-label="Disciplinas conectadas">
            {CONNECTED.map(({ label, icon: Icon }, index) => (
              <li key={label} className={`ecosystem__node ecosystem__node--${index}`}>
                <Icon aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
