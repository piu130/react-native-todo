import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { tmpTodoOperations } from '../../state/ducks/ui/tmpTodo'
import { StyledMainView as View, Todo, TodoPageHeader } from '.'

export class TodoPage extends Component {
  constructor (props) {
    super(props)
    this.props.load(this.props.match.params.id)
  }

  render () {
    return (
      <View>
        <TodoPageHeader />
        <Todo />
      </View>
    )
  }
}

TodoPage.propTypes = {
  match: PropTypes.object,
  load: PropTypes.func
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  load: tmpTodoOperations.load
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)
