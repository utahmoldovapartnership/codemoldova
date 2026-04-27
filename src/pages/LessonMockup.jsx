// Editorial Lesson mockup — /lesson-mockup. Preview only; production lessons use `Lesson.jsx`.
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LessonArtifacts,
  LessonChallengesAccordion,
  LessonHero,
  LessonHomework,
  LessonLabBand,
  LessonMainPoints,
  LessonMarquee,
  LessonMistakes,
  LessonPrevNext,
  LessonResources,
  LessonSectionGoal,
  LessonVocab,
} from '../components/lesson/LessonPageSections.jsx'

// ─── Sample data (same shape as the production mockup example) ───────────────
const SAMPLE = {
  dayKey: 'mon',
  date: 'May 11, 2026',
  sessionLabel: 'W1D1',
  title: 'Your first lines of Python',
  goal: 'By the end of today you can run Python on your computer and use variables to hold values.',
  mainPoints: [
    'A variable is a name that holds a value — think of it as a labeled box.',
    'Python runs top to bottom, one line at a time.',
    "print() shows a value on the screen — it's how we see what our program is doing.",
    'Strings go in quotes, numbers do not.',
  ],
  artifacts: [
    { label: 'Slides', href: 'https://example.com/slides', ready: true },
    { label: 'Recording', href: '', ready: false, hint: 'Posted after class' },
    { label: 'Code from class', href: 'https://github.com/example', ready: true },
  ],
  lab: {
    title: 'Make Python say hello',
    duration: '25 min',
    intro: "We'll write 5 lines that introduce yourself to the computer. Type every line yourself — don't copy-paste.",
    steps: [
      'Open your terminal and type python3, then press Enter.',
      "Type a variable: name = 'Maria' (use your own name, keep the quotes).",
      'On the next line type: age = 19 (no quotes for numbers).',
      "Type: print('Hello, ' + name)",
      "Type: print(name, 'is', age, 'years old')",
    ],
    example: {
      label: 'What you should see',
      code: `>>> name = 'Maria'
>>> age = 19
>>> print('Hello, ' + name)
Hello, Maria
>>> print(name, 'is', age, 'years old')
Maria is 19 years old`,
    },
  },
  challenges: [
    { tier: 'B', title: 'Base', desc: 'Build a greeter that asks for the user name and prints a hello.' },
    { tier: 'M', title: 'Medium', desc: 'Add age input and print a sentence using both values.' },
    { tier: 'H', title: 'Hard', desc: 'Validate the age — re-ask if the user types something that is not a number.' },
    { tier: '★', title: 'Bonus', desc: 'Make the greeting change based on the time of day.' },
  ],
  homework: {
    due: 'Before Wednesday May 13',
    tasks: [
      'Install Python 3 if you have not yet (link in resources).',
      "Run print('hello') in your terminal and screenshot the result.",
      "Try changing the name variable to a friend's name and run print again.",
    ],
  },
  mistakes: [
    "Forgetting the quotes around a string — name = Maria errors, name = 'Maria' works.",
    'Mixing up = and == — one = means assign, two == means compare.',
    'Typing in the wrong window — make sure your terminal shows >>> before you type.',
    "Using smart quotes from a phone — Python only accepts straight quotes ' and \".",
  ],
  vocab: [
    { term: 'variable', def: 'A name that holds a value.' },
    { term: 'string', def: 'Text — anything in quotes.' },
    { term: 'integer', def: 'A whole number, no decimals.' },
    { term: 'print()', def: 'A function that shows a value on the screen.' },
    { term: 'terminal', def: 'The text window where you talk to your computer.' },
  ],
  resources: [
    { group: 'Read', items: [{ label: 'Python.org — variables and types', href: 'https://docs.python.org', source: 'python.org', note: 'Official, short, the source of truth.' }] },
    { group: 'Watch', items: [{ label: 'What is a variable? (4 min)', href: 'https://youtube.com', source: 'youtube', note: 'Visual intro with no jargon.' }] },
    { group: 'Try', items: [{ label: 'Replit — open Python in browser', href: 'https://replit.com', source: 'replit', note: 'No install, runs in your phone.' }] },
  ],
}

