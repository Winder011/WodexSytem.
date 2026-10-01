import SectionHeading from '../components/SectionHeading'
import { PROCESS } from '../data/content'

export default function Process() {
  return (
    <section id="proceso" className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          id="process-title"
          eyebrow="Cómo trabajamos"
          title={
            <>
              De la idea al lanzamiento. <span className="text-muted"></span>
            </>
          }
        >
       
        </SectionHeading>

        <div className="timeline">
          <div className="timeline__track" aria-hidden="true">
            <span className="timeline__progress" />
          </div>F
          <ol>
            {PROCESS.map(([title, text], index) => (
              <li
                key={title}
                className="timeline__step"
                data-reveal
                style={{ '--delay': `${index * 80}ms` }}
              >
                <span className="timeline__dot" aria-hidden="true" />
                <span className="timeline__number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
