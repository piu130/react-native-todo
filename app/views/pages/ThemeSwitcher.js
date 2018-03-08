import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import { colorsOperations } from '../../state/ducks/entities/colors'
import { StyledRadioButton as RadioButton, StyledFormLabel as FormLabel } from '.'

export class ThemeSwitcher extends Component {
  render () {
    const { changeTheme, currentTheme } = this.props
    const themes = ['light', 'dark', 'pink']
    return (
      <ScrollView style={{marginTop: 10}}>
        <FormLabel>Theme</FormLabel>
        {themes.map(theme => <RadioButton
          key={theme}
          title={theme}
          onPress={() => changeTheme(theme)}
          checked={currentTheme.id === theme}
          disabled={currentTheme.id === theme}
        />)}
        {/* <RadioButton */}
        {/* title='custom' */}
        {/* checked={currentThemeName === 'custom'} */}
        {/* disabled */}
        {/* /> */}
      </ScrollView>
    )
  }
}

ThemeSwitcher.propTypes = {
  changeTheme: PropTypes.func,
  currentTheme: PropTypes.object
}

const mapStateToProps = (state) => ({
  currentTheme: state.entities.colors
})

const mapDispatchToProps = {
  changeTheme: colorsOperations.changeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher)
