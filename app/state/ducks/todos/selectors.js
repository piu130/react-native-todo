import moment from 'moment'

export const sortTodosByDate = todos => todos.sort((todo1, todo2) => {
  if (!todo1.date) return -1
  if (!todo2.date) return 1
  const date1 = moment({...todo1.date, ...todo1.time})
  const date2 = moment({...todo2.date, ...todo2.time})
  if (date1.isBefore(date2)) return -1
  return 1
})
