import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import heroAccent from '../assets/home-ornaments/2-1.svg'
import LazyInView from '../components/LazyInView.jsx'
import PixelIcon from '../components/PixelIcon.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { whatsappInviteUrl } from '../data/site.js'

/**
 * Home marketing palette (Tailwind: paper, ink, dart, val, sun, ube):
 * - White paper: page bg, type on dart (WhatsApp CTA block, marquee).
 * - Black ink: copy; rules use `border-hairline` (light gray).
 * - Dartmouth dart: marquee band, View roadmap fill, WhatsApp section bg.
 * - Valentine val: Free Course pill, italics, outcome checks, Thu pillar.
 * - Sunshade sun: marquee hearts, Wed pillar, WhatsApp CTA label accent + Join WhatsApp button.
 * - Bright Ube ube: Mon pillar bar + icon only.
 */
// ─── Home content (data inline; other pages use src/data/*) ────────────────

const HERO_PILLS = ['Free Course!', '8 weeks', 'Mon · Wed · Thu', '1 hour sessions']

const MARQUEE_ITEMS = ['FREE', 'CHIȘINĂU', 'MAY — JUL 2026', 'PYTHON · WEB · AI', 'TAUGHT IN PERSON', 'ALL LEVELS WELCOME']

const WHO = [
  {
    kicker: 'Beginners',
    icon: 'beginner',
    iconClass: 'hm-icon-ube',
    body: 'No prior coding required. We start from how a computer runs a program and build skills week by week.',
  },
  {
    kicker: 'Improvers',
    icon: 'improver',
    iconClass: 'hm-icon-sun',
    body: "Already tried a tutorial or two? You'll move faster, and we'll ask you to help others, which deepens your own understanding.",
  },
  {
    kicker: 'Builders',
    icon: 'builder',
    iconClass: 'hm-icon-val',
    body: "If you want a portfolio piece or a real project, we'll push you to ship something small but finished rather than something large and half-done.",
  },
]

const WEEKS = [
  { n: '01', phase: 'Foundations', title: 'Terminal & first lines of Python', range: 'May 11 – May 14' },
  { n: '02', phase: 'Foundations', title: 'Variables, loops, functions', range: 'May 18 – May 21' },
  { n: '03', phase: 'Python Projects', title: 'Data structures', range: 'May 25 – May 28' },
  { n: '04', phase: 'Python Projects', title: 'APIs & AI-powered scripts', range: 'Jun 01 – Jun 04' },
  { n: '05', phase: 'Web Development', title: 'HTML, CSS, the browser', range: 'Jun 08 – Jun 11' },
  { n: '06', phase: 'Web Development', title: 'JavaScript, GitHub, Vercel', range: 'Jun 15 – Jun 18' },
  { n: '07', phase: 'Final Project', title: 'Build your own thing', range: 'Jun 22 – Jun 25' },
  { n: '08', phase: 'Final Project', title: 'Demo Day — Jul 01', range: 'Jun 29 – Jul 01' },
]

/** Pillar top bar + icon (Bright Ube = Mon bar only; Sunshade = Wed; Valentine = Thu). */
const PILLARS = [
  {
    kicker: 'Mon',
    label: 'Workshop',
    body: 'New concepts, live demos, and concise explanations. Then you practice on your laptop with support in the room.',
    icon: 'terminal',
  },
  {
    kicker: 'Wed',
    label: 'AI',
    body: "Hands-on time with tools like ChatGPT and Claude: what they're good at, where they fail, and how to use them responsibly in real workflows.",
    icon: 'sparkle',
  },
  {
    kicker: 'Thu',
    label: 'Build',
    body: "Guided project work in pairs, with mentors nearby. The goal is to leave with something working, even if it's small.",
    icon: 'rocket',
  },
]

const OUTCOMES = [
  { title: 'Python you can run', body: 'Variables, logic, functions, and small scripts on your own machine. You write and run code, not only read about it.' },
  { title: 'A simple website', body: 'Enough HTML, CSS, and JavaScript to publish a personal site or a small interactive page and share it online.' },
  { title: 'AI tools, used carefully', body: 'How to prompt well, verify outputs, and know when to ignore the model and write your own code. We practice this every Wednesday.' },
  { title: 'Git and deploy', body: 'A practical Git and GitHub workflow to save your work, plus deploying a project with a host such as Vercel.' },
  { title: 'A final project you choose', body: 'Something you scope to finish: a site, a tool, or a small app you can present on Demo Day.' },
  { title: 'Present your work', body: 'On Demo Day you explain what you built, what broke along the way, and what you would improve next.' },
]

