import { CHANGE_COLORS, CHANGE_THEME } from './types'
import { dark } from './themes'
import { createReducer } from '../../utils'

export default createReducer(dark)({
  [CHANGE_COLORS]: (state, {payload}) => ({ ...state, ...payload, id: 'custom' }),
  [CHANGE_THEME]: (state, {payload}) => payload
})
