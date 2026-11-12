const girlTable = '/assets/girl-table.png'

export default function ScienceSection() {
  return <section className="science page-shell section-shell">
    <div className="science-copy">
      <p className="gold">MAIS MATERIAS</p>
      <h2>Materias de Ciencias</h2>
      <p className="science-description">Clases de apoio de todas as asignaturas de ciencias, ademais de preparación para exame de selectividade.</p>
    </div>
    <img src={girlTable} alt="girl table" />
  </section>
}
