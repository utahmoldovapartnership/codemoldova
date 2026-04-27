import { useState, useEffect, useId, useRef, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import BrandMark from './BrandMark.jsx'
import PixelIcon from './PixelIcon.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/resources', label: 'Resources' },
]

const linkClass = (homeLight) => ({ isActive }) =>
  `cm-link-sweep rounded-elem px-3 py-2 font-mono text-[11px] uppercase tracking-[0.3em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    homeLight ? 'focus-visible:outline-dart' : 'focus-visible:outline-mon'
  } ${
    homeLight
      ? isActive
        ? 'text-ink font-bold'
        : 'text-ink/60 hover:text-ink'
      : isActive
        ? 'bg-white/[0.08] text-primary'
        : 'text-muted hover:text-primary'
  }`

/** No `cm-link-sweep` here: its `::before` + z-[-1] can paint below the menu panel and look “transparent.” */
const mobileLinkClass = (homeLight) => ({ isActive }) =>
  `flex min-h-12 items-center rounded-elem px-3 font-mono text-[11px] uppercase tracking-[0.3em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    homeLight ? 'focus-visible:outline-dart' : 'focus-visible:outline-mon'
  } ${
    homeLight
      ? isActive
        ? 'bg-paper text-ink font-bold'
        : 'bg-paper text-ink/60 hover:bg-ink/[0.06] active:bg-ink/10'
      : isActive
        ? 'bg-white/[0.1] text-primary'
        : 'bg-surface text-muted hover:bg-white/[0.06] active:bg-white/10'
  }`

export default function Nav({ homeLight = false }) {
  const [open, setOpen] = useState(false)
  const [menuTop, setMenuTop] = useState(0)
  const navRef = useRef(null)
  const menuId = useId()

  useLayoutEffect(() => {
    if (!open) return undefined
    const nav = navRef.current
    if (!nav) return undefined
    const syncTop = () => {
      setMenuTop(nav.getBoundingClientRect().bottom)
    }
    syncTop()
    window.addEventListener('resize', syncTop)
    window.addEventListener('scroll', syncTop, true)
    return () => {
      window.removeEventListener('resize', syncTop)
      window.removeEventListener('scroll', syncTop, true)
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const prevOverflow = document.body.style.overflow
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <nav
      ref={navRef}
      className={
        homeLight
          ? 'sticky top-0 z-50 border-b border-ink bg-paper/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur'
          : 'sticky top-0 z-50 border-b border-white/[0.08] bg-surface/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur'
      }
      aria-label="Main menu"
    >
      <div className="layout-shell flex items-center justify-between gap-3 py-2.5 sm:py-3.5">
        <NavLink
          to="/"
          aria-label="CodeMoldova, home"
          className={
            homeLight
              ? 'flex h-10 min-w-0 shrink items-center gap-2.5 focus-visible:rounded-elem focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dart'
              : 'flex h-10 min-w-0 shrink items-center gap-2.5 focus-visible:rounded-elem focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon'
          }
          onClick={() => setOpen(false)}
        >
          <PixelIcon
            icon="terminal"
            size={14}
            className={`shrink-0 ${homeLight ? 'cm-logo-term-light' : 'cm-logo-term-dark'}`}
          />
          <BrandMark variant="nav" homeLight={homeLight} aria-hidden />
        </NavLink>

        <div className="hidden gap-1 sm:flex">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass(homeLight)}>
              {label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-elem sm:hidden"
          onClick={() => {
            if (!open && navRef.current) {
              setMenuTop(navRef.current.getBoundingClientRect().bottom)
            }
            setOpen((o) => !o)
          }}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            aria-hidden
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity ${open ? 'opacity-0' : ''}`}
            aria-hidden
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            aria-hidden
          />
        </button>
      </div>

      {open
        ? createPortal(
            <div
              id={menuId}
              className={
                homeLight
                  ? 'cm-nav-mobile-panel--light fixed left-0 right-0 z-[200] overflow-y-auto overscroll-contain border-b border-ink px-4 py-2 shadow-lg shadow-ink/10 sm:hidden'
                  : 'cm-nav-mobile-panel--dark fixed left-0 right-0 z-[200] overflow-y-auto overscroll-contain border-b border-white/[0.12] px-4 py-2 shadow-lg shadow-black/25 sm:hidden'
              }
              style={{
                top: menuTop,
                maxHeight: `min(24rem, calc(100dvh - ${menuTop}px - 8px))`,
              }}
              role="navigation"
              aria-label="Pages"
            >
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass(homeLight)}
                >
                  {label}
                </NavLink>
              ))}
            </div>,
            document.body
          )
        : null}
    </nav>
  )
}
