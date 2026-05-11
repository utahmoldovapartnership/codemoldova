import { NavLink } from 'react-router-dom'
import BrandMark from './BrandMark.jsx'
import PixelIcon from './PixelIcon.jsx'
import { whatsappInviteUrl } from '../data/site.js'

const courseLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/resources', label: 'Resources' },
]

const focusRing = (homeLight) =>
  homeLight
    ? 'focus-visible:rounded-elem focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dart'
    : 'focus-visible:rounded-elem focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mon'

/** Shared typography for Course + Connect links (matches Nav route links). */
function footerLinkBase(homeLight) {
  return `cm-link-sweep inline-flex rounded-elem px-3 py-2 font-mono text-[11px] uppercase tracking-[0.3em] transition-colors ${focusRing(homeLight)}`
}

function courseLinkClass(homeLight) {
  return ({ isActive }) =>
    `${footerLinkBase(homeLight)} ${
      homeLight
        ? isActive
          ? 'font-bold text-ink'
          : 'font-normal text-ink/60 hover:text-ink'
        : isActive
          ? 'font-bold text-primary'
          : 'font-normal text-muted hover:text-primary'
    }`
}

export default function Footer({ homeLight = false }) {
  const year = new Date().getFullYear()

  return (
    <footer
      className={
        homeLight
          ? 'bg-paper pb-[max(1rem,env(safe-area-inset-bottom))] sm:pb-[max(1.25rem,env(safe-area-inset-bottom))]'
          : 'bg-bg pb-[max(1rem,env(safe-area-inset-bottom))] sm:pb-[max(1.25rem,env(safe-area-inset-bottom))]'
      }
      role="contentinfo"
    >
      <div
        className={
          homeLight ? 'layout-shell border-t border-hairline pt-12 sm:pt-14' : 'layout-shell border-t border-hairline-dark pt-12 sm:pt-14'
        }
      >
        <h2 id="footer-nav-heading" className="sr-only">
          Footer navigation
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-14">
          {/* Brand. Matches “logo + one line” pattern on course sites */}
          <div className="sm:col-span-2 lg:col-span-1">
            <NavLink
              to="/"
              end
              aria-label="CodeMoldova, home"
              className={`inline-flex items-center gap-2.5 ${focusRing(homeLight)}`}
            >
              <PixelIcon icon="terminal" size={14} className={`shrink-0 ${homeLight ? 'cm-logo-term-light' : 'cm-logo-term-dark'}`} />
              <BrandMark variant="footer" homeLight={homeLight} aria-hidden />
            </NavLink>
            <p className={`mt-3 font-mono text-[11px] uppercase tracking-[0.3em] ${homeLight ? 'text-ink/60' : 'text-muted'}`}>
              May to July 2026
            </p>
          </div>

          {/* External / community. Same list pattern, WhatsApp emphasized in blue */}
          <nav aria-labelledby="footer-connect-heading">
            <h3
              id="footer-connect-heading"
              className={
                homeLight
                  ? 'font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-ink/60'
                  : 'font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-muted'
              }
            >
              Connect
            </h3>
            <ul className="mt-3 list-none space-y-0 p-0">
              <li>
                <a
                  href={whatsappInviteUrl}
                  className={`${footerLinkBase(homeLight)} ${
                    homeLight ? 'text-dart hover:text-ink' : 'text-mon hover:text-primary'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/westonrwatson/codemoldova"
                  className={`${footerLinkBase(homeLight)} ${
                    homeLight ? 'text-ink/60 hover:text-ink' : 'text-muted hover:text-primary'
                  }`}
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
              className={
                homeLight
                  ? 'font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-ink/60'
                  : 'font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-muted'
              }
            >
              Course
            </h3>
            <ul className="mt-3 list-none space-y-0 p-0">
              {courseLinks.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink to={to} end={end} className={courseLinkClass(homeLight)}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Subfooter: line + copy use same layout-shell as nav/footer (max-w-6xl + gutters) */}
      <div
        className={
          homeLight
            ? 'layout-shell mt-12 border-t border-hairline/60 pt-10 pb-3 sm:mt-14 sm:pt-10 sm:pb-3'
            : 'layout-shell mt-12 border-t border-hairline-dark/50 pt-10 pb-3 sm:mt-14 sm:pt-10 sm:pb-3'
        }
      >
        <p
          className={`text-center font-body text-sm leading-relaxed ${
            homeLight ? 'text-ink/70' : 'text-muted'
          }`}
        >
          © {year} CodeMoldova. All rights reserved.
        </p>
        <p
          className={`mx-auto mt-3 max-w-3xl text-center font-body text-sm leading-relaxed ${
            homeLight ? 'text-ink/70' : 'text-muted/90'
          }`}
        >
          This course is brought to you by the{' '}
          <a
            href="https://www.utahmoldovabusiness.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`cm-link-sweep underline underline-offset-2 ${homeLight ? '' : 'cm-link-sweep--dark'}`}
          >
            Utah Moldova Business Partnership
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          . A non-profit collaboration committed to benefiting the economic state of the Republic of Moldova.
        </p>
      </div>
    </footer>
  )
}
