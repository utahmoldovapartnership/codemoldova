import { useState } from 'react'

/** @param {{ lang?: string, snippet: string, tone?: 'light' | 'onInk' }} props */
export default function CodeBlock({ lang, snippet, tone = 'light' }) {
  const [copied, setCopied] = useState(false)
  const onInk = tone === 'onInk'

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(snippet)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className={
        onInk
          ? 'overflow-hidden border border-hairline-dark/30 bg-bg'
          : 'overflow-hidden border border-hairline/50 bg-paper'
      }
    >
      <div
        className={`flex items-center justify-between gap-2 border-b px-4 py-2.5 ${
          onInk
            ? 'border-hairline-dark/30 bg-paper/[0.08]'
            : 'border-hairline/50 bg-ink/[0.04]'
        }`}
      >
        <span className={`font-mono text-[11px] uppercase tracking-[0.2em] ${onInk ? 'text-paper/60' : 'text-ink/55'}`}>
          {lang || 'code'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={`px-2.5 py-1.5 font-mono text-[11px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun ${
            onInk
              ? 'text-paper/70 hover:bg-paper/10 hover:text-paper'
              : 'text-ink/60 hover:bg-ink/10 hover:text-ink focus-visible:outline-mon'
          }`}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre
        className={
          onInk
            ? 'overflow-x-auto bg-bg p-4 text-[13px] text-primary/95 sm:p-5 sm:text-sm'
            : 'overflow-x-auto bg-paper p-4 text-[13px] text-ink/90 sm:p-5 sm:text-sm'
        }
      >
        <code className="font-mono leading-relaxed text-inherit">{snippet}</code>
      </pre>
    </div>
  )
}
