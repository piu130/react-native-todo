import { combineReducers } from 'redux'
import * as entitiesReducers from './entities'
import * as uiReducers from './ui'

export const entities = combineReducers(entitiesReducers)
export const ui = combineReducers(uiReducers)
