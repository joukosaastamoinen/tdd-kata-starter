import test from 'tape'
import foo from './foo'

test('foo', t => {
  t.test('', assert => {
    const expected = 'bar'
    const actual = foo()
    assert.equal(actual, expected, 'Should return bar')
    assert.end()
  })
})