const VALUES = [
  { title: 'Pair up, level up', body: 'We learn in pairs and small groups so beginners and more experienced students both gain depth. Teaching someone else is one of the fastest ways to learn.' },
  { title: 'Use AI at full strength', body: 'You learn where AI genuinely speeds you up (clear prompts, drafts, and repetitive work) and where you still need to verify, steer, and write code yourself.' },
  { title: 'Finish something that runs', body: 'A modest project that compiles and ships teaches more than an ambitious idea stuck in the editor. We help you scope small, reach "it works," then iterate.' },
]

function MarqueeSegment({ copyId }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 sm:gap-12 sm:pr-12" aria-hidden={copyId === 'b'}>
      {MARQUEE_ITEMS.map((t, i) => (
        <Fragment key={`${copyId}-${t}-${i}`}>
          {i > 0 ? <PixelIcon icon="heart" size={10} className="hm-marquee-heart" /> : null}
          <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em]">{t}</span>
        </Fragment>
      ))}
    </div>
  )
}

function Marquee() {
  return (
    <ScrollReveal rootMargin="0px 0px 32px 0px" threshold={0} hiddenTranslate="translate-y-3">
      <div className="hm-marquee">
        <div className="hm-marquee-window">
          <div className="hm-marquee-track py-3">
            <MarqueeSegment copyId="a" />
            <MarqueeSegment copyId="b" />
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

function Hero() {
  return (
    <div className="relative text-left">
      <ScrollReveal delayMs={140} hiddenTranslate="translate-y-4" className="pointer-events-none absolute inset-0">
        <img
          src={heroAccent}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="pointer-events-none absolute right-20 top-10 hidden w-20 select-none opacity-100 md:block xl:right-24 xl:top-80 xl:w-28"
        />
      </ScrollReveal>
      <ScrollReveal rootMargin="0px 0px 12% 0px">
        <div className="flex flex-wrap gap-2">
          {HERO_PILLS.map((pill, i) => (
            <span
              key={pill}
              className={`inline-flex min-h-9 items-center border px-4 font-mono text-[11px] uppercase tracking-[0.2em] ${
                i === 0 ? 'hm-pill-free' : 'border-hairline text-ink'
              }`}
            >
              {pill}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-6" delayMs={90} rootMargin="0px 0px 12% 0px">
        <h1 className="font-serif text-[clamp(3rem,10vw,9rem)] font-medium italic leading-[0.92] tracking-[-0.02em] text-ink">
          <span className="block sm:whitespace-nowrap">A coding course</span>
          <span className="block">
            <span className="hm-val">worth</span> joining!
          </span>
        </h1>
      </ScrollReveal>

      <ScrollReveal className="mt-12" delayMs={180} rootMargin="0px 0px 12% 0px">
        <p className="max-w-3xl text-lg leading-relaxed text-ink/80">
          CodeMoldova is a free coding course in Chișinău, Moldova! May through July 2026. Learn Python, web development, and how to
          use AI alongside mentors and classmates. All experience levels are welcome. Curiosity and desire to learn matter
          most!
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-10" delayMs={260} rootMargin="0px 0px 12% 0px">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/roadmap"
            className="hm-btn-dart inline-flex min-h-12 items-center gap-3 px-7 font-mono text-xs uppercase tracking-[0.25em]"
          >
            <span>View roadmap</span>
            <PixelIcon icon="arrow" size={12} className="text-current" />
          </Link>
          <a
            href={whatsappInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hm-hero-join-slack inline-flex min-h-12 items-center border px-7 font-mono text-xs uppercase tracking-[0.25em]"
          >
            <span>Join WhatsApp</span>
          </a>
        </div>
      </ScrollReveal>
    </div>
  )
}

function About() {
  return (
    <section className="grid grid-cols-1 gap-10 border-b border-hairline py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
      <ScrollReveal className="lg:col-span-5">
        <h2 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">What is this course?</h2>
      </ScrollReveal>
      <ScrollReveal className="space-y-6 lg:col-span-7" delayMs={100}>
        <p className="text-lg leading-relaxed text-ink/85">
          Eight weeks, three sessions a week, one hour each, from May through July. The path moves from Python and the
          terminal into small projects, then the web stack and deployment, and closes with a project you choose yourself.
        </p>
        <p className="text-lg leading-relaxed text-ink/85">
          The course is <strong className="hm-val font-bold">free</strong> and open to anyone motivated enough to join. We
          deliberately mix people who have never coded with people who already know a language. Pairing and group work help
          everyone move faster.
        </p>
      </ScrollReveal>
    </section>
  )
}

function WhoCanJoin() {
  return (
    <section id="who" className="scroll-mt-28 border-b border-hairline py-20 lg:py-24">
      <ScrollReveal className="mb-12 max-w-2xl">
        <h2 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">Who is this for?</h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/80">
          Recent graduates, career switchers, and hobbyists are all welcome. If you’re curious how software works and willing
          to try, you belong here. You don’t need competition-level math or an expensive laptop — you need consistency and
          the habit of searching error messages without embarrassment. Every developer does that.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 border-t border-hairline sm:grid-cols-3">
        {WHO.map((w, i) => (
          <ScrollReveal
            key={w.kicker}
            delayMs={70 + i * 120}
            hiddenTranslate="translate-y-6"
            className={`px-2 py-10 sm:px-6 sm:py-12 ${i < WHO.length - 1 ? 'sm:border-r sm:border-hairline' : ''} ${
              i > 0 ? 'border-t border-hairline sm:border-t-0' : ''
            } `}
          >
            <h3 className="flex items-center gap-3 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              <PixelIcon icon={w.icon} size={16} className={w.iconClass} />
              {w.kicker}
            </h3>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/80">{w.body}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section id="rhythm" className="scroll-mt-28 border-b border-hairline">
      <ScrollReveal className="border-b border-hairline py-12">
        <h2 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">The weekly rhythm</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {PILLARS.map((p, i) => (
          <ScrollReveal
            key={p.label}
            delayMs={80 + i * 130}
            hiddenTranslate="translate-y-6"
            className={`relative py-14 sm:px-4 sm:py-20 ${i < PILLARS.length - 1 ? 'sm:border-r sm:border-hairline' : ''} ${
              i > 0 ? 'border-t border-hairline sm:border-t-0' : ''
            } `}
          >
            <span
              aria-hidden
              className={
                p.kicker === 'Mon'
                  ? 'hm-pillar-ube absolute inset-x-0 top-0 h-2'
                  : p.kicker === 'Wed'
                    ? 'hm-pillar-sun absolute inset-x-0 top-0 h-2'
                    : 'hm-pillar-val absolute inset-x-0 top-0 h-2'
              }
            />
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">
              <PixelIcon
                icon={p.icon}
                size={12}
                className={
                  p.kicker === 'Mon' ? 'hm-icon-ube' : p.kicker === 'Wed' ? 'hm-icon-sun' : 'hm-icon-val'
                }
              />
              <span>{p.kicker}</span>
            </p>
            <h3 className="mt-4 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">{p.label}</h3>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/80">{p.body}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function Weeks() {
  return (
    <section id="weeks" className="scroll-mt-28 border-b border-hairline py-20 lg:py-28">
      <ScrollReveal className="flex items-end justify-between gap-6 border-b border-hairline pb-8">
        <div>
          <h2 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">The Roadmap</h2>
        </div>
        <p className="hidden font-mono text-xs uppercase tracking-[0.25em] text-ink/60 sm:block">May 11 — Jul 01</p>
      </ScrollReveal>
      <ol>
        {WEEKS.map((w, i) => (
          <li key={w.n} className="border-b border-hairline">
            <ScrollReveal
              delayMs={40 + i * 55}
              hiddenTranslate="translate-y-4"
              threshold={0.08}
              className="hm-week-row group grid max-w-full grid-cols-12 grid-rows-3 items-start justify-items-start gap-x-0 gap-y-1 py-7 transition-colors sm:grid-rows-1 sm:items-center sm:gap-y-0 sm:gap-x-8 sm:py-10"
            >
              <span className="col-start-1 row-start-1 row-span-3 self-start font-serif text-5xl font-medium leading-none tracking-tight text-ink sm:col-span-2 sm:row-span-1 sm:leading-none sm:tabular-nums sm:text-7xl">
                {w.n}
              </span>
              <span className="col-start-3 col-span-10 row-start-1 min-w-0 font-mono text-[11px] uppercase leading-snug tracking-[0.25em] text-ink/60 sm:col-start-3 sm:col-span-3 sm:row-start-1 sm:leading-none">
                {w.phase}
              </span>
              <span className="col-start-3 col-span-10 row-start-2 min-w-0 font-serif text-xl leading-tight tracking-tight sm:col-start-6 sm:col-span-5 sm:row-start-1 sm:text-3xl">
                {w.title}
              </span>
              <span className="hm-week-muted col-start-3 col-span-10 row-start-3 min-w-0 overflow-x-auto text-right font-mono text-xs uppercase leading-snug tracking-[0.2em] text-ink/60 sm:col-start-11 sm:col-span-2 sm:row-start-1 sm:w-full sm:justify-self-stretch whitespace-nowrap">
                {w.range}
              </span>
            </ScrollReveal>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-28 border-b border-hairline py-20 lg:py-28">
      <ScrollReveal className="mb-12 max-w-3xl">
        <h2 className="font-serif text-[clamp(1.85rem,4vw,2.5rem)] font-medium leading-tight text-ink sm:text-4xl">
          What you&apos;ll be able to do <em className="hm-val italic">by the end.</em>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          This isn&apos;t about a certificate that sits in a drawer. It&apos;s about{' '}
          <em className="hm-val italic">concrete skills and something real you shipped</em>. By Demo Day, these are the
          outcomes we&apos;re aiming for:
        </p>
      </ScrollReveal>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        {OUTCOMES.map((o, i) => (
          <li
            key={o.title}
            className={`border-t border-hairline ${i % 2 === 0 ? 'sm:border-r sm:border-hairline' : ''} `}
          >
            <ScrollReveal
              delayMs={50 + i * 75}
              hiddenTranslate="translate-y-5"
              className="flex gap-5 px-2 py-7 sm:px-6 sm:py-9"
            >
              <span className="hm-check mt-1 shrink-0">
                <PixelIcon icon="check" size={20} className="text-current" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-medium tracking-tight text-ink">{o.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/80">{o.body}</p>
              </div>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

function HowWeLearn() {
  return (
    <section className="border-b border-hairline py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <ScrollReveal className="lg:col-span-5">
          <h2 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">How we learn</h2>
        </ScrollReveal>
        <div className="lg:col-span-7">
          <ul className="space-y-10">
            {VALUES.map((v, i) => (
              <li key={v.title}>
                <ScrollReveal
                  delayMs={90 + i * 140}
                  hiddenTranslate="translate-y-6"
                  className={`hm-how-rail pl-6 ${
                    i === 0 ? 'hm-how-rail--val' : i === 1 ? 'hm-how-rail--ube' : 'hm-how-rail--sun'
                  }`}
                >
                  <h3 className="font-serif text-3xl font-medium tracking-tight text-ink">{v.title}</h3>
                  <p className="mt-3 max-w-prose text-base leading-relaxed text-ink/80">{v.body}</p>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function WhatsAppCTA() {
  return (
    <section
      id="join"
      className="hm-slack-band relative left-1/2 w-screen max-w-none -translate-x-1/2 scroll-mt-28 py-24 lg:py-32"
    >
      <div className="layout-shell max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1] tracking-tight">
              Ready to learn <em className="hm-slack-accent italic">how</em>
              <br />
              <em className="hm-slack-accent italic">to code?</em>
            </h2>
            <p className="hm-slack-body mt-8 max-w-xl text-lg leading-relaxed">
              Join our WhatsApp group today! Meet other people learning to code, ask questions, share progress, and work
              through problems.
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex items-end lg:col-span-4" delayMs={120} hiddenTranslate="translate-y-6">
            <a
              href={whatsappInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hm-btn-sun inline-flex min-h-14 w-full items-center justify-center gap-3 px-8 font-mono text-xs uppercase tracking-[0.3em] sm:w-auto"
            >
              <span>Join WhatsApp</span>
              <PixelIcon icon="arrow" size={12} className="text-current" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="hm-page min-h-full flex-1 font-body antialiased">
      <div className="hm-hero-fold flex min-h-0 flex-col">
        <div className="shrink-0">
          <Marquee />
        </div>
        <section
          id="course"
          className="scroll-mt-28 flex min-h-0 flex-1 flex-col"
        >
          <div className="layout-shell flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-center border-b border-hairline py-10 sm:py-14 lg:py-16">
            <div className="w-full min-w-0 text-left">
              <Hero />
            </div>
          </div>
        </section>
      </div>
      <div className="layout-shell max-w-6xl">
        <About />
        <LazyInView placeholderClassName="min-h-[18rem] sm:min-h-[20rem]">
          <WhoCanJoin />
        </LazyInView>
        <LazyInView placeholderClassName="min-h-[28rem] sm:min-h-[32rem]">
          <Weeks />
        </LazyInView>
        <LazyInView placeholderClassName="min-h-[22rem] sm:min-h-[24rem]">
          <Pillars />
        </LazyInView>
        <LazyInView placeholderClassName="min-h-[36rem] sm:min-h-[40rem]">
          <Outcomes />
        </LazyInView>
        <LazyInView placeholderClassName="min-h-[24rem] sm:min-h-[28rem]">
          <HowWeLearn />
        </LazyInView>
      </div>
      <LazyInView placeholderClassName="min-h-[20rem] lg:min-h-[24rem]">
        <WhatsAppCTA />
      </LazyInView>
    </div>
  )
}
