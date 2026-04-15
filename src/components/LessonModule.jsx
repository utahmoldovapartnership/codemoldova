import { useState } from 'react'
import CodeBlock from './CodeBlock'

export default function LessonModule({ steps }) {
  const [index, setIndex] = useState(0)
  const total = steps?.length ?? 0
  const step = total ? steps[index] : null

  if (!total || !step) {
    return (
      <p className="rounded-card border border-white/[0.08] bg-surface/60 p-4 text-sm text-muted">
        No step-by-step content for this session yet.
      </p>
    )
  }

  const atStart = index === 0
  const atEnd = index === total - 1

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Step {index + 1} of {total}
        </p>
        <div className="flex gap-1.5" role="tablist" aria-label="Lesson steps">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to step ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors sm:h-2 sm:w-2 ${
                i === index ? 'bg-mon' : 'bg-white/[0.15] hover:bg-white/[0.25]'
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className="rounded-card border border-white/[0.1] bg-surface/50 p-5 sm:p-6"
        key={index}
      >
        <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">{step.title}</h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted">{step.content}</p>

        {step.code ? (
          <div className="mt-5">
            <CodeBlock lang={step.code.lang} snippet={step.code.snippet} />
          </div>
        ) : null}

        {step.task ? (
          <div className="mt-6 border-l-4 border-thu/60 bg-thu/[0.06] px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-thu">Try it</p>
            <p className="mt-1 text-sm leading-relaxed text-primary">{step.task}</p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={atStart}
          className="min-h-11 rounded-elem border border-white/[0.12] bg-surface px-4 font-mono text-sm text-primary transition-colors enabled:hover:border-white/[0.2] enabled:hover:bg-surface2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Previous step
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
          disabled={atEnd}
          className="min-h-11 rounded-elem border border-mon/35 bg-mon/15 px-4 font-mono text-sm text-primary transition-colors enabled:hover:border-mon/50 enabled:hover:bg-mon/25 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next step →
        </button>
      </div>
    </div>
  )
}
