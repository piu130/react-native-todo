import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { StyledHeader as Header } from '.'
import { routerOperations } from '../../state/ducks/router'

export class SettingsPageHeader extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.goBack()
    return true
  }

  render () {
    const { goBack } = this.props
    return (
      <Header
        leftComponent={{
          icon: 'arrow-back',
          onPress: () => goBack()
        }}
        centerComponent={{
          text: 'Settings'
        }}
      />
    )
  }
}

SettingsPageHeader.propTypes = {
  goBack: PropTypes.func
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  goBack: routerOperations.goBack
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPageHeader)
