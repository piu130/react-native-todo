import moment from 'moment'
import { ADD, UPDATE, REMOVE, REMOVE_PAST } from './types'
import { createReducer } from '../../utils'

const colorsReducer = createReducer([])({
  [ADD]: (state, action) => [...state, action.payload],
  [UPDATE]: (state, action) => [...state.filter(notification => notification.id !== action.payload.id), action.payload],
  [REMOVE]: (state, action) => state.filter(notification => notification.id !== action.payload),

  // todo temporary https://github.com/react-community/create-react-native-app/issues/481
  [REMOVE_PAST]: (state, action) => state.filter(notification => !moment(notification.time).isBefore(moment()))
})

export default colorsReducer
