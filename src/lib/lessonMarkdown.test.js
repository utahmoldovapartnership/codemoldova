import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { parseInlineMarkdown, parseLessonBlocks } from './lessonMarkdown.js'

describe('parseInlineMarkdown', () => {
  it('parses bold and inline code', () => {
    const segs = parseInlineMarkdown('**Notebook:** run `python3 hi.py`')
    assert.deepEqual(segs, [
      { type: 'bold', value: 'Notebook:' },
      { type: 'text', value: ' run ' },
      { type: 'code', value: 'python3 hi.py' },
    ])
  })

  it('parses double-backtick keyboard shortcuts', () => {
    const segs = parseInlineMarkdown('Press `` Ctrl+` `` to open.')
    assert.equal(segs.length, 3)
    assert.equal(segs[0].type, 'text')
    assert.equal(segs[1].type, 'kbd')
    assert.equal(segs[1].value, ' Ctrl+` ')
  })
})

describe('parseLessonBlocks', () => {
  it('splits paragraphs on blank lines', () => {
    const blocks = parseLessonBlocks('**A:** one.\n\n**B:** two.')
    assert.equal(blocks.length, 2)
    assert.equal(blocks[0].type, 'p')
    assert.equal(blocks[1].type, 'p')
  })

  it('parses numbered lists', () => {
    const blocks = parseLessonBlocks('Intro.\n\n1. **First**\n2. **Second**')
    assert.equal(blocks.length, 2)
    assert.equal(blocks[1].type, 'ol')
    assert.equal(blocks[1].items.length, 2)
  })

  it('parses markdown tables and skips separator row', () => {
    const blocks = parseLessonBlocks('| A | B |\n|---|---|\n| 1 | 2 |')
    assert.equal(blocks.length, 1)
    assert.equal(blocks[0].type, 'table')
    assert.deepEqual(blocks[0].rows, [
      ['A', 'B'],
      ['1', '2'],
    ])
  })
})
