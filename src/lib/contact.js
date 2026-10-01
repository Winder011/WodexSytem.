import { createContext, useContext } from 'react'

// Permite que cualquier botón abra el modal de contacto, opcionalmente con un
// tipo de proyecto preseleccionado: openContact('Página web').
export const ContactContext = createContext(() => {})

export const useOpenContact = () => useContext(ContactContext)
