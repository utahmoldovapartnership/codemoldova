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
    <div className={`overflow-hidden border bg-bg ${onInk ? 'border-paper/20' : 'border-ink/20'}`}>
      <div
        className={`flex items-center justify-between gap-2 border-b px-4 py-2.5 ${
          onInk ? 'border-paper/15 bg-paper/[0.08]' : 'border-ink/20 bg-ink/[0.04]'
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
      <pre className="overflow-x-auto p-4 sm:p-5">
        <code className="font-mono text-[13px] leading-relaxed text-primary/95 sm:text-sm">{snippet}</code>
      </pre>
    </div>
  )
}
