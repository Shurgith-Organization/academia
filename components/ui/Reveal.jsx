'use client'

import { useInView } from '@/components/hooks/useInView.js'

export default function Reveal({ as: Tag = 'div', variant = 'fade', delay = 0, duration = 600, className = '', children }) {
  const [ref, visible] = useInView(false)
  return <Tag ref={ref} className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`} style={{ '--delay': `${delay}ms`, '--duration': `${duration}ms` }}>{children}</Tag>
}
