import { support } from '@/components/data/content.jsx'
import Reveal from '@/components/ui/Reveal.jsx'

export default function SupportSection() {
  return <section className="support page-shell section-shell" aria-label="Clases de apoio">
    <div className="support-grid">
        {support.map(([image, alt, title, label, copy], index) => <Reveal as="article" key={title} variant={['left', 'fade', 'right'][index]} delay={index === 1 ? 600 : 300} duration={index === 1 ? 200 : 500}>
            <img src={image} alt={alt} />
        <h3>{title}</h3><p className="gold">{label}</p><p className="support-copy">{copy}</p></Reveal>)}</div>
  </section>
}
