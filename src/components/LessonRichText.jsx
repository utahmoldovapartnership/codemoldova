import { parseInlineMarkdown, parseLessonBlocks } from '../lib/lessonMarkdown.js'

const TONE = {
  default: {
    p: 'text-ink/70',
    strong: 'font-semibold text-ink/90',
    code: 'rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-mon',
    kbd: 'rounded border border-hairline/60 bg-paper px-1.5 py-0.5 font-mono text-[0.85em] text-ink/85',
    table: 'border-hairline/50 text-ink/80',
    th: 'bg-ink/[0.04] text-ink/90',
  },
  ink: {
    p: 'text-paper/85',
    strong: 'font-semibold text-paper',
    code: 'rounded bg-paper/[0.1] px-1.5 py-0.5 font-mono text-[0.9em] text-sun',
    kbd: 'rounded border border-paper/25 bg-paper/[0.08] px-1.5 py-0.5 font-mono text-[0.85em] text-paper/90',
    table: 'border-paper/20 text-paper/85',
    th: 'bg-paper/[0.08] text-paper',
  },
  muted: {
    p: 'text-ink/75',
    strong: 'font-semibold text-ink/90',
    code: 'rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-mon',
    kbd: 'rounded border border-hairline/60 bg-paper px-1.5 py-0.5 font-mono text-[0.85em] text-ink/85',
    table: 'border-hairline/50 text-ink/80',
    th: 'bg-ink/[0.04] text-ink/90',
  },
  task: {
    p: 'text-ink/80',
    strong: 'font-semibold text-ink',
    code: 'rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-mon',
    kbd: 'rounded border border-hairline/60 bg-paper px-1.5 py-0.5 font-mono text-[0.85em] text-ink/85',
    table: 'border-hairline/50 text-ink/80',
    th: 'bg-ink/[0.04] text-ink/90',
  },
}

/**
 * @param {string} text
 * @param {string} toneKey
 * @param {string} keyPrefix
 */
function renderInline(text, toneKey, keyPrefix) {
  const tone = TONE[toneKey] ?? TONE.default
  const segments = parseInlineMarkdown(text)
  return segments.map((seg, i) => {
    const key = `${keyPrefix}-i${i}`
    if (seg.type === 'bold') {
      return (
        <strong key={key} className={tone.strong}>
          {seg.value}
        </strong>
      )
    }
    if (seg.type === 'code') {
      return (
        <code key={key} className={tone.code}>
          {seg.value}
        </code>
      )
    }
    if (seg.type === 'kbd') {
      return (
        <kbd key={key} className={tone.kbd}>
          {seg.value}
        </kbd>
      )
    }
    return <span key={key}>{seg.value}</span>
  })
}

/**
 * @param {{ text?: string, tone?: keyof typeof TONE, className?: string, as?: 'div' | 'p' | 'span', inline?: boolean }} props
 */
export default function LessonRichText({
  text = '',
  tone = 'default',
  className = '',
  as: Wrapper = 'div',
  inline = false,
}) {
  const trimmed = typeof text === 'string' ? text.trim() : ''
  if (!trimmed) return null

  const toneKey = tone in TONE ? tone : 'default'
  const toneClasses = TONE[toneKey]

  if (inline || Wrapper === 'span') {
    return (
      <Wrapper className={[toneClasses.p, 'whitespace-pre-line', className].filter(Boolean).join(' ')}>
        {renderInline(trimmed, toneKey, 'inline')}
      </Wrapper>
    )
  }

  const blocks = parseLessonBlocks(trimmed)

  if (!blocks.length) return null

  const body = blocks.map((block, bi) => {
    const key = `b${bi}`
    if (block.type === 'table') {
      const [header, ...bodyRows] = block.rows
      return (
        <div key={key} className="overflow-x-auto">
          <table className={`w-full min-w-[280px] border-collapse text-left text-sm leading-relaxed ${toneClasses.table}`}>
            {header ? (
              <thead>
                <tr>
                  {header.map((cell, ci) => (
                    <th key={ci} className={`border px-3 py-2 font-mono text-xs font-medium uppercase tracking-wide ${toneClasses.th}`}>
                      {renderInline(cell, toneKey, `${key}-h${ci}`)}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri} className="border-t">
                  {row.map((cell, ci) => (
                    <td key={ci} className="border px-3 py-2 align-top">
                      {renderInline(cell, toneKey, `${key}-r${ri}c${ci}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    if (block.type === 'ol') {
      return (
        <ol key={key} className={`list-decimal space-y-2 pl-6 ${toneClasses.p}`}>
          {block.items.map((item, ii) => (
            <li key={ii} className="pl-1 leading-[1.7]">
              {renderInline(item, toneKey, `${key}-li${ii}`)}
            </li>
          ))}
        </ol>
      )
    }

    if (block.type === 'pre') {
      return (
        <pre
          key={key}
          className="overflow-x-auto rounded border border-hairline/60 bg-ink/[0.04] p-4 font-mono text-[0.85em] leading-relaxed text-ink/90"
        >
          <code>{block.code}</code>
        </pre>
      )
    }

    const paragraph = block.lines.join('\n')
    return (
      <p key={key} className={`whitespace-pre-line leading-[1.7] ${toneClasses.p}`}>
        {renderInline(paragraph, toneKey, key)}
      </p>
    )
  })

  const gap = blocks.length > 1 ? 'space-y-4' : ''
  return (
    <Wrapper className={[gap, className].filter(Boolean).join(' ')}>
      {body}
    </Wrapper>
  )
}
