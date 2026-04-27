// Editorial Resources mockup for CodeMoldova.
// Self-contained, viewable at /resources-mockup. Delete this file + the route line in App.jsx to remove.
//
// Best-practice moves baked in:
//   1. "Start here" surfaced FIRST — install steps for week-1 prep, not buried.
//   2. Sticky filter bar — text search + tag chips. Students looking up a
//      specific topic don't have to scroll-hunt.
//   3. Editorial group headings (№ 02 Python, № 03 Web, etc.) — predictable
//      structure means students learn the page once and use it for 8 weeks.
//   4. Each row shows: tag chip · serif title · one-line "why this one" ·
//      source domain. No flat link dumps.
//   5. Hover-inverts on rows + 44px+ tap targets — works on phones.
//   6. Empty-search state when filters yield nothing.

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { startHere, resources } from '../data/resources'
import PixelIcon from '../components/PixelIcon'

const CATEGORIES = [
  { id: 'python',   num: '02', label: 'Python',          blurb: 'Reference docs, second explanations, and one-page cheat sheets for the language we start the course with.' },
  { id: 'web',      num: '03', label: 'Web Development', blurb: 'HTML, CSS, JavaScript. Reach for these when something looks weird in the browser.' },
  { id: 'ai',       num: '04', label: 'AI Tools',        blurb: 'The tools we use on Wednesdays — and the writing on prompts, limits, and verifying outputs.' },
  { id: 'terminal', num: '05', label: 'Terminal',        blurb: 'When the command line feels foreign — short, friendly explainers and one cheat sheet to keep open.' },
  { id: 'extras',   num: '06', label: 'Extras',          blurb: 'Things that do not fit the other buckets but are worth your time.' },
]

const TAG_META = {
  setup:   { label: 'Setup',   color: '#EF453F' },
  docs:    { label: 'Docs',    color: '#097251' },
  article: { label: 'Article', color: '#DD8CF1' },
  video:   { label: 'Video',   color: '#F69C40' },
  course:  { label: 'Course',  color: '#097251' },
  book:    { label: 'Book',    color: '#000000' },
  tool:    { label: 'Tool',    color: '#F69C40' },
}

const ALL_TAGS = ['docs', 'article', 'video', 'course', 'book', 'tool']

// ─── Helpers ────────────────────────────────────────────────────────────────

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

function matchesQuery(item, q) {
  if (!q) return true
  const needle = q.trim().toLowerCase()
  return [item.title, item.desc, item.tag].filter(Boolean).some((s) => s.toLowerCase().includes(needle))
}

// ─── UI bits ────────────────────────────────────────────────────────────────

function TagChip({ tag, className = '' }) {
  const meta = TAG_META[tag] ?? { label: tag, color: '#000000' }
  return (
    <span
      className={`inline-flex h-5 items-center px-2 font-mono text-[9px] font-medium uppercase tracking-[0.2em] ${className}`}
      style={{ backgroundColor: meta.color, color: '#FFFFFF' }}
    >
      {meta.label}
    </span>
  )
}

function ResourceRow({ item }) {
  const dom = domainOf(item.url)
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-12 items-baseline gap-3 border-b border-hairline px-2 py-5 transition-colors hover:bg-ink hover:text-paper sm:gap-6 sm:px-4 sm:py-7"
    >
      <div className="col-span-12 flex items-center gap-3 sm:col-span-2">
        <TagChip tag={item.tag} />
      </div>
      <div className="col-span-12 sm:col-span-7">
        <h3 className="font-serif text-xl font-medium tracking-tight sm:text-2xl">{item.title}</h3>
        <p className="mt-1 max-w-prose font-body text-sm leading-relaxed text-ink/75 group-hover:text-paper/75 sm:text-base">
          {item.desc}
        </p>
      </div>
      <div className="col-span-12 flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 group-hover:text-paper/70 sm:col-span-3 sm:justify-end">
        {dom ? <span className="truncate">{dom}</span> : null}
        <PixelIcon icon="arrow" size={10} className="shrink-0 text-current" />
      </div>
    </a>
  )
}

// ─── Sections ───────────────────────────────────────────────────────────────

function Marquee() {
  const items = ['RESOURCES', 'INSTALL FIRST', 'BOOKMARK THIS PAGE', 'STUCK? START HERE', 'PYTHON · WEB · AI']
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden border-y border-paper/20 bg-dart text-paper">
      <div className="flex animate-[marquee_38s_linear_infinite] gap-12 whitespace-nowrap py-3 font-mono text-[11px] uppercase tracking-[0.25em]">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <PixelIcon icon="heart" size={10} className="text-sun/80" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}

function PreviewBar() {
  return (
    <div className="border-b border-hairline bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 sm:px-10">
      <div className="flex items-center justify-between gap-6">
        <span>Resources preview · /resources-mockup</span>
        <Link to="/" className="text-ink/50 underline-offset-4 hover:text-ink hover:underline">← exit preview</Link>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="border-b border-hairline px-6 py-16 sm:px-10 lg:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">№ 01 — Resources</p>
          <h1 className="mt-4 font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight">
            Bookmark this page. <em className="italic text-val">Use it weekly.</em>
          </h1>
        </div>
        <div className="lg:col-span-4 lg:border-l lg:border-hairline lg:pl-10">
          <p className="font-body text-base leading-relaxed text-ink/80 sm:text-lg">
            A working library of every link we point at in class. Install steps first, then docs, articles,
            videos, and tools — grouped by topic, tagged by format, searchable from the top.
          </p>
        </div>
      </div>
    </section>
  )
}