const DAY_META = {
  mon: { label: 'Monday', type: 'Workshop', swatch: '#DD8CF1', icon: 'terminal' },
  wed: { label: 'Wednesday', type: 'AI Exploration', swatch: '#F69C40', icon: 'sparkle' },
  thu: { label: 'Thursday', type: 'Build Day', swatch: '#EF453F', icon: 'rocket' },
}

function PreviewBar({ dayKey, setDayKey }) {
  return (
    <div className="border-b border-hairline bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span>Lesson preview · /lesson-mockup</span>
        <div className="flex items-center gap-2">
          <span className="text-ink/50">Preview as</span>
          {['mon', 'wed', 'thu'].map((d) => {
            const active = dayKey === d
            return (
              <button
                key={d}
                type="button"
                onClick={() => setDayKey(d)}
                aria-pressed={active}
                className={`inline-flex h-7 items-center px-2.5 transition-colors ${
                  active ? 'text-ink' : 'border border-dart/40 text-ink/70 hover:border-ink hover:text-ink'
                }`}
                style={active ? { backgroundColor: DAY_META[d].swatch, color: '#000000' } : undefined}
              >
                {d}
              </button>
            )
          })}
        </div>
        <Link to="/" className="text-ink/50 underline-offset-4 hover:text-ink hover:underline">
          ← exit preview
        </Link>
      </div>
    </div>
  )
}

/** Simple static “lab” body for the mock (production uses `LessonModule` in a dark band). */
function MockStaticLabContent({ lab }) {
  return (
    <>
      <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-paper/60">Steps</h3>
      <ol className="mt-3 border-t border-hairline-dark/40">
        {lab.steps.map((s, i) => (
          <li key={i} className="border-b border-hairline-dark/40 py-4">
            <span className="text-base leading-relaxed text-paper">{s}</span>
          </li>
        ))}
      </ol>
      {lab.example ? (
        <div className="mt-10 border border-paper/20">
          <p className="border-b border-hairline-dark/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/60">
            {lab.example.label}
          </p>
          <pre className="overflow-x-auto px-4 py-5 font-mono text-sm leading-relaxed text-sun">
            <code>{lab.example.code}</code>
          </pre>
        </div>
      ) : null}
    </>
  )
}

export default function LessonMockup() {
  const [dayKey, setDayKey] = useState('mon')
  const meta = DAY_META[dayKey]
  const isThu = dayKey === 'thu'
  const homework = { title: 'Before Wednesday May 13', tasks: SAMPLE.homework.tasks }

  return (
    <div className="min-h-dvh bg-paper font-body text-ink antialiased">
      <LessonMarquee />
      <PreviewBar dayKey={dayKey} setDayKey={setDayKey} />
      <LessonHero
        dayKey={dayKey}
        dayMeta={meta}
        date={SAMPLE.date}
        sessionLabel={SAMPLE.sessionLabel}
        title={SAMPLE.title}
        breadcrumb={
          <nav aria-label="Breadcrumb" className="mb-0 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-ink hover:underline hover:underline-offset-4">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link to="/roadmap" className="hover:text-ink hover:underline hover:underline-offset-4">
                  Roadmap
                </Link>
              </li>
            </ol>
          </nav>
        }
      />
      <LessonSectionGoal goal={SAMPLE.goal} dayMeta={meta} />
      <LessonMainPoints points={SAMPLE.mainPoints} />
      <LessonArtifacts artifacts={SAMPLE.artifacts} />
      <LessonLabBand dayKey={dayKey} title={SAMPLE.lab.title} intro={SAMPLE.lab.intro} exampleLabel="Lab example">
        <MockStaticLabContent lab={SAMPLE.lab} />
      </LessonLabBand>
      {isThu ? <LessonChallengesAccordion challenges={SAMPLE.challenges} /> : null}
      <LessonHomework homework={homework} />
      <LessonMistakes mistakes={SAMPLE.mistakes} />
      <LessonVocab vocab={SAMPLE.vocab} />
      <LessonResources resources={SAMPLE.resources} />
      <LessonPrevNext
        currentDay={dayKey}
        prev={{ week: 1, day: 'mon', label: 'Week 1 · same route preview' }}
        next={{ week: 1, day: 'wed', label: 'Week 1 · next session preview' }}
      />
    </div>
  )
}
