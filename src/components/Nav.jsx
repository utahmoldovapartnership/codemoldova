import { useState, useEffect, useId } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/resources', label: 'Resources' },
]

const linkClass = ({ isActive }) =>
  `rounded-elem px-4 py-2 font-mono text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon ${
    isActive ? 'bg-white/[0.08] text-primary' : 'text-muted hover:text-primary'
  }`

const mobileLinkClass = ({ isActive }) =>
  `flex min-h-11 items-center rounded-elem px-2 font-mono text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon ${
    isActive ? 'bg-white/[0.06] text-primary' : 'text-muted active:bg-white/[0.04]'
  }`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

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
      className="sticky top-0 z-50 border-b border-white/[0.08] bg-surface/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur"
      aria-label="Primary"
    >
      <div className="layout-shell flex items-center justify-between gap-3 py-3 sm:py-4">
        <NavLink
          to="/"
          className="flex h-11 min-w-0 shrink items-center font-display text-lg font-extrabold leading-[1.08] tracking-tight text-primary focus-visible:rounded-elem focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon sm:text-xl"
          onClick={() => setOpen(false)}
        >
          Code<span className="text-mon">Moldova</span>
        </NavLink>

        <div className="hidden gap-1 sm:flex">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-elem sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-muted transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            aria-hidden
          />
          <span
            className={`block h-0.5 w-6 bg-muted transition-opacity ${open ? 'opacity-0' : ''}`}
            aria-hidden
          />
          <span
            className={`block h-0.5 w-6 bg-muted transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            aria-hidden
          />
        </button>
      </div>

      {open && (
        <div
          id={menuId}
          className="absolute left-0 right-0 top-full z-[60] max-h-[min(70vh,24rem)] overflow-y-auto overscroll-contain border-b border-white/[0.12] bg-surface/95 px-4 py-2 shadow-lg shadow-black/25 backdrop-blur sm:hidden"
          role="navigation"
          aria-label="Mobile"
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={mobileLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
