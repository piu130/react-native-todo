import { NEW, SET, REMOVE, CHANGE_PROPERTY, CLEAR_DATETIME } from './types'
import cuid from 'cuid'

export const addNew = () => ({
  type: NEW,
  payload: { id: cuid() }
})

export const set = todo => ({
  type: SET,
  payload: todo
})

export const remove = () => ({
  type: REMOVE
})

export const changeProperty = (property, value) => ({
  type: CHANGE_PROPERTY,
  payload: {
    property,
    value
  }
})
export const changeName = name => changeProperty('name', name)
export const changeDate = date => changeProperty('date', date)
export const changeTime = time => changeProperty('time', time)

export const clearDateTime = () => ({
  type: CLEAR_DATETIME
})
