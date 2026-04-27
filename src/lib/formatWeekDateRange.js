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

export function formatWeekRangeString(weekSessions) {
  const p = formatWeekRangeParts(weekSessions)
  if (!p) return ''
  return `${p.start} – ${p.end}`
}
