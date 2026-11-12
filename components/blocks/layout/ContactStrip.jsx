import { EnvelopeRight, PhoneRing } from 'reicon-react'
import ProtectedEmail from '@/components/ui/ProtectedEmail.jsx'

export default function ContactStrip() {
  return <div className="contact-strip">
    <div className="page-shell">
      <a className="font-semibold text-lg" href="tel:+34667996206"><PhoneRing size={24} weight="Filled" />&nbsp;+34667996206</a>

      <ProtectedEmail className="contact-mail font-semibold text-lg"><EnvelopeRight size={24} weight="Filled" />&nbsp;</ProtectedEmail>
    </div>
  </div>
}
