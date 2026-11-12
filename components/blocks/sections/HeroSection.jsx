import { benefits } from '@/components/data/content.jsx'
import Reveal from '@/components/ui/Reveal.jsx'
const heroImage = '/assets/EmpezandoClases.webp'

export default function HeroSection() {
  return <section className="intro page-shell">
    <div className="hero">
      <div className="hero-copy"><p>Unha maneira</p><h1>Academia Lenar</h1><p>divertida e amena</p><p>de estudar e aprender</p></div>
      <div className="hero-art"><img src={heroImage} alt="Empezando Clases" /></div>
    </div>
    <div className="benefits">{benefits.map(([image, alt, title, copy]) => <Reveal as="article" key={title} className="benefit"><div className="benefit-inner"><img src={image} alt={alt} /><div><h3>{title}</h3><p>{copy}</p></div></div></Reveal>)}</div>
    <h2 className="support-title">Clases de apoio escolar cos temarios impartidos nos seus colexios</h2>
  </section>
}
