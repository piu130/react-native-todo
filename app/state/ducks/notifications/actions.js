import { ADD, REMOVE, UPDATE, REMOVE_PAST } from './types'

export const addNotification = notification => ({
  type: ADD,
  payload: notification
})

export const removeNotification = id => ({
  type: REMOVE,
  payload: id
})

export const updateNotification = notification => ({
  type: UPDATE,
  payload: notification
})

// todo temporary https://github.com/react-community/create-react-native-app/issues/481
export const removePast = () => ({
  type: REMOVE_PAST
})
