import { Link } from 'react-router-dom'
import PixelIcon from '../PixelIcon.jsx'

export function SectionKicker({ num, kicker, className = '' }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 ${className}`}>
      <span>{kicker}</span>
    </p>
  )
}

export function SectionHead({ num, kicker, title, className = '', kickerClassName = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      <SectionKicker num={num} kicker={kicker} className={kickerClassName} />
      <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">{title}</h2>
    </div>
  )
}

const MARQUEE = ['LESSON', 'IN-PERSON FIRST', 'BRING YOUR LAPTOP', 'STUCK? ASK A NEIGHBOR', 'SHIP SOMETHING SMALL']

export function LessonMarquee() {
  const loop = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE]
  return (
    <div className="overflow-hidden border-y border-paper/20 bg-dart text-paper">
      <div className="flex animate-[cm-marquee_38s_linear_infinite] gap-12 whitespace-nowrap py-3 font-mono text-[11px] uppercase tracking-[0.25em]">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <PixelIcon icon="heart" size={10} className="text-sun/80" />
          </span>
        ))}
      </div>
      <style>{`@keyframes cm-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}

/**
 * @param {object} props
 * @param {string} props.dayKey
 * @param {{ label: string, type: string, swatch: string, icon: string }} props.dayMeta
 * @param {string} [props.date]
 * @param {string} [props.sessionLabel]
 * @param {string} props.title
 * @param {import('react').ReactNode} props.breadcrumb
 */
export function LessonHero({ dayKey, dayMeta, date, sessionLabel, title, breadcrumb }) {
  return (
    <section className="border-b border-hairline/50 px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">{breadcrumb}</div>

        <div className="flex flex-wrap items-center gap-3">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-ink"
            style={{ backgroundColor: dayMeta.swatch }}
          >
            <PixelIcon icon={dayMeta.icon} size={12} className="text-ink" />
            <span>
              {dayMeta.label} · {dayMeta.type}
            </span>
          </span>
          {date ? <span className="font-mono text-sm text-ink/55">{date}</span> : null}
          {date && sessionLabel ? <span className="font-mono text-sm text-ink/35">·</span> : null}
          {sessionLabel ? <span className="font-mono text-sm text-ink/55">{sessionLabel}</span> : null}
        </div>

        <h1 className="mt-6 font-serif text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.02] tracking-tight text-ink">
          {title}
        </h1>
      </div>
    </section>
  )
}

export function LessonSectionGoal({ goal, dayMeta }) {
  if (!goal?.trim()) return null
  return (
    <section className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionKicker num="01" kicker="Today's goal" />
        <p
          className="mt-4 max-w-prose border-l-4 pl-6 font-serif text-2xl font-medium leading-[1.25] tracking-tight text-ink sm:text-3xl"
          style={{ borderColor: dayMeta.swatch }}
        >
          {goal}
        </p>
      </div>
    </section>
  )
}

