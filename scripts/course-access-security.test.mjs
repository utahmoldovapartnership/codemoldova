/**
 * Post-build checks for known client-side gate bypasses.
 * Run: npm run test:security
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  COURSE_ACCESS_CODE,
  createCourseUnlockToken,
  isValidCourseUnlockToken,
} from '../src/lib/courseAccess.js'

const root = join(fileURLToPath(new URL('..', import.meta.url)))
const distDir = join(root, 'dist')
const publicLessonDir = join(root, 'public', 'lesson')
const appSource = readFileSync(join(root, 'src', 'App.jsx'), 'utf8')

function walkJsFiles(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    const stat = statSync(path)
    if (stat.isDirectory()) walkJsFiles(path, files)
    else if (name.endsWith('.js')) files.push(path)
  }
  return files
}

describe('course access security audit', () => {
  it('mockup routes use dev-only stub import (production uses empty stub)', () => {
    assert.match(appSource, /@course-dev-routes/, 'App should import mockups via dev-only alias')
    assert.doesNotMatch(appSource, /from '\.\/pages\/LessonMockup/, 'App should not statically import mockup pages')
  })

  it('legacy localStorage flag "1" is not a valid unlock token', () => {
    assert.equal(isValidCourseUnlockToken('1'), false)
  })

  it('only the derived token validates', () => {
    assert.equal(isValidCourseUnlockToken(createCourseUnlockToken()), true)
    assert.equal(isValidCourseUnlockToken('codemoldova-course-access-v1'), false)
  })

  it('production bundle does not ship mockup preview pages', () => {
    const jsFiles = walkJsFiles(distDir)
    const bundle = jsFiles.map((f) => readFileSync(f, 'utf8')).join('\n')
    assert.doesNotMatch(bundle, /Course page preview/, 'CourseMockup should not be in production JS')
    assert.doesNotMatch(bundle, /Lesson preview ·/, 'LessonMockup should not be in production JS')
    assert.doesNotMatch(bundle, /Resources preview ·/, 'ResourcesMockup should not be in production JS')
  })

  it('legacy mockup URLs redirect to gated /course in App routes', () => {
    assert.match(appSource, /path="\/course-mockup" element=\{<Navigate to="\/course"/)
    assert.match(appSource, /path="\/lesson-mockup" element=\{<Navigate to="\/course"/)
    assert.match(appSource, /path="\/resources-mockup" element=\{<Navigate to="\/course"/)
  })

  it('documents: passphrase appears in client bundle (expected for front-end gate)', () => {
    const jsFiles = walkJsFiles(distDir)
    const bundle = jsFiles.map((f) => readFileSync(f, 'utf8')).join('\n')
    assert.match(
      bundle,
      new RegExp(COURSE_ACCESS_CODE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
      'passphrase is embedded in JS — use server auth if you need real secrecy'
    )
  })

  it('documents: static lesson files in /public are directly reachable', () => {
    const files = readdirSync(publicLessonDir).filter((n) => n.endsWith('.ipynb') || n.endsWith('.py'))
    assert.ok(files.length > 0, 'expected downloadable lesson assets under public/lesson')
    console.warn(
      `[security note] ${files.length} files under public/lesson are public URLs (e.g. /lesson/week1_intro.ipynb). ` +
        'A client-only gate cannot protect them; move behind storage or edge auth if required.'
    )
  })

  it('documents: curriculum text ships in the JS bundle', () => {
    const jsFiles = walkJsFiles(distDir)
    const bundle = jsFiles.map((f) => readFileSync(f, 'utf8')).join('\n')
    assert.match(bundle, /curriculum|getSessionByWeekAndDay|week1/i)
    console.warn(
      '[security note] Lesson copy lives in the downloaded JS bundle. Determined users can read it without the gate.'
    )
  })
})
