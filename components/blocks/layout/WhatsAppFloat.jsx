'use client'

import { useOpenStatus } from '@/components/hooks/useOpenStatus.js'

const WHATSAPP_URL = 'https://wa.me/34667996206'

export default function WhatsAppFloat() {
  const open = useOpenStatus()

  return <>
    <a className={open ? 'whatsapp' : 'whatsapp is-offline'}
       href={open ? WHATSAPP_URL : undefined}
       target={open ? '_blank' : undefined}
       rel={open ? 'noreferrer' : undefined}
       aria-label={open ? 'Contactar por WhatsApp' : 'WhatsApp: Offline'}
       aria-disabled={open ? undefined : true}
       tabIndex={open ? undefined : -1}
       title="WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 .8A15.1 15.1 0 0 0 3 23.5L.8 31.2l7.9-2.1A15.2 15.2 0 1 0 16 .8Zm0 27.8a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.7 1.2 1.3-4.5-.3-.5A12.6 12.6 0 1 1 16 28.6Zm6.9-9.4c-.4-.2-2.2-1.1-2.5-1.2-.4-.1-.6-.2-.9.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.1-2.6c-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4-.4.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.8c.2.2 2.7 4.1 6.5 5.7.9.4 1.6.6 2.2.7.9.3 1.7.2 2.4.2.7-.1 2.2-.9 2.5-1.8.3-.8.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4Z" />
      </svg>

    </a>
    <span className={open ? 'whatsapp-note' : 'whatsapp-note is-offline'} aria-hidden="true">
      {open ? 'Disponible de 10:00 a 20:00' : 'Desconectado'}
    </span>
  </>
}
