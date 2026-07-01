import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWeekLabel, phases } from '../data/curriculum'
import { sessions } from '../data/schedule'
import LazyInView from '../components/LazyInView.jsx'
import PixelIcon from '../components/PixelIcon.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { sessionDaysLabel, sessionDurationLabel } from '../data/site.js'

const START_WEEK = 1

const PHASE_SWATCHES = ['#DD8CF1', '#F69C40', '#EF453F', '#097251']

function phaseUsesLightText(swatch) {
  return swatch === '#EF453F' || swatch === '#097251'
}
const PHASE_HOVER_CLASSES = [
  'rm-week-row-btn--ube',
  'rm-week-row-btn--sun',
  'rm-week-row-btn--val',
  'rm-week-row-btn--dart',
]
const PHASE_DESCRIPTIONS = [
  'Start from zero: Cursor, Python basics, data structures, APIs, and small scripts you can run yourself.',
  'Move onto the web: HTML, CSS, design basics, React, GitHub, and shipping a simple site or app.',
  'Connect apps to real data with Supabase, then add save/load flows and a safe AI feature.',
  'Choose a capstone, polish it, write a README, add it to your portfolio, and present on Demo Day.',
]

const DAY_META = {
  mon: {
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

function getSessionsForWeek(weekNum) {
  return ['mon', 'wed', 'thu'].reduce((acc, day) => {
    const s = sessions.find((x) => x.week === weekNum && x.day === day)
    if (s) acc[day] = s
    return acc
  }, {})
}

function getFirstWeekNum(phaseIdx) {
  return phases[phaseIdx]?.weeks[0]?.num ?? null
}

function PhaseCard({ phaseIdx, title, swatch, description, onSelect }) {
  const phaseNum = String(phaseIdx + 1).padStart(2, '0')
  const isDark = phaseUsesLightText(swatch)
  return (
    <button
      type="button"
      onClick={() => onSelect(phaseIdx)}
      className={`group relative flex h-full min-h-[360px] min-w-0 w-full flex-col justify-between overflow-hidden p-6 text-left transition-transform duration-300 hover:-translate-y-1 sm:min-h-[400px] sm:p-7 ${
        isDark ? 'text-paper' : 'text-ink'
      }`}
      style={{ backgroundColor: swatch }}
    >
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em]">Phase {phaseNum}</p>
        <h2 className="mt-5 break-words font-serif text-[clamp(1.55rem,3vw,2rem)] font-medium leading-[1.05] tracking-tight">
          {title}
        </h2>
        <p className={`mt-5 text-sm leading-relaxed ${isDark ? 'text-paper/80' : 'text-ink/75'}`}>
          {description}
        </p>
      </div>
      <div className="mt-8 flex shrink-0 items-center justify-between gap-4">
        <span className={`font-mono text-[10px] uppercase tracking-[0.3em] ${isDark ? 'text-paper/65' : 'text-ink/55'}`}>
          View phase
        </span>
        <PixelIcon
          icon="arrow"
          size={14}
          className={`shrink-0 transition-opacity group-hover:opacity-100 ${isDark ? 'text-paper/65 group-hover:text-paper' : 'text-ink/50 group-hover:text-ink'}`}
        />
      </div>
    </button>
  )
}

function PhasesOverview({ onPhaseSelect }) {
  return (
    <section className="border-b border-hairline">
      <ScrollReveal className="py-12 sm:py-16" rootMargin="0px 0px 10% 0px">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">Course path</p>
        <h1 className="mt-3 max-w-4xl font-serif text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1] tracking-tight text-ink">
          <span className="block">Four sections,</span>
          <em className="hm-val block font-normal italic">one buildable path.</em>
        </h1>
      </ScrollReveal>
      <div className="grid grid-cols-1 items-stretch gap-4 pb-10 sm:grid-cols-2 sm:gap-5 sm:pb-14 lg:grid-cols-4">
        {phases.map((phase, i) => (
          <ScrollReveal
            key={phase.id ?? i}
            className="flex h-full min-h-0"
            delayMs={80 + i * 90}
            hiddenTranslate="translate-y-6"
            rootMargin="0px 0px 15% 0px"
          >
            <PhaseCard
              phaseIdx={i}
              title={phase.title}
              swatch={PHASE_SWATCHES[i]}
              description={PHASE_DESCRIPTIONS[i]}
              onSelect={onPhaseSelect}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function WeekRow({ weekNum, isOpen, onToggle, revealDelay = 0, phaseHoverClass }) {
  const weekSessions = getSessionsForWeek(weekNum)
  const weekTitle = getWeekLabel(weekNum)

  return (
    <li className="border-b border-hairline">
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
          title={isOpen ? 'Click to collapse this week' : 'Click to expand this week'}
          className={`rm-week-row-btn ${phaseHoverClass} group relative flex w-full max-w-full cursor-pointer items-center gap-3 px-0 py-7 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dart/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:gap-4 sm:py-9 md:gap-8`}
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
              className={`shrink-0 text-current transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}
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
                        {meta.short} · {meta.type}
                      </span>
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

function FullCourse({ openWeeks, onToggleWeek }) {
  return (
    <section id="full-course" className="border-b border-hairline py-20 lg:py-28">
      <ScrollReveal className="mb-10 flex items-end justify-between gap-6 border-b border-hairline pb-8">
        <div>
          <h2 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">Full course</h2>
        </div>
        <p className="hidden font-mono text-xs uppercase tracking-[0.25em] text-ink/60 sm:block">
          8 weeks · {sessionDaysLabel} · {sessionDurationLabel}
        </p>
      </ScrollReveal>

      {phases.map((phase, phaseIdx) => {
        const weeksBefore = phases.slice(0, phaseIdx).reduce((n, p) => n + p.weeks.length, 0)
        const swatch = PHASE_SWATCHES[phaseIdx]
        const isDark = phaseUsesLightText(swatch)
        return (
        <div key={phase.id ?? phaseIdx} id={`phase-${String(phaseIdx + 1).padStart(2, '0')}`} className="scroll-mt-28 mt-14 first:mt-0">
          <ScrollReveal
            className="mb-3"
            delayMs={phaseIdx * 70}
            hiddenTranslate="translate-y-5"
          >
            <div
              className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-5 sm:px-6 sm:py-6 ${
                isDark ? 'text-paper' : 'text-ink'
              }`}
              style={{ backgroundColor: swatch }}
            >
              <span
                className={`font-mono text-[11px] uppercase tracking-[0.3em] ${
                  isDark ? 'text-paper/80' : 'text-ink/80'
                }`}
              >
                Phase {String(phaseIdx + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{phase.title}</h3>
            </div>
          </ScrollReveal>

          <ul className="border-t border-hairline">
            {phase.weeks.map((week, weekIdx) => {
              const revealDelay = 40 + (weeksBefore + weekIdx) * 50
              return (
                <WeekRow
                  key={week.num}
                  weekNum={week.num}
                  isOpen={openWeeks.has(week.num)}
                  onToggle={() => onToggleWeek(week.num)}
                  revealDelay={revealDelay}
                  phaseHoverClass={PHASE_HOVER_CLASSES[phaseIdx]}
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
  const [openWeeks, setOpenWeeks] = useState(() => new Set([START_WEEK]))
  const [showFullCourse, setShowFullCourse] = useState(false)
  const [scrollToPhase, setScrollToPhase] = useState(null)

  const toggleWeek = (weekNum) =>
    setOpenWeeks((prev) => {
      const next = new Set(prev)
      next.has(weekNum) ? next.delete(weekNum) : next.add(weekNum)
      return next
    })

  const openPhase = (phaseIdx) => {
    const weekNum = getFirstWeekNum(phaseIdx)
    if (weekNum != null) {
      setOpenWeeks((prev) => new Set([...prev, weekNum]))
    }
    setShowFullCourse(true)
    setScrollToPhase(phaseIdx)
  }

  useEffect(() => {
    if (scrollToPhase == null) return
    const phaseId = `phase-${String(scrollToPhase + 1).padStart(2, '0')}`
    requestAnimationFrame(() => {
      document.getElementById(phaseId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setScrollToPhase(null)
    })
  }, [scrollToPhase, showFullCourse, openWeeks])

  return (
    <div className="hm-page min-h-full flex-1 font-body antialiased">
      <div className="layout-shell max-w-6xl">
        <PhasesOverview onPhaseSelect={openPhase} />
        <LazyInView forceShow={showFullCourse} placeholderClassName="min-h-[36rem] lg:min-h-[42rem]">
          <FullCourse openWeeks={openWeeks} onToggleWeek={toggleWeek} />
        </LazyInView>
      </div>
    </div>
  )
}
