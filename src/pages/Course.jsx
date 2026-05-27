import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSessionByWeekAndDay, getWeekLabel, phases } from '../data/curriculum'
import { sessions } from '../data/schedule'
import LazyInView from '../components/LazyInView.jsx'
import PixelIcon from '../components/PixelIcon.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { sessionTimeLabel } from '../data/site.js'
import { formatShortSessionWhen, formatWeekRangeString } from '../lib/formatWeekDateRange.js'

const DAY_META = {
  mon: {
    label: 'Monday',
    short: 'Mon',
    type: 'Workshop 1',
    swatch: '#DD8CF1',
    icon: 'terminal',
  },
  wed: {
    label: 'Wednesday',
    short: 'Wed',
    type: 'Workshop 2',
    swatch: '#F69C40',
    icon: 'sparkle',
  },
  thu: {
    label: 'Thursday',
    short: 'Thu',
    type: 'Build Day',
    swatch: '#EF453F',
    icon: 'rocket',
  },
}

function parseISO(iso) {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  if (!Number.isFinite(y)) return null
  return new Date(y, m - 1, d)
}

function getSessionsForWeek(weekNum) {
  return ['mon', 'wed', 'thu'].reduce((acc, day) => {
    const s = sessions.find((x) => x.week === weekNum && x.day === day)
    if (s) acc[day] = s
    return acc
  }, {})
}

function getCourseStatus() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const sortedDates = sessions.map((s) => parseISO(s.date)).filter(Boolean).sort((a, b) => a - b)
  if (!sortedDates.length) return { status: 'upcoming', currentWeek: 1 }
  const first = sortedDates[0]
  const last = sortedDates[sortedDates.length - 1]
  if (today < first) return { status: 'upcoming', currentWeek: 1 }
  if (today > last) return { status: 'complete', currentWeek: 8 }
  const upcoming = sessions
    .map((s) => ({ ...s, parsed: parseISO(s.date) }))
    .filter((s) => s.parsed && s.parsed >= today)
    .sort((a, b) => a.parsed - b.parsed)
  return { status: 'live', currentWeek: upcoming[0]?.week ?? 1 }
}

