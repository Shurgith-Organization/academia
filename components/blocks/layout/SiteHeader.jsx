'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '@/components/hooks/useScrolled.js'

const logo = '/assets/logo-90.png'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()

  useEffect(() => {
    if (!menuOpen) return
    const close = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [menuOpen])

  return <header className={`site-header ${scrolled ? 'is-sticky' : ''}`}>
    <div className="page-shell navigation">
      <a href="#top" aria-label="Ir ao inicio"><img className="logo" src={logo} alt="logo 90" /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Pechar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="main-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu size={16} />} MENU</button>
      <nav id="main-menu" aria-label="Navegación principal" className={menuOpen ? 'is-open' : ''}>
        <a href="#instalacions" onClick={() => setMenuOpen(false)}>INSTALACIÓNS</a>
        <a href="#localizacion" onClick={() => setMenuOpen(false)}>LOCALIZACIÓN</a>
        <a href="#nos" onClick={() => setMenuOpen(false)}>¿POR QUÉ NOS?</a>
      </nav>
    </div>
  </header>
}
