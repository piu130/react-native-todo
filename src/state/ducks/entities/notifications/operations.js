import { scheduleLocalNotification, cancelLocalNotifications } from 'react-native-local-notification-android'
import * as actions from './actions'
import moment from 'moment'

export const addNotificationFromTodo = todo => dispatch => {
  if (!todo.date) return
  const time = moment({ ...todo.date, ...todo.time })
  if (time.isBefore(moment())) return

  const id = createPushId()
  const date = time.valueOf()
  scheduleLocalNotification({
    id,
    alertTitle: todo.name,
    alertBody: time.format('llll'),
    fireDate: date,
    smallIcon: 'ic_stat',
    channelId: 'default'
  })
  dispatch(actions.addNotification({
    todoId: todo.id,
    id,
    date
  }))

  // todo temporary https://github.com/react-community/create-react-native-app/issues/481
  dispatch(removePast())
}

export const removeNotificationFromTodo = todo => (dispatch, getState) => {
  const notification = getState().entities.notifications.find(notification => notification.todoId === todo.id)
  if (notification) {
    const id = notification.id
    cancelLocalNotifications({ id })
    dispatch(actions.removeNotification(id))
  }
}

export const updateNotificationFromTodo = todo => dispatch => {
  dispatch(removeNotificationFromTodo(todo))
  dispatch(addNotificationFromTodo(todo))
}

// todo temporary https://github.com/react-community/create-react-native-app/issues/481
export const removePast = actions.removePast

export const createPushId = () => Math.floor(Math.random() * 2 ** 31)