function StartHere() {
  return (
    <section id="start-here" className="border-b border-hairline px-6 py-16 sm:px-10 lg:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">Before week 1</p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Start here.</h2>
        </div>
        <p className="max-w-md font-body text-sm text-ink/70 sm:text-base">
          Install these three things before May 11. Skip everything else on the page until you have these working.
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {startHere.map((item, i) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between border-2 border-ink p-6 transition-colors hover:bg-val hover:text-paper sm:p-7"
            >
              <div>
                <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 group-hover:text-paper/70">
                  <span>Step {String(i + 1).padStart(2, '0')}</span>
                  <span aria-hidden className="h-px flex-1 bg-current opacity-30" />
                </p>
                <h3 className="mt-5 font-serif text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-ink/75 group-hover:text-paper/85 sm:text-base">
                  {item.desc}
                </p>
              </div>
              <p className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60 group-hover:text-paper">
                <span>Install →</span>
                <span className="truncate font-normal normal-case tracking-normal text-ink/40 group-hover:text-paper/70">
                  {domainOf(item.url)}
                </span>
              </p>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

function FilterBar({ query, setQuery, activeTags, toggleTag, clearAll, total, visible }) {
  return (
    <div className="sticky top-0 z-30 border-b border-hairline bg-paper/95 px-6 py-4 backdrop-blur sm:px-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <label className="relative flex-1 sm:max-w-md">
          <span className="sr-only">Search resources</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title or topic…"
            className="h-11 w-full border border-hairline bg-paper px-4 pr-10 font-mono text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
          />
          <span aria-hidden className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-ink/40">
            /
          </span>
        </label>

        <div className="flex flex-wrap items-center gap-2">
          {ALL_TAGS.map((tag) => {
            const active = activeTags.has(tag)
            const meta = TAG_META[tag]
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                aria-pressed={active}
                className={`inline-flex h-9 items-center px-3 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                  active
                    ? 'border border-ink bg-ink text-paper'
                    : 'border border-dart/40 text-ink/70 hover:border-ink hover:text-ink'
                }`}
                style={active ? undefined : { borderLeftColor: meta?.color, borderLeftWidth: '3px' }}
              >
                {meta?.label ?? tag}
              </button>
            )
          })}
          {(activeTags.size > 0 || query) ? (
            <button
              type="button"
              onClick={clearAll}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 underline-offset-4 hover:text-ink hover:underline"
            >
              Clear
            </button>
          ) : null}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 sm:ml-auto">
          {visible} / {total}
        </p>
      </div>
    </div>
  )
}

function CategorySection({ cat, items }) {
  if (!items.length) return null
  return (
    <section id={cat.id} className="border-b border-hairline px-6 py-14 sm:px-10 sm:py-20">
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">№ {cat.num}</p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">{cat.label}</h2>
        </div>
        <p className="max-w-xl font-body text-base leading-relaxed text-ink/80 lg:col-span-7 sm:text-lg">
          {cat.blurb}
        </p>
      </div>
      <div className="border-t border-hairline">
        {items.map((item) => (
          <ResourceRow key={item.url} item={item} />
        ))}
      </div>
    </section>
  )
}

function EmptyState({ onClear }) {
  return (
    <section className="border-b border-hairline px-6 py-24 text-center sm:px-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">Nothing matches</p>
      <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Try a different word — or <em className="italic text-val">clear filters.</em>
      </h2>
      <button
        type="button"
        onClick={onClear}
        className="mt-8 inline-flex h-11 items-center gap-3 bg-ink px-6 font-mono text-xs uppercase tracking-[0.25em] text-paper hover:bg-val"
      >
        <span>Clear all</span>
        <PixelIcon icon="arrow" size={10} className="text-current" />
      </button>
    </section>
  )
}

function CategoryNav({ visibleCategories }) {
  return (
    <nav
      aria-label="Resource categories"
      className="border-b border-hairline bg-paper px-6 py-3 sm:px-10"
    >
      <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em]">
        <li>
          <a href="#start-here" className="text-ink/60 hover:text-ink hover:underline underline-offset-4">Start here</a>
        </li>
        {CATEGORIES.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className={`underline-offset-4 hover:underline ${visibleCategories.has(c.id) ? 'text-ink' : 'text-ink/30 line-through'}`}
            >
              № {c.num} {c.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ResourcesMockup() {
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState(() => new Set())

  const toggleTag = (tag) =>
    setActiveTags((prev) => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })

  const clearAll = () => {
    setQuery('')
    setActiveTags(new Set())
  }

  const filteredByCategory = useMemo(() => {
    return CATEGORIES.map((cat) => {
      const all = resources[cat.id] ?? []
      const filtered = all.filter((item) => {
        if (activeTags.size && !activeTags.has(item.tag)) return false
        if (!matchesQuery(item, query)) return false
        return true
      })
      return { cat, items: filtered, total: all.length }
    })
  }, [query, activeTags])

  const total = filteredByCategory.reduce((acc, c) => acc + c.total, 0)
  const visible = filteredByCategory.reduce((acc, c) => acc + c.items.length, 0)
  const visibleCategories = new Set(filteredByCategory.filter((c) => c.items.length).map((c) => c.cat.id))

  const isFiltering = query.trim().length > 0 || activeTags.size > 0

  return (
    <div className="bg-paper font-body text-ink antialiased">
      <Marquee />
      <PreviewBar />
      <Hero />
      {!isFiltering ? <StartHere /> : null}
      <FilterBar
        query={query}
        setQuery={setQuery}
        activeTags={activeTags}
        toggleTag={toggleTag}
        clearAll={clearAll}
        total={total}
        visible={visible}
      />
      <CategoryNav visibleCategories={visibleCategories} />
      {visible === 0 ? (
        <EmptyState onClear={clearAll} />
      ) : (
        filteredByCategory.map(({ cat, items }) => (
          <CategorySection key={cat.id} cat={cat} items={items} />
        ))
      )}
    </div>
  )
}
