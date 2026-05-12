// Editorial Course page mockup for CodeMoldova.
// Self-contained, viewable at /course-mockup. Delete this file + the route line in App.jsx to remove.
//
// Two parts:
//   1. THIS WEEK — auto-resolves the current/upcoming week from schedule.js
//      and shows the 3 day cards (Mon/Wed/Thu) as bold colorblocks at the top.
//   2. FULL COURSE — all 4 phases / 8 weeks below, in the editorial
//      hover-invert list style. Each week expands to reveal its 3 day cards.

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { phases } from '../data/curriculum'
import { sessions } from '../data/schedule'
import PixelIcon from '../components/PixelIcon'
import { formatWeekRangeString } from '../lib/formatWeekDateRange.js'

// ─── Day metadata ───────────────────────────────────────────────────────────
const DAY_META = {
  mon: { label: 'Monday',    short: 'Mon', type: 'Workshop', swatch: '#DD8CF1', icon: 'terminal' },
  wed: { label: 'Wednesday', short: 'Wed', type: 'AI Day',  swatch: '#F69C40', icon: 'sparkle'  },
  thu: { label: 'Thursday',  short: 'Thu', type: 'Build',   swatch: '#EF453F', icon: 'rocket'   },
}

const PHASE_NAMES = ['Foundations', 'Python Projects', 'Web Development', 'Final Project']

// ─── Helpers ────────────────────────────────────────────────────────────────

function parseISO(iso) {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  if (!Number.isFinite(y)) return null
  return new Date(y, m - 1, d)
}

function formatShortDate(iso) {
  const d = parseISO(iso)
  if (!d) return '?'
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

function getSessionsForWeek(weekNum) {
  return ['mon', 'wed', 'thu'].reduce((acc, day) => {
    const s = sessions.find((x) => x.week === weekNum && x.day === day)
    if (s) acc[day] = s
    return acc
  }, {})
}

/**
 * Status of the cohort relative to today:
 *   - 'upcoming' — before the first session
 *   - 'live'     — between first and last session
 *   - 'complete' — after the last session
 */
function getCohortStatus() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const sortedDates = sessions.map((s) => parseISO(s.date)).filter(Boolean).sort((a, b) => a - b)
  if (!sortedDates.length) return { status: 'upcoming', currentWeek: 1 }
  const first = sortedDates[0]
  const last = sortedDates[sortedDates.length - 1]
  if (today < first) return { status: 'upcoming', currentWeek: 1 }
  if (today > last) return { status: 'complete', currentWeek: 8 }
  // Find the next session that hasn't happened yet (or today's).
  const upcoming = sessions
    .map((s) => ({ ...s, parsed: parseISO(s.date) }))
    .filter((s) => s.parsed && s.parsed >= today)
    .sort((a, b) => a.parsed - b.parsed)
  return { status: 'live', currentWeek: upcoming[0]?.week ?? 1 }
}

// ─── ThisWeek hero ──────────────────────────────────────────────────────────

