// import { notificationsOperations } from '../notifications'
import * as actions from './actions'

export const postTodo = actions.add

export const putTodo = todo => (dispatch, getState) => {
  // dispatch(notificationsOperations.updateNotificationFromTodo(todo))
  dispatch(actions.update(todo))
}

export const deleteTodo = id => (dispatch, getState) => {
  // const notification = getState().notifications.find(notification => notification.todoId === id)
  // if (notification) dispatch(notificationsOperations.removeNotification(notification.notificationId))
  dispatch(actions.remove(id))
}
