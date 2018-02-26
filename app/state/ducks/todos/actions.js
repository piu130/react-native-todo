import { ADD, UPDATE, REMOVE } from './types'

export const add = todo => ({
  type: ADD,
  payload: todo
})

export const update = todo => ({
  type: UPDATE,
  payload: todo
})

export const remove = id => ({
  type: REMOVE,
  payload: id
})
