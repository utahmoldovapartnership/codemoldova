import { Link, useParams } from 'react-router-dom'
import PageChrome from '../components/PageChrome.jsx'
import { getSessionByWeekAndDay } from '../data/curriculum'
import { getAdjacentSessions } from '../data/schedule'
import LessonModule from '../components/LessonModule'
import ThursdayChallenges from '../components/ThursdayChallenges'

const VALID_DAYS = ['mon', 'wed', 'thu']

const DAY_META = {
  mon: {
    label: 'Monday',
    pill: 'border-mon/35 bg-mon/10 text-mon',
  },
  wed: {
    label: 'Wednesday',
    pill: 'border-wed/35 bg-wed/10 text-wed',
  },
  thu: {
    label: 'Thursday',
    pill: 'border-thu/35 bg-thu/10 text-thu',
  },
}

function HomeworkSection({ homework }) {
  if (!homework?.tasks?.length) return null
  return (
    <section className="mt-12 rounded-card border border-white/[0.1] bg-surface2/30 p-6 sm:p-8" aria-labelledby="homework-heading">
      <h2 id="homework-heading" className="font-display text-xl font-bold text-primary">
        {homework.title || 'Homework'}
      </h2>
      {homework.desc ? <p className="mt-2 text-pretty text-sm leading-relaxed text-muted sm:text-base">{homework.desc}</p> : null}
      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-primary/95 sm:text-[15px]">
        {homework.tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  )
}

function SessionNavLink({ session, dir }) {
  if (!session) return <span className="min-h-11 min-w-0 flex-1 sm:flex-none" />
  const label = dir === 'prev' ? 'Previous session' : 'Next session'
  return (
    <Link
      to={`/lesson/${session.week}/${session.day}`}
      className={`flex min-h-11 min-w-0 flex-1 flex-col justify-center rounded-card border border-white/[0.1] bg-surface/50 px-4 py-3 font-mono text-sm transition-colors hover:border-white/[0.18] hover:bg-surface2/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon sm:max-w-[min(100%,280px)] ${
        dir === 'next' ? 'items-end text-right sm:ml-auto' : 'items-start text-left'
      }`}
    >
      <span className="text-[10px] uppercase tracking-wider text-muted">{label}</span>
      <span className="mt-0.5 line-clamp-2 text-primary">{session.label}</span>
    </Link>
  )
}

function LessonNotFound() {
  return (
    <PageChrome>
      <div className="layout-shell max-w-lg flex-1 py-16 text-center">
        <h1 className="hero-in hero-in-2 font-display text-2xl font-bold text-primary">Lesson not found</h1>
      <p className="mt-3 text-sm text-muted">Check the week number and day in the URL (example: /lesson/1/mon).</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/roadmap"
          className="inline-flex min-h-11 items-center justify-center rounded-pill border border-mon/35 bg-mon/15 px-5 font-mono text-sm text-primary hover:border-mon/50"
        >
          Open roadmap
        </Link>
        <Link to="/" className="inline-flex min-h-11 items-center justify-center rounded-pill border border-white/[0.14] px-5 font-mono text-sm text-muted hover:text-primary">
          Course home
        </Link>
      </div>
      </div>
    </PageChrome>
  )
}

export default function Lesson() {
  const { week, day } = useParams()
  const dayKey = day?.toLowerCase()
  const weekNum = Number(week)

  const invalid =
    !dayKey ||
    !VALID_DAYS.includes(dayKey) ||
    !Number.isFinite(weekNum) ||
    weekNum < 1

  const session = invalid ? null : getSessionByWeekAndDay(weekNum, dayKey)
  const { prev, next } = invalid ? { prev: null, next: null } : getAdjacentSessions(weekNum, dayKey)

  if (invalid || !session) {
    return <LessonNotFound />
  }

  const meta = DAY_META[dayKey]
  const isThu = dayKey === 'thu'

  return (
    <PageChrome>
      <article className="layout-article">
        <nav className="hero-in hero-in-1 mb-8 font-mono text-[12px] text-muted sm:text-[13px]" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link to="/" className="text-muted transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden className="text-white/25">
            /
          </li>
          <li>
            <Link to="/roadmap" className="text-muted transition-colors hover:text-primary">
              Roadmap
            </Link>
          </li>
          <li aria-hidden className="text-white/25">
            /
          </li>
          <li>
            <Link to="/calendar" className="text-muted transition-colors hover:text-primary">
              Calendar
            </Link>
          </li>
          <li aria-hidden className="text-white/25">
            /
          </li>
          <li className="text-primary">Week {weekNum}</li>
          <li aria-hidden className="text-white/25">
            /
          </li>
          <li className="text-primary">{meta.label}</li>
        </ol>
        </nav>

        <header className="border-b border-white/[0.08] pb-8">
          <div className="hero-in hero-in-2 flex flex-wrap items-center gap-2">
            <span className={`rounded-pill border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide ${meta.pill}`}>
              {meta.label}
            </span>
            {session.date ? (
              <span className="font-mono text-[11px] text-muted">{session.date}</span>
            ) : null}
          </div>
          <h1 className="hero-in hero-in-3 mt-4 font-display text-[clamp(1.5rem,4vw,2rem)] font-extrabold leading-tight text-primary">
            {session.title}
          </h1>
          {session.desc ? (
            <p className="hero-in hero-in-4 mt-4 text-pretty text-[15px] leading-relaxed text-muted sm:text-base">{session.desc}</p>
          ) : null}
        </header>

        <div className="mt-10">
          {session.steps?.length ? <LessonModule steps={session.steps} /> : null}
        </div>

        {isThu && session.challenges ? (
          <div className="mt-12">
            <ThursdayChallenges challenges={session.challenges} />
          </div>
        ) : null}

        <HomeworkSection homework={session.homework} />

        <nav
          className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-10 sm:flex-row sm:items-stretch sm:justify-between sm:gap-6"
          aria-label="Adjacent lessons"
        >
          <SessionNavLink session={prev} dir="prev" />
          <SessionNavLink session={next} dir="next" />
        </nav>
      </article>
    </PageChrome>
  )
}