export function LessonMainPoints({ points }) {
  if (!points?.length) return null
  return (
    <section className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHead num="02" kicker="Main points" title="What to remember." />
        <ol className="grid list-none border-t border-hairline sm:grid-cols-2 sm:gap-x-8">
          {points.map((p, i) => (
            <li key={i} className="border-b border-hairline px-2 py-5 sm:px-0 sm:py-7">
              <span className="font-serif text-lg leading-snug tracking-tight sm:text-xl">{p}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** @param {{ label: string, href: string, ready: boolean, hint?: string }[]} props.artifacts */
export function LessonArtifacts({ artifacts }) {
  if (!artifacts?.length) return null
  return (
    <section className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHead num="03" kicker="From class" title="Slides, recording, code." />
        <div className="flex flex-wrap gap-3">
          {artifacts.map((a) =>
            a.ready && a.href ? (
              <a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-3 border border-val/40 bg-paper px-5 font-mono text-xs uppercase tracking-[0.25em] text-ink transition-colors hover:border-val hover:bg-val/10"
              >
                <span>{a.label}</span>
                <PixelIcon icon="arrow" size={12} className="text-current" />
              </a>
            ) : (
              <span
                key={a.label}
                className="inline-flex h-12 cursor-not-allowed items-center gap-2 border border-dashed border-ink/30 px-5 font-mono text-xs uppercase tracking-[0.25em] text-ink/45"
              >
                <span>{a.label}</span>
                <span aria-hidden>·</span>
                <span className="normal-case tracking-normal">{a.hint || 'Coming soon'}</span>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

const LAB_DAY = {
  mon: {
    section: 'bg-ube/[0.08]',
    btn: 'border-ube bg-paper text-ube transition-colors hover:bg-ube/20',
    btnPlaceholder: 'border-dashed border-ube/70 text-ube',
  },
  wed: {
    section: 'bg-sun/[0.08]',
    btn: 'border-sun bg-paper text-sun transition-colors hover:bg-sun/20',
    btnPlaceholder: 'border-dashed border-sun/70 text-sun',
  },
  thu: {
    section: 'bg-val/[0.08]',
    btn: 'border-val/45 bg-paper text-val transition-colors hover:bg-val/15',
    btnPlaceholder: 'border-dashed border-val/60 text-val',
  },
}

/**
 * @param {{ title: string, intro?: string, exampleHref?: string, exampleLabel?: string, dayKey?: 'mon' | 'wed' | 'thu', children: import('react').ReactNode }} props
 */
export function LessonLabBand({ title, intro, exampleHref, exampleLabel = 'Example', dayKey = 'wed', children }) {
  if (children == null) return null
  const t = LAB_DAY[dayKey] ?? LAB_DAY.wed
  return (
    <section className={`border-b border-hairline px-6 py-16 text-ink sm:px-10 sm:py-20 ${t.section}`}>
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">Lab</p>
        <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-5xl">{title}.</h2>
        {intro ? <p className="mt-6 max-w-prose font-body text-base leading-relaxed text-ink/70 sm:text-lg">{intro}</p> : null}
        <div className="mt-6">
          {exampleHref ? (
            <a
              href={exampleHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center border px-4 font-mono text-xs uppercase tracking-[0.22em] ${t.btn}`}
            >
              {exampleLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <span className={`inline-flex min-h-11 items-center border px-4 font-mono text-xs uppercase tracking-[0.22em] ${t.btnPlaceholder}`}>
              {exampleLabel} link coming soon
            </span>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

/** @param {{ tier: string, title: string, desc: string }[]} props.challenges */
export function LessonChallengesAccordion({ challenges }) {
  if (!challenges?.length) return null
  return (
    <section className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHead num="05" kicker="Thursday challenges" title="Pick your tier." />
        <p className="mb-6 max-w-prose font-body text-base leading-relaxed text-ink/75">
          Everyone does Base. Stretch into Medium / Hard / Bonus only if you finish early — they exist so nobody gets
          bored, not so anybody feels behind.
        </p>
        <div className="border-t border-hairline">
          {challenges.map((c, i) => (
            <details key={c.title} open={i === 0} className="group border-b border-hairline">
              <summary className="cm-paper-hover grid cursor-pointer grid-cols-12 items-center gap-4 px-2 py-5 text-ink transition-colors marker:hidden sm:px-3 sm:py-6">
                <span className="col-span-2 grid h-9 w-9 place-items-center border border-ink/25 font-mono text-sm font-bold sm:col-span-1">
                  {c.tier}
                </span>
                <span className="col-span-9 font-serif text-2xl font-medium tracking-tight sm:col-span-10 sm:text-3xl">{c.title}</span>
                <span
                  aria-hidden
                  className="col-span-1 text-right font-mono text-[11px] uppercase tracking-[0.25em] text-ink/45 transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <p className="px-2 pb-6 pt-2 font-body text-base leading-relaxed text-ink/80 sm:px-3">{c.desc}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/** @param {{ title?: string, desc?: string, tasks: string[] } | null} props.homework */
export function LessonHomework({ homework }) {
  if (!homework?.tasks?.length) return null
  const titleText = (homework.title || 'Homework').trim()
  const h2 = titleText.endsWith('.') ? titleText : `${titleText}.`
  return (
    <section className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16" aria-labelledby="hw-heading">
      <div className="mx-auto max-w-4xl">
        <SectionKicker num="06" kicker="Homework" />
        <h2 id="hw-heading" className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {h2}
        </h2>
        {homework.desc ? <p className="mt-4 max-w-prose text-base text-ink/70 sm:text-base">{homework.desc}</p> : null}
        <ul className="mt-6 space-y-3">
          {homework.tasks.map((t, i) => (
            <li key={i} className="flex items-start gap-4 border-b border-hairline/50 pb-3">
              <PixelIcon icon="check" size={16} className="mt-1 shrink-0 text-val" />
              <span className="font-body text-base leading-relaxed text-ink/85 sm:text-lg">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function LessonMistakes({ mistakes }) {
  if (!mistakes?.length) return null
  return (
    <section className="border-b border-hairline/50 px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHead num="07" kicker="If you get stuck" title="Common mistakes." />
        <ul className="space-y-3">
          {mistakes.map((m, i) => (
            <li key={i} className="flex items-start gap-4 border-l-4 border-val bg-val/[0.06] px-5 py-4 font-body text-base leading-relaxed text-ink/90">
              <span aria-hidden className="font-mono text-sm font-bold text-val">!</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function LessonVocab({ vocab }) {
  if (!vocab?.length) return null
  return (
    <section className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHead num="08" kicker="New words" title="Vocabulary." />
        <dl className="grid grid-cols-1 border-t border-hairline sm:grid-cols-2">
          {vocab.map((v, i) => (
            <div key={v.term} className={`border-b border-hairline px-2 py-5 sm:px-4 ${i % 2 === 0 ? 'sm:border-r sm:border-hairline' : ''}`}>
              <dt className="font-mono text-sm font-medium uppercase tracking-[0.15em] text-ink">{v.term}</dt>
              <dd className="mt-2 font-body text-base leading-relaxed text-ink/70">{v.def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function LessonResources({ resources }) {
  if (!resources?.length) return null
  return (
    <section className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHead num="09" kicker="Helpful resources" title="Read · Watch · Try." />
        <div className="space-y-10">
          {resources.map((g) => (
            <div key={g.group}>
              <h3 className="mb-4 border-b border-hairline pb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">{g.group}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.href}>
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-2 border-b border-hairline px-2 py-4 transition-colors hover:bg-sun/15 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-6 sm:gap-y-2 sm:px-3 sm:py-5"
                    >
                      <span className="min-w-0 flex-1 font-serif text-lg font-medium tracking-tight sm:text-xl">{it.label}</span>
                      {it.note ? <span className="w-full max-w-md flex-1 font-body text-sm text-ink/70 sm:w-auto">{it.note}</span> : null}
                      <span className="inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 sm:ml-auto">
                        {it.source ? <span>{it.source}</span> : null}
                        <PixelIcon icon="arrow" size={10} className="text-current" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LessonPostClass({ postClass }) {
  if (!postClass?.links?.length) return null
  return (
    <section
      className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16"
      aria-labelledby="lesson-session-resources-heading"
    >
      <div className="mx-auto max-w-4xl">
        <SectionKicker kicker="Resources" />
        <h2
          id="lesson-session-resources-heading"
          className="mt-2 font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl"
        >
          {postClass.title || 'Extra links.'}
        </h2>
        {postClass.desc ? <p className="mt-4 max-w-prose text-base text-ink/70">{postClass.desc}</p> : null}
        <ul className="mt-6 space-y-2">
          {postClass.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-ink underline decoration-dart/50 underline-offset-2 transition-colors hover:text-dart"
              >
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * Hover sweep: depends on *current* lesson day, not the link destination.
 * Mon: prev=red (val), next=yellow (sun) · Wed: prev=pink (ube), next=red (val) · Thu: prev=yellow (sun), next=pink (ube)
 * @param {'prev' | 'next'} role
 */
function lessonLinkPrevNextHoverClass(currentDayKey, role) {
  const d = typeof currentDayKey === 'string' ? currentDayKey.toLowerCase() : ''
  if (d === 'mon') return role === 'prev' ? 'hm-hero-join-slack--val' : 'hm-hero-join-slack--sun'
  if (d === 'wed') return role === 'prev' ? 'hm-hero-join-slack--ube' : 'hm-hero-join-slack--val'
  if (d === 'thu') return role === 'prev' ? 'hm-hero-join-slack--sun' : 'hm-hero-join-slack--ube'
  return ''
}

/**
 * @param {string} props.currentDay - mon | wed | thu (this lesson)
 * @param {{ week: number, day: string, label: string } | null} props.prev
 * @param {{ week: number, day: string, label: string } | null} props.next
 */
export function LessonPrevNext({ currentDay, prev, next }) {
  return (
    <section className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Previous and next class" className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {prev ? (
            <Link
              to={`/lesson/${prev.week}/${prev.day}`}
              className={
                'hm-hero-join-slack ' +
                lessonLinkPrevNextHoverClass(currentDay, 'prev') +
                ' group flex min-h-[4.5rem] flex-col justify-center border px-7 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'
              }
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/55">← Previous class</span>
              <span className="mt-1 line-clamp-2 font-serif text-xl tracking-tight text-ink">{prev.label}</span>
            </Link>
          ) : (
            <span className="min-h-[4.5rem] border border-transparent" aria-hidden />
          )}
          {next ? (
            <Link
              to={`/lesson/${next.week}/${next.day}`}
              className={
                'hm-hero-join-slack ' +
                lessonLinkPrevNextHoverClass(currentDay, 'next') +
                ' group flex min-h-[4.5rem] flex-col items-end justify-center border px-7 py-5 text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'
              }
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/55">Next class →</span>
              <span className="mt-1 line-clamp-2 font-serif text-xl tracking-tight text-ink">{next.label}</span>
            </Link>
          ) : null}
        </nav>
      </div>
    </section>
  )
}
