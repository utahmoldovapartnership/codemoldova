import { sessionTimeLabel } from '../data/site.js'

/** YYYY-MM-DD from schedule.js */
function parseISODate(iso) {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  if (!Number.isFinite(y)) return null
  return new Date(y, m - 1, d)
}

/**
 * @param {Record<string, { date?: string } | undefined>} weekSessions - mon / wed / thu
 * @returns {{ start: string, end: string } | null}
 */
export function formatWeekRangeParts(weekSessions) {
  const dates = ['mon', 'wed', 'thu']
    .map((d) => weekSessions[d]?.date)
    .filter(Boolean)
    .map(parseISODate)
    .filter(Boolean)
    .sort((a, b) => a - b)
  if (!dates.length) return null
  const fmt = (d) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  return { start: fmt(dates[0]), end: fmt(dates[dates.length - 1]) }
}

export function formatWeekRangeString(weekSessions, { includeTime = false } = {}) {
  const p = formatWeekRangeParts(weekSessions)
  if (!p) return ''
  const range = `${p.start} – ${p.end}`
  return includeTime ? `${range} · ${sessionTimeLabel}` : range
}

/** e.g. "18 May · 2 PM" for course cards and lesson headers */
export function formatShortSessionWhen(iso) {
  const d = parseISODate(iso)
  if (!d) return sessionTimeLabel
  const date = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  return `${date} · ${sessionTimeLabel}`
}

/** e.g. "18 May 2026 · 2 PM" for lesson hero */
export function formatSessionDateLine(iso) {
  const d = parseISODate(iso)
  if (!d) return sessionTimeLabel
  const date = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  return `${date} · ${sessionTimeLabel}`
}
