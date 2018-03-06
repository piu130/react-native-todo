import React from 'react'
import { StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const StyledStatusBar = ({ colors, ...rest }) => (
  <StatusBar
    barStyle={colors.navigationBarStyle}
    backgroundColor={colors.navigationBarColor}
    translucent
    {...rest}
  />
)

StyledStatusBar.propTypes = {
  colors: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledStatusBar)