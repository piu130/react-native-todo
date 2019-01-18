import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import { TodoListItem } from '.'

export class TodoList extends Component {
  render () {
    const { todoIds } = this.props
    return (
      <FlatList
        data={todoIds}
        renderItem={({ item }) => <TodoListItem todo={{ id: item }} />}
        keyExtractor={(item) => item}
      />
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
}

const mapStateToProps = (state) => ({
  todoIds: state.entities.todos.allIds
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
