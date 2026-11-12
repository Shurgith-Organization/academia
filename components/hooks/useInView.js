import { useEffect, useRef, useState } from 'react'

export function useInView(once = true) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    if (!('IntersectionObserver' in window)) { setVisible(true); return }
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
      if (entry.isIntersecting && once) observer.disconnect()
    }, { threshold: 0.08 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [once])
  return [ref, visible]
}
