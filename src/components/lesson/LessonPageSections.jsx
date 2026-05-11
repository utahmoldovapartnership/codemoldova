import { Link } from 'react-router-dom'
import PixelIcon from '../PixelIcon.jsx'

export function SectionKicker({ kicker, className = '' }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 ${className}`}>
      <span>{kicker}</span>
    </p>
  )
}

export function SectionHead({ kicker, title, className = '', kickerClassName = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      <SectionKicker kicker={kicker} className={kickerClassName} />
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
 * @param {{ label: string, type: string, swatch: string, icon: string }} props.dayMeta
 * @param {string} [props.date]
 * @param {string} [props.sessionLabel]
 * @param {string} props.title
 * @param {import('react').ReactNode} props.breadcrumb
 */
export function LessonHero({ dayMeta, date, sessionLabel, title, breadcrumb }) {
  return (
    <section className="py-14 sm:py-20">
      <div className="w-full">
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
    <section className="border-t border-hairline py-14 sm:py-16">
      <div className="w-full">
        <SectionKicker kicker="Today's goal" />
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

export function LessonMainPoints({ points, embedded = false }) {
  if (!points?.length) return null
  const pointParts = points.map((point) => {
    const text = typeof point === 'string' ? point.trim() : ''
    if (!text) return { title: '', body: '' }

    const firstSentenceMatch = text.match(/^[^.!?]+[.!?]/)
    if (firstSentenceMatch) {
      const title = firstSentenceMatch[0].trim()
      const body = text.slice(firstSentenceMatch[0].length).trim()
      return { title, body }
    }
    return { title: text, body: 'Focus on this during lab so you can apply it without copying step-by-step.' }
  })

  const El = embedded ? 'div' : 'section'
  const outer = embedded ? 'w-full py-2 sm:py-4' : 'border-b border-hairline py-14 sm:py-16'
  return (
    <El className={outer}>
      <div className="w-full">
        <SectionKicker kicker="Main points" />
        <h2 className="mt-2 font-serif text-[clamp(1.85rem,4vw,2.5rem)] font-medium leading-tight text-ink sm:text-4xl">
          What to <em className="text-dart italic">remember</em>.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">
          These are the core takeaways from today. Focus on the ideas you can explain clearly and reuse in your next build,
          not just the lines you copied once.
        </p>
        <ol className="mt-8 grid list-none grid-cols-1 border-t border-hairline sm:grid-cols-2">
          {pointParts.map((p, i) => (
            <li key={i} className={`border-b border-hairline ${i % 2 === 0 ? 'sm:border-r sm:border-hairline' : ''}`}>
              <div className="flex gap-5 px-2 py-7 sm:px-6 sm:py-9">
                <span className="mt-1 shrink-0 text-dart">
                  <PixelIcon icon="check" size={20} className="text-current" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-ink">{p.title}</h3>
                  {p.body ? <p className="mt-2 text-base leading-relaxed text-ink/80">{p.body}</p> : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </El>
  )
}

function lessonDayHoverButtonClass(dayKey) {
  if (dayKey === 'mon') return 'hm-hero-join-slack--ube'
  if (dayKey === 'wed') return 'hm-hero-join-slack--sun'
  if (dayKey === 'thu') return 'hm-hero-join-slack--val'
  return 'hm-hero-join-slack--sun'
}

/** @param {{ label: string, href: string, ready: boolean, hint?: string }[]} props.artifacts */
export function LessonArtifacts({ artifacts, dayKey = 'wed' }) {
  if (!artifacts?.length) return null
  const dayHover = lessonDayHoverButtonClass(dayKey)
  return (
    <section className="-mt-8 pb-10 pt-0 sm:-mt-10 sm:pb-12">
      <div className="w-full">
        <div className="flex flex-wrap gap-3">
          {artifacts.map((a) =>
            a.ready && a.href ? (
              <a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hm-hero-join-slack ${dayHover} inline-flex h-12 items-center gap-3 border px-5 font-mono text-xs uppercase tracking-[0.25em]`}
              >
                <span>{a.label}</span>
                <PixelIcon icon="arrow" size={12} className="text-current" />
              </a>
            ) : (
              <a
                key={a.label}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
                className={`hm-hero-join-slack ${dayHover} inline-flex h-12 items-center gap-3 border px-5 font-mono text-xs uppercase tracking-[0.25em]`}
              >
                <span>{a.label}</span>
                <PixelIcon icon="arrow" size={12} className="text-current" />
              </a>
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
    btnPlaceholder: 'border-dashed border-ube/70 text-ube',
  },
  wed: {
    section: 'bg-sun/[0.08]',
    btnPlaceholder: 'border-dashed border-sun/70 text-sun',
  },
  thu: {
    section: 'bg-val/[0.08]',
    btnPlaceholder: 'border-dashed border-val/60 text-val',
  },
}

