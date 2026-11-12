import laptopAnimation from '@/public/assets/laptop-working.json'
import { englishReasons, levels } from '@/components/data/content.jsx'
import Animation from '@/components/ui/Animation.jsx'
import Reveal from '@/components/ui/Reveal.jsx'

export default function EnglishSection() {
  return <>
    <section id="ingles" className="english page-shell section-shell">
      <h2>¿Por qué aprender Inglés?</h2>
      <div className="english-grid">{englishReasons.map(([image, alt, title, copy]) => <Reveal as="article" key={title} variant="flip-left"><img src={image} alt={alt} /><div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
    </section>
    <div className="page-shell">
      <h2 className="levels-title">Niveles de inglés</h2>
      <div className="levels-grid">
        <Reveal variant="wipe" className="levels-art"><Animation data={laptopAnimation} label="Estudante traballando cun portátil" /></Reveal>
        <div className="levels-copy">{levels.map(([label, title, copy], index) => <Reveal as="article" key={title} variant={index === 2 ? 'wipe-down' : 'wipe'} delay={800 + index * 600}><p className="gold">{label}</p><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
      </div>
    </div>
  </>
}
