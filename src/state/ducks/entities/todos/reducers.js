import { ADD, UPDATE, REMOVE } from './types'
import { combineReducers } from 'redux'
import { createReducer } from '../../../utils/index'

const byId = createReducer({})({
  [ADD]: (state, { payload }) => ({ ...state, [payload.id]: payload }),
  [UPDATE]: (state, { payload }) => ({ ...state, [payload.id]: payload }),
  [REMOVE]: (state, { payload }) => {
    const { [payload]: todo, ...todos } = state
    return todos
  }
})

const allIds = createReducer([])({
  [ADD]: (state, { payload }) => [ ...state, payload.id ],
  [UPDATE]: (state, { payload }) => [ ...state, payload.id ],
  [REMOVE]: (state, { payload }) => state.filter(id => id !== payload)
})

export default combineReducers({ byId, allIds })
