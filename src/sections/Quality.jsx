import { QUALITY } from '../data/content'

export default function Quality() {
  return (
    <section className="quality" aria-labelledby="quality-title">
      <div className="container quality__layout">
        <div data-reveal>
          <p className="eyebrow">Estándar Wodex</p>
          <h2 id="quality-title">Lo que cuidamos en cada proyecto</h2>
        </div>
        <ul className="quality__list">
          {QUALITY.map(({ label, text, icon: Icon }, index) => (
            <li key={label} data-reveal style={{ '--delay': `${index * 60}ms` }}>
              <Icon aria-hidden="true" />
              <h3>{label}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
