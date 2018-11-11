import * as actions from './actions'
import * as types from './types'

test('actions should create an action to add a new tmpTodo', () => {
  // todo better way to test random id?
  const actionObject = actions.addNew()
  expect(
    'type' in actionObject &&
    'payload' in actionObject &&
    actionObject.type === types.NEW &&
    typeof actionObject.payload.id === 'string'
  ).toEqual(true)
})

test('actions should create an action to set a tmpTodo', () => {
  const tmpTodo = {
    id: 1,
    name: 'test name',
    date: { year: 2017, month: 8, day: 5 },
    time: { hour: 1, minute: 40 }
  }
  const expectedAction = {
    type: types.SET,
    payload: tmpTodo
  }
  expect(actions.set(tmpTodo)).toEqual(expectedAction)
})

test('actions should create an action to remove tmpTodo', () => {
  const expectedAction = {
    type: types.REMOVE
  }
  expect(actions.remove()).toEqual(expectedAction)
})

test('actions should create an action to change property', () => {
  const property = 'name'
  const name = 'test'
  const expectedAction = {
    type: types.CHANGE_PROPERTY,
    payload: {
      property,
      value: name
    }
  }
  expect(actions.changeName(name)).toEqual(expectedAction)
})

test('actions should create an action to clear date time', () => {
  const expectedAction = {
    type: types.CLEAR_DATETIME
  }
  expect(actions.clearDateTime()).toEqual(expectedAction)
})
