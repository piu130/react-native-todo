import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import moment from 'moment'
import { StyledText as Text } from '.'

export class TodoListStatus extends Component {
  render () {
    const { todos } = this.props
    const total = todos.length
    const totalToday = todos.reduce(
      (acc, todo) => acc + (todo.date && moment({ ...todo.date, ...todo.time }).isSame(moment(), 'day') ? 1 : 0),
      0
    )
    return (
      <View style={{
        paddingLeft: 20,
        paddingBottom: 20,
        paddingTop: 11,
        flex: 0,
        backgroundColor: 'transparent'
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Text textColor='textColorDisabled' style={{ width: '15%', fontWeight: 'bold' }}>Today</Text>
          <Text textColor='textColorDisabled' style={{ width: '10%', textAlign: 'right', fontWeight: 'bold' }}>{totalToday}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text textColor='textColorDisabled' style={{ width: '15%', fontWeight: 'bold' }}>Total</Text>
          <Text textColor='textColorDisabled' style={{ width: '10%', textAlign: 'right', fontWeight: 'bold' }}>{total}</Text>
        </View>
      </View>
    )
  }
}

TodoListStatus.propTypes = {
  todos: PropTypes.array
}

const mapStateToProps = (state) => ({
  todos: state.entities.todos
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListStatus)
