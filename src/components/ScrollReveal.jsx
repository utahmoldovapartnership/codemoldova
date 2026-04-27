import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Fades and slides content in when it crosses into view while scrolling.
 */
export default function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  rootMargin = '0px 0px -7% 0px',
  threshold = 0.1,
  /** Tailwind translate when hidden (smaller = subtler for dense rows). */
  hiddenTranslate = 'translate-y-8',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => prefersReducedMotion())

  useEffect(() => {
    if (visible) return
    if (typeof window === 'undefined') return

    const node = ref.current
    if (!node) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
            return
          }
        }
      },
      { root: null, rootMargin, threshold }
    )

    io.observe(node)
    return () => io.disconnect()
  }, [visible, rootMargin, threshold])

  return (
    <div
      ref={ref}
      className={[
        className,
        visible
          ? 'translate-y-0 opacity-100'
          : `opacity-0 ${hiddenTranslate}`,
        'motion-reduce:translate-y-0 motion-reduce:opacity-100',
        'motion-safe:transition-[opacity,transform] motion-safe:duration-[700ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]',
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        visible && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined
      }
    >
      {children}
    </div>
  )
}
