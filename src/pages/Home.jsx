import { Link } from 'react-router-dom'
import CodeVibeBackground from '../components/CodeVibeBackground.jsx'
import HeroTitle from '../components/HeroTitle.jsx'
import Reveal from '../components/Reveal.jsx'

const outcomes = [
  {
    title: 'Write real Python',
    body: 'Variables, logic, functions, and small scripts you can run on your own machine — not just theory.',
  },
  {
    title: 'Build for the web',
    body: 'HTML, CSS, and JavaScript enough to ship a personal site or simple interactive page and put it online.',
  },
  {
    title: 'Use AI like a developer',
    body: 'Prompt well, verify outputs, and know when to ignore the model — Wednesday is built for this.',
  },
  {
    title: 'Use Git & deploy',
    body: 'Enough Git and GitHub workflow to save your work, and deploy a project with a tool like Vercel.',
  },
  {
    title: 'Ship a final project',
    body: 'Something you chose, scoped to finish, and can show on Demo Day — a site, a tool, or a small app.',
  },
  {
    title: 'Present with confidence',
    body: 'Demo Day is the finish line: you’ll explain what you built, what broke, and what you’d do next.',
  },
]

const values = [
  {
    title: 'Shipping beats perfection',
    body: 'A small finished project beats a big idea that never runs. We optimize for “it works.”',
  },
  {
    title: 'AI is a tool, not a crutch',
    body: 'We use AI openly — and we learn to check it, steer it, and write our own code when it matters.',
  },
  {
    title: 'Build in public',
    body: 'Pair beginners with people who’ve coded before; both sides learn more than working alone.',
  },
]

