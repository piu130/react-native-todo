import moment from 'moment'
import { ADD_FULFILLED, UPDATE_FULFILLED, REMOVE_FULFILLED, REMOVE_PAST } from './types'
import { createReducer } from '../../utils'

const colorsReducer = createReducer([])({
  [ADD_FULFILLED]: (state, action) => [...state, action.payload],
  [UPDATE_FULFILLED]: (state, action) => [...state.filter(notification => notification.notificationId !== action.payload.notificationId), action.payload],
  [REMOVE_FULFILLED]: (state, action) => state.filter(notification => notification.notificationId !== action.payload),

  // todo temporary https://github.com/react-community/create-react-native-app/issues/481
  [REMOVE_PAST]: (state, action) => state.filter(notification => !moment(notification.time).isBefore(moment()))
})

export default colorsReducer
