import { Link, useNavigate, useParams } from 'react-router-dom'
import PageChrome from '../components/PageChrome.jsx'
import { getSessionByWeekAndDay } from '../data/curriculum'
import { getAdjacentSessions, sessions } from '../data/schedule'
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
    <section className="mt-14 rounded-card border border-white/[0.1] bg-surface2/30 p-7 sm:p-9" aria-labelledby="homework-heading">
      <h2 id="homework-heading" className="font-display text-2xl font-bold text-primary">
        {homework.title || 'Homework'}
      </h2>
      {homework.desc ? <p className="mt-3 max-w-prose text-pretty text-base leading-relaxed text-muted">{homework.desc}</p> : null}
      <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-relaxed text-primary/95">
        {homework.tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  )
}

function SlideDeckBanner({ slideDeck }) {
  if (!slideDeck?.label) return null
  const url = typeof slideDeck.url === 'string' ? slideDeck.url.trim() : ''
  return (
    <section
      className="hero-in hero-in-2 mb-10 rounded-card border border-mon/35 bg-mon/[0.07] p-6 sm:p-7"
      aria-labelledby="slide-deck-heading"
    >
      <p className="font-mono text-xs uppercase tracking-wider text-mon">Slide deck</p>
      <h2 id="slide-deck-heading" className="mt-2 font-display text-xl font-bold text-primary sm:text-2xl">
        {slideDeck.label}
      </h2>
      {slideDeck.hint ? (
        <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-muted sm:text-base">{slideDeck.hint}</p>
      ) : null}
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-pill border border-mon/45 bg-mon/15 px-6 font-mono text-sm font-medium text-primary transition-colors hover:border-mon/60 hover:bg-mon/25 sm:text-base"
        >
          Open slide deck
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">
          Deck link is shared on screen and in Slack during class. When you have a stable URL, add{' '}
          <span className="font-mono text-primary/90">slideDeck.url</span> in <span className="font-mono text-primary/90">curriculum.js</span>{' '}
          for this session so the button appears here.
        </p>
      )}
    </section>
  )
}

