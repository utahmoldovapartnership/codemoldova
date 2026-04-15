import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const CODE = 'Code'
const MOLDOVA = 'Moldova'

const STORAGE_KEY = 'cm-hero-title-typed-v1'

/** Empty line + blinking cursor before the first character appears. */
const CURSOR_BEFORE_TYPE_MS = 520

/** Each step shows `full`; `ms` is the wait before the next step (typing pace + pauses). */
const TYPING_STEPS = [
  { full: 'C', ms: 170 },
  { full: 'Co', ms: 170 },
  { full: 'Cod', ms: 170 },
  { full: 'Code', ms: 220 },
  { full: 'CodeM', ms: 165 },
  { full: 'CodeMo', ms: 165 },
  { full: 'CodeMol', ms: 165 },
  { full: 'CodeMold', ms: 165 },
  { full: 'CodeMoldo', ms: 165 },
  { full: 'CodeMoldov', ms: 165 },
  { full: 'CodeMoldovx', ms: 720 },
  { full: 'CodeMoldov', ms: 420 },
  { full: 'CodeMoldova', ms: 0 },
]

function hasSeenAnimation() {
  if (typeof window === 'undefined') return true
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return true
  }
}

function markAnimationSeen() {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* private mode / quota */
  }
}

function getInitialHeroTitleState() {
  if (typeof window === 'undefined') {
    return { code: CODE, moldova: MOLDOVA, showCursor: false }
  }
  if (hasSeenAnimation()) {
    return { code: CODE, moldova: MOLDOVA, showCursor: false }
  }
  const desktop = window.matchMedia('(min-width: 768px)').matches
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (desktop && !reduce) {
    return { code: '', moldova: '', showCursor: true }
  }
  return { code: CODE, moldova: MOLDOVA, showCursor: false }
}

/** Dev Strict Mode runs effects twice; only one intro run per page load. */
let introStartedThisPage = false

export default function HeroTitle({ className = '' }) {
  const initial = useMemo(() => getInitialHeroTitleState(), [])
  const [code, setCode] = useState(initial.code)
  const [moldova, setMoldova] = useState(initial.moldova)
  const [showCursor, setShowCursor] = useState(initial.showCursor)
  const [isDesktop, setIsDesktop] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const timeoutRef = useRef(0)
  const runIdRef = useRef(0)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      setIsDesktop(mq.matches)
      setReducedMotion(mqReduce.matches)
    }
    sync()
    mq.addEventListener('change', sync)
    mqReduce.addEventListener('change', sync)
    return () => {
      mq.removeEventListener('change', sync)
      mqReduce.removeEventListener('change', sync)
    }
  }, [])

  const clearTimer = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = 0
    }
  }

  const play = useCallback(() => {
    if (!isDesktop || reducedMotion) return
    runIdRef.current += 1
    const runId = runIdRef.current
    clearTimer()
    setCode('')
    setMoldova('')
    setShowCursor(true)

    const runStep = (i) => {
      if (runId !== runIdRef.current) return
      const step = TYPING_STEPS[i]
      if (!step) {
        setShowCursor(false)
        return
      }

      setCode(step.full.slice(0, CODE.length))
      setMoldova(step.full.slice(CODE.length))

      if (i === TYPING_STEPS.length - 1) {
        timeoutRef.current = window.setTimeout(() => {
          if (runId !== runIdRef.current) return
          setShowCursor(false)
          markAnimationSeen()
        }, 950)
        return
      }

      timeoutRef.current = window.setTimeout(() => runStep(i + 1), step.ms)
    }

    timeoutRef.current = window.setTimeout(() => {
      if (runId !== runIdRef.current) return
      runStep(0)
    }, CURSOR_BEFORE_TYPE_MS)
  }, [isDesktop, reducedMotion])

  useEffect(() => {
    if (hasSeenAnimation()) return
    if (!isDesktop || reducedMotion) return
    if (introStartedThisPage) return
    introStartedThisPage = true
    play()
  }, [isDesktop, reducedMotion, play])

  useEffect(
    () => () => {
      runIdRef.current += 1
      clearTimer()
    },
    [],
  )

  return (
    <h1 className={className} aria-label="CodeMoldova">
      <span className="text-primary">{code}</span>
      <span className="text-mon">{moldova}</span>
      {showCursor ? (
        <span
          className="ml-0.5 inline-block h-[0.72em] w-[3px] translate-y-[0.06em] rounded-sm bg-mon motion-safe:animate-hero-cursor-blink motion-reduce:opacity-90"
          aria-hidden
        />
      ) : null}
    </h1>
  )
}
