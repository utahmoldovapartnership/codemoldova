import { Fragment, useEffect, useMemo, useState } from 'react'
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

/** Month grid shows weekdays only (Mon to Fri). */
const MONTH_GRID_WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

/**
 * Build cell list: leading pads + only Mon to Fri dates (weekends omitted).
 * `mergeNextMonthWeekdayDays`: include the first N calendar days of the *next* month if they fall on a weekday
 * (used so June’s grid can show 1 Jul without a separate July section).
 */
function buildWeekdayMonthCells(year, monthIndex, daysInMonth, mergeNextMonthWeekdayDays = 0) {
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

    cells.push({ type: 'day', day, monthIndex, key: `day-${monthIndex}-${day}` })
  }

  if (mergeNextMonthWeekdayDays > 0) {
    const nextM = monthIndex + 1
    for (let d = 1; d <= mergeNextMonthWeekdayDays; d++) {
      const dt = new Date(year, nextM, d)
      if (dt.getDay() === 0 || dt.getDay() === 6) continue
      cells.push({ type: 'day', day: d, monthIndex: nextM, key: `day-${nextM}-${d}` })
    }
  }

  return cells
}

function formatMonthGridDayLabel(year, day, cellMonthIndex, gridMonthIndex) {
  if (cellMonthIndex === gridMonthIndex) return String(day)
  return new Date(year, cellMonthIndex, day).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })
}

const MONTHS = [
  { monthIndex: 4, label: 'May 2026' },
  { monthIndex: 5, label: 'June 2026', mergeNextMonthWeekdayDays: 1 },
]

const DAY_LABEL = { mon: 'Lecture', wed: 'AI', thu: 'Build' }

