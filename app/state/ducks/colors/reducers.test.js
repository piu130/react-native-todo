import reducer from './reducers'
import * as types from './types'
import * as themes from './themes'

describe('tmpTodo reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(themes.dark)
  })

  test('should handle CHANGE_THEME', () => {
    expect(reducer(null, {
      type: types.CHANGE_THEME,
      payload: themes.pink
    })).toEqual(themes.pink)

    expect(reducer(themes.dark, {
      type: types.CHANGE_THEME,
      payload: themes.pink
    })).toEqual(themes.pink)
  })

  test('should handle CHANGE_COLORS', () => {
    const newColors = {
      colorPrimary: '#f0f0f0',
      colorPrimaryDark: '#f1f1f1'
    }

    expect(reducer(null, {
      type: types.CHANGE_COLORS,
      payload: newColors
    })).toEqual({
      ...newColors,
      id: 'custom'
    })

    expect(reducer(themes.dark, {
      type: types.CHANGE_COLORS,
      payload: newColors
    })).toEqual({
      ...themes.dark,
      ...newColors,
      id: 'custom'
    })
  })
})
