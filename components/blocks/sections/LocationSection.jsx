const mapa = '/assets/mapa.jpg'
const reading = '/assets/boy-reading-book.png'

export default function LocationSection() {
  return <section id="localizacion" className="location page-shell">
    <div className="location-map">
      <iframe className="map-frame" title="Localización da Academia Lenar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d734.7445251409492!2d-8.99436791183876!3d42.555757898692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f39cbb5e9e2ef%3A0x5b45713ffb0da936!2sAcademia%20LENAR!5e0!3m2!1ses!2ses!4v1604317351301!5m2!1ses!2ses" />
      <a className="map-link" href="https://goo.gl/maps/PfGieT5J4gfCYf1y9">
        <img src={mapa} alt="mapa" />
        <span>Ver en Google Maps</span>
      </a>
    </div>
    <div className="location-copy">
      <p className="gold">ONDE ESTAMOS</p>
      <h2>Localización</h2>
      <p>Estamos no mesmo centro de Ribeira, a catro pasos da Praza do Concello. Xusto debaixo da Autoescola Miguel.</p>
      <img src={reading} alt="boy reading book" />
    </div>
  </section>
}
