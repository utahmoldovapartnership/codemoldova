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
      <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] px-4 py-2.5">
        <span className="font-mono text-xs uppercase tracking-wider text-muted">{lang || 'code'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-elem px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:bg-white/[0.06] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon"
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
