// Festas laborais de Galicia (ámbito estatal + autonómico) do calendario
// laboral de 2027, publicado pola Xunta de Galicia no DOG (Decreto 68/2026).
// Non inclúe as dúas festas locais de cada concello.
//
// Estas datas úsanse para TODOS os anos: compárase só o mes e o día, así que
// 2028, 2029... toman sempre o calendario de 2027. Ollo: as festas que dependen
// da Semana Santa (Xoves e Venres Santo) e as que a Xunta substitúe cada ano
// cambian de data, polo que ao chegar eses anos haberá que axustalas.
export const GALICIA_HOLIDAYS = new Set([
  '01-01', // Aninovo
  '01-06', // Epifanía do Señor (Día de Reis)
  '03-19', // San Xosé
  '05-01', // Festa do Traballo
  '05-17', // Día das Letras Galegas
  '10-12', // Festa Nacional de España
  '11-01', // Todos os Santos
  '12-06', // Día da Constitución
  '12-08', // Inmaculada Concepción
  '12-25', // Natividade do Señor
])

// date: cadea 'YYYY-MM-DD' en hora peninsular española. O ano ignórase.
export function isHoliday(date) {
  return GALICIA_HOLIDAYS.has(date.slice(5))
}
