import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyledMainView as View, TodoListStatus, TodoList, TodoListPageHeader, AddTodoButton } from '.'

export class TodoListPage extends Component {
  render () {
    return (
      <View>
        <TodoListPageHeader />
        <TodoList />
        <TodoListStatus />
        <AddTodoButton />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage)
