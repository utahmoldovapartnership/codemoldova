import { useState } from 'react'
import CodeBlock from './CodeBlock'

export default function LessonModule({ steps }) {
  const [index, setIndex] = useState(0)
  const total = steps?.length ?? 0
  const step = total ? steps[index] : null

  if (!total || !step) {
    return (
      <p className="rounded-card border border-white/[0.08] bg-surface/60 p-5 text-base text-muted">
        Step-by-step content for this class is not ready yet.
      </p>
    )
  }

  const atStart = index === 0
  const atEnd = index === total - 1

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          Step {index + 1} of {total}
        </p>
        <div className="flex gap-1.5" role="tablist" aria-label="Lesson parts">
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
        className="rounded-card border border-white/[0.1] bg-surface/50 p-6 sm:p-8"
        key={index}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h2 className="font-display text-2xl font-bold leading-tight text-primary sm:text-[1.65rem]">{step.title}</h2>
          {step.timing ? (
            <span className="shrink-0 rounded-pill border border-white/[0.12] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted">
              {step.timing}
            </span>
          ) : null}
        </div>
        <p className="mt-5 max-w-prose whitespace-pre-line text-pretty text-base leading-[1.7] text-muted sm:text-[17px]">
          {step.content}
        </p>

        {step.video?.youtubeId ? (
          <div className="mt-6 space-y-2">
            <div className="aspect-video w-full overflow-hidden rounded-elem border border-white/[0.1] bg-black/50">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${step.video.youtubeId}?rel=0`}
                title={step.video.title || step.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            {step.video.caption ? (
              <p className="text-sm leading-relaxed text-muted">{step.video.caption}</p>
            ) : null}
          </div>
        ) : null}

        {step.images?.length ? (
          <div className="mt-6 space-y-4">
            {step.images.map((img) => (
              <figure key={img.src} className="space-y-2">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full rounded-elem border border-white/[0.08] bg-surface2/30"
                  loading="lazy"
                />
                {img.caption ? (
                  <figcaption className="text-center text-sm text-muted">{img.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : null}

        {step.links?.length ? (
          <ul className="mt-6 space-y-2">
            {step.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-mon underline decoration-mon/40 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary/50"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        {step.tips?.length ? (
          <div className="mt-6 rounded-elem border border-wed/30 bg-wed/[0.06] px-5 py-4">
            <p className="font-mono text-xs uppercase tracking-wider text-wed">Tips</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-primary/95">
              {step.tips.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {step.code ? (
          <div className="mt-6">
            <CodeBlock lang={step.code.lang} snippet={step.code.snippet} />
          </div>
        ) : null}

        {step.task ? (
          <div className="mt-7 border-l-4 border-thu/60 bg-thu/[0.06] px-5 py-4">
            <p className="font-mono text-xs uppercase tracking-wider text-thu">Try it</p>
            <p className="mt-2 text-base leading-relaxed text-primary">{step.task}</p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={atStart}
          className="min-h-12 rounded-elem border border-white/[0.12] bg-surface px-5 font-mono text-base text-primary transition-colors enabled:hover:border-white/[0.2] enabled:hover:bg-surface2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
          disabled={atEnd}
          className="min-h-12 rounded-elem border border-mon/35 bg-mon/15 px-5 font-mono text-base text-primary transition-colors enabled:hover:border-mon/50 enabled:hover:bg-mon/25 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
