const teaching = '/assets/ensenando.png'

export default function TeacherSection() {
  return <section className="teacher-section page-shell section-shell">
    <div className="teacher-media"><img src={teaching} alt="Enseñando" /></div>
    <div className="teacher-copy"><h3>Datos Académicos da mestra<br />Rosa Dominguez Vilas</h3><div className="credentials"><p><em><strong>Graduada por:</strong></em></p><ul>
      <li><a href="https://www.rutgers.edu/">Rutger’s / NIIT</a> – Bachelor degree in Science – Nuevo Brunswick, Nueva Jersey</li>
      <li><a href="https://www.saintpeters.edu/">Saint Peter’s University</a> – Universidad privada en Jersey City, Nueva Jersey</li>
      <li><a href="https://www.essex.edu/">Essex County College</a> – Newark, Nueva Jersey</li>
      <li><a href="https://smapse.com/kings-college-new-jersey-rider-university/">King University</a> – New Jersey</li>
      <li><a href="https://www.kean.edu/">Kean university</a>, Union, NJ — Education Saints Peter’s University — Español como segundo idioma</li>
    </ul></div></div>
  </section>
}
