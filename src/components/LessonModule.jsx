import CodeBlock from './CodeBlock'
import LessonRichText from './LessonRichText.jsx'

const TRY_DAY = {
  mon: { box: 'mt-7 border-l-4 border-ube bg-ube/[0.08] px-5 py-4' },
  wed: { box: 'mt-7 border-l-4 border-sun bg-sun/[0.08] px-5 py-4' },
  thu: { box: 'mt-7 border-l-4 border-val bg-val/[0.08] px-5 py-4' },
}

/** Highlighted review steps — Mon red (val), Wed pink (ube). */
const OUTLINE_STEP = {
  val: 'bg-val/[0.08] border-val/70 ring-1 ring-val/25',
  ube: 'bg-ube/[0.08] border-ube/70 ring-1 ring-ube/25',
}

function stepCardClass(ink, noRounded, outlineColor) {
  const rounded = noRounded ? '' : 'rounded-card '
  if (ink) {
    const outline =
      outlineColor === 'val' ? 'border-val/55' : outlineColor === 'ube' ? 'border-ube/55' : ''
    return `${rounded}border border-paper/15 bg-paper/[0.06] p-6 sm:p-8 ${outline}`.trim()
  }
  const base = `${rounded}border border-hairline/50 p-6 sm:p-8`
  const fill = outlineColor && OUTLINE_STEP[outlineColor] ? OUTLINE_STEP[outlineColor] : 'bg-paper'
  return `${base} ${fill}`.trim()
}

function tryDayForPaper(dayKey) {
  if (dayKey in TRY_DAY) return TRY_DAY[dayKey]
  return TRY_DAY.wed
}

/** @param {{ steps: object[], variant?: 'paper' | 'ink', noRounded?: boolean, dayKey?: 'mon' | 'wed' | 'thu' }} props */
export default function LessonModule({ steps, variant = 'paper', noRounded = false, dayKey = 'wed' }) {
  const total = steps?.length ?? 0
  const ink = variant === 'ink'
  const dayTry = tryDayForPaper(dayKey)

  if (!total) {
    return (
      <p
        className={
          ink
            ? 'border border-paper/15 p-5 text-base text-paper/65'
            : `${noRounded ? '' : 'rounded-card '}border border-hairline/50 bg-paper p-5 text-base text-ink/70`
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
          className={stepCardClass(ink, noRounded, step?.outlineColor)}
          key={`${step.title}-${i}`}
        >
          <h2
            className={`font-serif text-2xl font-medium leading-tight sm:text-[1.65rem] ${
              ink ? 'text-paper' : 'text-ink/90'
            }`}
          >
            {step.title}
          </h2>
          {step.content ? (
            <LessonRichText
              text={step.content}
              tone={ink ? 'ink' : 'default'}
              className="mt-5 max-w-prose text-pretty text-base sm:text-[17px]"
            />
          ) : null}

          {step.video?.youtubeId ? (
            <div className="mt-6 space-y-2">
              <div
                className={`aspect-video w-full overflow-hidden border bg-bg ${
                  ink ? 'border-paper/20' : 'border-hairline/40'
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
                    className={`w-full border ${ink ? 'border-paper/20 bg-paper/[0.04]' : 'border-hairline/40 bg-ink/[0.02]'}`}
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
                  ? 'mt-6 border border-hairline/45 bg-sun/10 px-5 py-4'
                  : 'mt-6 border border-hairline/50 bg-paper px-5 py-4'
              }
            >
              <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${ink ? 'text-sun' : 'text-ink/50'}`}>Tips</p>
              <ul
                className={`mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed ${
                  ink ? 'text-paper/90' : 'text-ink/80'
                }`}
              >
                {step.tips.map((t, tIdx) => (
                  <li key={tIdx}>
                    <LessonRichText text={t} tone={ink ? 'ink' : 'default'} />
                  </li>
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
            <div className={ink ? 'mt-7 border-l-4 border-sun/70 bg-sun/10 px-5 py-4' : dayTry.box}>
              <LessonRichText
                text={step.task}
                tone={ink ? 'ink' : 'task'}
                className="text-base leading-relaxed"
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
