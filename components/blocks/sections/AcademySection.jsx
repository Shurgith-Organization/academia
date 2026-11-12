import { academyCards } from '@/components/data/content.jsx'
import Reveal from '@/components/ui/Reveal.jsx'

export default function AcademySection() {
  return <section className="academy page-shell section-shell">
    <div className="academy-grid">{academyCards.map(([image, alt, title, copy]) => <Reveal as="article" key={title} variant="zoom">
      <div className="card-media"><img src={image} alt={alt} /></div>
      <div className="card-body"><h3>{title}</h3><p>{copy}</p></div>
    </Reveal>)}</div>
  </section>
}
