import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageChrome from '../components/PageChrome.jsx'
import { sessions, specialDates } from '../data/schedule'

const VIEW_STORAGE_KEY = 'codemoldova-calendar-view'

function readInitialView() {
  if (typeof window === 'undefined') return 'list'
  try {
    const stored = localStorage.getItem(VIEW_STORAGE_KEY)
    if (stored === 'list' || stored === 'grid') return stored
  } catch {
    /* ignore */
  }
  return window.matchMedia('(min-width: 1024px)').matches ? 'grid' : 'list'
}

/** Month grid shows weekdays only (Mon–Fri). */
const MONTH_GRID_WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

/** Build cell list: leading pads + only Mon–Fri dates (weekends omitted). */
function buildWeekdayMonthCells(year, monthIndex, daysInMonth) {
  const cells = []
  let firstWeekdayPlaced = false

  for (let day = 1; day <= daysInMonth; day++) {
    const dt = new Date(year, monthIndex, day)
    const wd = dt.getDay()
    if (wd === 0 || wd === 6) continue
    const col = wd - 1

    if (!firstWeekdayPlaced) {
      for (let p = 0; p < col; p++) {
        cells.push({ type: 'pad', key: `pad-${monthIndex}-lead-${p}` })
      }
      firstWeekdayPlaced = true
    }

    cells.push({ type: 'day', day, key: `day-${monthIndex}-${day}` })
  }

  return cells
}

const MONTHS = [
  { monthIndex: 4, label: 'May 2026' },
  { monthIndex: 5, label: 'June 2026' },
  { monthIndex: 6, label: 'July 2026' },
]

const DAY_LABEL = { mon: 'Lecture', wed: 'AI', thu: 'Build' }

/** Shared neutral card — color only on day-type labels, not full tile backgrounds. */
const neutralSessionLink =
  'border border-white/[0.1] bg-surface/50 hover:border-white/[0.16] hover:bg-surface2/70 active:bg-surface2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/25'

const sessionBadgeClass = {
  mon: 'text-mon',
  wed: 'text-wed',
  thu: 'text-thu',
}

const sessionTypeLabelClass = {
  mon: 'text-mon',
  wed: 'text-wed',
  thu: 'text-thu',
}

function toISODate(year, monthIndex, day) {
  const m = String(monthIndex + 1).padStart(2, '0')
  const d = String(day).padStart(2, '0')
  return `${year}-${m}-${d}`
}

function formatShortDate(iso) {
  const [yy, mo, d] = iso.split('-').map(Number)
  return new Date(yy, mo - 1, d).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}

function isSameCalendarDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function CalendarViewToggle({ view, onViewChange }) {
  const btn =
    'min-h-11 flex-1 rounded-elem border px-3 py-2.5 font-mono text-sm transition-colors sm:min-h-0 sm:flex-none sm:px-5'
  const active = 'border-white/[0.18] bg-white/[0.08] text-primary'
  const idle =
    'border-white/[0.08] bg-surface text-muted hover:border-white/[0.12] hover:text-primary active:bg-surface2'

  return (
    <div
      className="mb-8 flex flex-col gap-2 sm:mb-10 sm:items-center"
      role="group"
      aria-label="Choose how sessions are displayed"
    >
      <p className="text-center font-mono text-[10px] uppercase tracking-wider text-muted sm:text-[11px]">
        View
      </p>
      <div className="flex w-full max-w-md gap-2 self-center">
        <button
          type="button"
          aria-pressed={view === 'list'}
          className={`${btn} ${view === 'list' ? active : idle}`}
          onClick={() => onViewChange('list')}
        >
          List
        </button>
        <button
          type="button"
          aria-pressed={view === 'grid'}
          className={`${btn} ${view === 'grid' ? active : idle}`}
          onClick={() => onViewChange('grid')}
        >
          Month
        </button>
      </div>
    </div>
  )
}

