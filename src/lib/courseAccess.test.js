import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  COURSE_ACCESS_CODE,
  COURSE_ACCESS_COOKIE_NAME,
  clearCourseAccessUnlocked,
  createCourseUnlockToken,
  isValidAccessCode,
  isValidCourseUnlockToken,
  normalizeAccessInput,
  persistCourseAccessUnlocked,
  readCourseAccessUnlocked,
} from './courseAccess.js'

describe('courseAccess', () => {
  it('normalizes access input (trim, lower case, spaces to hyphens)', () => {
    assert.equal(normalizeAccessInput('  Build Ship Moldova 26 '), 'build-ship-moldova-26')
  })

  it('accepts the configured passphrase', () => {
    assert.equal(isValidAccessCode(COURSE_ACCESS_CODE), true)
    assert.equal(isValidAccessCode('build ship moldova 26'), true)
  })

  it('rejects wrong passphrases', () => {
    assert.equal(isValidAccessCode('wrong-code'), false)
    assert.equal(isValidAccessCode(''), false)
  })

  it('creates a stable unlock token for the passphrase', () => {
    const a = createCourseUnlockToken()
    const b = createCourseUnlockToken()
    assert.equal(a, b)
    assert.notEqual(a, '1')
    assert.match(a, /^cm_/)
  })

  it('rejects forged unlock tokens', () => {
    assert.equal(isValidCourseUnlockToken('1'), false)
    assert.equal(isValidCourseUnlockToken('cm_fake'), false)
    assert.equal(isValidCourseUnlockToken(null), false)
  })

  it('accepts only the derived unlock token', () => {
    assert.equal(isValidCourseUnlockToken(createCourseUnlockToken()), true)
  })
})

describe('courseAccess browser storage', () => {
  it('persist/read round-trip with localStorage + cookie', () => {
    const store = new Map()
    let cookie = ''
    const prevLocal = globalThis.localStorage
    const prevDocument = globalThis.document

    globalThis.localStorage = {
      getItem: (k) => store.get(k) ?? null,
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k),
    }
    globalThis.document = {
      get cookie() {
        return cookie
      },
      set cookie(value) {
        cookie = value
      },
    }

    try {
      clearCourseAccessUnlocked()
      assert.equal(readCourseAccessUnlocked(), false)
      const token = persistCourseAccessUnlocked()
      assert.equal(readCourseAccessUnlocked(), true)

      store.clear()
      cookie = ''
      assert.equal(readCourseAccessUnlocked(), false)
      cookie = `${COURSE_ACCESS_COOKIE_NAME}=${encodeURIComponent(token)}; Path=/`
      assert.equal(readCourseAccessUnlocked(), true)

      clearCourseAccessUnlocked()
      assert.equal(readCourseAccessUnlocked(), false)
    } finally {
      globalThis.localStorage = prevLocal
      globalThis.document = prevDocument
    }
  })
})
