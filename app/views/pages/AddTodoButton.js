import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import { tmpTodoOperations } from '../../state/ducks/tmpTodo'
import { routerOperations } from '../../state/ducks/ui/router'

export class AddTodoButton extends Component {
  render () {
    const { colors, navigate, newTodo } = this.props
    return (
      <Icon
        reverse
        color={colors.colorPrimary}
        reverseColor={colors.textColorPrimary}
        name='add'
        onPress={() => {
          newTodo()
          navigate('/todo')
        }}
        containerStyle={{position: 'absolute', bottom: 10, right: 10}}
      />
    )
  }
}

AddTodoButton.propTypes = {
  colors: PropTypes.object,
  navigate: PropTypes.func,
  newTodo: PropTypes.func
}

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = {
  newTodo: tmpTodoOperations.addNew,
  navigate: routerOperations.push
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoButton)