/** Mobile-first: list rows meet ~48px+ touch targets; full titles; no cramming into a 7-column grid. */
function SessionAgenda({ sessions: list, specialByDate }) {
  const sorted = useMemo(
    () => [...list].sort((a, b) => a.date.localeCompare(b.date)),
    [list],
  )

  return (
    <section aria-labelledby="agenda-heading" className="space-y-3">
      <div className="flex items-baseline justify-between gap-2">
        <h2 id="agenda-heading" className="font-display text-lg font-bold text-primary">
          All sessions
        </h2>
        <p className="max-w-[14rem] text-right font-mono text-[11px] uppercase tracking-wider text-muted">
          Tap a row for the lesson
        </p>
      </div>
      <ul className="space-y-2">
        {sorted.map((s) => {
          const special = specialByDate[s.date]
          return (
            <li key={`${s.date}-${s.day}`}>
              <Link
                to={`/lesson/${s.week}/${s.day}`}
                className={`flex min-h-[3.5rem] rounded-card px-4 py-3 transition-colors sm:min-h-[3.75rem] sm:py-3.5 ${neutralSessionLink}`}
              >
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex flex-wrap items-center gap-2 sm:w-40 sm:shrink-0">
                    <time
                      dateTime={s.date}
                      className="font-mono text-[13px] tabular-nums text-muted sm:text-sm"
                    >
                      {formatShortDate(s.date)}
                    </time>
                    <span
                      className={`font-mono text-[11px] font-semibold uppercase tracking-wide ${sessionBadgeClass[s.day]}`}
                    >
                      {DAY_LABEL[s.day]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-medium leading-snug text-primary sm:text-base">{s.label}</p>
                    {special ? (
                      <p className="mt-0.5 font-mono text-[11px] text-muted">
                        {special.type === 'demo' ? 'Demo Day · ' : null}
                        {special.type === 'milestone' ? 'Course start · ' : null}
                        {special.label}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function MonthGrid({ year, monthIndex, monthLabel, sessionByDate, specialByDate }) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const cells = buildWeekdayMonthCells(year, monthIndex, daysInMonth)

  return (
    <section className="rounded-card border border-white/[0.08] bg-surface/50 p-3 sm:p-4">
      <h2 className="mb-3 font-display text-lg font-bold text-primary sm:mb-4 sm:text-xl">{monthLabel}</h2>

      <div className="mb-1.5 grid grid-cols-5 gap-1.5">
        {MONTH_GRID_WEEKDAYS.map((w) => (
          <div
            key={w}
            className="py-1.5 text-center font-mono text-[10px] font-medium uppercase tracking-wider text-muted sm:text-[11px]"
          >
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {cells.map((cell) => {
          if (cell.type === 'pad') {
            return <div key={cell.key} className="min-h-[5rem] sm:min-h-[5.5rem]" aria-hidden />
          }

          const { day } = cell
          const dateKey = toISODate(year, monthIndex, day)
          const session = sessionByDate[dateKey]
          const special = specialByDate[dateKey]
          const cellDate = new Date(year, monthIndex, day)
          const isToday = isSameCalendarDate(cellDate, today)

          if (session) {
            return (
              <Link
                key={cell.key}
                to={`/lesson/${session.week}/${session.day}`}
                className={`flex min-h-[5rem] flex-col rounded-elem p-2 text-left transition-colors sm:min-h-[5.5rem] ${neutralSessionLink}`}
                title={session.label}
              >
                <span className="font-mono text-[10px] tabular-nums text-muted sm:text-[11px]">
                  {day}
                  {isToday ? <span className="ml-0.5 text-mon">·</span> : null}
                </span>
                <span
                  className={`mt-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide sm:text-[9px] ${sessionTypeLabelClass[session.day]}`}
                >
                  {DAY_LABEL[session.day]}
                </span>
                <span className="mt-0.5 line-clamp-4 text-[11px] font-medium leading-snug text-primary sm:line-clamp-5 sm:text-xs">
                  {session.label}
                </span>
                {special && special.type === 'milestone' ? (
                  <span className="mt-auto pt-1 font-mono text-[9px] text-thu">First day</span>
                ) : null}
                {special && special.type === 'demo' ? (
                  <span className="mt-auto pt-1 font-mono text-[9px] text-wed">Demo</span>
                ) : null}
              </Link>
            )
          }

          if (special) {
            return (
              <div
                key={cell.key}
                className="flex min-h-[5rem] flex-col rounded-elem border border-white/[0.1] bg-surface/40 p-2 sm:min-h-[5.5rem]"
              >
                <span className="font-mono text-[10px] tabular-nums text-muted sm:text-[11px]">{day}</span>
                <span className="mt-1 line-clamp-4 text-[11px] font-medium leading-snug text-primary sm:text-xs">
                  {special.label}
                </span>
              </div>
            )
          }

          return (
            <div
              key={cell.key}
              className={`flex min-h-[5rem] items-start justify-center rounded-elem border border-transparent pt-2 font-mono text-[11px] tabular-nums text-muted/80 sm:min-h-[5.5rem] sm:pt-2.5 sm:text-xs ${
                isToday ? 'font-semibold text-mon' : ''
              }`}
            >
              {day}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function ImportantDatesAside() {
  return (
    <aside className="shrink-0 rounded-card border border-white/[0.08] bg-surface p-5 lg:sticky lg:top-24 lg:w-[min(100%,280px)]">
      <h2 className="mb-4 font-display text-base font-bold text-primary">Important dates</h2>
      <ul className="space-y-3 font-mono text-xs text-muted">
        {specialDates.map((s) => {
          const [yy, mo, d] = s.date.split('-').map(Number)
          const pretty = new Date(yy, mo - 1, d).toLocaleDateString('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
          return (
            <li key={s.date} className="border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
              <div className="text-[10px] uppercase tracking-wider text-muted">{pretty}</div>
              <div className="mt-1 text-[13px] text-primary">{s.label}</div>
              {s.type === 'demo' ? (
                <div className="mt-1 text-[11px] text-wed">Final session — presentations</div>
              ) : null}
              {s.type === 'milestone' ? (
                <div className="mt-1 text-[11px] text-mon">Course begins</div>
              ) : null}
            </li>
          )
        })}
      </ul>
      <p className="mt-4 border-t border-white/[0.08] pt-4 text-[12px] leading-relaxed text-muted sm:text-[13px]">
        Regular classes meet <span className="text-primary">Monday, Wednesday, and Thursday</span>, one hour each. Week 8
        has no Thursday session — we finish on Demo Day (Wednesday).
      </p>
    </aside>
  )
}

export default function Calendar() {
  const [view, setView] = useState(() => readInitialView())

  useEffect(() => {
    try {
      localStorage.setItem(VIEW_STORAGE_KEY, view)
    } catch {
      /* ignore */
    }
  }, [view])

  const sessionByDate = useMemo(
    () => Object.fromEntries(sessions.map((s) => [s.date, s])),
    [],
  )
  const specialByDate = useMemo(
    () => Object.fromEntries(specialDates.map((s) => [s.date, s])),
    [],
  )

  return (
    <PageChrome>
      <div className="layout-page">
        <header className="layout-prose-heading">
          <p className="hero-in hero-in-1 font-mono text-[11px] uppercase tracking-widest text-muted">May — July 2026</p>
          <h1 className="hero-in hero-in-2 mt-2 font-display text-[clamp(1.75rem,4.5vw,2.35rem)] font-extrabold text-primary">
            Course calendar
          </h1>
          <p className="hero-in hero-in-3 mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-[15px]">
            Use <span className="text-primary/90">List</span> for a scrollable schedule or{' '}
            <span className="text-primary/90">Month</span> for the full calendar. Tap any session to open its lesson.
            Lecture / AI / Build labels use the same blue, green, and amber as the roadmap — tiles stay neutral.
          </p>
        </header>

        <div className="hero-in hero-in-4 mb-8 flex flex-col gap-3 border-y border-white/[0.08] py-4 text-left text-[13px] text-muted sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:py-5 sm:text-center sm:text-[13px]">
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-mon" /> Monday · Lecture
        </div>
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-wed" /> Wednesday · AI
        </div>
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-thu" /> Thursday · Build
        </div>
      </div>

      <CalendarViewToggle view={view} onViewChange={setView} />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
        <div className="min-w-0 flex-1">
          {view === 'list' ? (
            <SessionAgenda sessions={sessions} specialByDate={specialByDate} />
          ) : (
            <div className="space-y-8 sm:space-y-10">
              {MONTHS.map(({ monthIndex, label }) => (
                <MonthGrid
                  key={label}
                  year={2026}
                  monthIndex={monthIndex}
                  monthLabel={label}
                  sessionByDate={sessionByDate}
                  specialByDate={specialByDate}
                />
              ))}
            </div>
          )}
        </div>
        <ImportantDatesAside />
      </div>
      </div>
    </PageChrome>
  )
}
