import { ADD, UPDATE, REMOVE } from './types'
import { sortTodosByDate } from './selectors'
import { createReducer } from '../../../utils/index'

const todoReducer = createReducer([])({
  [ADD]: (state, action) => sortTodosByDate([...state, action.payload]),
  [UPDATE]: (state, action) => sortTodosByDate([...state.filter(todo => todo.id !== action.payload.id), action.payload]),
  [REMOVE]: (state, action) => state.filter(todo => todo.id !== action.payload)
})

export default todoReducer
