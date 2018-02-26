import * as actions from './actions'
import * as types from './types'

test('actions should create an action to add a todo', () => {
  const todo = {
    id: 1,
    name: 'test name',
    date: {year: 2017, month: 8, day: 5},
    time: {hour: 1, minute: 40}
  }
  const expectedAction = {
    type: types.ADD,
    payload: todo
  }
  expect(actions.add(todo)).toEqual(expectedAction)
})

test('actions should create an action to update a todo', () => {
  const todo = {
    id: 1,
    name: 'test name',
    date: {year: 2017, month: 8, day: 5},
    time: {hour: 1, minute: 40}
  }
  const expectedAction = {
    type: types.UPDATE,
    payload: todo
  }
  expect(actions.update(todo)).toEqual(expectedAction)
})

test('actions should create an action to update a todo', () => {
  const id = 'abc123'
  const expectedAction = {
    type: types.REMOVE,
    payload: id
  }
  expect(actions.remove(id)).toEqual(expectedAction)
})
