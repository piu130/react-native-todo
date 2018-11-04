import { SettingsPage, TodoListPage, TodoPage } from '../views/pages'

export default [
  {
    path: '/',
    component: TodoListPage,
    exact: true
  },
  {
    path: '/todo/:id?',
    component: TodoPage,
    exact: true
  },
  {
    path: '/settings',
    component: SettingsPage,
    exact: true
  }
]
