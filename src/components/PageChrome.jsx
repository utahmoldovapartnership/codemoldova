/**
 * Route pages that need a full-bleed white surface (e.g. lessons).
 * Solid white so marketing content reads on true #fff, not a dark-tinted hero layer.
 */
export default function PageChrome({ children }) {
  return <div className="relative z-0 flex min-h-0 w-full min-w-0 flex-1 flex-col bg-white">{children}</div>
}
