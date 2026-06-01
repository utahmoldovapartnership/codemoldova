import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { parseInlineMarkdown, parseLessonBlocks, splitMainPoint } from './lessonMarkdown.js'

describe('parseInlineMarkdown', () => {
  it('parses bold and inline code', () => {
    const segs = parseInlineMarkdown('**Notebook:** run `python3 hi.py`')
    assert.deepEqual(segs, [
      { type: 'bold', value: 'Notebook:' },
      { type: 'text', value: ' run ' },
      { type: 'code', value: 'python3 hi.py' },
    ])
  })

  it('parses bold-wrapped inline code without showing raw backticks', () => {
    const segs = parseInlineMarkdown('Use **`print()`** and **`input()`** today.')
    assert.deepEqual(segs, [
      { type: 'text', value: 'Use ' },
      { type: 'code', value: 'print()' },
      { type: 'text', value: ' and ' },
      { type: 'code', value: 'input()' },
      { type: 'text', value: ' today.' },
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

describe('splitMainPoint', () => {
  it('does not split on a period inside inline code', () => {
    const { title, body } = splitMainPoint(
      'Use full paths to your venv Python and your `.py` file in crontab.',
    )
    assert.equal(body, '')
    assert.match(title, /\.py` file in crontab\.$/)
  })

  it('splits title and body on a real sentence boundary', () => {
    const { title, body } = splitMainPoint('Ship the script. Test cron before you leave.')
    assert.equal(title, 'Ship the script.')
    assert.equal(body, 'Test cron before you leave.')
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

  it('parses fenced code blocks', () => {
    const blocks = parseLessonBlocks('Intro.\n\n```bash\ngit clone repo\ncd repo\n```\n\n1. **Next**')
    assert.equal(blocks.length, 3)
    assert.equal(blocks[0].type, 'p')
    assert.equal(blocks[1].type, 'pre')
    assert.equal(blocks[1].lang, 'bash')
    assert.match(blocks[1].code, /git clone/)
    assert.equal(blocks[2].type, 'ol')
  })
})
