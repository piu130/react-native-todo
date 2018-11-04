import reducer from './reducers'
import * as types from './types'

describe('tmpTodo reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null)
  })

  test('should handle NEW', () => {
    expect(reducer(null, {
      type: types.NEW,
      payload: { id: 'abc123' }
    })).toEqual({ id: 'abc123' })

    expect(reducer({ id: 'de23', name: 'first' }, {
      type: types.NEW,
      payload: { id: 'abc123', name: 'test name' }
    })).toEqual({ id: 'abc123', name: 'test name' })
  })

  test('should handle SET', () => {
    expect(reducer(null, {
      type: types.SET,
      payload: { id: 'abc123' }
    })).toEqual({ id: 'abc123' })

    expect(reducer({ id: 'de23', name: 'first' }, {
      type: types.SET,
      payload: { id: 'abc123', name: 'test name' }
    })).toEqual({ id: 'abc123', name: 'test name' })
  })

  test('should handle REMOVE', () => {
    expect(reducer(null, {
      type: types.REMOVE
    })).toEqual(null)

    expect(reducer({ id: 'de23', name: 'first' }, {
      type: types.REMOVE
    })).toEqual(null)
  })

  test('should handle CHANGE_PROPERTY', () => {
    expect(reducer(null, {
      type: types.CHANGE_PROPERTY,
      payload: {
        property: 'name',
        value: 'newName'
      }
    })).toEqual({ name: 'newName' })

    expect(reducer({ id: 'de23', name: 'first' }, {
      type: types.CHANGE_PROPERTY,
      payload: {
        property: 'name',
        value: 'newName'
      }
    })).toEqual({ id: 'de23', name: 'newName' })
  })
})
