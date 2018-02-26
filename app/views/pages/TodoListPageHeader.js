import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyledHeader as Header } from '.'
import { routerOperations } from '../../state/ducks/router'

export class TodoListPageHeader extends Component {
  render () {
    const { navigate } = this.props
    return (
      <Header
        centerComponent={{
          text: 'Todos'
        }}
        rightComponent={{
          icon: 'settings',
          onPress: () => navigate('/settings')
        }}
      />
    )
  }
}

TodoListPageHeader.propTypes = {
  navigate: PropTypes.func
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  navigate: routerOperations.push
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPageHeader)
