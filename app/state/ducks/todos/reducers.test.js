import reducer from './reducers'
import * as types from './types'

describe('todos reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  test('should handle ADD', () => {
    expect(reducer([], {
      type: types.ADD,
      payload: {id: 'abc123', name: 'test name'}
    })).toEqual([
      {id: 'abc123', name: 'test name'}
    ])

    expect(reducer([{id: 'de23', name: 'first'}], {
      type: types.ADD,
      payload: {id: 'abc123', name: 'test name'}
    })).toEqual([
      {id: 'de23', name: 'first'},
      {id: 'abc123', name: 'test name'}
    ])
  })

  test('should handle UPDATE', () => {
    expect(reducer([], {
      type: types.UPDATE,
      payload: {id: 'abc123', name: 'test name'}
    })).toEqual([
      {id: 'abc123', name: 'test name'}
    ])

    expect(reducer([{id: 'de23', name: 'first'}], {
      type: types.UPDATE,
      payload: {id: 'de23', name: 'test name'}
    })).toEqual([
      {id: 'de23', name: 'test name'}
    ])

    expect(reducer([{id: 'de23', name: 'first'}], {
      type: types.UPDATE,
      payload: {id: 'abc123', name: 'test name'}
    })).toEqual([
      {id: 'de23', name: 'first'},
      {id: 'abc123', name: 'test name'}
    ])
  })

  test('should handle REMOVE', () => {
    expect(reducer([], {
      type: types.REMOVE,
      payload: 'abc123'
    })).toEqual([])

    expect(reducer([{id: 'de23', name: 'first'}], {
      type: types.REMOVE,
      payload: 'de23'
    })).toEqual([])

    expect(reducer([{id: 'de23', name: 'first'}], {
      type: types.REMOVE,
      payload: 'abc123'
    })).toEqual([
      {id: 'de23', name: 'first'}
    ])
  })
})