/**
 * @param {{ title: string, intro?: string, exampleHref?: string, exampleLabel?: string, exampleDownloadFilename?: string | null, durationLabel?: string, dayKey?: 'mon' | 'wed' | 'thu', children: import('react').ReactNode, collapsible?: boolean, contained?: boolean }} props
 */
export function LessonLabBand({
  title,
  intro,
  exampleHref,
  exampleLabel = 'Example',
  exampleDownloadFilename,
  durationLabel = '',
  dayKey = 'wed',
  children,
  collapsible = true,
  contained = false,
}) {
  if (children == null) return null
  const t = LAB_DAY[dayKey] ?? LAB_DAY.wed
  const labExampleHover = lessonDayHoverButtonClass(dayKey)
  const kicker = durationLabel?.trim() ? `Lab · ${durationLabel.trim()}` : 'Lab'
  const bandClass = contained
    ? `relative w-full max-w-none text-ink ${t.section}`
    : `relative left-1/2 w-screen max-w-none -translate-x-1/2 text-ink ${t.section}`
  const shellPad = contained ? 'py-8 sm:py-10' : 'py-16 sm:py-20'

  const headerBlock = (
    <div className="min-w-0 flex-1">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">{kicker}</p>
      <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-5xl">{title}.</h2>
      {intro ? <p className="mt-3 max-w-prose font-body text-sm leading-relaxed text-ink/65 sm:text-base">{intro}</p> : null}
    </div>
  )

  const bodyBlock = (
    <>
      <div className="mt-6">
        {exampleHref ? (
          <a
            href={exampleHref}
            {...(exampleDownloadFilename
              ? { download: exampleDownloadFilename }
              : { target: '_blank', rel: 'noopener noreferrer' })}
            className={`hm-hero-join-slack ${labExampleHover} inline-flex h-12 items-center border px-5 font-mono text-xs uppercase tracking-[0.25em]`}
          >
            <span>{exampleLabel}</span>
            <span className="sr-only">
              {exampleDownloadFilename ? ' (downloads a file)' : ' (opens in a new tab)'}
            </span>
          </a>
        ) : (
          <span
            className={`inline-flex min-h-11 items-center border px-4 font-mono text-xs uppercase tracking-[0.22em] ${t.btnPlaceholder}`}
          >
            {exampleLabel} link coming soon
          </span>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </>
  )

  if (!collapsible) {
    return (
      <section className={bandClass}>
        <div className={contained ? 'w-full' : 'layout-shell'}>
          <div className={`w-full ${shellPad}`}>
            <div className="border-b border-black/10 pb-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">{headerBlock}</div>
            </div>
            <div className="pt-6">{bodyBlock}</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={bandClass}>
      <div className="layout-shell">
        <div className={`w-full ${shellPad}`}>
          <details open className="group">
            <summary className="-mx-2 list-none cursor-pointer px-2 py-4 marker:hidden [&::-webkit-details-marker]:hidden sm:-mx-3 sm:px-3">
              <div className="group/summary relative flex items-center justify-between gap-4 pb-5 after:pointer-events-none after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:h-px after:w-full after:bg-black/20 after:content-[''] after:transition-[height,background-color] after:duration-300 after:ease-out hover:after:h-[3px] hover:after:bg-black motion-reduce:after:duration-75">
                {headerBlock}
                <span aria-hidden className="shrink-0">
                  <PixelIcon
                    icon="arrow"
                    size={12}
                    className="text-ink/55 transition-[color,transform] duration-200 ease-out group-open:rotate-90 group-hover/summary:text-ink"
                  />
                </span>
              </div>
            </summary>
            <div className="pt-2">{bodyBlock}</div>
          </details>
        </div>
      </div>
    </section>
  )
}

/** @param {{ tier: string, title: string, desc: string }[]} props.challenges @param {boolean} [props.embedded] */
export function LessonChallengesAccordion({ challenges, embedded = false }) {
  if (!challenges?.length) return null
  const El = embedded ? 'div' : 'section'
  const wrapClass = embedded ? 'w-full' : 'border-b border-hairline py-14 sm:py-16'
  return (
    <El className={wrapClass}>
      <div className="w-full">
        <SectionHead kicker="Thursday challenges" title="Pick your tier." />
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
    </El>
  )
}

/** @param {{ title?: string, desc?: string, tasks: string[] } | null} props.homework @param {boolean} [props.embedded] */
export function LessonHomework({ homework, embedded = false }) {
  if (!homework?.tasks?.length) return null
  const titleText = (homework.title || 'Homework').trim()
  const h2 = titleText.endsWith('.') ? titleText : `${titleText}.`
  const El = embedded ? 'div' : 'section'
  const outer = embedded ? 'w-full py-2 sm:py-4' : 'border-b border-hairline py-14 sm:py-16'
  const sectionProps = embedded ? {} : { 'aria-labelledby': 'hw-heading' }
  return (
    <El className={outer} {...sectionProps}>
      <div className="w-full">
        <SectionKicker kicker="Homework" />
        <h2 id={embedded ? undefined : 'hw-heading'} className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {h2}
        </h2>
        {homework.desc ? <p className="mt-4 max-w-prose text-base text-ink/70 sm:text-base">{homework.desc}</p> : null}
        <ul className="mt-6 space-y-3">
          {homework.tasks.map((t, i) => (
            <li key={i} className="flex items-start gap-4 border-b border-hairline/50 pb-3">
              <PixelIcon icon="sparkle" size={12} className="mt-1 shrink-0 text-val" />
              <span className="font-body text-base leading-relaxed text-ink/85 sm:text-lg">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </El>
  )
}

export function LessonMistakes({ mistakes }) {
  if (!mistakes?.length) return null
  return (
    <section className="border-b border-hairline/50 py-14 sm:py-16">
      <div className="w-full">
        <SectionHead kicker="If you get stuck" title="Common mistakes." />
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
    <section className="border-b border-hairline py-14 sm:py-16">
      <div className="w-full">
        <SectionHead kicker="New words" title="Vocabulary." />
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

export function LessonResources({ resources, embedded = false }) {
  if (!resources?.length) return null
  const El = embedded ? 'div' : 'section'
  const outer = embedded ? 'w-full py-2 sm:py-4' : 'border-b border-hairline py-14 sm:py-16'
  return (
    <El className={outer}>
      <div className="w-full">
        <SectionHead kicker="Helpful resources" title="Read · Watch · Try." />
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
    </El>
  )
}

export function LessonPostClass({ postClass, embedded = false, titleId = 'lesson-session-resources-heading' }) {
  if (!postClass?.links?.length) return null
  const El = embedded ? 'div' : 'section'
  const outer = embedded ? 'w-full pt-10' : 'border-b border-hairline py-14 sm:py-16'
  const sectionProps = embedded ? {} : { 'aria-labelledby': titleId }
  return (
    <El className={outer} {...sectionProps}>
      <div className="w-full">
        <h2
          id={titleId}
          className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl"
        >
          {postClass.title || 'Optional deep-dives'}
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
    </El>
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
    <section className="py-14 sm:py-16">
      <div className="w-full">
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
