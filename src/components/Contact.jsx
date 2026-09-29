import { useEffect, useRef, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'

const initial = { name: '', company: '', phone: '', projectType: '', project: '' }
const projectTypes = ['Sistema empresarial', 'Automatización', 'Aplicación web', 'Integración de sistemas', 'IA aplicada', 'Otro']

export default function Contact({ open, onClose }) {
  const [form, setForm] = useState(initial)
  const [notice, setNotice] = useState('')
  const closeButton = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    closeButton.current?.focus()
    const close = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open, onClose])

  if (!open) return null
  const update = (event) => { setNotice(''); setForm({ ...form, [event.target.name]: event.target.value }) }
  const submit = (event) => {
    event.preventDefault()
    setNotice('Gracias por compartir el contexto. Este formulario está listo para conectarse al canal de ventas o CRM que Wodex defina; mientras tanto, puede continuar la conversación por Instagram.')
  }
  return <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><button className="modal-backdrop" onClick={onClose} aria-label="Cerrar formulario" /><section className="contact-panel"><button ref={closeButton} className="close-modal" onClick={onClose} aria-label="Cerrar"><X aria-hidden="true" /></button><p className="dialog-context">Iniciar una conversación</p><h2 id="dialog-title">Cuéntenos qué necesita <em>mejorar.</em></h2><p className="dialog-copy">Comparta el contexto de su reto. Antes de publicar, conecte este formulario con el canal de ventas o CRM elegido.</p><form onSubmit={submit}><div className="form-grid"><Field label="Nombre" name="name" value={form.name} onChange={update} required autoComplete="name" /><Field label="Empresa" name="company" value={form.company} onChange={update} autoComplete="organization" /><Field label="WhatsApp o teléfono" name="phone" type="tel" value={form.phone} onChange={update} required autoComplete="tel" /><label>Tipo de proyecto<select name="projectType" value={form.projectType} onChange={update} required><option value="">Seleccione una opción</option>{projectTypes.map(type => <option key={type} value={type}>{type}</option>)}</select></label></div><label>Cuéntenos el contexto<textarea name="project" value={form.project} onChange={update} required rows="4" placeholder="¿Qué proceso quiere mejorar, automatizar o construir?" /></label><div className="form-action"><button className="button button-primary" type="submit">Registrar contexto <ArrowRight aria-hidden="true" /></button>{notice && <p role="status">{notice} <a href="https://www.instagram.com/wodexsystem?stkn=MWhkYjN3dmhydw==" target="_blank" rel="noopener noreferrer">Abrir Instagram</a></p>}</div></form></section></div>
}
function Field({ label, name, type = 'text', ...props }) { return <label>{label}<input name={name} type={type} {...props} /></label> }