function DayCardLarge({ week, day, session }) {
  const meta = DAY_META[day]
  if (!session) return null
  return (
    <Link
      to={`/lesson/${week}/${day}`}
      className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden p-6 text-ink transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      style={{ backgroundColor: meta.swatch }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">
            <PixelIcon icon={meta.icon} size={12} className="text-ink" />
            <span>{meta.short} · {meta.type}</span>
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">{formatShortDate(session.date)}</p>
        </div>
        <PixelIcon icon="arrow" size={16} className="text-ink/50 transition-opacity group-hover:text-ink" />
      </div>
      <div>
        <h3 className="font-serif text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl">{session.label}</h3>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
          Open lesson →
        </p>
      </div>
    </Link>
  )
}

function ThisWeekHero({ status, currentWeek }) {
  const weekSessions = useMemo(() => getSessionsForWeek(currentWeek), [currentWeek])
  const heroRangeStr = useMemo(() => formatWeekRangeString(weekSessions), [weekSessions])

  const eyebrow = {
    upcoming: 'Cohort begins May 11',
    live: `This week — Week ${String(currentWeek).padStart(2, '0')}`,
    complete: 'Course complete',
  }[status]

  const headline = {
    upcoming: (
      <span className="sm:whitespace-nowrap">
        <span className="block sm:inline">The first week. </span>
        <em className="block font-normal italic sm:inline text-val">May 11.</em>
      </span>
    ),
    live: <>What you&apos;re doing <em className="italic text-val">this week.</em></>,
    complete: <>Demo Day shipped. <em className="italic text-val">Cohort 2026.</em></>,
  }[status]

  return (
    <section className="border-b border-hairline bg-paper">
      <div className="border-b border-hairline px-6 py-12 sm:px-10 sm:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">{eyebrow}</p>
            <h1 className="mt-3 font-serif text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1] tracking-tight text-ink">
              {headline}
            </h1>
          </div>
          {heroRangeStr ? (
            <p className="w-full whitespace-nowrap text-right font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 sm:min-w-0 sm:overflow-x-auto">
              {heroRangeStr}
            </p>
          ) : (
            <p className="w-full text-right font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">Schedule TBA</p>
          )}
        </div>
      </div>

      {status === 'complete' ? (
        <div className="px-6 py-16 sm:px-10 sm:py-20">
          <p className="max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            The 2026 cohort wrapped on July 1. Browse the full course below, or check out what students built on Demo Day.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 px-6 py-10 sm:grid-cols-3 sm:gap-5 sm:px-10 sm:py-14">
          {['mon', 'wed', 'thu'].map((day) => (
            <DayCardLarge key={day} week={currentWeek} day={day} session={weekSessions[day]} />
          ))}
        </div>
      )}
    </section>
  )
}

// ─── Full course (all weeks) ───────────────────────────────────────────────

function WeekRow({ weekNum, isCurrent, isOpen, onToggle }) {
  const weekSessions = getSessionsForWeek(weekNum)
  const monTitle = weekSessions.mon?.label ?? '—'

  return (
    <li className={`border-b border-hairline ${isCurrent ? 'bg-val/[0.04]' : ''}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-current={isCurrent ? 'true' : undefined}
        className="group relative flex w-full max-w-full cursor-pointer items-center gap-3 px-0 py-7 text-left transition-colors hover:bg-dart hover:text-paper sm:gap-4 sm:py-9 md:gap-8"
      >
        <span className="shrink-0 font-serif text-5xl font-medium leading-none tracking-tight tabular-nums sm:leading-none sm:text-7xl">
          {String(weekNum).padStart(2, '0')}
        </span>
        <span className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:gap-4">
          <span className="min-w-0 flex-1 font-serif text-xl leading-tight tracking-tight sm:text-3xl">
            {monTitle}
          </span>
          <PixelIcon
            icon="arrow"
            size={12}
            className={`shrink-0 text-current transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : 'rotate-0 group-hover:rotate-90'}`}
          />
        </span>
      </button>

      {isOpen ? (
        <div className="border-t border-hairline bg-paper py-6 sm:py-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {['mon', 'wed', 'thu'].map((day) => {
              const s = weekSessions[day]
              const meta = DAY_META[day]
              if (!s) return <div key={day} className="hidden sm:block" />
              return (
                <Link
                  key={day}
                  to={`/lesson/${weekNum}/${day}`}
                  className="group cm-paper-hover flex flex-col justify-between border border-hairline bg-paper p-5 transition-colors"
                >
                  <div>
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">
                      <span aria-hidden className="inline-block h-2 w-2" style={{ backgroundColor: meta.swatch }} />
                      <span>{meta.label} · {meta.type}</span>
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
                      {formatShortDate(s.date)}
                    </p>
                    <h4 className="mt-4 font-serif text-xl font-medium leading-tight tracking-tight">{s.label}</h4>
                  </div>
                  <p className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 transition-colors group-hover:text-ink/80">
                    <span>Open lesson</span>
                    <PixelIcon icon="arrow" size={10} className="text-ink/35 transition-colors group-hover:text-ink" />
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </li>
  )
}

function FullCourse({ currentWeek }) {
  const [openWeeks, setOpenWeeks] = useState(() => new Set(currentWeek != null ? [currentWeek] : []))
  const toggle = (n) =>
    setOpenWeeks((prev) => {
      const next = new Set(prev)
      next.has(n) ? next.delete(n) : next.add(n)
      return next
    })

  return (
    <section id="full-course" className="border-b border-hairline px-6 py-20 sm:px-10 lg:py-28">
      <div className="mb-10 flex items-end justify-between gap-6 border-b border-hairline pb-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">№ Full course</p>
          <h2 className="mt-3 font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">Eight weeks. Four phases.</h2>
        </div>
        <p className="hidden font-mono text-xs uppercase tracking-[0.25em] text-ink/60 sm:block">May 11 — Jul 01</p>
      </div>

      {phases.map((phase, phaseIdx) => (
        <div key={phase.id ?? phaseIdx} className="mt-14 first:mt-0">
          <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-hairline pt-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">
              Phase {String(phaseIdx + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {phase.title || PHASE_NAMES[phaseIdx]}
            </h3>
          </div>

          <ul className="border-t border-hairline">
            {phase.weeks.map((week) => (
              <WeekRow
                key={week.num}
                weekNum={week.num}
                isCurrent={week.num === currentWeek}
                isOpen={openWeeks.has(week.num)}
                onToggle={() => toggle(week.num)}
              />
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

function Marquee() {
  const items = ['COURSE', '8 WEEKS', '23 SESSIONS', 'PYTHON · WEB · AI', 'DEMO DAY JUL 01']
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden border-y border-paper/20 bg-dart text-paper">
      <div className="flex animate-[marquee_38s_linear_infinite] gap-12 whitespace-nowrap py-3 font-mono text-[11px] uppercase tracking-[0.25em]">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <PixelIcon icon="heart" size={10} className="text-sun/80" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}

function PreviewBar() {
  return (
    <div className="border-b border-hairline bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 sm:px-10">
      <div className="flex items-center justify-between gap-6">
        <span>Course page preview · /course-mockup</span>
        <Link to="/" className="text-ink/50 underline-offset-4 hover:text-ink hover:underline">← exit preview</Link>
      </div>
    </div>
  )
}

export default function CourseMockup() {
  const { status, currentWeek } = getCohortStatus()
  return (
    <div className="bg-paper font-body text-ink antialiased">
      <Marquee />
      <PreviewBar />
      <ThisWeekHero status={status} currentWeek={currentWeek} />
      <FullCourse currentWeek={status === 'live' ? currentWeek : null} />
    </div>
  )
}
