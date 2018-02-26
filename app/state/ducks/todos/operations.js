import { notificationsOperations } from '../notifications'
import * as actions from './actions'

export const putTodo = todo => dispatch => {
  dispatch(notificationsOperations.updateNotificationFromTodo(todo))
  dispatch(actions.update(todo))
}

export const deleteTodo = id => (dispatch, getState) => {
  const todo = getState().todos.find(todo => todo.id === id)
  if (todo) dispatch(notificationsOperations.removeNotificationFromTodo(todo))
  dispatch(actions.remove(id))
}
