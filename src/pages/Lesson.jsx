import { useRef, useState, useId } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PageChrome from '../components/PageChrome.jsx'
import TopicTabBar from '../components/TopicTabBar.jsx'
import LessonModule from '../components/LessonModule'
import { getSessionByWeekAndDay } from '../data/curriculum'
import { getAdjacentSessions, sessions } from '../data/schedule'
import {
  LessonArtifacts,
  LessonChallengesAccordion,
  LessonHero,
  LessonHomework,
  LessonLabBand,
  LessonMainPoints,
  LessonMistakes,
  LessonPostClass,
  LessonPrevNext,
  LessonResources,
  LessonSectionGoal,
  LessonVocab,
} from '../components/lesson/LessonPageSections.jsx'

const VALID_DAYS = ['mon', 'wed', 'thu']

/** swatch + type + icon — aligned with Roadmap / Lesson mockup. */
const DAY_HERO = {
  mon: { label: 'Monday', type: 'Workshop', swatch: '#DD8CF1', icon: 'terminal' },
  wed: { label: 'Wednesday', type: 'AI Exploration', swatch: '#F69C40', icon: 'sparkle' },
  thu: { label: 'Thursday', type: 'Build Day', swatch: '#EF453F', icon: 'rocket' },
}

const DAY_D_INDEX = { mon: 1, wed: 2, thu: 3 }

function sessionCodeLabel(weekNum, dayKey) {
  return `W${weekNum}D${DAY_D_INDEX[dayKey] ?? 1}`
}

/**
 * @param {object} c — curriculum `challenges` (base/medium/hard + bonus string or object)
 * @returns {{ tier: string, title: string, desc: string }[]}
 */
function buildChallengesAccordionList(c) {
  if (!c) return []
  const rows = []
  if (c.base) {
    rows.push({
      tier: 'B',
      title: c.base.title,
      desc: c.base.desc || (c.base.steps && c.base.steps.length ? c.base.steps.join(' ') : ''),
    })
  }
  if (c.medium) {
    rows.push({
      tier: 'M',
      title: c.medium.title,
      desc: c.medium.desc || (c.medium.steps && c.medium.steps.length ? c.medium.steps.join(' ') : ''),
    })
  }
  if (c.hard) {
    rows.push({
      tier: 'H',
      title: c.hard.title,
      desc: c.hard.desc || (c.hard.steps && c.hard.steps.length ? c.hard.steps.join(' ') : ''),
    })
  }
  if (c.bonus != null && c.bonus !== '') {
    if (typeof c.bonus === 'string') {
      rows.push({ tier: '★', title: 'Bonus', desc: c.bonus })
    } else if (c.bonus?.title) {
      rows.push({
        tier: '★',
        title: c.bonus.title,
        desc: c.bonus.desc || '',
      })
    }
  }
  return rows
}

/**
 * @param {object} session — optional `codeFromClassLabel` overrides the second artifact label (default "Class code").
 * @returns {{ label: string, href: string, ready: boolean, hint?: string }[]}
 */
function buildArtifacts(session) {
  const out = []
  if (session.slideDeck?.label) {
    const url = typeof session.slideDeck.url === 'string' ? session.slideDeck.url.trim() : ''
    out.push({
      label: 'Class slides',
      href: url || '#',
      ready: Boolean(url),
      hint: session.slideDeck.hint || 'Link coming soon',
    })
  } else {
    out.push({ label: 'Class slides', href: '', ready: false, hint: 'Announced in class' })
  }
  const codeUrl = session.codeFromClassUrl
  if (typeof codeUrl === 'string' && codeUrl.trim()) {
    const codeLabel =
      typeof session.codeFromClassLabel === 'string' && session.codeFromClassLabel.trim()
        ? session.codeFromClassLabel.trim()
        : 'Class code'
    out.push({ label: codeLabel, href: codeUrl.trim(), ready: true })
  } else {
    out.push({
      label: 'Class code',
      href: '',
      ready: false,
      hint: 'Shared in class or add codeFromClassUrl in curriculum',
    })
  }
  return out
}

function buildMainPoints(session) {
  if (session.mainPoints?.length) return session.mainPoints
  if (session.steps?.length) {
    return session.steps.slice(0, 5).map((s) => {
      const detail = [s.content, s.task, Array.isArray(s.tips) && s.tips.length ? s.tips[0] : '']
        .filter((v) => typeof v === 'string' && v.trim())
        .map((v) => v.trim())
        .join(' ')
      return detail ? `${s.title}. ${detail}` : s.title
    })
  }
  return null
}

