'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { galleryImages } from '@/components/data/content.jsx'
import { useInView } from '@/components/hooks/useInView.js'
import { useReducedMotion } from '@/components/hooks/useReducedMotion.js'

export default function GallerySection() {
  const images = galleryImages
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [ref, visible] = useInView(false)
  const reduced = useReducedMotion()
  const move = (direction) => setSlide((current) => (current + direction + images.length) % images.length)
  useEffect(() => {
    if (paused || hovered || focused || reduced || !visible) return
    const timer = setInterval(() => setSlide((current) => (current + 1) % images.length), 3000)
    return () => clearInterval(timer)
  }, [paused, hovered, focused, reduced, visible, images])
  return <section id="instalacions" className="gallery-section page-shell section-shell">
    <div ref={ref} className="gallery" role="region" aria-roledescription="carrusel" aria-label="Instalacións da academia" tabIndex={0}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}
      onKeyDown={(event) => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1) } }}>
      <div className="gallery-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
        {images.map(({ src, alt }, index) => <img key={src} src={src} alt={alt} aria-hidden={slide !== index} />)}
      </div>
      <button className="gallery-prev" onClick={() => move(-1)} aria-label="Imaxe anterior" title="Imaxe anterior"><ChevronLeft /></button>
      <button className="gallery-next" onClick={() => move(1)} aria-label="Imaxe seguinte" title="Imaxe seguinte"><ChevronRight /></button>
      {!reduced && <button className="gallery-pause" onClick={() => setPaused(!paused)} aria-label={paused ? 'Reproducir galería' : 'Pausar galería'} title={paused ? 'Reproducir' : 'Pausar'}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}
    </div>
  </section>
}
