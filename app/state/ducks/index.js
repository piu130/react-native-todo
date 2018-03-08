import { combineReducers } from 'redux'
import * as entitiesReducers from './entities'
import * as uiReducers from './ui'

export { default as notifications } from './notifications'
export { default as todos } from './todos'

export const entities = combineReducers(entitiesReducers)
export const ui = combineReducers(uiReducers)
