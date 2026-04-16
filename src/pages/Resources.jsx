import { useId, useState } from 'react'
import PageChrome from '../components/PageChrome.jsx'
import { resources, startHere } from '../data/resources'

const TABS = [
  {
    id: 'python',
    label: 'Python',
    description: 'Basics of the language, official docs, and practice sites. Weeks 1 to 4 use this the most.',
  },
  {
    id: 'web',
    label: 'Web dev',
    description: 'HTML, CSS, JavaScript, simple design tools, and how to put a site online.',
  },
  {
    id: 'ai',
    label: 'AI tools',
    description: 'Chat bots and APIs for Wednesday class and for small scripts with AI.',
  },
  {
    id: 'terminal',
    label: 'Terminal & Git',
    description: 'The command line, Git, GitHub, and a few APIs you may use in projects.',
  },
  {
    id: 'extras',
    label: 'Extras',
    description: 'Databases, SQL practice, wider computer science topics, and ideas for your portfolio.',
  },
]

const TAG_CLASS = {
  docs: 'border-mon/35 bg-mon/10 text-mon',
  video: 'border-wed/35 bg-wed/10 text-wed',
  book: 'border-white/[0.14] bg-white/[0.04] text-primary',
  tool: 'border-thu/35 bg-thu/10 text-thu',
  course: 'border-wed/30 bg-wed/5 text-wed',
  article: 'border-white/[0.12] bg-surface2/80 text-muted',
  setup: 'border-mon/40 bg-mon/10 text-mon',
}

function ExternalLinkIcon() {
  return (
    <span className="inline-block shrink-0 opacity-60" aria-hidden>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-px">
        <path
          d="M10 2h4v4M14 2L6 10M8 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V8"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function ResourceCard({ item }) {
  const tagClass = TAG_CLASS[item.tag] ?? TAG_CLASS.article
  return (
    <li>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-[44px] flex-col rounded-card border border-white/[0.08] bg-surface/60 p-5 transition-colors hover:border-white/[0.16] hover:bg-surface2/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon active:bg-surface2 sm:p-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-snug text-primary group-hover:text-primary sm:text-xl">
            {item.title}
          </h3>
          <ExternalLinkIcon />
        </div>
        <p className="mt-3 flex-1 text-pretty text-base leading-relaxed text-muted">{item.desc}</p>
        <span
          className={`mt-4 inline-flex w-fit rounded-pill border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${tagClass}`}
        >
          {item.tag}
        </span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </li>
  )
}

function StartHereCard({ item }) {
  return (
    <li>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] flex-col rounded-card border border-mon/25 bg-mon/[0.06] p-5 transition-colors hover:border-mon/40 hover:bg-mon/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon active:bg-mon/[0.12] sm:p-6"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-primary">{item.title}</h3>
          <ExternalLinkIcon />
        </div>
        <p className="mt-2 text-base leading-relaxed text-muted">{item.desc}</p>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </li>
  )
}

export default function Resources() {
  const [active, setActive] = useState('python')
  const baseId = useId()
  const activeConfig = TABS.find((t) => t.id === active) ?? TABS[0]
  const list = resources[active] ?? []
  const activeIndex = Math.max(
    0,
    TABS.findIndex((t) => t.id === active),
  )

  return (
    <PageChrome>
      <div className="layout-page">
        <header className="layout-prose-heading">
          <p className="hero-in hero-in-1 font-mono text-xs uppercase tracking-widest text-muted">Library</p>
          <h1 className="hero-in hero-in-2 mt-2 font-display text-[clamp(1.85rem,4.5vw,2.5rem)] font-extrabold leading-tight text-primary">
            Course resources
          </h1>
          <p className="hero-in hero-in-3 mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted">
            Links we use in class and a few extra links to save.{' '}
            <span className="text-primary/95">You do not have to read everything here.</span> Use what helps you build
            projects and understand the lesson. Each week in class we say what is important for that week.
          </p>
          <p className="hero-in hero-in-4 mt-4 max-w-2xl text-pretty text-base text-muted/90">
            <span className="font-mono text-xs text-muted">Tip:</span> Each link title tells you where the link goes.
            That helps when you save a bookmark or use a screen reader.
          </p>
        </header>

      <section className="mb-12 rounded-card border border-white/[0.1] bg-surface/40 p-6 sm:p-8" aria-labelledby="start-heading">
        <h2 id="start-heading" className="font-display text-xl font-bold text-primary sm:text-2xl">
          Before week 1: install these
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Install each tool one time. You will use them all course long. Plan about 20 to 30 minutes in total.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {startHere.map((item) => (
            <StartHereCard key={item.title} item={item} />
          ))}
        </ul>
      </section>

      <div className="mb-6">
        <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">Browse by topic</h2>
        <p className="mt-2 text-base text-muted">Pick a tab to change the list below.</p>
      </div>

      <div className="mb-8">
        <div className="sm:hidden">
          <label htmlFor={`${baseId}-topic-select`} className="sr-only">
            Choose a topic
          </label>
          <select
            id={`${baseId}-topic-select`}
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full rounded-elem border border-white/[0.14] bg-surface px-4 py-3 font-mono text-base text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon"
          >
            {TABS.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden sm:flex sm:justify-center">
          <div
            className="relative inline-grid h-12 min-w-[34rem] grid-cols-5 rounded-pill border border-white/[0.12] bg-surface/70 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            role="tablist"
            aria-label="Resource categories"
          >
            <div className="pointer-events-none absolute inset-y-1 left-1 right-1">
              <span
                className="absolute inset-y-0 w-1/5 rounded-pill bg-white/[0.12] shadow-[0_1px_0_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
                aria-hidden
              />
            </div>
            {TABS.map((tab) => {
              const selected = active === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`${baseId}-tab-${tab.id}`}
                  aria-controls={`${baseId}-panel-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={`relative z-10 min-h-10 rounded-pill px-3 py-2 font-mono text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon sm:text-base ${
                    selected ? 'text-primary' : 'text-muted hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">{activeConfig.description}</p>
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {list.map((item, i) => (
            <ResourceCard key={`${item.url}-${i}`} item={item} />
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-pretty text-center text-base text-muted sm:mt-14">
        If a link is broken, tell Weston in class or in Slack. We fix it for everyone.
      </p>
      </div>
    </PageChrome>
  )
}
