import { useState, useId } from 'react'
import { Link } from 'react-router-dom'
import PageChrome from '../components/PageChrome.jsx'
import { phases } from '../data/curriculum'
import { sessions } from '../data/schedule'

const DAY_COLORS = {
  mon: { accent: 'text-mon', border: 'border-mon/30', bg: 'bg-mon/10', bar: 'bg-mon', dayName: 'Monday', typeShort: 'Lecture' },
  wed: { accent: 'text-wed', border: 'border-wed/30', bg: 'bg-wed/10', bar: 'bg-wed', dayName: 'Wednesday', typeShort: 'AI' },
  thu: { accent: 'text-thu', border: 'border-thu/30', bg: 'bg-thu/10', bar: 'bg-thu', dayName: 'Thursday', typeShort: 'Build' },
}

/** Short date for the day line, e.g. "11 May". Matches en-GB style used elsewhere. */
function formatCardDate(iso) {
  if (!iso) return '?'
  const [y, m, d] = iso.split('-').map(Number)
  if (!Number.isFinite(y) || !Number.isFinite(m) || !Number.isFinite(d)) return iso
  return new Date(y, m - 1, d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

const PHASE_COLORS = ['#6c63ff', '#3eb8c0', '#e05c97', '#f0a500']

function getCurrentWeek() {
  const today = new Date()
  const upcoming = sessions
    .filter(s => new Date(s.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
  return upcoming.length ? upcoming[0].week : null
}

function DayCard({ week, day, session }) {
  const c = DAY_COLORS[day]
  return (
    <Link
      to={`/lesson/${week}/${day}`}
      className={`group relative flex min-h-[44px] flex-col overflow-hidden rounded-card border border-white/[0.08] bg-surface p-5 transition-all duration-200 active:border-white/[0.14] active:bg-surface2 sm:p-6 sm:hover:-translate-y-0.5 sm:hover:border-white/[0.14] sm:focus-visible:-translate-y-0.5 sm:focus-visible:border-white/[0.14]`}
    >
      <div className={`absolute inset-x-0 top-0 h-0.5 ${c.bar} opacity-60`} />
      <div className={`mb-2 font-mono text-[11px] font-medium uppercase tracking-widest ${c.accent}`}>
        {c.dayName} · {formatCardDate(session.date)} · {c.typeShort}
      </div>
      <div className="mb-2 font-display text-base font-bold leading-snug text-primary sm:text-[17px]">
        {session.title}
      </div>
      <p className="text-sm leading-relaxed text-muted sm:text-[15px]">{session.preview ?? session.desc}</p>
      <p className="mt-3 font-mono text-xs text-muted opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
        Open lesson
      </p>
    </Link>
  )
}

function Chevron({ open }) {
  return (
    <span
      className={`inline-block shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted">
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function WeekRow({ week, currentWeek, isOpen, onToggle }) {
  const uid = useId()
  const panelId = `week-panel-${week.num}-${uid}`
  const triggerId = `week-trigger-${week.num}-${uid}`

  const isCurrent = week.num === currentWeek

  const HeaderInner = (
    <>
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <div className="flex items-baseline gap-2">
          <div className="font-mono text-xs uppercase tracking-wider text-muted">Wk</div>
          <div className="font-display text-3xl font-extrabold leading-none text-primary">{week.num}</div>
        </div>
      </div>
      <Chevron open={isOpen} />
    </>
  )

  const headerClass =
    'flex w-full min-h-[3rem] items-center justify-between gap-3 px-5 py-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-mon/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg bg-surface/60 hover:bg-surface2/80 active:bg-surface2'

  return (
    <div
      aria-current={isCurrent ? 'true' : undefined}
      className={`overflow-hidden rounded-card border transition-colors ${
        isCurrent ? 'border-mon/25 bg-mon/[0.04]' : 'border-white/[0.08] bg-surface/40'
      }`}
    >
      <div className="divide-y divide-white/[0.08]">
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={headerClass}
        >
          {HeaderInner}
        </button>

        {isOpen && (
          <div id={panelId} role="region" aria-labelledby={triggerId}>
            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,72px)_1fr_1fr_1fr] lg:items-stretch lg:gap-3">
                <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:rounded-card lg:border lg:border-white/[0.08] lg:bg-surface lg:px-2 lg:py-5">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted">Wk</div>
                  <div className="font-display text-3xl font-extrabold leading-none text-primary">{week.num}</div>
                </div>

                {['mon', 'wed', 'thu'].map((day) =>
                  week[day] ? (
                    <DayCard key={day} week={week.num} day={day} session={week[day]} />
                  ) : (
                    <div key={day} className="hidden lg:block" />
                  ),
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Roadmap() {
  const currentWeek = getCurrentWeek()
  const [openWeeks, setOpenWeeks] = useState(
    () => new Set(currentWeek != null ? [currentWeek] : []),
  )

  const isWeekOpen = (weekNum) => openWeeks.has(weekNum)

  const toggleWeek = (weekNum) => {
    setOpenWeeks((prev) => {
      const next = new Set(prev)
      if (next.has(weekNum)) next.delete(weekNum)
      else next.add(weekNum)
      return next
    })
  }

  return (
    <PageChrome>
      <div className="layout-page">
        <header className="layout-prose-heading">
          <p className="hero-in hero-in-1 font-mono text-xs uppercase tracking-widest text-muted">Roadmap</p>
          <h1 className="hero-in hero-in-2 mt-2 font-display text-[clamp(1.85rem,4.5vw,2.5rem)] font-extrabold leading-tight text-primary">
            Course roadmap
          </h1>
          <p className="hero-in hero-in-3 mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted">
            The course has four parts: Python, projects, the web, then your final project. Open a week to see Monday,
            Wednesday, and Thursday. Tap a card to open that class page.
          </p>
        </header>

        <div className="hero-in hero-in-4 mb-10 flex flex-col gap-4 border-y border-white/[0.08] py-5 text-left text-base text-muted sm:mb-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:py-6 sm:text-center">
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-mon" /> Monday: class with new topics
        </div>
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-wed" /> Wednesday: AI tools
        </div>
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-thu" /> Thursday: build projects
        </div>
      </div>

      <div className="pb-8 sm:pb-10">
        {phases.map((phase, i) => (
          <section key={phase.id} className="mb-16 sm:mb-20">
            <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">Phase {i + 1}</span>
                <span className="font-display text-xl font-bold sm:text-2xl" style={{ color: PHASE_COLORS[i] }}>
                  {phase.title}
                </span>
              </div>
              <div className="hidden h-px flex-1 bg-white/[0.08] sm:block" />
            </div>

            <div className="flex flex-col gap-3">
              {phase.weeks.map((week) => (
                <WeekRow
                  key={week.num}
                  week={week}
                  currentWeek={currentWeek}
                  isOpen={isWeekOpen(week.num)}
                  onToggle={() => toggleWeek(week.num)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      </div>
    </PageChrome>
  )
}
