import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getWeekLabel } from './curriculum.js'

describe('getWeekLabel', () => {
  it('uses week.label when set', () => {
    assert.equal(getWeekLabel(3), 'Terminal & scripts')
  })

  it('falls back to Monday session label', () => {
    assert.equal(getWeekLabel(1), 'Intro & How computers think')
  })
})
