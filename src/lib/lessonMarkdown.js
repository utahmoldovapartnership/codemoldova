/**
 * Parse lesson copy markdown (bold, code, tables, numbered lists) for LessonRichText.
 * Keep syntax aligned with strings in src/data/curriculum.js.
 */

/** @typedef {{ type: 'text', value: string } | { type: 'bold' | 'code' | 'kbd', value: string }} InlineSegment */

/** @typedef {{ type: 'p', lines: string[] } | { type: 'ol', items: string[] } | { type: 'table', rows: string[][] } | { type: 'pre', code: string, lang?: string }} ContentBlock */

/**
 * @param {string} line
 */
function isTableRow(line) {
  const t = line.trim()
  return t.startsWith('|') && t.endsWith('|') && t.length > 2
}

/**
 * @param {string} line
 */
function isTableSeparator(line) {
  const t = line.trim()
  if (!isTableRow(t)) return false
  return t
    .slice(1, -1)
    .split('|')
    .every((cell) => /^[\s:-]+$/.test(cell.trim()))
}

/**
 * @param {string} row
 * @returns {string[]}
 */
function parseTableRow(row) {
  return row
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim())
}

/**
 * @param {string} text
 * @returns {InlineSegment[]}
 */
export function parseInlineMarkdown(text) {
  if (!text) return []
  /** @type {InlineSegment[]} */
  const out = []
  let i = 0

  const pushText = (value) => {
    if (value) out.push({ type: 'text', value })
  }

  while (i < text.length) {
    if (text.startsWith('``', i)) {
      const end = text.indexOf('``', i + 2)
      if (end !== -1) {
        out.push({ type: 'kbd', value: text.slice(i + 2, end) })
        i = end + 2
        continue
      }
    }

    if (text.startsWith('**', i)) {
      const end = text.indexOf('**', i + 2)
      if (end !== -1) {
        const inner = text.slice(i + 2, end)
        // **`print()`** — parse inner backticks as code, not literal ` inside <strong>
        if (inner.includes('`')) {
          out.push(...parseInlineMarkdown(inner))
        } else {
          out.push({ type: 'bold', value: inner })
        }
        i = end + 2
        continue
      }
    }

    if (text[i] === '`' && text[i + 1] !== '`') {
      const end = text.indexOf('`', i + 1)
      if (end !== -1) {
        out.push({ type: 'code', value: text.slice(i + 1, end) })
        i = end + 1
        continue
      }
    }

    let next = text.length
    const dbl = text.indexOf('``', i)
    const bold = text.indexOf('**', i)
    const code = text.indexOf('`', i)
    for (const n of [dbl, bold, code]) {
      if (n !== -1 && n < next) next = n
    }

    pushText(text.slice(i, next))
    i = next
  }

  return out
}

/**
 * @param {string} text
 * @returns {ContentBlock[]}
 */
export function parseLessonBlocks(text) {
  if (!text || typeof text !== 'string') return []
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  /** @type {ContentBlock[]} */
  const blocks = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i += 1
      continue
    }

    const fenceMatch = line.trim().match(/^```(\w*)$/)
    if (fenceMatch) {
      const lang = fenceMatch[1] || undefined
      i += 1
      /** @type {string[]} */
      const codeLines = []
      while (i < lines.length && !/^```\s*$/.test(lines[i].trim())) {
        codeLines.push(lines[i])
        i += 1
      }
      if (i < lines.length) i += 1
      blocks.push({ type: 'pre', code: codeLines.join('\n'), lang })
      continue
    }

    if (isTableRow(line)) {
      const rawRows = []
      while (i < lines.length && isTableRow(lines[i])) {
        if (!isTableSeparator(lines[i])) rawRows.push(parseTableRow(lines[i]))
        i += 1
      }
      if (rawRows.length) blocks.push({ type: 'table', rows: rawRows })
      continue
    }

    if (/^\d+\.\s/.test(line.trim())) {
      /** @type {string[]} */
      const items = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''))
        i += 1
      }
      blocks.push({ type: 'ol', items })
      continue
    }

    /** @type {string[]} */
    const para = []
    while (i < lines.length) {
      const l = lines[i]
      if (!l.trim()) break
      if (isTableRow(l)) break
      if (/^\d+\.\s/.test(l.trim())) break
      para.push(l)
      i += 1
    }
    blocks.push({ type: 'p', lines: para })
  }

  return blocks
}

/**
 * Split a main-point string into title + optional body for LessonMainPoints.
 * Ignores `.` `!` `?` inside `inline code` so `.py` does not break the title.
 *
 * @param {string} text
 * @returns {{ title: string, body: string }}
 */
export function splitMainPoint(text) {
  const trimmed = typeof text === 'string' ? text.trim() : ''
  if (!trimmed) return { title: '', body: '' }

  let inBackticks = false
  for (let i = 0; i < trimmed.length; i += 1) {
    if (trimmed[i] === '`') {
      inBackticks = !inBackticks
      continue
    }
    if (inBackticks || !'.!?'.includes(trimmed[i])) continue

    const after = trimmed.slice(i + 1)
    if (after.length > 0 && !/^\s/.test(after)) continue

    return {
      title: trimmed.slice(0, i + 1).trim(),
      body: after.trim(),
    }
  }

  return { title: trimmed, body: '' }
}
