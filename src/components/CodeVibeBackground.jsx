/**
 * Subtle dot grid with slow drift — keeps the hero readable with a soft vignette.
 */
export default function CodeVibeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.42] motion-reduce:animate-none motion-reduce:opacity-25 animate-code-grid-drift bg-[radial-gradient(circle_at_center,rgba(79,124,255,0.2)_1px,transparent_1px)] bg-[length:26px_26px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_30%,transparent_0%,rgba(13,15,20,0.55)_70%,rgba(13,15,20,0.92)_100%)]" />
    </div>
  )
}
