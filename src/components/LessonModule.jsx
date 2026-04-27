import CodeBlock from './CodeBlock'

/** @param {{ steps: object[], variant?: 'paper' | 'ink', noRounded?: boolean }} props */
export default function LessonModule({ steps, variant = 'paper', noRounded = false }) {
  const total = steps?.length ?? 0
  const ink = variant === 'ink'

  if (!total) {
    return (
      <p
        className={
          ink
            ? 'border border-paper/15 p-5 text-base text-paper/65'
            : `${noRounded ? '' : 'rounded-card '}border border-ink/20 bg-ink/[0.02] p-5 text-base text-ink/70`
        }
      >
        Step-by-step content for this class is not ready yet.
      </p>
    )
  }

  return (
    <div className="space-y-8">
      {steps.map((step, i) => (
        <div
          className={
            ink
              ? `${noRounded ? '' : 'rounded-card '}border border-paper/15 bg-paper/[0.06] p-6 sm:p-8`
              : `${noRounded ? '' : 'rounded-card '}border border-ink/20 bg-ink/[0.02] p-6 sm:p-8`
          }
          key={`${step.title}-${i}`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2
              className={`font-serif text-2xl font-medium leading-tight sm:text-[1.65rem] ${
                ink ? 'text-paper' : 'text-ink'
              }`}
            >
              {step.title}
            </h2>
            {step.timing ? (
              <span
                className={`shrink-0 border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide ${
                  ink ? 'border-paper/25 text-paper/60' : 'border-ink/20 text-ink/55'
                }`}
              >
                {step.timing}
              </span>
            ) : null}
          </div>
          <p
            className={`mt-5 max-w-prose whitespace-pre-line text-pretty text-base leading-[1.7] sm:text-[17px] ${
              ink ? 'text-paper/85' : 'text-ink/80'
            }`}
          >
            {step.content}
          </p>

          {step.video?.youtubeId ? (
            <div className="mt-6 space-y-2">
              <div
                className={`aspect-video w-full overflow-hidden border bg-bg ${
                  ink ? 'border-paper/20' : 'border-ink/20'
                }`}
              >
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
                <p className={`text-sm leading-relaxed ${ink ? 'text-paper/55' : 'text-ink/60'}`}>{step.video.caption}</p>
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
                    className={`w-full border ${ink ? 'border-paper/20 bg-paper/[0.04]' : 'border-ink/20 bg-ink/[0.02]'}`}
                    loading="lazy"
                  />
                  {img.caption ? (
                    <figcaption className={`text-center text-sm ${ink ? 'text-paper/55' : 'text-ink/60'}`}>
                      {img.caption}
                    </figcaption>
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
                    className={
                      ink
                        ? 'font-mono text-sm text-sun underline decoration-sun/50 underline-offset-2 transition-colors hover:text-paper hover:decoration-paper/50'
                        : 'font-mono text-sm text-mon underline decoration-mon/40 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink/40'
                    }
                  >
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          {step.tips?.length ? (
            <div
              className={
                ink
                  ? 'mt-6 border border-sun/35 bg-sun/10 px-5 py-4'
                  : 'mt-6 border border-wed/30 bg-wed/[0.06] px-5 py-4'
              }
            >
              <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${ink ? 'text-sun' : 'text-wed'}`}>Tips</p>
              <ul
                className={`mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed ${
                  ink ? 'text-paper/90' : 'text-ink/90'
                }`}
              >
                {step.tips.map((t, tIdx) => (
                  <li key={tIdx}>{t}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {step.code ? (
            <div className="mt-6">
              <CodeBlock lang={step.code.lang} snippet={step.code.snippet} tone={ink ? 'onInk' : 'light'} />
            </div>
          ) : null}

          {step.task ? (
            <div
              className={
                ink
                  ? 'mt-7 border-l-4 border-sun/70 bg-sun/10 px-5 py-4'
                  : 'mt-7 border-l-4 border-thu/60 bg-thu/[0.06] px-5 py-4'
              }
            >
              <p
                className={`font-mono text-[11px] uppercase tracking-[0.2em] ${ink ? 'text-sun' : 'text-thu'}`}
              >
                Try it
              </p>
              <p className={`mt-2 text-base leading-relaxed ${ink ? 'text-paper/90' : 'text-ink/90'}`}>{step.task}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
