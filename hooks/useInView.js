'use client'

import { useEffect, useRef, useState } from 'react'

// Devuelve [ref, visible]. Pon el ref en el elemento a observar.
// once = true  -> visible pasa a true la primera vez que entra en pantalla y se queda así.
// once = false -> visible sigue al elemento: true al entrar, false al salir.
export function useInView(once = true, { threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        if (once) observer.disconnect()
      } else if (!once) {
        setVisible(false)
      }
    }, { threshold, rootMargin })
    observer.observe(element)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  return [ref, visible]
}
