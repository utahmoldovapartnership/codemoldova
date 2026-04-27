import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Mounts children when the block nears the viewport so the first paint stays light
 * and lower sections ease in as the user scrolls.
 */
export default function LazyInView({
  children,
  className = '',
  /** Tailwind min-height class for the placeholder (reduces layout jump while off-screen). */
  placeholderClassName = 'min-h-[12rem]',
  rootMargin = '0px 0px 220px 0px',
}) {
  const ref = useRef(null)
  const [show, setShow] = useState(() => prefersReducedMotion())

  useEffect(() => {
    if (show) return
    if (typeof window === 'undefined') return

    const node = ref.current
    if (!node) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShow(true)
            io.disconnect()
            return
          }
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    )

    io.observe(node)
    return () => io.disconnect()
  }, [show, rootMargin])

  return (
    <div ref={ref} className={className}>
      {show ? (
        children
      ) : (
        <div className={placeholderClassName} aria-hidden />
      )}
    </div>
  )
}
