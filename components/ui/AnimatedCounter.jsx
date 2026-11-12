'use client'

import { useEffect, useState } from 'react'
import { useInView } from '@/components/hooks/useInView.js'
import { useReducedMotion } from '@/components/hooks/useReducedMotion.js'

export default function AnimatedCounter({ value, prefix = '' }) {
  const [ref, visible] = useInView()
  const reduced = useReducedMotion()
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible || reduced) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / 1400, 1)
      setCount(Math.round(value * progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, value, reduced])
  return <span ref={ref}>{prefix}{reduced ? value : count}</span>
}
