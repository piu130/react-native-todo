import { NEW, SET, REMOVE, CHANGE_PROPERTY, CLEAR_DATETIME } from './types'
import { createReducer } from '../../../utils'

const todoReducer = createReducer(null)({
  [NEW]: (state, { payload }) => payload,
  [SET]: (state, { payload }) => payload,
  [REMOVE]: (state, action) => null,
  [CHANGE_PROPERTY]: (state, { payload }) => ({ ...state, [payload.property]: payload.value }),
  [CLEAR_DATETIME]: state => {
    const { date, time, ...rest } = state
    return rest
  }
})

export default todoReducer
