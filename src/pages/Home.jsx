import { Link } from 'react-router-dom'
import CodeVibeBackground from '../components/CodeVibeBackground.jsx'
import HeroTitle from '../components/HeroTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { homePhotos } from '../data/homePhotos.js'
import { slackInviteUrl } from '../data/site.js'

const outcomes = [
  {
    title: 'Python you can run',
    body: 'Variables, logic, functions, and small scripts on your own machine. You write and run code, not only read about it.',
  },
  {
    title: 'A simple website',
    body: 'Enough HTML, CSS, and JavaScript to publish a personal site or a small interactive page and share it online.',
  },
  {
    title: 'AI tools, used carefully',
    body: 'How to prompt well, verify outputs, and know when to ignore the model and write your own code. We practice this every Wednesday.',
  },
  {
    title: 'Git and deploy',
    body: 'A practical Git and GitHub workflow to save your work, plus deploying a project with a host such as Vercel.',
  },
  {
    title: 'A final project you choose',
    body: 'Something you scope to finish: a site, a tool, or a small app you can present on Demo Day.',
  },
  {
    title: 'Present your work',
    body: 'On Demo Day you explain what you built, what broke along the way, and what you would improve next.',
  },
]

const values = [
  {
    title: 'Pair up, level up',
    body: 'We learn in pairs and small groups so beginners and more experienced students both gain depth. Teaching someone else is one of the fastest ways to learn.',
  },
  {
    title: 'Use AI at full strength',
    body: 'You learn where AI genuinely speeds you up (clear prompts, drafts, and repetitive work) and where you still need to verify, steer, and write code yourself.',
  },
  {
    title: 'Finish something that runs',
    body: 'A modest project that compiles and ships teaches more than an ambitious idea stuck in the editor. We help you scope small, reach “it works,” then iterate.',
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
        <span className="font-mono text-[11px] uppercase tracking-widest opacity-80 group-hover:opacity-100">
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
    <div className="flex min-h-full flex-1 flex-col pb-16 sm:pb-20">
      <section className="relative flex min-h-[calc(100dvh-5.5rem)] flex-col">
        <CodeVibeBackground />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="hero-top-glow absolute -inset-[12%] will-change-transform motion-safe:animate-hero-glow-drift motion-reduce:animate-none"
            aria-hidden
          />
        </div>
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center layout-gutter py-14 text-center sm:py-20">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center sm:max-w-4xl">
            <div className="hero-in hero-in-1 mb-8 flex max-w-[22rem] flex-wrap justify-center gap-2 sm:mb-10 sm:max-w-none sm:gap-2.5">
              {['Free Course!', '8 weeks','Mon · Wed · Thu', '1 hour/session'].map((pill) => (
                <span
                  key={pill}
                  className={
                    pill === 'Free Course!'
                      ? 'rounded-pill border border-wed/35 bg-wed/10 px-3.5 py-2 font-mono text-xs text-wed sm:text-sm'
                      : 'rounded-pill border border-white/[0.14] bg-surface px-3.5 py-2 font-mono text-xs text-muted sm:text-sm'
                  }
                >
                  {pill}
                </span>
              ))}
            </div>
            <HeroTitle className="hero-in hero-in-2 mb-6 w-full max-w-[22rem] font-display text-[clamp(1.75rem,6.5vw,5rem)] font-extrabold leading-[1.08] tracking-tight sm:mb-8 sm:max-w-none sm:text-[clamp(2.25rem,7vw,5rem)] sm:leading-none md:select-none" />
            <p className="hero-in hero-in-3 mx-auto w-full max-w-2xl text-pretty px-1 text-[17px] font-light leading-[1.65] text-muted sm:text-[18px]">
              A free coding course in Chișinău, Moldova! May through July 2026. Learn Python, web development, and how to use AI alongside mentors
              and classmates. All experience levels are welcome. Curiosity and desire to learn matter most!
            </p>
            <div className="hero-in hero-in-4 mt-10 w-full sm:mt-12">
              <span className="relative inline-flex">
                <span
                  className="pointer-events-none absolute -inset-x-4 -inset-y-2 rounded-pill bg-mon/25 blur-xl animate-glow-pulse"
                  aria-hidden
                />
                <Link
                  to="/roadmap"
                  className="relative z-10 inline-flex min-h-12 min-w-[12rem] items-center justify-center rounded-pill border border-mon/45 bg-mon/15 px-8 font-mono text-base font-medium text-primary transition-colors hover:border-mon/65 hover:bg-mon/25"
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
        className="layout-section scroll-mt-24 mt-6 border-t border-white/[0.08] sm:mt-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="overflow-hidden rounded-card border border-white/[0.08] transition-colors duration-500 hover:border-white/[0.12]">
            <img
              src={homePhotos.coding}
              alt="Two people reviewing code written on a board together"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={70}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">What is this course?</h2>
            <p className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-muted">
              Eight weeks, three sessions a week, one hour each, from May through July. The path moves from Python and the
              terminal into small projects, then the web stack and deployment, and closes with a project you choose
              yourself. The rhythm is simple: every week you ship something small, not only absorb theory.
            </p>
            <p className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-muted">
              The course is <span className="text-primary">free</span> and open to anyone motivated enough to attend. We
              deliberately mix people who have never coded with people who already know a language. Pairing and group
              work help everyone move faster.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-surface/40 py-16 sm:py-20">
        <div className="layout-shell">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">Who can join?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-pretty text-base leading-relaxed text-muted">
              Recent graduates, career switchers, and hobbyists are welcome. If you’re curious how software works and willing to try,
              you belong here. You don’t need competition-level math or an expensive laptop. You need consistency and the
              habit of searching error messages without embarrassment. Every developer does that.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-4">
            {[
              {
                k: 'Beginners',
                v: 'No prior coding required. We start from how a computer runs a program and build skills week by week.',
              },
              {
                k: 'Improvers',
                v: 'Already tried a tutorial or two? You’ll move faster, and we’ll ask you to help others, which deepens your own understanding.',
              },
              {
                k: 'Builders',
                v: 'If you want a portfolio piece or a real project, we’ll push you to ship something small but finished rather than something large and half-done.',
              },
            ].map((item, i) => (
              <Reveal
                key={item.k}
                delay={i * 55}
                className="rounded-card border border-white/[0.08] bg-bg/80 p-6 transition duration-300 ease-out hover:-translate-y-px hover:border-white/[0.12] sm:p-7"
              >
                <div className="font-mono text-xs uppercase tracking-wider text-mon">{item.k}</div>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="layout-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">The weekly rhythm</h2>
            <ul className="mt-8 max-w-prose space-y-6">
              <li className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-mon" />
                <div>
                  <span className="font-mono text-base text-mon">Monday, Lecture</span>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    New concepts, live demos, and concise explanations. Then you practice on your laptop with support in
                    the room.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-wed" />
                <div>
                  <span className="font-mono text-base text-wed">Wednesday, AI</span>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    Hands-on time with tools like ChatGPT and Claude: what they’re good at, where they fail, and how to use
                    them responsibly in real workflows.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-thu" />
                <div>
                  <span className="font-mono text-base text-thu">Thursday, Build</span>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    Guided project work in pairs, with mentors nearby. The goal is to leave with something working, even
                    if it’s small.
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>
          <Reveal className="order-1 overflow-hidden rounded-card border border-white/[0.08] transition-colors duration-500 hover:border-white/[0.12] lg:order-2" delay={80}>
            <img
              src={homePhotos.collaboration}
              alt="Two learners pair programming together, reviewing code on a laptop"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(79,124,255,0.06)_0%,transparent_45%)] py-16 sm:py-20">
        <div className="layout-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-mon">Outcomes</p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.5rem)] font-extrabold leading-tight text-primary">
              What you’ll be able to do by the end
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
              This isn’t about a certificate that sits in a drawer. It’s about{' '}
              <span className="text-primary/95">concrete skills and something real you shipped</span>. By Demo Day, these
              are the outcomes we’re aiming for:
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <Reveal className="hidden overflow-hidden rounded-card border border-mon/20 bg-surface/60 transition duration-500 hover:border-mon/30 lg:block lg:h-full">
              <img
                src={homePhotos.outcomes}
                alt="Man in a black shirt sitting at a computer, focused on the screen"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-1 sm:gap-4">
              {outcomes.map((item, i) => (
                <Reveal
                  key={item.title}
                  as="li"
                  delay={i * 40}
                  className="flex gap-4 rounded-card border border-white/[0.08] bg-surface/80 p-5 transition duration-300 ease-out hover:-translate-y-px hover:border-white/[0.12] sm:p-6"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-lg text-mon" aria-hidden>
                    ✓
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="layout-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="overflow-hidden rounded-card border border-white/[0.08] transition duration-500 hover:border-white/[0.12] lg:order-2">
            <img
              src={homePhotos.team}
              alt="Students sitting in a classroom facing the front of the room"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="lg:order-1" delay={60}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">How we learn</h2>
            <div className="mt-8 max-w-prose space-y-6">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 45} className="border-l-2 border-white/[0.12] pl-5">
                  <h3 className="font-display text-lg font-semibold text-primary">{v.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="layout-shell pb-16 pt-12 sm:pb-20 sm:pt-14">
        <Reveal className="rounded-card border border-white/[0.1] bg-surface2/50 p-8 text-center transition duration-300 hover:border-white/[0.14] sm:p-10">
          <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Ready to learn how to code?</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted">
            Join our Slack channel today! Meet other people learning to code, ask questions, share progress, and work through problems.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={slackInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-pill bg-mon px-7 font-mono text-base font-medium text-white transition-opacity hover:opacity-90"
            >
              Join Slack
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
