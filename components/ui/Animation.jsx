'use client'

import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { useReducedMotion } from '@/components/hooks/useReducedMotion.js'

export default function Animation({ data, label }) {
  const container = useRef(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    const animation = lottie.loadAnimation({ container: container.current, renderer: 'svg', loop: true, autoplay: false, animationData: structuredClone(data) })
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
      if (reduced) animation.goToAndStop(1, true)
      else if (entry.isIntersecting) animation.play()
      else animation.pause()
    }) : null
    observer?.observe(container.current)
    if (reduced) animation.goToAndStop(1, true)
    else if (!observer) animation.play()
    return () => { observer?.disconnect(); animation.destroy() }
  }, [data, reduced])
  return <div className="lottie" ref={container} role="img" aria-label={label} />
}