function DayCardLarge({ week, day, session }) {
  const meta = DAY_META[day]
  if (!session) return null
  const curriculum = getSessionByWeekAndDay(week, day)
  const daySummary =
    curriculum?.preview?.trim() ||
    curriculum?.desc?.trim() ||
    'Open the lesson for what we cover today.'
  return (
    <Link
      to={`/lesson/${week}/${day}`}
      className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden p-6 text-ink transition-transform duration-300 hover:-translate-y-1 sm:min-h-[460px] sm:p-7"
      style={{ backgroundColor: meta.swatch }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">
            <PixelIcon icon={meta.icon} size={12} className="text-ink" />
            <span>
              {meta.short} · {meta.type}
            </span>
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">{formatShortSessionWhen(session.date)}</p>
        </div>
        <PixelIcon icon="arrow" size={16} className="text-ink/50 transition-opacity group-hover:text-ink" />
      </div>
      <div>
        <h3 className="font-serif text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl">{session.label}</h3>
        <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-ink/75">{daySummary}</p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
          Go to lesson →
        </p>
      </div>
    </Link>
  )
}

function ThisWeekHero({ status, currentWeek }) {
  const weekSessions = useMemo(() => getSessionsForWeek(currentWeek), [currentWeek])
  const heroRangeStr = useMemo(() => formatWeekRangeString(weekSessions, { includeTime: true }), [weekSessions])

  const eyebrow = {
    upcoming: "Let's get started!",
    live: `This week — Week ${String(currentWeek).padStart(2, '0')}`,
    complete: 'Course complete',
  }[status]

  const headline = {
    upcoming: (
      <span className="sm:whitespace-nowrap">
        <span className="block sm:inline">The first week. </span>
        <em className="block font-normal italic sm:inline hm-val">May 11.</em>
      </span>
    ),
    live: (
      <>
        What you&apos;re doing <em className="hm-val italic">this week.</em>
      </>
    ),
    complete: (
      <>
        Demo Day shipped. <em className="hm-val italic">CodeMoldova 2026.</em>
      </>
    ),
  }[status]

  return (
    <section className="border-b border-hairline">
      <ScrollReveal className="border-b border-hairline py-12 sm:py-16" rootMargin="0px 0px 10% 0px">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">{eyebrow}</p>
            <h1 className="mt-3 font-serif text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1] tracking-tight text-ink">{headline}</h1>
          </div>
          {heroRangeStr ? (
            <p className="w-full whitespace-nowrap text-right font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 sm:min-w-0 sm:overflow-x-auto">
              {heroRangeStr}
            </p>
          ) : (
            <p className="w-full text-right font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">Schedule TBA</p>
          )}
        </div>
      </ScrollReveal>

      {status === 'complete' ? (
        <ScrollReveal className="py-16 sm:py-20" delayMs={80} rootMargin="0px 0px 10% 0px">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
            The 2026 course wrapped on July 1. Browse the full course below, or check out what students built on Demo Day.
          </p>
        </ScrollReveal>
      ) : (
        <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-3 sm:gap-5 sm:py-14">
          {['mon', 'wed', 'thu'].map((day, i) => (
            <ScrollReveal
              key={day}
              className="h-full min-h-0"
              delayMs={100 + i * 130}
              hiddenTranslate="translate-y-6"
              rootMargin="0px 0px 15% 0px"
            >
              <DayCardLarge week={currentWeek} day={day} session={weekSessions[day]} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </section>
  )
}

function WeekRow({ weekNum, isCurrent, isOpen, onToggle, revealDelay = 0 }) {
  const weekSessions = getSessionsForWeek(weekNum)
  const weekTitle = getWeekLabel(weekNum)

  return (
    <li className={`border-b border-hairline ${isCurrent ? 'bg-val/[0.04]' : ''}`}>
      <ScrollReveal
        className="block"
        delayMs={revealDelay}
        hiddenTranslate="translate-y-4"
        threshold={0.06}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-current={isCurrent ? 'true' : undefined}
          title={isOpen ? 'Click to collapse this week' : 'Click to expand this week'}
          className="rm-week-row-btn group relative flex w-full max-w-full cursor-pointer items-center gap-3 px-0 py-7 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dart/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:gap-4 sm:py-9 md:gap-8"
        >
          <span className="shrink-0 font-serif text-5xl font-medium leading-none tracking-tight tabular-nums sm:leading-none sm:text-7xl">
            {String(weekNum).padStart(2, '0')}
          </span>
          <span className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:gap-4">
            <span className="min-w-0 flex-1 font-serif text-xl leading-tight tracking-tight sm:text-3xl">
              {weekTitle}
            </span>
            <PixelIcon
              icon="arrow"
              size={12}
              className={`shrink-0 text-current transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : 'rotate-0 group-hover:rotate-90'}`}
            />
          </span>
        </button>
      </ScrollReveal>

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
                      <span>
                        {meta.label} · {meta.type}
                      </span>
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">{formatShortSessionWhen(s.date)}</p>
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
    <section id="full-course" className="border-b border-hairline py-20 lg:py-28">
      <ScrollReveal className="mb-10 flex items-end justify-between gap-6 border-b border-hairline pb-8">
        <div>
          <h2 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">Full course</h2>
        </div>
        <p className="hidden font-mono text-xs uppercase tracking-[0.25em] text-ink/60 sm:block">
          May 11 — Jul 01 · {sessionTimeLabel}
        </p>
      </ScrollReveal>

      {phases.map((phase, phaseIdx) => {
        const weeksBefore = phases.slice(0, phaseIdx).reduce((n, p) => n + p.weeks.length, 0)
        return (
        <div key={phase.id ?? phaseIdx} className="mt-14 first:mt-0">
          <ScrollReveal
            className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-hairline pt-6"
            delayMs={phaseIdx * 70}
            hiddenTranslate="translate-y-5"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">Phase {String(phaseIdx + 1).padStart(2, '0')}</span>
            <h3 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">{phase.title}</h3>
          </ScrollReveal>

          <ul className="border-t border-hairline">
            {phase.weeks.map((week, weekIdx) => {
              const revealDelay = 40 + (weeksBefore + weekIdx) * 50
              return (
                <WeekRow
                  key={week.num}
                  weekNum={week.num}
                  isCurrent={week.num === currentWeek}
                  isOpen={openWeeks.has(week.num)}
                  onToggle={() => toggle(week.num)}
                  revealDelay={revealDelay}
                />
              )
            })}
          </ul>
        </div>
        )
      })}
    </section>
  )
}

export default function Course() {
  const { status, currentWeek } = getCourseStatus()
  return (
    <div className="hm-page min-h-full flex-1 font-body antialiased">
      <div className="layout-shell max-w-6xl">
        <ThisWeekHero status={status} currentWeek={currentWeek} />
        <LazyInView placeholderClassName="min-h-[36rem] lg:min-h-[42rem]">
          <FullCourse currentWeek={status === 'live' ? currentWeek : null} />
        </LazyInView>
      </div>
    </div>
  )
}
