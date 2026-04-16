import CodeVibeBackground from './CodeVibeBackground.jsx'

/**
 * Same ambient background as the home hero (dot grid, vignette, drifting top glow)
 * so route pages feel consistent with how Home loads visually.
 */
export default function PageChrome({ children }) {
  return (
    <div className="relative z-0 flex min-h-0 w-full flex-1 flex-col">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <CodeVibeBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-top-glow absolute -inset-[12%] will-change-transform motion-safe:animate-hero-glow-drift motion-reduce:animate-none" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
