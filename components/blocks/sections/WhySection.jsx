import schoolAnimation from '@/public/assets/back-to-school.json'
import { reasons } from '@/components/data/content.jsx'
import Animation from '@/components/ui/Animation.jsx'
import Reveal from '@/components/ui/Reveal.jsx'
import { Users2,CalendarCheck,Pin2,GraduationCap } from 'reicon-react';
//import { CalendarDays, GraduationCap, MapPin, Users } from 'lucide-react'
//const reasonIcons = [CalendarDays, Users, MapPin, GraduationCap]
const reasonIcons = [CalendarCheck, Users2, Pin2, GraduationCap]

export default function WhySection() {
  return <section id="nos" className="why page-shell section-shell">
    <h2>¿Por qué aprender con nos?</h2>
    <div className="why-grid"><div className="why-reasons">{reasons.map(([title, copy], index) => { const Icon = reasonIcons[index]; return <Reveal as="article" key={title} variant="flip-left">
        <Icon size={64} weight="Filled" color="#3cbebe" className="flex-none" />
        <div><h3>{title}</h3><p>{copy}</p></div></Reveal> })}</div><Reveal variant="flip-up" duration={900}><Animation data={schoolAnimation} label="Alumnos preparados para estudar" /></Reveal></div>
  </section>
}
