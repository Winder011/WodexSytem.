import logo from '../assets/logo.webp'
import { ORBIT } from '../data/content'

// Ángulo de cada disciplina sobre la órbita (arriba, abajo-derecha, abajo-izquierda).
const ANGLES = [-90, 30, 150]
// Coordenadas de cada nodo en el viewBox 400×400 del SVG de conexiones (radio 152).
const POINTS = ANGLES.map((angle) => {
  const rad = (angle * Math.PI) / 180
  return [200 + 152 * Math.cos(rad), 200 + 152 * Math.sin(rad)]
})

// Wodex en el centro y Web, Marketing y Software orbitando a su alrededor.
// Todo el movimiento es CSS (transform/rotate), sin JS por fotograma.
export default function HeroVisual() {
  return (
    <div
      className="hero-orbit"
      role="img"
      aria-label="Wodex System integra web, marketing y software"
    >
      <div className="hero-orbit__ring hero-orbit__ring--outer" aria-hidden="true">
        <span className="hero-orbit__satellite" />
        <span className="hero-orbit__satellite hero-orbit__satellite--b" />
      </div>
      <div className="hero-orbit__ring hero-orbit__ring--mid" aria-hidden="true" />
      <div className="hero-orbit__sweep" aria-hidden="true" />

      <div className="hero-orbit__spin" aria-hidden="true">
        <svg className="hero-orbit__links" viewBox="0 0 400 400">
          {POINTS.map(([x, y], index) => (
            <g key={index}>
              <line x1="200" y1="200" x2={x} y2={y} />
              <line
                className="hero-orbit__pulse"
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                pathLength="100"
                style={{ animationDelay: `${index * -1.2}s` }}
              />
            </g>
          ))}
        </svg>

        {ORBIT.map(({ label, icon: Icon }, index) => (
          <span key={label} className="hero-orbit__node" style={{ '--a': `${ANGLES[index]}deg` }}>
            <span className="hero-orbit__chip">
              <Icon />
              {label}
            </span>
          </span>
        ))}
      </div>

      <div className="hero-orbit__core" aria-hidden="true">
        <span className="hero-orbit__halo" />
        <img src={logo} alt="" width="64" height="47" />
        <span className="hero-orbit__name">Wodex</span>
      </div>
    </div>
  )
}
