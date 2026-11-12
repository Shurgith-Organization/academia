import { useEffect, useState } from 'react'

export function useActiveSection(hrefs, ratio = 0.5) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const ids = hrefs.map((href) => href.slice(1))

    const onScroll = () => {
      const line = window.innerHeight * ratio
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      let current = null
      let closest = -Infinity
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top - line
        if (top <= 0 && top > closest) {
          closest = top
          current = `#${id}`
        }
      })

      if (atBottom) {
        let lastVisible = null
        let lowest = -Infinity
        ids.forEach((id) => {
          const el = document.getElementById(id)
          if (!el) return
          const rect = el.getBoundingClientRect()
          if (rect.bottom > 0 && rect.top < window.innerHeight && rect.top > lowest) {
            lowest = rect.top
            lastVisible = `#${id}`
          }
        })
        if (lastVisible) current = lastVisible
      }

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [hrefs, ratio])

  return active
}
