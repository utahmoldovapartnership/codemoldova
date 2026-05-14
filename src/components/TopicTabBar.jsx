import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

/**
 * Horizontal tab list with animated underline (used on Resources and Lesson pages).
 * @param {{ id: string, label: string }[]} props.tabs
 * @param {string} props.baseId — from `useId()` for stable aria ids
 * @param {string} props.active
 * @param {(id: string) => void} props.onChange
 * @param {string} props.panelId — id of the controlled tabpanel
 * @param {string} props.tablistAriaLabel
 * @param {string} [props.tabLineClassName] — underline span classes (include layout + transition)
 * @param {string} [props.tabButtonFocusClass] — Tailwind focus ring on tab buttons (lesson: match day accent).
 * @param {string} [props.tablistClassName] — classes for the tablist row (default includes border-b).
 */
export default function TopicTabBar({
  baseId,
  active,
  onChange,
  tabs,
  panelId,
  tablistAriaLabel,
  tabLineClassName = 'res-tabline pointer-events-none absolute bottom-0 left-0 z-0 transition-[left,width] duration-300 ease-out',
  tabButtonFocusClass = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-val',
  tablistClassName,
}) {
  const scrollRef = useRef(null)
  const innerRef = useRef(null)
  const btnRefs = useRef({})
  const [line, setLine] = useState({ left: 0, width: 0 })

  const measure = useCallback(() => {
    const inner = innerRef.current
    const btn = btnRefs.current[active]
    if (!inner || !btn) return
    const l = inner.getBoundingClientRect().left
    const b = btn.getBoundingClientRect()
    setLine({ left: b.left - l, width: b.width })
  }, [active])

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => measure())
    })
    return () => cancelAnimationFrame(id)
  }, [measure])

  useEffect(() => {
    const sc = scrollRef.current
    const onScroll = () => measure()
    sc?.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    const ro = new ResizeObserver(() => measure())
    if (innerRef.current) ro.observe(innerRef.current)
    return () => {
      sc?.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      ro.disconnect()
    }
  }, [measure])

  return (
    <div
      ref={scrollRef}
      onScroll={measure}
      className="relative -mx-1 max-w-full overflow-x-auto [scrollbar-width:thin] sm:mx-0"
    >
      <div
        ref={innerRef}
        className={tablistClassName ?? 'relative flex w-max min-w-0 border-b border-hairline'}
        role="tablist"
        aria-label={tablistAriaLabel}
      >
        {tabs.map((tab) => {
          const selected = active === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              ref={(el) => {
                btnRefs.current[tab.id] = el
              }}
              role="tab"
              aria-selected={selected}
              id={`${baseId}-tab-${tab.id}`}
              aria-controls={panelId}
              onClick={() => onChange(tab.id)}
              className={`relative z-10 shrink-0 px-3 py-3.5 font-mono text-[11px] uppercase tracking-[0.28em] ${tabButtonFocusClass} ${
                selected ? 'text-ink' : 'text-ink/50 hover:text-ink/90'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
        <span
          aria-hidden
          className={tabLineClassName}
          style={{ left: line.left, width: line.width, transform: 'translateZ(0)' }}
        />
      </div>
    </div>
  )
}
