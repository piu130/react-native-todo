import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import { TodoListItem } from '.'

export class TodoList extends Component {
  render () {
    const { todos } = this.props
    return (
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoListItem todo={item} />}
        keyExtractor={(item) => item.id}
      />
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
