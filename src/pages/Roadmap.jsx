import { useState, useId } from 'react'
import { Link } from 'react-router-dom'
import PageChrome from '../components/PageChrome.jsx'
import { phases } from '../data/curriculum'
import { sessions } from '../data/schedule'

const DAY_COLORS = {
  mon: { accent: 'text-mon', border: 'border-mon/30', bg: 'bg-mon/10', bar: 'bg-mon', label: 'Monday · Lecture' },
  wed: { accent: 'text-wed', border: 'border-wed/30', bg: 'bg-wed/10', bar: 'bg-wed', label: 'Wednesday · AI' },
  thu: { accent: 'text-thu', border: 'border-thu/30', bg: 'bg-thu/10', bar: 'bg-thu', label: 'Thursday · Build' },
}

const PHASE_COLORS = ['#6c63ff', '#3eb8c0', '#e05c97', '#f0a500']

function getCurrentWeek() {
  const today = new Date()
  const upcoming = sessions
    .filter(s => new Date(s.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
  return upcoming.length ? upcoming[0].week : null
}

const announcements = [
  {
    date: 'Before Week 1',
    tag: 'Tool',
    tagColor: 'bg-thu/10 text-thu',
    title: 'Install Python',
    body: 'Download and install Python 3.12 before the first class. We\'ll use it from day one.',
    link: { label: 'python.org/downloads →', url: 'https://www.python.org/downloads/' },
  },
  {
    date: 'Before Week 1',
    tag: 'Tool',
    tagColor: 'bg-thu/10 text-thu',
    title: 'Get VS Code',
    body: 'VS Code is our code editor. Free, fast, and works great with Python and web projects.',
    link: { label: 'code.visualstudio.com →', url: 'https://code.visualstudio.com/' },
  },
  {
    date: 'Week 1',
    tag: 'Welcome',
    tagColor: 'bg-wed/10 text-wed',
    title: 'Welcome to the course!',
    body: "Happy to have everyone here. Don't worry if you've never coded before — that's exactly who this course is for.",
  },
]

function DayCard({ week, day, session }) {
  const c = DAY_COLORS[day]
  return (
    <Link
      to={`/lesson/${week}/${day}`}
      className={`group relative flex min-h-[44px] flex-col overflow-hidden rounded-card border border-white/[0.08] bg-surface p-4 transition-all duration-200 active:border-white/[0.14] active:bg-surface2 sm:p-[18px_20px] sm:hover:-translate-y-0.5 sm:hover:border-white/[0.14] sm:focus-visible:-translate-y-0.5 sm:focus-visible:border-white/[0.14]`}
    >
      <div className={`absolute inset-x-0 top-0 h-0.5 ${c.bar} opacity-60`} />
      <div className={`mb-2 font-mono text-[10px] font-medium uppercase tracking-widest ${c.accent}`}>
        {c.label}
      </div>
      <div className="mb-1.5 font-display text-[15px] font-bold leading-snug text-primary">
        {session.title}
      </div>
      <div className="line-clamp-3 text-[13px] leading-relaxed text-muted sm:line-clamp-2">
        {session.desc}
      </div>
      <div
        className={`mt-3 self-start rounded-pill border px-2.5 py-1 font-mono text-[10px] ${c.border} ${c.accent} opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100`}
      >
        {session.date} →
      </div>
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
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted">Wk</div>
          <div className="font-display text-2xl font-extrabold leading-none text-primary">{week.num}</div>
        </div>
      </div>
      <Chevron open={isOpen} />
    </>
  )

  const headerClass =
    'flex w-full min-h-11 items-center justify-between gap-3 px-4 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-mon/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg bg-surface/60 hover:bg-surface2/80 active:bg-surface2'

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
            <div className="p-3 sm:p-3">
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,72px)_1fr_1fr_1fr] lg:items-stretch lg:gap-2.5">
                <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:rounded-card lg:border lg:border-white/[0.08] lg:bg-surface lg:px-2 lg:py-4">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted">Wk</div>
                  <div className="font-display text-2xl font-extrabold leading-none text-primary">{week.num}</div>
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
          <p className="hero-in hero-in-1 font-mono text-[11px] uppercase tracking-widest text-muted">Roadmap</p>
          <h1 className="hero-in hero-in-2 mt-2 font-display text-[clamp(1.75rem,4.5vw,2.35rem)] font-extrabold text-primary">
            Course roadmap
          </h1>
          <p className="hero-in hero-in-3 mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-[15px]">
            Eight phases from Python foundations to Demo Day. Expand a week to see Monday (lecture), Wednesday (AI), and
            Thursday (build) — then tap any session for its lesson page.
          </p>
        </header>

        <div className="hero-in hero-in-4 mb-8 flex flex-col gap-3 border-y border-white/[0.08] py-4 text-left text-[13px] text-muted sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:py-5 sm:text-center">
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-mon" /> Monday — Lecture
        </div>
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-wed" /> Wednesday — AI Exploration
        </div>
        <div className="flex min-h-10 items-center gap-2.5 sm:min-h-0">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-thu" /> Thursday — Build Together
        </div>
      </div>

      <div className="pb-6 sm:pb-8">
        {phases.map((phase, i) => (
          <section key={phase.id} className="mb-12 sm:mb-14">
            <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Phase {i + 1}</span>
                <span className="font-display text-lg font-bold sm:text-xl" style={{ color: PHASE_COLORS[i] }}>
                  {phase.title}
                </span>
              </div>
              <div className="hidden h-px flex-1 bg-white/[0.08] sm:block" />
            </div>

            <div className="flex flex-col gap-2.5">
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

      <section className="pb-12 sm:pb-16">
        <h2 className="mb-1.5 font-display text-[clamp(1.5rem,5vw,1.75rem)] font-extrabold text-primary">
          Updates &amp; Resources
        </h2>
        <p className="mb-6 text-pretty text-sm text-muted sm:mb-7">
          Links, tools, and things to check out between sessions.
        </p>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
          {announcements.map((a, i) => (
            <div
              key={i}
              className="rounded-card border border-white/[0.08] bg-surface p-5 transition-colors sm:p-[22px_24px] sm:hover:border-white/[0.14]"
            >
              <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">{a.date}</div>
              <div className={`mb-2 inline-block rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${a.tagColor}`}>
                {a.tag}
              </div>
              <div className="mb-2 font-display text-base font-bold text-primary">{a.title}</div>
              <div className="text-pretty text-[13px] leading-relaxed text-muted">{a.body}</div>
              {a.link && (
                <a
                  href={a.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center font-mono text-xs text-mon underline-offset-2 hover:underline"
                >
                  {a.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      </div>
    </PageChrome>
  )
}
