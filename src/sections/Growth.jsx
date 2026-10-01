import SectionHeading from '../components/SectionHeading'
import { FUNNEL } from '../data/content'

export default function Growth() {
  return (
    <section id="crecimiento" className="section growth" aria-labelledby="growth-title">
      <div className="container">
        <SectionHeading
          id="growth-title"
          eyebrow="Web + Marketing"
          title={
            <>
              Una web sin visitas es una vitrina{' '}
              <span className="text-muted">en una calle vacía.</span>
            </>
          }
        >
          Construimos la plataforma y también te ayudamos a llevar personas hacia ella. Medimos cada
          paso para invertir donde de verdad funciona.
        </SectionHeading>

        <ol className="funnel" data-reveal>
          {FUNNEL.map(({ label, text, icon: Icon }, index) => (
            <li key={label} className="funnel__step" style={{ '--i': index }}>
              <span className="funnel__node">
                <Icon aria-hidden="true" />
              </span>
              <span className="funnel__index">0{index + 1}</span>
              <h3>{label}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <p className="growth__note" data-reveal>
          No prometemos números mágicos: definimos objetivos realistas, medimos resultados y
          ajustamos con datos.
        </p>
      </div>
    </section>
  )
}
