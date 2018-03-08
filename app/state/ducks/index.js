import { combineReducers } from 'redux'
import * as uiReducers from './ui'

export { default as colors } from './colors'
export { default as notifications } from './notifications'
export { default as tmpTodo } from './tmpTodo'
export { default as todos } from './todos'

export const ui = combineReducers(uiReducers)
