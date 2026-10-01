import { ArrowRight, Check, X } from 'lucide-react'
import { PROBLEMS } from '../data/content'

export default function Problems() {
  return (
    <section className="section section--light problems" aria-labelledby="problems-title">
      <div className="container">
        <div className="problems__intro" data-reveal>
          <p className="eyebrow">¿Te suena familiar?</p>
          <h2 id="problems-title">
            Tu negocio es bueno. <span className="text-muted">Pero en internet no se nota.</span>
          </h2>
        </div>

        <div className="problems__table">
          <div className="problems__labels" aria-hidden="true">
            <span>Lo que pasa hoy</span>
            <span>Lo que construimos</span>
          </div>
          <ul>
            {PROBLEMS.map(([problem, solution], index) => (
              <li
                key={problem}
                className="problem-row"
                data-reveal
                style={{ '--delay': `${index * 60}ms` }}
              >
                <p className="problem-row__before">
                  <span className="problem-row__mark problem-row__mark--x">
                    <X aria-hidden="true" />
                  </span>
                  <span className="sr-only">Problema: </span>
                  {problem}
                </p>
                <ArrowRight className="problem-row__arrow" aria-hidden="true" />
                <p className="problem-row__after">
                  <span className="problem-row__mark problem-row__mark--check">
                    <Check aria-hidden="true" />
                  </span>
                  <span className="sr-only">Solución: </span>
                  {solution}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="problems__closing" data-reveal>
          Nosotros construimos la solución.
        </p>
      </div>
    </section>
  )
}
