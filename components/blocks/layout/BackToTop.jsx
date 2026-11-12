'use client'

import { ChevronUp } from 'lucide-react'
import { useScrolled } from '@/components/hooks/useScrolled.js'

export default function BackToTop() {
  const scrolled = useScrolled()
  if (!scrolled) return null
  return <button className="back-top rounded-full bg-green-300" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba" title="Volver arriba"><ChevronUp /></button>
}