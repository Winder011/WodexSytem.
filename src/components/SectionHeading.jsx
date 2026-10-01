export default function SectionHeading({ id, eyebrow, title, children, align = 'split' }) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
      </div>
      {children && <p className="section-heading__lede">{children}</p>}
    </div>
  )
}
