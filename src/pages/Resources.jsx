import { useId, useState } from 'react'
import resourcesHeroAccent from '../assets/resources-ornaments/3.svg'
import PixelIcon from '../components/PixelIcon.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import TopicTabBar from '../components/TopicTabBar.jsx'
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
    description: 'Assistants and APIs for side experiments—useful, but Wednesday class is a normal workshop, not an “AI-only” day.',
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

/** Tag chips: `.res-tag` + variant (colors from `cm-palette.css` `.res-page`). */
const TAG_RES = {
  docs: 'res-tag res-tag--docs',
  video: 'res-tag res-tag--video',
  book: 'res-tag res-tag--book',
  tool: 'res-tag res-tag--tool',
  course: 'res-tag res-tag--course',
  article: 'res-tag res-tag--article',
  setup: 'res-tag res-tag--setup',
}

const START_TILE_ACCENT = ['res-tile-dart', 'res-tile-sun']

function ResourceLink({ item }) {
  const tagRes = TAG_RES[item.tag] ?? TAG_RES.article
  const tagKind = TAG_RES[item.tag] ? item.tag : 'article'
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      data-res-kind={tagKind}
      className="res-row cm-paper-hover group flex gap-5 py-7 pl-2 pr-1 sm:pl-3 sm:pr-3 sm:py-8"
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-medium tracking-tight text-ink sm:text-2xl">{item.title}</h3>
          <PixelIcon icon="arrow" size={12} className="mt-1 shrink-0 text-ink/35 transition-colors group-hover:text-ink" />
        </div>
        <p className="mt-3 max-w-prose text-pretty text-base leading-relaxed text-ink/75">{item.desc}</p>
        <span
          className={`mt-4 inline-flex w-fit px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${tagRes}`}
        >
          {item.tag}
        </span>
      </div>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function StartHereTile({ item, topAccentClass }) {
  const tagRes = TAG_RES[item.tag] ?? TAG_RES.setup
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`cm-paper-hover group flex h-full flex-col px-2 py-10 transition-colors duration-200 sm:px-6 sm:py-12 ${topAccentClass}`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">{item.title}</h3>
        <PixelIcon icon="arrow" size={12} className="mt-1 shrink-0 text-ink/35 group-hover:text-ink" />
      </div>
      <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/75">{item.desc}</p>
      <span
        className={`mt-6 inline-flex w-fit px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${tagRes}`}
      >
        {item.tag}
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default function Resources() {
  const [active, setActive] = useState('python')
  const baseId = useId()
  const activeConfig = TABS.find((t) => t.id === active) ?? TABS[0]
  const list = resources[active] ?? []

  return (
    <div className="res-page hm-page min-h-full flex-1 font-body antialiased">
      <div className="layout-shell max-w-6xl pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div className="relative text-left">
          <ScrollReveal delayMs={140} hiddenTranslate="translate-y-4" className="pointer-events-none absolute inset-0">
            <img
              src={resourcesHeroAccent}
              alt=""
              aria-hidden="true"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="hm-ornament-float pointer-events-none absolute right-12 top-6 hidden w-20 select-none opacity-100 md:right-16 md:block lg:top-8 xl:right-20 xl:top-6 xl:w-28"
            />
          </ScrollReveal>
          <ScrollReveal rootMargin="0px 0px 12% 0px">
            <header className="border-b border-hairline pb-12 sm:pb-16">
              <h1 className="font-serif text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-tight text-ink">
                Course resources
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink/80">
                Links we use in class and a few extra links to save.{' '}
                <em className="hm-val font-serif italic">You do not have to read everything here.</em> Use what helps you
                build projects and understand the lesson. Each week in class we say what is important for that week.
              </p>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink/70">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">Tip:</span> Each link
                title tells you where the link goes. That helps when you save a bookmark or use a screen reader.
              </p>
            </header>
          </ScrollReveal>
        </div>

        <ScrollReveal className="py-16 sm:py-20" delayMs={60} rootMargin="0px 0px 10% 0px">
          <section aria-labelledby="start-heading">
            <h2
              id="start-heading"
              className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl"
            >
              New here?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
              Two steps: install Cursor, then set up GitHub. You will use both all course long—plan about 15 minutes total.
            </p>
            <div className="mt-12 grid grid-cols-1 border-t border-hairline sm:grid-cols-2">
              {startHere.map((item, i) => (
                <ScrollReveal
                  key={item.title}
                  className={`min-h-0 ${i < startHere.length - 1 ? 'sm:border-r sm:border-hairline' : ''} ${
                    i > 0 ? 'border-t border-hairline sm:border-t-0' : ''
                  }`}
                  delayMs={80 + i * 100}
                  hiddenTranslate="translate-y-5"
                  rootMargin="0px 0px 15% 0px"
                >
                  <StartHereTile item={item} topAccentClass={START_TILE_ACCENT[i]} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="border-t border-hairline pt-16 sm:pt-20" delayMs={40}>
            <div className="flex flex-col gap-3 border-b border-hairline pb-8 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                Browse by topic
              </h2>
              <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">Pick a tab below</p>
            </div>
          </ScrollReveal>

          <div className="py-6 sm:py-8">
            <TopicTabBar
              baseId={baseId}
              active={active}
              onChange={setActive}
              tabs={TABS}
              panelId={`${baseId}-panel-resources`}
              tablistAriaLabel="Resource categories"
            />
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel-resources`}
            aria-labelledby={`${baseId}-tab-${active}`}
          >
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-ink/80">
              {activeConfig.description}
            </p>
            <ul className="border-t border-hairline">
              {list.map((item, i) => (
                <li key={`${item.url}-${i}`} className="border-b border-hairline">
                  <ScrollReveal className="block" delayMs={30 + i * 45} hiddenTranslate="translate-y-3" threshold={0.05}>
                    <ResourceLink item={item} />
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}
