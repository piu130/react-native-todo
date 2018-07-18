import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import SwipeOut from 'react-native-swipeout'
import { todosOperations } from '../../state/ducks/entities/todos'
import { routerOperations } from '../../state/ducks/ui/router'
import { StyledListItem as ListItem } from '.'
import { getColor } from '../enhancers'

export class TodoListItem extends Component {
  render () {
    const { colors, todo, removeTodo, navigate } = this.props
    const date = todo.date ? moment({...todo.date, ...todo.time}) : undefined
    const color = getColor(date, colors)
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
          {...date ? {subtitle: date.format('llll')} : {}}
          {...date && {subtitleStyle: {color}}}
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
  colors: state.entities.colors
})

const mapDispatchToProps = {
  removeTodo: todosOperations.deleteTodo,
  navigate: routerOperations.push
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem)