/** Shared neutral card. Color only on day-type labels, not full tile backgrounds. */
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
  /** Segmented control: one track, mutually exclusive choices (clearer than two separate buttons). */
  const seg =
    'relative z-10 min-h-10 rounded-pill px-4 py-2.5 font-mono text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon sm:min-h-10 sm:px-5'
  const segOn = 'text-primary'
  const segOff = 'text-muted hover:text-primary'

  return (
    <div className="hero-in hero-in-4 mt-6 flex w-full flex-col items-center gap-3 sm:mt-8">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">View</p>
      <div
        role="tablist"
        aria-label="List view or month view"
        className="relative inline-grid h-12 w-[min(100%,20rem)] shrink-0 grid-cols-2 rounded-pill border border-white/[0.12] bg-surface/70 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      >
        <span
          className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-pill bg-white/[0.12] shadow-[0_1px_0_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out motion-reduce:transition-none ${
            view === 'grid' ? 'translate-x-full' : 'translate-x-0'
          }`}
          aria-hidden
        />
        <button
          type="button"
          role="tab"
          aria-selected={view === 'list'}
          className={`${seg} ${view === 'list' ? segOn : segOff}`}
          onClick={() => onViewChange('list')}
        >
          List
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={view === 'grid'}
          className={`${seg} ${view === 'grid' ? segOn : segOff}`}
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

  const weekGroups = useMemo(() => {
    const groups = []
    for (const s of sorted) {
      const last = groups[groups.length - 1]
      if (!last || last.week !== s.week) {
        groups.push({ week: s.week, sessions: [s] })
      } else {
        last.sessions.push(s)
      }
    }
    return groups
  }, [sorted])

  return (
    <section aria-labelledby="agenda-heading" className="space-y-3">
      <div className="flex items-baseline justify-between gap-2">
        <h2 id="agenda-heading" className="font-display text-xl font-bold text-primary">
          All classes
        </h2>
        <p className="max-w-[16rem] text-right font-mono text-xs uppercase tracking-wider text-muted">
          Tap a row
        </p>
      </div>
      <ul className="space-y-2">
        {weekGroups.map((group, groupIndex) => (
          <Fragment key={group.week}>
            {groupIndex > 0 ? (
              <li className="list-none py-5 sm:py-6" aria-hidden="true">
                <div className="mx-auto h-px w-[min(90%,22rem)] bg-white/[0.08]" />
              </li>
            ) : null}
            {group.sessions.map((s) => {
              const special = specialByDate[s.date]
              return (
                <li key={`${s.date}-${s.day}`}>
                  <Link
                    to={`/lesson/${s.week}/${s.day}`}
                    className={`flex min-h-[3.75rem] rounded-card px-5 py-4 transition-colors sm:min-h-[4rem] sm:py-4 ${neutralSessionLink}`}
                  >
                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex flex-wrap items-center gap-2 sm:w-40 sm:shrink-0">
                        <time
                          dateTime={s.date}
                          className="font-mono text-sm tabular-nums text-muted"
                        >
                          {formatShortDate(s.date)}
                        </time>
                        <span
                          className={`font-mono text-xs font-semibold uppercase tracking-wide ${sessionBadgeClass[s.day]}`}
                        >
                          {DAY_LABEL[s.day]}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-medium leading-snug text-primary sm:text-[17px]">{s.label}</p>
                        {special ? (
                          <p className="mt-1 font-mono text-xs text-muted">
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
          </Fragment>
        ))}
      </ul>
    </section>
  )
}

function MonthGrid({ year, monthIndex, monthLabel, sessionByDate, specialByDate, mergeNextMonthWeekdayDays = 0 }) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const cells = buildWeekdayMonthCells(year, monthIndex, daysInMonth, mergeNextMonthWeekdayDays)

  return (
    <section className="rounded-card border border-white/[0.08] bg-surface/50 p-4 sm:p-5">
      <h2 className="mb-4 font-display text-xl font-bold text-primary sm:mb-5 sm:text-2xl">{monthLabel}</h2>

      <div className="mb-1.5 grid grid-cols-5 gap-1.5">
        {MONTH_GRID_WEEKDAYS.map((w) => (
          <div
            key={w}
            className="py-2 text-center font-mono text-[11px] font-medium uppercase tracking-wider text-muted sm:text-xs"
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
          const cellMonth = cell.monthIndex ?? monthIndex
          const dateKey = toISODate(year, cellMonth, day)
          const session = sessionByDate[dateKey]
          const special = specialByDate[dateKey]
          const cellDate = new Date(year, cellMonth, day)
          const isToday = isSameCalendarDate(cellDate, today)
          const dayLabel = formatMonthGridDayLabel(year, day, cellMonth, monthIndex)

          if (session) {
            return (
              <Link
                key={cell.key}
                to={`/lesson/${session.week}/${session.day}`}
                className={`flex min-h-[5rem] flex-col rounded-elem p-2 text-left transition-colors sm:min-h-[5.5rem] ${neutralSessionLink}`}
                title={session.label}
              >
                <span className="font-mono text-[10px] tabular-nums text-muted sm:text-[11px]">
                  {dayLabel}
                  {isToday ? <span className="ml-0.5 text-mon">·</span> : null}
                </span>
                <span
                  className={`mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-wide sm:text-[10px] ${sessionTypeLabelClass[session.day]}`}
                >
                  {DAY_LABEL[session.day]}
                </span>
                <span className="mt-0.5 line-clamp-4 text-xs font-medium leading-snug text-primary sm:line-clamp-5 sm:text-sm">
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
                <span className="font-mono text-[10px] tabular-nums text-muted sm:text-[11px]">{dayLabel}</span>
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
              {dayLabel}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function ImportantDatesAside() {
  return (
    <aside className="shrink-0 rounded-card border border-white/[0.08] bg-surface p-6 lg:sticky lg:top-24 lg:col-start-2 lg:row-start-2 lg:h-fit lg:w-[min(100%,300px)] lg:self-start">
      <h2 className="mb-5 font-display text-lg font-bold text-primary">Key dates</h2>
      <ul className="space-y-4 font-mono text-sm text-muted">
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
              <div className="text-xs uppercase tracking-wider text-muted">{pretty}</div>
              <div className="mt-1.5 text-base text-primary">{s.label}</div>
              {s.type === 'demo' ? (
                <div className="mt-1.5 text-sm text-wed">Last class. Student presentations.</div>
              ) : null}
              {s.type === 'milestone' ? (
                <div className="mt-1.5 text-sm text-mon">First day of class</div>
              ) : null}
            </li>
          )
        })}
      </ul>
      <p className="mt-5 border-t border-white/[0.08] pt-5 text-sm leading-relaxed text-muted sm:text-base">
        Normal classes are <span className="text-primary">Monday, Wednesday, and Thursday</span>. Each class is one hour.
        In week 8 there is no Thursday class. The course ends on Demo Day (Wednesday).
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
          <p className="hero-in hero-in-1 font-mono text-xs uppercase tracking-widest text-muted">May to July 2026</p>
          <h1 className="hero-in hero-in-2 mt-2 font-display text-[clamp(1.85rem,4.5vw,2.5rem)] font-extrabold leading-tight text-primary">
            Course calendar
          </h1>
          <p className="hero-in hero-in-3 mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted">
            <span className="text-primary/90">List</span> shows all classes in date order. Good on a phone.{' '}
            <span className="text-primary/90">Month</span> shows May and June on a calendar (weekdays only). Demo Day on 1
            July appears at the end of the June view. Tap a row or a day to open the class page.
          </p>
        </header>

      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_min(100%,300px)] lg:items-start lg:gap-x-10 lg:gap-y-4">
        <div className="lg:col-start-1 lg:row-start-1">
          <CalendarViewToggle view={view} onViewChange={setView} />
        </div>
        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          {view === 'list' ? (
            <SessionAgenda sessions={sessions} specialByDate={specialByDate} />
          ) : (
            <div className="space-y-8 sm:space-y-10">
              {MONTHS.map(({ monthIndex, label, mergeNextMonthWeekdayDays = 0 }) => (
                <MonthGrid
                  key={label}
                  year={2026}
                  monthIndex={monthIndex}
                  monthLabel={label}
                  mergeNextMonthWeekdayDays={mergeNextMonthWeekdayDays}
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
