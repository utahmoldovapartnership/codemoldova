/**
 * Editorial wordmark: mono, bold, wide tracking. Visual text is uppercase.
 * Use aria-label on the parent link for a spoken name.
 */
export default function BrandMark({ variant = 'nav', homeLight = false, className = '', ...props }) {
  const size =
    variant === 'footer'
      ? 'text-[11px] sm:text-xs'
      : 'text-[10px] sm:text-[11px]'
  const color = homeLight ? 'text-ink' : 'text-primary'
  return (
    <span className={`font-mono font-bold uppercase tracking-[0.25em] ${color} ${size} ${className}`.trim()} {...props}>
      CodeMoldova
    </span>
  )
}
