import { CHANGE_COLORS, CHANGE_THEME } from './types'
import { themes } from '.'

export const changeColors = newColors => ({
  type: CHANGE_COLORS,
  payload: newColors
})

export const changeTheme = name => ({
  type: CHANGE_THEME,
  payload: themes[name]
})
