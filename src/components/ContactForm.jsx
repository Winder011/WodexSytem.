import { useEffect, useId, useRef, useState } from 'react'
import { CircleCheck, LoaderCircle, Mail, TriangleAlert } from 'lucide-react'
import { WhatsAppIcon } from './icons'
import { PROJECT_TYPES } from '../config/site'
import { emailConfigured, sendContactEmail } from '../lib/sendEmail'
import { whatsappUrl } from '../lib/whatsapp'

const empty = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
  botcheck: '',
}

const MESSAGES = {
  success: 'Mensaje enviado. Te responderemos por correo o WhatsApp lo antes posible.',
  error: 'No pudimos enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.',
  unconfigured: 'El envío por correo no está disponible en este momento. Escríbenos por WhatsApp.',
}

export default function ContactForm({ initialType = '' }) {
  const uid = useId()
  const [fields, setFields] = useState({ ...empty, projectType: initialType })
  const [status, setStatus] = useState('idle')
  const statusRef = useRef(null)

  // En el modal el aviso puede quedar bajo el borde visible: se trae a la vista.
  useEffect(() => {
    if (!MESSAGES[status]) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    statusRef.current?.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' })
  }, [status])

  const update = (event) => {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
    if (status !== 'sending') setStatus('idle')
  }

  const submit = async (event) => {
    event.preventDefault()
    if (!emailConfigured) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      await sendContactEmail(fields)
      setFields({ ...empty, projectType: initialType })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const id = (name) => `${uid}-${name}`
  const sending = status === 'sending'

  return (
    <form className="contact-form" onSubmit={submit} aria-busy={sending}>
      <div className="contact-form__grid">
        <Field id={id('name')} label="Nombre" required>
          <input
            id={id('name')}
            name="name"
            value={fields.name}
            onChange={update}
            required
            autoComplete="name"
          />
        </Field>
        <Field id={id('company')} label="Empresa" hint="Opcional">
          <input
            id={id('company')}
            name="company"
            value={fields.company}
            onChange={update}
            autoComplete="organization"
          />
        </Field>
        <Field id={id('email')} label="Correo" required>
          <input
            id={id('email')}
            name="email"
            type="email"
            inputMode="email"
            value={fields.email}
            onChange={update}
            required
            autoComplete="email"
          />
        </Field>
        <Field id={id('phone')} label="WhatsApp" hint="Opcional">
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            value={fields.phone}
            onChange={update}
            autoComplete="tel"
            placeholder="+506"
          />
        </Field>
        <Field id={id('type')} label="Tipo de proyecto" required wide>
          <select
            id={id('type')}
            name="projectType"
            value={fields.projectType}
            onChange={update}
            required
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field id={id('message')} label="Mensaje" required wide>
          <textarea
            id={id('message')}
            name="message"
            value={fields.message}
            onChange={update}
            required
            rows="4"
            placeholder="¿Qué quieres crear, mejorar o automatizar?"
          />
        </Field>
      </div>

      {/* Honeypot anti-spam: invisible para personas, los bots lo completan. */}
      <input
        className="contact-form__trap"
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        checked={Boolean(fields.botcheck)}
        onChange={(event) =>
          setFields((current) => ({ ...current, botcheck: event.target.checked ? 'on' : '' }))
        }
      />

      <div className="contact-form__actions">
        <button className="button button--primary" type="submit" disabled={sending}>
          {sending ? (
            <LoaderCircle className="spin" aria-hidden="true" />
          ) : (
            <Mail aria-hidden="true" />
          )}
          {sending ? 'Enviando…' : 'Enviar por correo'}
        </button>
        <a
          className="button button--whatsapp"
          href={whatsappUrl(fields)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon /> Enviar por WhatsApp
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      </div>
      <p className="contact-form__note">
        WhatsApp se abre con un mensaje listo usando los datos que ya escribiste.
      </p>

      <div ref={statusRef} className="contact-form__status" role="status" aria-live="polite">
        {MESSAGES[status] && (
          <p data-tone={status === 'success' ? 'success' : 'warning'}>
            {status === 'success' ? (
              <CircleCheck aria-hidden="true" />
            ) : (
              <TriangleAlert aria-hidden="true" />
            )}
            {MESSAGES[status]}
          </p>
        )}
      </div>
    </form>
  )
}

function Field({ id, label, hint, required, wide, children }) {
  return (
    <div className={`field${wide ? ' field--wide' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className="field__req" aria-hidden="true">
            *
          </span>
        ) : (
          hint && <span className="field__hint">{hint}</span>
        )}
      </label>
      {children}
    </div>
  )
}
