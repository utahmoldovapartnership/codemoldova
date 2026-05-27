/** localStorage key for unlock token */
export const COURSE_ACCESS_STORAGE_KEY = 'codemoldova-course-access-v1'

/** Cookie name (mirrors localStorage for Safari / private-mode resilience) */
export const COURSE_ACCESS_COOKIE_NAME = 'codemoldova_course_access'

/** 1 year — students stay signed in on this device */
export const COURSE_ACCESS_MAX_AGE_SEC = 60 * 60 * 24 * 365

/**
 * Access code for paid students (share after payment).
 * Override in production via VITE_COURSE_ACCESS_CODE without redeploying logic.
 */
export const COURSE_ACCESS_CODE =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_COURSE_ACCESS_CODE) ||
  'build-ship-moldova-26'

export function normalizeAccessInput(input) {
  return String(input ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
}

export function isValidAccessCode(input, accessCode = COURSE_ACCESS_CODE) {
  return normalizeAccessInput(input) === normalizeAccessInput(accessCode)
}

/** Deterministic unlock token — not guessable as plain "1". */
export function createCourseUnlockToken(accessCode = COURSE_ACCESS_CODE) {
  const payload = `${normalizeAccessInput(accessCode)}::codemoldova-course-unlock-v1`
  let hash = 2166136261
  for (let i = 0; i < payload.length; i += 1) {
    hash ^= payload.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return `cm_${(hash >>> 0).toString(36)}`
}

export function isValidCourseUnlockToken(token, accessCode = COURSE_ACCESS_CODE) {
  if (!token || typeof token !== 'string') return false
  return token === createCourseUnlockToken(accessCode)
}

function readCookieToken() {
  if (typeof document === 'undefined') return null
  const pattern = new RegExp(`(?:^|; )${COURSE_ACCESS_COOKIE_NAME.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}=([^;]*)`)
  const match = document.cookie.match(pattern)
  if (!match) return null
  try {
    return decodeURIComponent(match[1])
  } catch {
    return null
  }
}

function writeCookieToken(token) {
  if (typeof document === 'undefined') return
  const secure = typeof window !== 'undefined' && window.location?.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${COURSE_ACCESS_COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; Max-Age=${COURSE_ACCESS_MAX_AGE_SEC}; SameSite=Lax${secure}`
}

function readLocalToken() {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage.getItem(COURSE_ACCESS_STORAGE_KEY)
  } catch {
    return null
  }
}

function writeLocalToken(token) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(COURSE_ACCESS_STORAGE_KEY, token)
  } catch {
    /* quota / private mode — cookie may still work */
  }
}

/** Upgrade older builds that stored literal "1". */
function migrateLegacyUnlockFlag() {
  if (typeof window === 'undefined') return
  try {
    const legacy = window.localStorage.getItem(COURSE_ACCESS_STORAGE_KEY)
    if (legacy === '1') persistCourseAccessUnlocked()
  } catch {
    /* ignore */
  }
}

export function readStoredUnlockToken() {
  migrateLegacyUnlockFlag()
  const local = readLocalToken()
  if (isValidCourseUnlockToken(local)) return local
  const cookie = readCookieToken()
  if (isValidCourseUnlockToken(cookie)) {
    writeLocalToken(cookie)
    return cookie
  }
  return null
}

export function readCourseAccessUnlocked() {
  return readStoredUnlockToken() != null
}

export function persistCourseAccessUnlocked() {
  const token = createCourseUnlockToken()
  writeLocalToken(token)
  writeCookieToken(token)
  return token
}

export function clearCourseAccessUnlocked() {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.removeItem(COURSE_ACCESS_STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }
  if (typeof document !== 'undefined') {
    document.cookie = `${COURSE_ACCESS_COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax`
  }
}
