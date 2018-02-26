import { Notifications } from 'expo'
import { ADD, REMOVE, UPDATE, REMOVE_PAST } from './types'

export const addNotification = (notification) => ({
  type: ADD,
  async payload () {
    const notificationId = await Notifications.scheduleLocalNotificationAsync({
      title: notification.title
    }, {
      time: notification.time
    })
    return {...notification, notificationId}
  }
})

export const removeNotification = (id) => ({
  type: REMOVE,
  async payload () {
    await Notifications.cancelScheduledNotificationAsync(id)
    return id
  }
})

export const updateNotification = (notification) => ({
  type: UPDATE,
  payload: notification
})

// todo temporary https://github.com/react-community/create-react-native-app/issues/481
export const removePast = () => ({
  type: REMOVE_PAST
})
