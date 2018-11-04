import * as actions from './actions'
import * as types from './types'
import * as themes from './themes'

describe('tmpTodo action', () => {
  test('should create an action to change theme', () => {
    const theme = themes.pink.id
    const expectedAction = {
      type: types.CHANGE_THEME,
      payload: themes.pink
    }
    expect(actions.changeTheme(theme)).toEqual(expectedAction)
  })

  test('should create an action to change color', () => {
    const colors = {
      colorPrimary: '#212121',
      colorPrimaryDark: '#000000'
    }
    const expectedAction = {
      type: types.CHANGE_COLORS,
      payload: colors
    }
    expect(actions.changeColors(colors)).toEqual(expectedAction)
  })
})
