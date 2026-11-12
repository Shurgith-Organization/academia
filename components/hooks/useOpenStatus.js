import { useEffect, useState } from 'react'
import { isHoliday } from '../data/holidays.js'

// A academia está en Ribeira (A Coruña): o horario vai en hora peninsular.
const TIME_ZONE = 'Europe/Madrid'
const OPENING_MINUTES = 10 * 60 // 10:00
const CLOSING_MINUTES = 20 * 60 // 20:00

const formatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

function madridTime(date = new Date()) {
  const parts = Object.fromEntries(
    formatter.formatToParts(date).map((part) => [part.type, part.value]),
  )
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  }
}

export function isOpen(date = new Date()) {
  const { date: isoDate, minutes } = madridTime(date)
  const [year, month, day] = isoDate.split('-').map(Number)
  const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay()

  if (weekday === 0 || weekday === 6) return false
  if (isHoliday(isoDate)) return false

  return minutes >= OPENING_MINUTES && minutes < CLOSING_MINUTES
}

export function useOpenStatus() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOpen())
    const id = setInterval(() => setOpen(isOpen()), 60000)
    return () => clearInterval(id)
  }, [])

  return open
}