function PostClassSection({ postClass }) {
  if (!postClass?.links?.length) return null
  return (
    <section
      className="mt-12 rounded-card border border-white/[0.08] bg-surface/40 p-6 sm:p-8"
      aria-labelledby="post-class-heading"
    >
      <h2 id="post-class-heading" className="font-display text-lg font-bold text-primary sm:text-xl">
        {postClass.title || 'Optional follow-up'}
      </h2>
      {postClass.desc ? (
        <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-muted sm:text-base">{postClass.desc}</p>
      ) : null}
      <ul className="mt-5 space-y-2.5">
        {postClass.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-mon underline decoration-mon/40 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary/50"
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function InClassChallengeSection({ challenge }) {
  if (!challenge?.tasks?.length) return null
  return (
    <section
      className="mt-14 rounded-card border border-thu/35 bg-thu/[0.04] p-7 sm:p-9"
      aria-labelledby="in-class-challenge-heading"
    >
      <p className="font-mono text-xs uppercase tracking-wider text-thu">In-class challenge</p>
      <h2 id="in-class-challenge-heading" className="mt-2 font-display text-2xl font-bold text-primary">
        {challenge.title}
      </h2>
      {challenge.duration ? <p className="mt-2 font-mono text-sm text-muted">{challenge.duration}</p> : null}
      {challenge.intro ? (
        <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-muted">{challenge.intro}</p>
      ) : null}
      <ol className="mt-6 list-decimal space-y-3 pl-5 text-base leading-relaxed text-primary/95">
        {challenge.tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
      {challenge.shareOut ? (
        <p className="mt-6 rounded-elem border border-white/[0.1] bg-surface/40 px-4 py-3 text-sm leading-relaxed text-muted">
          {challenge.shareOut}
        </p>
      ) : null}
      {challenge.stretch ? (
        <div className="mt-6 border-l-4 border-mon/45 bg-mon/[0.06] px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-wider text-mon">Stretch</p>
          <p className="mt-2 text-sm leading-relaxed text-primary/95">{challenge.stretch}</p>
        </div>
      ) : null}
    </section>
  )
}

function SessionNavLink({ session, dir }) {
  if (!session) return <span className="min-h-11 min-w-0 flex-1 sm:flex-none" />
  const label = dir === 'prev' ? 'Previous class' : 'Next class'
  return (
    <Link
      to={`/lesson/${session.week}/${session.day}`}
      className={`flex min-h-[3.25rem] min-w-0 flex-1 flex-col justify-center rounded-card border border-white/[0.1] bg-surface/50 px-5 py-4 font-mono text-base transition-colors hover:border-white/[0.18] hover:bg-surface2/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon sm:max-w-[min(100%,300px)] ${
        dir === 'next' ? 'items-end text-right sm:ml-auto' : 'items-start text-left'
      }`}
    >
      <span className="text-xs uppercase tracking-wider text-muted">{label}</span>
      <span className="mt-0.5 line-clamp-2 text-primary">{session.label}</span>
    </Link>
  )
}

function LessonNotFound() {
  return (
    <PageChrome>
      <div className="layout-shell max-w-lg flex-1 py-16 text-center">
        <h1 className="hero-in hero-in-2 font-display text-2xl font-bold text-primary">We could not find this lesson</h1>
      <p className="mt-4 text-base text-muted">
        Check the web address. It should look like /lesson/1/mon (week number, then mon, wed, or thu).
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/roadmap"
          className="inline-flex min-h-11 items-center justify-center rounded-pill border border-mon/35 bg-mon/15 px-5 font-mono text-sm text-primary hover:border-mon/50"
        >
          Open roadmap
        </Link>
        <Link to="/" className="inline-flex min-h-11 items-center justify-center rounded-pill border border-white/[0.14] px-5 font-mono text-sm text-muted hover:text-primary">
          Home page
        </Link>
      </div>
      </div>
    </PageChrome>
  )
}

export default function Lesson() {
  const navigate = useNavigate()
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
  const weekOptions = Array.from(new Set(sessions.map((lesson) => lesson.week)))
  const dayOptions = sessions.filter((lesson) => lesson.week === weekNum)

  const handleWeekChange = (e) => {
    const selectedWeek = Number(e.target.value)
    if (!Number.isFinite(selectedWeek)) return

    const sameDayInSelectedWeek = sessions.find((lesson) => lesson.week === selectedWeek && lesson.day === dayKey)
    const fallbackDay = sessions.find((lesson) => lesson.week === selectedWeek)?.day
    const nextDay = sameDayInSelectedWeek?.day || fallbackDay

    if (nextDay) {
      navigate(`/lesson/${selectedWeek}/${nextDay}`)
    }
  }

  const handleDayChange = (e) => {
    const selectedDay = e.target.value
    if (!selectedDay) return
    navigate(`/lesson/${weekNum}/${selectedDay}`)
  }

  return (
    <PageChrome>
      <article className="layout-article">
        <nav className="hero-in hero-in-1 mb-10 font-mono text-sm text-muted" aria-label="Breadcrumb">
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
            <li>
              <label htmlFor="lesson-week-jump" className="sr-only">
                Change week
              </label>
              <span className="relative inline-flex items-center text-primary">
                <span>{`Week ${weekNum}`}</span>
                <span aria-hidden className="ml-1 text-[11px] text-muted">
                  ▾
                </span>
                <select
                  id="lesson-week-jump"
                  value={weekNum}
                  onChange={handleWeekChange}
                  className="absolute inset-0 cursor-pointer appearance-none bg-transparent opacity-0"
                >
                  {weekOptions.map((week) => (
                    <option key={week} value={week}>
                      Week {week}
                    </option>
                  ))}
                </select>
              </span>
            </li>
            <li aria-hidden className="text-white/25">
              /
            </li>
            <li>
              <label htmlFor="lesson-day-jump" className="sr-only">
                Change day
              </label>
              <span className="relative inline-flex items-center text-primary">
                <span>{meta.label}</span>
                <span aria-hidden className="ml-1 text-[11px] text-muted">
                  ▾
                </span>
                <select
                  id="lesson-day-jump"
                  value={dayKey}
                  onChange={handleDayChange}
                  className="absolute inset-0 cursor-pointer appearance-none bg-transparent opacity-0"
                >
                  {dayOptions.map((lesson) => (
                    <option key={lesson.day} value={lesson.day}>
                      {DAY_META[lesson.day]?.label ?? lesson.day}
                    </option>
                  ))}
                </select>
              </span>
            </li>
          </ol>
        </nav>

        <header className="border-b border-white/[0.08] pb-10">
          <div className="hero-in hero-in-2 flex flex-wrap items-center gap-2">
            <span className={`rounded-pill border px-3 py-1 font-mono text-xs uppercase tracking-wide ${meta.pill}`}>
              {meta.label}
            </span>
            {session.date ? (
              <span className="font-mono text-sm text-muted">{session.date}</span>
            ) : null}
          </div>
          <h1 className="hero-in hero-in-3 mt-5 font-display text-[clamp(1.65rem,4vw,2.25rem)] font-extrabold leading-tight text-primary">
            {session.title}
          </h1>
          {session.desc ? (
            <p className="hero-in hero-in-4 mt-5 max-w-prose text-pretty text-base leading-relaxed text-muted sm:text-[17px]">{session.desc}</p>
          ) : null}
        </header>

        {session.slideDeck ? <SlideDeckBanner slideDeck={session.slideDeck} /> : null}

        <div className="mt-12">
          {session.steps?.length ? <LessonModule steps={session.steps} /> : null}
        </div>

        {!isThu && session.inClassChallenge ? <InClassChallengeSection challenge={session.inClassChallenge} /> : null}

        {isThu && session.challenges ? (
          <div className="mt-14">
            <ThursdayChallenges challenges={session.challenges} />
          </div>
        ) : null}

        <HomeworkSection homework={session.homework} />

        {session.postClass ? <PostClassSection postClass={session.postClass} /> : null}

        <nav
          className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-12 sm:flex-row sm:items-stretch sm:justify-between sm:gap-6"
          aria-label="Previous and next class"
        >
          <SessionNavLink session={prev} dir="prev" />
          <SessionNavLink session={next} dir="next" />
        </nav>
      </article>
    </PageChrome>
  )
}