function resolveLabExample(session) {
  const custom =
    typeof session?.labExampleLabel === 'string' && session.labExampleLabel.trim()
      ? session.labExampleLabel.trim()
      : ''
  const downloadRaw = session?.labExampleDownload
  const downloadFilename =
    typeof downloadRaw === 'string' && downloadRaw.trim()
      ? downloadRaw.trim()
      : downloadRaw === true && typeof session?.labExampleUrl === 'string'
        ? (session.labExampleUrl.split('/').pop() || '').split('?')[0] || null
        : null

  if (typeof session?.labExampleUrl === 'string' && session.labExampleUrl.trim()) {
    return {
      href: session.labExampleUrl.trim(),
      label: custom || 'Lab example',
      downloadFilename,
    }
  }
  const candidates = [
    ['exampleUrl', 'Lab example'],
    ['solutionUrl', 'Example solution'],
  ]
  for (const [key, label] of candidates) {
    const val = session?.[key]
    if (typeof val === 'string' && val.trim()) {
      return { href: val.trim(), label, downloadFilename: null }
    }
  }
  return { href: '', label: 'Lab example', downloadFilename: null }
}

function estimateLabDurationLabel(session) {
  const direct =
    session?.labDurationLabel ??
    session?.labDuration ??
    (Number.isFinite(session?.labDurationMin) ? `${session.labDurationMin} min` : '')
  if (typeof direct === 'string' && direct.trim()) return direct.trim()

  const stepCount = Array.isArray(session?.steps) ? session.steps.length : 0
  if (stepCount <= 3) return '15 min'
  if (stepCount <= 5) return '20 min'
  if (stepCount <= 7) return '25 min'
  return '30 min'
}

function BreadcrumbWithJumps({ weekNum, dayKey, weekOptions, dayOptions, onWeekSelect, onDaySelect, metaLabel }) {
  const weekMenuRef = useRef(null)
  const dayMenuRef = useRef(null)

  const closeWeekMenu = () => {
    if (weekMenuRef.current) weekMenuRef.current.open = false
  }
  const closeDayMenu = () => {
    if (dayMenuRef.current) dayMenuRef.current.open = false
  }

  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/55">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
        <li>
          <Link to="/" className="hover:text-ink hover:underline hover:underline-offset-4">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-ink/45">
          /
        </li>
        <li>
          <Link to="/roadmap" className="hover:text-ink hover:underline hover:underline-offset-4">
            Roadmap
          </Link>
        </li>
        <li aria-hidden className="text-ink/45">
          /
        </li>
        <li>
          <details ref={weekMenuRef} className="group relative inline-block">
            <summary className="flex h-7 list-none cursor-pointer items-center gap-2 border-b border-ink px-1 text-ink transition-colors marker:hidden hover:bg-ink/[0.04]">
              <span>{`WEEK ${weekNum}`}</span>
              <span aria-hidden className="text-ink/55 transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="absolute left-0 z-20 mt-2 min-w-[10.5rem] bg-paper p-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              {weekOptions.map((w) => {
                const active = w === weekNum
                return (
                  <button
                    key={w}
                    type="button"
                    onClick={() => {
                      onWeekSelect(w)
                      closeWeekMenu()
                    }}
                    className={`flex w-full items-center justify-between px-2 py-2 text-left text-[11px] uppercase tracking-[0.22em] transition-colors ${
                      active ? 'bg-val text-ink' : 'text-ink hover:bg-ink/[0.06]'
                    }`}
                    aria-current={active ? 'true' : undefined}
                  >
                    <span>{`WEEK ${w}`}</span>
                  </button>
                )
              })}
            </div>
          </details>
        </li>
        <li aria-hidden className="text-ink/45">
          ·
        </li>
        <li>
          <details ref={dayMenuRef} className="group relative inline-block">
            <summary className="flex h-7 list-none cursor-pointer items-center gap-2 border-b border-ink px-1 text-ink transition-colors marker:hidden hover:bg-ink/[0.04]">
              <span>{metaLabel.toUpperCase()}</span>
              <span aria-hidden className="text-ink/55 transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="absolute left-0 z-20 mt-2 min-w-[10.5rem] bg-paper p-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              {dayOptions.map((lesson) => {
                const dayLabel = (DAY_HERO[lesson.day]?.label ?? lesson.day).toUpperCase()
                const active = lesson.day === dayKey
                return (
                  <button
                    key={lesson.day}
                    type="button"
                    onClick={() => {
                      onDaySelect(lesson.day)
                      closeDayMenu()
                    }}
                    className={`flex w-full items-center justify-between px-2 py-2 text-left text-[11px] uppercase tracking-[0.22em] transition-colors ${
                      active ? 'bg-val text-ink' : 'text-ink hover:bg-ink/[0.06]'
                    }`}
                    aria-current={active ? 'true' : undefined}
                  >
                    <span>{dayLabel}</span>
                  </button>
                )
              })}
            </div>
          </details>
        </li>
      </ol>
    </nav>
  )
}

