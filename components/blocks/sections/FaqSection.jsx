'use client'

import { useState } from 'react'
import { Banknote, CircleChevronDown, CircleChevronUp, List, Repeat } from 'lucide-react'
import { faqs } from '@/components/data/content.jsx'
const faqImage = '/assets/apoiada-na-mesa.png'

const faqIcons = [Repeat, List, Banknote]

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(-1)
  return <section id='preguntas' className="faq page-shell">
    <div>
      <h2>¿Tes mais preguntas?</h2>
      <div className="faq-list cursor-pointer">{faqs.map(([question, answer], index) => {
        const Icon = faqIcons[index]
        const isOpen = openFaq === index
        return <article key={question}>
          <h3>
            <button id={`faq-button-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={`faq-panel-${index}`}>
              <Icon size={22} /><span>{question}</span>{isOpen ? <CircleChevronUp size={20} /> : <CircleChevronDown size={20} />}
            </button>
          </h3>
          <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} className="faq-panel" hidden={!isOpen}>{answer}</div>
        </article>
      })}</div>
    </div>
    <img src={faqImage} alt="apoiada na mesa" />
  </section>
}
