import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import ContactForm from './ContactForm'

// Modal de contacto sobre <dialog> nativo: showModal() vuelve inerte el resto de
// la página (focus trap), Escape dispara `cancel` y el navegador gestiona la capa
// superior. Aquí solo se bloquea el scroll y se devuelve el foco a quien lo abrió.
export default function Contact({ open, projectType, onClose }) {
  const dialogRef = useRef(null)
  const returnFocus = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !open) return undefined

    returnFocus.current = document.activeElement
    document.documentElement.classList.add('scroll-locked')
    dialog.showModal()
    dialog.querySelector('input')?.focus()

    return () => {
      document.documentElement.classList.remove('scroll-locked')
      if (dialog.open) dialog.close()
      returnFocus.current?.focus?.({ preventScroll: true })
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      aria-labelledby="contact-dialog-title"
      aria-describedby="contact-dialog-copy"
      onClose={onClose}
      onClick={(event) => {
        // Un clic directo sobre el <dialog> solo puede venir del backdrop.
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {open && (
        <div className="contact-dialog__panel">
          <button
            type="button"
            className="icon-button contact-dialog__close"
            onClick={onClose}
            aria-label="Cerrar formulario"
          >
            <X aria-hidden="true" />
          </button>
          <p className="eyebrow">Iniciar proyecto</p>
          <h2 id="contact-dialog-title">Hablemos de tu proyecto.</h2>
          <p id="contact-dialog-copy" className="contact-dialog__copy">
            Cuéntanos qué necesitas. Lo recibe directamente un ingeniero, por
            correo o por WhatsApp.
          </p>
          <ContactForm initialType={projectType} />
        </div>
      )}
    </dialog>
  )
}
