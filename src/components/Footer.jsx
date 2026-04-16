import { NavLink } from 'react-router-dom'
import { slackInviteUrl } from '../data/site.js'

const courseLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/resources', label: 'Resources' },
]

const focusRing =
  'focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon'

/** Shared typography for Course + Connect links. */
const footerLinkBase = `block py-2.5 text-base font-mono transition-colors sm:py-2 ${focusRing}`

function courseLinkClass({ isActive }) {
  return `${footerLinkBase} ${isActive ? 'text-primary' : 'text-muted hover:text-primary'}`
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-bg pb-[max(1rem,env(safe-area-inset-bottom))] sm:pb-[max(1.25rem,env(safe-area-inset-bottom))]"
      role="contentinfo"
    >
      <div className="layout-shell border-t border-white/[0.08] pt-12 sm:pt-14">
        <h2 id="footer-nav-heading" className="sr-only">
          Footer navigation
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-14">
          {/* Brand. Matches “logo + one line” pattern on course sites */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-display text-lg font-extrabold tracking-tight text-primary sm:text-xl">
              <span className="block leading-relaxed">Code</span>
              <span className="-mt-1.5 block leading-none text-mon sm:-mt-2">Moldova</span>
            </div>
            <p className="mt-2 font-mono text-xs text-muted sm:text-sm">May to July 2026</p>
          </div>

          {/* External / community. Same list pattern, Slack emphasized in blue */}
          <nav aria-labelledby="footer-connect-heading">
            <h3
              id="footer-connect-heading"
              className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted"
            >
              Connect
            </h3>
            <ul className="mt-3 list-none space-y-0 p-0">
              <li>
                <a
                  href={slackInviteUrl}
                  className={`${footerLinkBase} text-mon hover:text-primary`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Slack
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/westonrwatson/codemoldova"
                  className={`${footerLinkBase} text-muted hover:text-primary`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website code on GitHub
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Site pages: grouped list, not buttons (common on .edu / bootcamp footers) */}
          <nav aria-labelledby="footer-course-heading">
            <h3
              id="footer-course-heading"
              className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted"
            >
              Course
            </h3>
            <ul className="mt-3 list-none space-y-0 p-0">
              {courseLinks.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink to={to} end={end} className={courseLinkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Subfooter: line + copy use same layout-shell as nav/footer (max-w-6xl + gutters) */}
      <div className="layout-shell mt-12 border-t border-white/[0.06] pt-10 pb-3 sm:mt-14 sm:pt-10 sm:pb-3">
        <p className="text-center font-mono text-xs leading-relaxed text-muted sm:text-sm">
          © {year} CodeMoldova. All rights reserved.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-center font-mono text-xs leading-relaxed text-muted/90 sm:text-sm">
          This website and the course are free. They are for students in the program and for people who want to apply.
          CodeMoldova is a nonprofit class.
        </p>
      </div>
    </footer>
  )
}
