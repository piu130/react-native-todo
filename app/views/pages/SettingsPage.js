import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyledMainView as View, ThemeSwitcher, SettingsPageHeader } from '.'

export class SettingsPage extends Component {
  render () {
    return (
      <View>
        <SettingsPageHeader />
        <ThemeSwitcher />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