function ScrollCue() {
  return (
    <a
      href="#home-more"
      className="group flex flex-col items-center pb-2 pt-4 text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mon"
      aria-label="Scroll to learn more about the course"
    >
      <span className="inline-flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-80 group-hover:opacity-100">
          Scroll to learn more
        </span>
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-arrow-bob text-mon will-change-transform"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col pb-12 sm:pb-16">
      <section className="relative flex min-h-[calc(100dvh-5.5rem)] flex-col">
        <CodeVibeBackground />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="hero-top-glow absolute -inset-[12%] will-change-transform motion-safe:animate-hero-glow-drift motion-reduce:animate-none"
            aria-hidden
          />
        </div>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center layout-gutter py-12 text-center sm:py-16">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center sm:max-w-4xl">
            <div className="hero-in hero-in-1 mb-8 flex max-w-[22rem] flex-wrap justify-center gap-2 sm:mb-10 sm:max-w-none sm:gap-2.5">
              {['Free', '8 weeks', 'Mon · Wed · Thu', '1 hr/session'].map((pill) => (
                <span
                  key={pill}
                  className={
                    pill === 'Free'
                      ? 'rounded-pill border border-wed/35 bg-wed/10 px-3 py-1.5 font-mono text-[11px] text-wed sm:text-xs'
                      : 'rounded-pill border border-white/[0.14] bg-surface px-3 py-1.5 font-mono text-[11px] text-muted sm:text-xs'
                  }
                >
                  {pill}
                </span>
              ))}
            </div>
            <HeroTitle className="hero-in hero-in-2 mb-6 w-full max-w-[22rem] font-display text-[clamp(1.75rem,6.5vw,5rem)] font-extrabold leading-[1.08] tracking-tight sm:mb-8 sm:max-w-none sm:text-[clamp(2.25rem,7vw,5rem)] sm:leading-none md:select-none" />
            <p className="hero-in hero-in-3 w-full text-pretty px-1 text-[16px] font-light leading-relaxed text-muted sm:text-[17px]">
              A free, hands-on course in Moldova, running May through July 2026. Learn by building: Python, the web, and AI tools used the right way. Beginners and improvers are both welcome; you’ll work alongside mentors and classmates, not alone at a screen. No prerequisites, just curiosity and consistency.
            </p>
            <div className="hero-in hero-in-4 mt-10 w-full sm:mt-12">
              <span className="relative inline-flex">
                <span
                  className="pointer-events-none absolute -inset-x-4 -inset-y-2 rounded-pill bg-mon/25 blur-xl animate-glow-pulse"
                  aria-hidden
                />
                <Link
                  to="/roadmap"
                  className="relative z-10 inline-flex min-h-12 min-w-[12rem] items-center justify-center rounded-pill border border-mon/45 bg-mon/15 px-8 font-mono text-sm font-medium text-primary transition-colors hover:border-mon/65 hover:bg-mon/25"
                >
                  View Roadmap
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="hero-in hero-in-5 relative z-10 flex justify-center pb-[max(1rem,env(safe-area-inset-bottom))]">
          <ScrollCue />
        </div>
      </section>

      <section
        id="home-more"
        className="layout-section scroll-mt-24 mt-4 border-t border-white/[0.08] sm:mt-4"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal className="overflow-hidden rounded-card border border-white/[0.08] transition-colors duration-500 hover:border-white/[0.12]">
            <img
              src="/about/coding.jpg"
              alt="Laptop on a desk with code on screen, representing hands-on programming practice"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={70}>
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">What this is</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted">
              Eight weeks, three sessions a week, one hour each — May through July. You’ll follow a clear path:
              foundations in Python and the terminal, then small projects, then the web stack and deployment, and
              finally a project you pick yourself. Everything is designed so you’re building every week, not only
              listening.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted">
              The course is <span className="text-primary">free</span> and open to anyone motivated enough to show up.
              We mix people who have never coded with people who already know a language — we pair and group so
              everyone levels up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-surface/40 py-12 sm:py-16">
        <div className="layout-shell">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold text-primary sm:text-3xl">Who it’s for</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-pretty leading-relaxed text-muted">
            Recent graduates, career switchers, hobbyists — if you’re curious about how software works and you’re willing
            to try, you belong here. You don’t need math olympiad scores or a fancy laptop; you need consistency and a
            willingness to google error messages without shame.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { k: 'Beginners', v: 'No prior coding required. We start from how computers run programs and build up.' },
              { k: 'Improvers', v: 'Already tried a tutorial or two? You’ll move faster and help others — we want that.' },
              { k: 'Builders', v: 'If your goal is a portfolio piece or a real project, we’ll push you to ship something small but finished.' },
            ].map((item, i) => (
              <Reveal
                key={item.k}
                delay={i * 55}
                className="rounded-card border border-white/[0.08] bg-bg/80 p-5 transition duration-300 ease-out hover:-translate-y-px hover:border-white/[0.12]"
              >
                <div className="font-mono text-[11px] uppercase tracking-wider text-mon">{item.k}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="layout-section">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">The weekly rhythm</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mon" />
                <div>
                  <span className="font-mono text-sm text-mon">Monday · Lecture</span>
                  <p className="mt-1 text-sm leading-relaxed text-muted">New concepts, live demos, short explanations — then you practice.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-wed" />
                <div>
                  <span className="font-mono text-sm text-wed">Wednesday · AI</span>
                  <p className="mt-1 text-sm leading-relaxed text-muted">Explore ChatGPT, Claude, and friends — what they’re good at, where they fail, and how to use them well.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-thu" />
                <div>
                  <span className="font-mono text-sm text-thu">Thursday · Build</span>
                  <p className="mt-1 text-sm leading-relaxed text-muted">Hands-on projects, pairs, and help — we aim to ship something every week.</p>
                </div>
              </li>
            </ul>
          </Reveal>
          <Reveal className="order-1 overflow-hidden rounded-card border border-white/[0.08] transition-colors duration-500 hover:border-white/[0.12] lg:order-2" delay={80}>
            <img
              src="/about/collaboration.jpg"
              alt="Team collaborating around a table with a laptop"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(79,124,255,0.06)_0%,transparent_45%)] py-12 sm:py-16">
        <div className="layout-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-mon">Outcomes</p>
            <h2 className="mt-2 font-display text-[clamp(1.65rem,4vw,2.25rem)] font-extrabold text-primary">
              What you’ll have by the end of the course
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted sm:text-base">
              Not a certificate that sits in a drawer — <span className="text-primary/95">concrete skills and something real you shipped</span>.
              Here’s what we’re aiming for when you walk out of Demo Day:
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <Reveal className="overflow-hidden rounded-card border border-mon/20 bg-surface/60 transition duration-500 hover:border-mon/30 lg:max-h-[min(100%,420px)]">
              <img
                src="/about/focus.jpg"
                alt="Person working with focus at a computer in a bright office"
                className="h-full min-h-[220px] w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <ul className="grid gap-3 sm:grid-cols-1 sm:gap-4">
              {outcomes.map((item, i) => (
                <Reveal
                  key={item.title}
                  as="li"
                  delay={i * 40}
                  className="flex gap-3 rounded-card border border-white/[0.08] bg-surface/80 p-4 transition duration-300 ease-out hover:-translate-y-px hover:border-white/[0.12] sm:gap-4 sm:p-5"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-mon" aria-hidden>
                    ✓
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-primary sm:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="layout-section">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal className="overflow-hidden rounded-card border border-white/[0.08] transition duration-500 hover:border-white/[0.12] lg:order-2">
            <img
              src="/about/team.jpg"
              alt="Team meeting and discussion in a modern workspace"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="lg:order-1" delay={60}>
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">How we teach</h2>
            <div className="mt-6 space-y-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 45} className="border-l-2 border-white/[0.12] pl-4">
                  <h3 className="font-display text-base font-semibold text-primary">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="layout-shell pb-12 pt-8 sm:pb-16 sm:pt-10">
        <Reveal className="rounded-card border border-white/[0.1] bg-surface2/50 p-6 text-center transition duration-300 hover:border-white/[0.14] sm:p-8">
          <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">Ready to join the cohort?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted sm:text-base">
            Check dates on the calendar and explore the week-by-week roadmap — every session links to its lesson when
            the content is live.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/calendar"
              className="inline-flex min-h-11 items-center justify-center rounded-pill bg-mon px-6 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Open calendar
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex min-h-11 items-center justify-center rounded-pill border border-white/[0.14] px-6 font-mono text-sm text-muted transition-colors hover:text-primary"
            >
              View roadmap
            </Link>
          </div>
        </Reveal>
        <p className="mt-8 text-center font-mono text-[10px] text-muted/80">
          Photos on this page are from{' '}
          <a href="https://unsplash.com" className="text-muted underline underline-offset-2 hover:text-primary">
            Unsplash
          </a>{' '}
          (community contributors).
        </p>
      </section>
    </div>
  )
}
