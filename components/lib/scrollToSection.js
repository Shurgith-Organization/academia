export function scrollToSection(href, { behavior } = {}) {
  const el = document.getElementById(href.replace(/^#/, ''))
  if (!el) return false

  const rect = el.getBoundingClientRect()
  const header = document.querySelector('header')
  const margin = (header?.offsetHeight ?? 0) + 16
  const available = window.innerHeight - margin * 2

  const centered =
    rect.height >= available
      ? rect.top + window.scrollY - margin
      : rect.top + window.scrollY - (window.innerHeight - rect.height) / 2

  const max = document.documentElement.scrollHeight - window.innerHeight
  const top =
    centered <= margin ? 0 : Math.min(Math.max(centered, 0), Math.max(max, 0))

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top, behavior: behavior ?? (reduce ? 'auto' : 'smooth') })

  if (window.location.hash !== href) {
    window.history.replaceState(null, '', href)
  }

  return true
}
