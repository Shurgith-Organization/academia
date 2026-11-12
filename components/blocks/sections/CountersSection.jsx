import { stats } from '@/components/data/content.jsx'
import AnimatedCounter from '@/components/ui/AnimatedCounter.jsx'

export default function CountersSection() {
  return <section className="counters page-shell" aria-label="A academia en números">
    {stats.map(([image, alt, value, prefix, label]) => <article key={label}>
      <div className="counter-figure">
        <p className="counter-number"><AnimatedCounter value={value} prefix={prefix} /></p>
        <h3>{label}</h3>
      </div>
      <img src={image} alt={alt} />
    </article>)}
  </section>
}
