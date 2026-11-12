'use client'

// Correo ofuscado para que non o poidan recoller os robots:
//  1. O enderezo non existe como texto plano en ningún ficheiro: gárdase
//     troceado e mÓntase no navegador (no bundle queda "academialenar|gmail|com").
//  2. No DOM escríbese invertido; o CSS (`unicode-bidi: bidi-override`) volve
//     poñelo na orde correcta, así que un robot que lea o HTML atopa
//     "moc.liamg@…" e non un enderezo válido.
//  3. Non leva `href` (nin no `aria-label`): o botón abre o cliente de correo
//     ao premelo, de xeito que o enderezo non queda en ningún atributo.
// Ao copiar o texto invertido, devólvese ao portapapeis o enderezo real.
const PARTS = 'academialenar|gmail|com'
const [LOCAL_PART, PROVIDER, TLD] = PARTS.split('|')
const ARROBA = String.fromCharCode(64)
const EMAIL = LOCAL_PART + ARROBA + PROVIDER + '.' + TLD
const EMAIL_BACKWARDS = [...EMAIL].reverse().join('')

export default function ProtectedEmail({ className = '', label = 'Enviar un correo electrónico', children = null }) {
  const openMailClient = () => { window.location.href = 'mailto:' + EMAIL }
  const copyRealAddress = (event) => {
    event.preventDefault()
    event.clipboardData.setData('text/plain', EMAIL)
  }
  return <button
    type="button"
    className={className ? `protected-email ${className}` : 'protected-email'}
    onClick={openMailClient}
    onCopy={copyRealAddress}
    aria-label={label}
    title={label}
  >
    {children}
    <span className="protected-email-address">{EMAIL_BACKWARDS}</span>
  </button>
}
