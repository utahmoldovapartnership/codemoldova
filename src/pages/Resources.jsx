import { useId, useState } from 'react'
import PageChrome from '../components/PageChrome.jsx'
import { resources, startHere } from '../data/resources'

const TABS = [
  {
    id: 'python',
    label: 'Python',
    description: 'Language basics, docs, and practice — weeks 1–4 focus here most.',
  },
  {
    id: 'web',
    label: 'Web dev',
    description: 'HTML, CSS, JavaScript, design tools, and hosting when we build for the browser.',
  },
  {
    id: 'ai',
    label: 'AI tools',
    description: 'Assistants and APIs for Wednesday labs and AI-powered scripts.',
  },
  {
    id: 'terminal',
    label: 'Terminal & Git',
    description: 'Command line, version control, and a few APIs you’ll touch in projects.',
  },
  {
    id: 'extras',
    label: 'Extras',
    description: 'Databases, SQL practice, CS breadth, and polish for your portfolio.',
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
        className="group flex min-h-[44px] flex-col rounded-card border border-white/[0.08] bg-surface/60 p-4 transition-colors hover:border-white/[0.16] hover:bg-surface2/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon active:bg-surface2"
      >
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold leading-snug text-primary group-hover:text-primary sm:text-[17px]">
            {item.title}
          </h3>
          <ExternalLinkIcon />
        </div>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">{item.desc}</p>
        <span
          className={`mt-3 inline-flex w-fit rounded-pill border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${tagClass}`}
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
        className="flex min-h-[52px] flex-col rounded-card border border-mon/25 bg-mon/[0.06] p-4 transition-colors hover:border-mon/40 hover:bg-mon/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon active:bg-mon/[0.12]"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold text-primary">{item.title}</h3>
          <ExternalLinkIcon />
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
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

  return (
    <PageChrome>
      <div className="layout-page">
        <header className="layout-prose-heading">
          <p className="hero-in hero-in-1 font-mono text-[11px] uppercase tracking-widest text-muted">Library</p>
          <h1 className="hero-in hero-in-2 mt-2 font-display text-[clamp(1.75rem,4.5vw,2.35rem)] font-extrabold text-primary">
            Course resources
          </h1>
          <p className="hero-in hero-in-3 mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-[15px]">
            One place for links we mention in class and extras worth bookmarking.{' '}
            <span className="text-primary/95">Nothing here is required homework</span> — use what helps you ship projects
            and understand the ideas. In class we’ll always say what matters for that week.
          </p>
          <p className="hero-in hero-in-4 mt-3 text-pretty text-sm text-muted/90">
            <span className="font-mono text-[11px] text-muted">Tip:</span> Each link title says where it goes so it still
            makes sense out of context (good for bookmarks and screen readers).
          </p>
        </header>

      <section className="mb-10 rounded-card border border-white/[0.1] bg-surface/40 p-5 sm:p-6" aria-labelledby="start-heading">
        <h2 id="start-heading" className="font-display text-lg font-bold text-primary sm:text-xl">
          Start here (before Week 1)
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Install these once; you’ll use them all course long. Takes about 20–30 minutes total.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {startHere.map((item) => (
            <StartHereCard key={item.title} item={item} />
          ))}
        </ul>
      </section>

      <div className="mb-4">
        <h2 className="font-display text-lg font-bold text-primary sm:text-xl">Browse by topic</h2>
        <p className="mt-1 text-sm text-muted">Pick a tab to filter the list.</p>
      </div>

      <div className="mb-6 overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch]">
        <div
          className="flex min-w-0 gap-2 rounded-elem border border-white/[0.08] bg-surface/50 p-1.5 sm:inline-flex sm:flex-wrap"
          role="tablist"
          aria-label="Resource categories"
        >
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
                className={`shrink-0 rounded-elem px-4 py-2.5 font-mono text-xs transition-colors sm:text-sm ${
                  selected
                    ? 'bg-white/[0.1] text-primary'
                    : 'text-muted hover:bg-white/[0.05] hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">{activeConfig.description}</p>
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {list.map((item, i) => (
            <ResourceCard key={`${item.url}-${i}`} item={item} />
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-pretty text-center text-sm text-muted sm:mt-12">
        Spot a broken link? Tell Weston in class or via the cohort channel — we’ll fix it for everyone.
      </p>
      </div>
    </PageChrome>
  )
}
