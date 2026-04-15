import { useState } from 'react'

export default function CodeBlock({ lang, snippet }) {
  const [copied, setCopied] = useState(false)

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
    <div className="relative rounded-elem border border-white/[0.1] bg-[#0a0c10]">
      <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{lang || 'code'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-elem px-2 py-1 font-mono text-[10px] text-muted transition-colors hover:bg-white/[0.06] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-3 sm:p-4">
        <code className="font-mono text-[12px] leading-relaxed text-primary/95 sm:text-[13px]">{snippet}</code>
      </pre>
    </div>
  )
}