function LessonTabEmpty({ children }) {
  return (
    <p className="max-w-prose rounded-elem border border-dashed border-ink/20 bg-ink/[0.02] px-5 py-8 text-base leading-relaxed text-ink/65">
      {children}
    </p>
  )
}

function LessonTabbedBody({
  dayKey,
  session,
  mainPoints,
  challengesList,
  isThu,
  showLab,
  labExample,
  labDurationLabel,
}) {
  const baseId = useId()
  const [activeLessonTab, setActiveLessonTab] = useState('lab')
  const lessonPanelId = `${baseId}-lesson-tabs-panel`

  return (
    <section className="lesson-tabs border-t border-hairline">
      <div className="flex flex-col gap-2 border-b border-hairline pb-6 pt-8 sm:flex-row sm:items-end sm:justify-between sm:pt-10">
        <h2 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">Lesson content</h2>
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">Pick a tab</p>
      </div>
      <div className="py-6 sm:py-8">
        <TopicTabBar
          baseId={baseId}
          active={activeLessonTab}
          onChange={setActiveLessonTab}
          tabs={[
            { id: 'lab', label: 'Lab' },
            { id: 'homework', label: 'Homework' },
            { id: 'main', label: 'Main points' },
            { id: 'resources', label: 'Resources' },
          ]}
          panelId={lessonPanelId}
          tablistAriaLabel="Lesson sections"
          tabLineClassName="lesson-tabline pointer-events-none absolute bottom-0 left-0 z-0 transition-[left,width] duration-300 ease-out"
        />
      </div>
      <div
        role="tabpanel"
        id={lessonPanelId}
        aria-labelledby={`${baseId}-tab-${activeLessonTab}`}
        className="min-h-[16rem] border-t border-hairline pb-16 pt-8 sm:min-h-[18rem] sm:pb-20 sm:pt-10"
      >
        {activeLessonTab === 'lab' ? (
          showLab ? (
            <LessonLabBand
              dayKey={dayKey}
              title={session.title}
              intro={session.desc || ''}
              exampleHref={labExample.href}
              exampleLabel={labExample.label}
              exampleDownloadFilename={labExample.downloadFilename}
              durationLabel={labDurationLabel}
              collapsible={false}
              contained
            >
              <>
                <LessonModule steps={session.steps} variant="paper" noRounded dayKey={dayKey} />
                {isThu && challengesList.length ? (
                  <div className="mt-12 border-t border-black/15 pt-10">
                    <LessonChallengesAccordion challenges={challengesList} embedded />
                  </div>
                ) : null}
              </>
            </LessonLabBand>
          ) : isThu && challengesList.length ? (
            <LessonLabBand
              dayKey={dayKey}
              title={session.title}
              intro={session.desc || ''}
              exampleHref={labExample.href}
              exampleLabel={labExample.label}
              exampleDownloadFilename={labExample.downloadFilename}
              durationLabel={labDurationLabel}
              collapsible={false}
              contained
            >
              <LessonChallengesAccordion challenges={challengesList} embedded />
            </LessonLabBand>
          ) : (
            <LessonTabEmpty>
              No guided lab steps or Thursday tiers are listed for this session yet. Check class slides or ask in WhatsApp
              if you think this is a mistake.
            </LessonTabEmpty>
          )
        ) : null}

        {activeLessonTab === 'homework' ? (
          session.homework?.tasks?.length ? (
            <LessonHomework homework={session.homework} embedded />
          ) : (
            <LessonTabEmpty>No homework listed for this session.</LessonTabEmpty>
          )
        ) : null}

        {activeLessonTab === 'main' ? (
          mainPoints?.length ? (
            <LessonMainPoints points={mainPoints} embedded />
          ) : (
            <LessonTabEmpty>No main points for this session yet.</LessonTabEmpty>
          )
        ) : null}

        {activeLessonTab === 'resources' ? (
          <>
            {session.resources?.length ? (
              <LessonResources resources={session.resources} embedded />
            ) : null}
            {session.postClass?.links?.length ? (
              <div className={session.resources?.length ? 'mt-12 border-t border-hairline pt-10' : ''}>
                <LessonPostClass
                  postClass={session.postClass}
                  embedded
                  titleId={`${baseId}-optional-deep-dives`}
                />
              </div>
            ) : null}
            {!session.resources?.length && !session.postClass?.links?.length ? (
              <LessonTabEmpty>
                No session-specific links yet. Optional deep-dives and curated resources will show here when they are
                in the lesson data. You can still use the Resources page for course-wide links and installs.
              </LessonTabEmpty>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  )
}

function LessonNotFound() {
  return (
    <div className="min-h-full flex-1 bg-paper">
      <PageChrome>
        <div className="min-h-0 flex-1">
          <div className="layout-shell max-w-lg flex-1 py-20 text-center">
            <h1 className="font-serif text-2xl font-medium tracking-tight text-ink">We could not find this lesson</h1>
            <p className="mt-4 text-base text-ink/70">
              Check the web address. It should look like /lesson/1/mon (week number, then mon, wed, or thu).
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/roadmap"
                className="inline-flex min-h-11 items-center justify-center border border-dart/85 bg-dart/10 px-5 font-mono text-sm text-ink transition-colors hover:bg-dart hover:text-paper"
              >
                Open roadmap
              </Link>
              <Link
                to="/"
                className="inline-flex min-h-11 items-center justify-center border border-dart/50 px-5 font-mono text-sm text-ink/70 transition-colors hover:border-ink hover:text-ink"
              >
                Home page
              </Link>
            </div>
          </div>
        </div>
      </PageChrome>
    </div>
  )
}

export default function Lesson() {
  const navigate = useNavigate()
  const { week, day } = useParams()
  const dayKey = day?.toLowerCase()
  const weekNum = Number(week)

  const invalid =
    !dayKey || !VALID_DAYS.includes(dayKey) || !Number.isFinite(weekNum) || weekNum < 1

  const session = invalid ? null : getSessionByWeekAndDay(weekNum, dayKey)
  const { prev, next } = invalid ? { prev: null, next: null } : getAdjacentSessions(weekNum, dayKey)

  if (invalid || !session) {
    return <LessonNotFound />
  }

  const isThu = dayKey === 'thu'
  const dayHero = DAY_HERO[dayKey]
  const weekOptions = Array.from(new Set(sessions.map((lesson) => lesson.week)))
  const dayOptions = sessions.filter((lesson) => lesson.week === weekNum)

  const handleWeekSelect = (selectedWeekRaw) => {
    const selectedWeek = Number(selectedWeekRaw)
    if (!Number.isFinite(selectedWeek)) return
    const sameDayInSelectedWeek = sessions.find((l) => l.week === selectedWeek && l.day === dayKey)
    const fallbackDay = sessions.find((l) => l.week === selectedWeek)?.day
    const nextDay = sameDayInSelectedWeek?.day || fallbackDay
    if (nextDay) navigate(`/lesson/${selectedWeek}/${nextDay}`)
  }

  const handleDaySelect = (selectedDay) => {
    if (!selectedDay) return
    navigate(`/lesson/${weekNum}/${selectedDay}`)
  }

  const goal = session.goal || session.preview || ''
  const mainPoints = buildMainPoints(session)
  const artifacts = buildArtifacts(session)
  const challengesList = isThu ? buildChallengesAccordionList(session.challenges) : []
  const labExample = resolveLabExample(session)
  const labDurationLabel = estimateLabDurationLabel(session)
  const showLab = Boolean(session.steps?.length)

  return (
    <div className="min-h-full flex-1 bg-paper font-body text-ink antialiased">
      <PageChrome>
        <div className="layout-shell max-w-6xl min-h-0 min-w-0 flex-1">
          <LessonHero
            dayKey={dayKey}
            dayMeta={dayHero}
            date={session.date}
            sessionLabel={sessionCodeLabel(weekNum, dayKey)}
            title={session.title}
            breadcrumb={
              <BreadcrumbWithJumps
                weekNum={weekNum}
                dayKey={dayKey}
                weekOptions={weekOptions}
                dayOptions={dayOptions}
                onWeekSelect={handleWeekSelect}
                onDaySelect={handleDaySelect}
                metaLabel={dayHero.label}
              />
            }
          />
          {artifacts.length ? <LessonArtifacts artifacts={artifacts} dayKey={dayKey} /> : null}
          {goal ? <LessonSectionGoal goal={goal} dayMeta={dayHero} /> : null}

          <LessonTabbedBody
            key={`${weekNum}-${dayKey}`}
            dayKey={dayKey}
            session={session}
            mainPoints={mainPoints}
            challengesList={challengesList}
            isThu={isThu}
            showLab={showLab}
            labExample={labExample}
            labDurationLabel={labDurationLabel}
          />

          {session.challenges && isThu && !challengesList.length ? (
            <p className="px-6 py-8 text-center text-ink/60 sm:px-10">Thursday project tiers are not in the data yet.</p>
          ) : null}

          {session.mistakes?.length ? <LessonMistakes mistakes={session.mistakes} /> : null}
          {session.vocab?.length ? <LessonVocab vocab={session.vocab} /> : null}
          <LessonPrevNext currentDay={dayKey} prev={prev} next={next} />
        </div>
      </PageChrome>
    </div>
  )
}
