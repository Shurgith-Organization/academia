'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(localStorage.getItem('lenar-cookie-choice') === null)
  }, [])
  const saveChoice = (choice) => {
    localStorage.setItem('lenar-cookie-choice', choice)
    setVisible(false)
  }
  if (!visible) return null
  return <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
    <div>
      <h2>Usamos Cookies</h2>
      <p>Este sitio web utiliza cookies esenciais para garantir o seu correcto funcionamento e cookies de seguimento para entender como interactúas con el. Estas últimas só se instalarán previa aprobación pola túa parte. <a href="/privacidad-y-politica-de-cookies/">Máis información</a></p>
    </div>
    <div className="cookie-actions">
      <button type="button" onClick={() => saveChoice('all')}>Aceptar</button>
      <button type="button" onClick={() => saveChoice('necessary')}>Axustes</button>
    </div>
  </div>
}
