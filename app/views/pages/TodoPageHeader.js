import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { routerOperations } from '../../state/ducks/ui/router'
import { StyledHeader as Header } from '.'
import { tmpTodoOperations } from '../../state/ducks/tmpTodo'

export class TodoPageHeader extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.goBack()
    this.props.removeTodo()
    return true
  }

  render () {
    const { goBack, saveTodo, todo } = this.props
    return (
      <Header
        leftComponent={{
          icon: 'clear',
          onPress: this.onBackPress
        }}
        centerComponent={{
          text: 'Todo'
        }}
        rightComponent={{
          icon: 'done',
          disabled: !todo.name,
          onPress: () => {
            saveTodo()
            goBack()
          }
        }}
      />
    )
  }
}

TodoPageHeader.propTypes = {
  goBack: PropTypes.func,
  saveTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  todo: PropTypes.object
}

const mapStateToProps = (state) => ({
  todo: state.tmpTodo
})

const mapDispatchToProps = {
  goBack: routerOperations.goBack,
  saveTodo: tmpTodoOperations.save,
  removeTodo: tmpTodoOperations.remove
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPageHeader)
