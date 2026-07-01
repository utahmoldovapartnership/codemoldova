import { sessionDaysLabel, sessionTimeLabel } from '../data/site.js'

const DAY_LABELS = {
  mon: 'Monday',
  wed: 'Wednesday',
  thu: 'Thursday',
}

/** Week rhythm line for course headers, e.g. "Mon · Wed · Thu · 2 PM". */
export function formatWeekRangeString(_weekSessions, { includeTime = false } = {}) {
  return includeTime ? `${sessionDaysLabel} · ${sessionTimeLabel}` : sessionDaysLabel
}

/** e.g. "Monday · 2 PM" for course cards */
export function formatShortSessionWhen(dayKey) {
  const label = DAY_LABELS[dayKey] || dayKey
  return `${label} · ${sessionTimeLabel}`
}

/** e.g. "Week 3 · Wednesday · 2 PM" for lesson hero */
export function formatSessionDateLine(weekNum, dayKey) {
  const dayLabel = DAY_LABELS[dayKey] || dayKey
  return `Week ${weekNum} · ${dayLabel} · ${sessionTimeLabel}`
}
