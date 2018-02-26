import * as actions from './actions'
import { todosOperations } from '../todos'

export const addNew = actions.addNew

export const set = actions.set

export const remove = actions.remove

export const changeName = actions.changeName
export const changeDate = actions.changeDate
export const changeTime = actions.changeTime

export const clearDateTime = actions.clearDateTime

export const save = () => (dispatch, getState) => {
  dispatch(todosOperations.putTodo(getState().tmpTodo))
  dispatch(actions.remove())
}

export const load = id => (dispatch, getState) => {
  const todo = getState().todos.find(todo => todo.id === id)
  if (todo) dispatch(actions.set(todo))
  else dispatch(actions.addNew())
}
