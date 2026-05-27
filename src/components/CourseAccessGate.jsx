import { useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { coursePriceAmount } from '../data/site.js'
import {
  COURSE_ACCESS_STORAGE_KEY,
  isValidAccessCode,
  persistCourseAccessUnlocked,
  readCourseAccessUnlocked,
} from '../lib/courseAccess.js'

const NAV_SELECTOR = 'nav[aria-label="Main menu"]'

function readNavBottom() {
  if (typeof document === 'undefined') return 56
  const nav = document.querySelector(NAV_SELECTOR)
  return nav ? nav.getBoundingClientRect().bottom : 56
}

function useNavBottomOffset(active) {
  const [offset, setOffset] = useState(readNavBottom)

  useLayoutEffect(() => {
    if (!active) return undefined

    const nav = document.querySelector(NAV_SELECTOR)
    if (!nav) return undefined

    const sync = () => {
      setOffset(nav.getBoundingClientRect().bottom)
    }

    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(nav)
    window.addEventListener('resize', sync)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', sync)
    }
  }, [active])

  return offset
}

function AccessDialog({ navOffset, code, error, onCodeChange, onSubmit }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center overflow-y-auto overscroll-contain bg-paper/60 px-4 py-6 sm:py-10"
      style={{ top: navOffset }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-access-title"
      aria-describedby="course-access-desc"
    >
      <div className="my-auto w-full max-w-md border border-hairline bg-paper p-6 shadow-[0_24px_64px_rgba(0,0,0,0.12)] sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">Course materials</p>
        <h2 id="course-access-title" className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Enter your access code
        </h2>
        <p id="course-access-desc" className="mt-4 text-sm leading-relaxed text-ink/75">
          After you complete payment ({coursePriceAmount}), you&apos;ll receive a code by message. Enter it below to
          unlock the course roadmap, lessons, and resources.
        </p>

        <form onSubmit={onSubmit} className="mt-6">
          <label htmlFor="course-access-code" className="sr-only">
            Access code
          </label>
          <input
            id="course-access-code"
            type="text"
            name="accessCode"
            autoComplete="off"
            spellCheck={false}
            value={code}
            onChange={onCodeChange}
            placeholder="Your code"
            className={`w-full border bg-paper px-4 py-3 font-mono text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-dart/35 ${
              error ? 'border-val' : 'border-hairline'
            }`}
          />
          {error ? (
            <p className="mt-2 text-sm text-val" role="alert">
              That code doesn&apos;t match. Check your message and try again.
            </p>
          ) : null}

          <button
            type="submit"
            className="hm-btn-dart mt-4 flex w-full min-h-12 items-center justify-center px-4 py-3 font-mono text-[11px] uppercase tracking-[0.25em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dart"
          >
            <span>Unlock course</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default function CourseAccessGate({ children }) {
  const [unlocked, setUnlocked] = useState(() => readCourseAccessUnlocked())
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const navOffset = useNavBottomOffset(!unlocked)

  function handleSubmit(e) {
    e.preventDefault()
    if (isValidAccessCode(code)) {
      persistCourseAccessUnlocked()
      setError(false)
      setUnlocked(true)
      return
    }
    setError(true)
  }

  useEffect(() => {
    setUnlocked(readCourseAccessUnlocked())
    const onStorage = (e) => {
      if (e.key === null || e.key === COURSE_ACCESS_STORAGE_KEY) {
        setUnlocked(readCourseAccessUnlocked())
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => {
    if (unlocked) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [unlocked])

  if (unlocked) return children

  const lockedMinHeight =
    navOffset > 0 ? { minHeight: `calc(100dvh - ${navOffset}px)` } : { minHeight: 'calc(100dvh - 3.5rem)' }

  return (
    <>
      <div className="relative overflow-hidden" style={lockedMinHeight}>
        <div
          className="pointer-events-none h-full select-none blur-[6px] brightness-[0.92] saturate-50"
          aria-hidden
        >
          {children}
        </div>
      </div>

      {createPortal(
        <AccessDialog
          navOffset={navOffset}
          code={code}
          error={error}
          onCodeChange={(e) => {
            setCode(e.target.value)
            if (error) setError(false)
          }}
          onSubmit={handleSubmit}
        />,
        document.body
      )}
    </>
  )
}
