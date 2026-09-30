import { useEffect, useRef, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'

const initial = { name: '', company: '', phone: '', projectType: '', project: '' }

export default function Contact({ open, onClose }) {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)
  const closeButton = useRef(null)
  const previousFocus = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    previousFocus.current = document.activeElement
    closeButton.current?.focus()
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    return () => { document.removeEventListener('keydown', onKeyDown); previousFocus.current?.focus?.() }
  }, [open, onClose])

  if (!open) return null
  const update = (event) => { setSent(false); setForm({ ...form, [event.target.name]: event.target.value }) }
  const submit = (event) => { event.preventDefault(); setSent(true); setForm(initial) }

  return <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-copy"><button className="modal-backdrop" type="button" onClick={onClose} aria-label="Cerrar formulario" /><section className="contact-panel"><button className="close-modal" type="button" ref={closeButton} onClick={onClose} aria-label="Cerrar formulario"><X /></button><p className="dialog-overline">Iniciar proyecto</p><h2 id="dialog-title">Cuéntanos qué quieres <em>construir.</em></h2><p id="dialog-copy" className="dialog-copy">Una buena solución empieza entendiendo bien el reto.</p><form onSubmit={submit}><div className="form-grid"><Field label="Nombre" name="name" value={form.name} onChange={update} required autoComplete="name" /><Field label="Empresa" name="company" value={form.company} onChange={update} autoComplete="organization" /><Field label="WhatsApp o teléfono" name="phone" type="tel" value={form.phone} onChange={update} required autoComplete="tel" /><label>Tipo de proyecto<select name="projectType" value={form.projectType} onChange={update} required><option value="">Selecciona una opción</option>{['Software a medida', 'Automatización', 'Inteligencia Artificial', 'Integración de sistemas', 'Dashboard', 'Otro'].map((option) => <option key={option}>{option}</option>)}</select></label></div><label>Cuéntanos tu idea<textarea name="project" value={form.project} onChange={update} required rows="4" placeholder="¿Qué quieres mejorar, automatizar o construir?" /></label><div className="form-action"><button className="button button-primary" type="submit">Iniciar conversación <ArrowRight /></button>{sent && <p role="status">Gracias. Recibimos tus datos y te contactaremos pronto.</p>}</div></form></section></div>
}

function Field({ label, name, type = 'text', ...props }) { return <label>{label}<input name={name} type={type} {...props} /></label> }
