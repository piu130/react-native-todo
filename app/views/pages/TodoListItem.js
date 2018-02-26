import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import SwipeOut from 'react-native-swipeout'
import { todosOperations } from '../../state/ducks/todos'
import { routerOperations } from '../../state/ducks/router'
import { StyledListItem as ListItem } from '.'

export class TodoListItem extends Component {
  render () {
    const { colors, todo, removeTodo, navigate } = this.props
    const date = todo.date ? moment({...todo.date, ...todo.time}) : undefined
    return (
      <SwipeOut
        backgroundColor='transparent'
        right={[
          {
            text: 'delete',
            backgroundColor: '#fb3d38',
            onPress: () => removeTodo(todo.id)
          }
        ]}
      >
        <ListItem
          title={todo.name}
          {...date ? { subtitle: date.format('llll') } : {}}
          {...date && date.isSame(moment(), 'day')
            ? { subtitleStyle: {color: colors.textColorTodayEvent} }
            : {...date && date.isBefore(moment(), 'day')
              ? { subtitleStyle: {color: colors.textColorPastEvent} }
              : { subtitleStyle: {color: colors.textColorDisabled} }}
          }
          onLongPress={() => navigate('/todo/' + todo.id)}
        />
      </SwipeOut>
    )
  }
}

TodoListItem.propTypes = {
  colors: PropTypes.object,
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
  navigate: PropTypes.func
}

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = {
  removeTodo: todosOperations.deleteTodo,
  navigate: routerOperations.push
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem)
