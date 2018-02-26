import * as actions from './actions'
import moment from 'moment'

export const addNotification = actions.addNotification

export const addNotificationFromTodo = (todo) => (dispatch, getState) => {
  if (!todo.date) return
  const time = moment({...todo.date, ...todo.time})
  if (time.isBefore(moment())) return
  dispatch(addNotification({
    todoId: todo.id,
    title: todo.name,
    time: time.toDate()
  }))

  // todo temporary https://github.com/react-community/create-react-native-app/issues/481
  dispatch(removePast())
}

export const removeNotification = actions.removeNotification

export const removeNotificationFromTodo = (todo) => (dispatch, getState) => {
  const notification = getState().notifications.find(notification => notification.todoId === todo.id)
  if (notification) dispatch(removeNotification(notification.notificationId))
}

export const updateNotification = actions.updateNotification

export const updateNotificationFromTodo = (todo) => (dispatch, getState) => {
  removeNotificationFromTodo(todo)(dispatch, getState)
  addNotificationFromTodo(todo)(dispatch, getState)
}

// todo temporary https://github.com/react-community/create-react-native-app/issues/481
export const removePast = actions.removePast
