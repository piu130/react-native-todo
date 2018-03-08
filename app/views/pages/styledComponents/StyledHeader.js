import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'

export const StyledHeader = ({ colors, outerContainerStyles, statusBarProps, leftComponent, centerComponent, rightComponent, ...rest }) => (
  <Header
    backgroundColor={colors.colorPrimary}
    outerContainerStyles={{
      borderBottomWidth: 0,
      ...outerContainerStyles
    }}
    statusBarProps={{
      backgroundColor: colors.navigationBarColor,
      barStyle: colors.navigationBarStyle,
      translucent: true,
      ...statusBarProps
    }}
    leftComponent={{
      color: colors.textColorPrimary,
      underlayColor: colors.colorPrimaryLight,
      ...leftComponent
    }}
    centerComponent={{
      style: { color: colors.textColorPrimary },
      ...centerComponent
    }}
    rightComponent={{
      color: colors.textColorPrimary,
      underlayColor: colors.colorPrimaryLight,
      ...rightComponent
    }}
    {...rest}
  />
)

StyledHeader.propTypes = {
  colors: PropTypes.object,
  outerContainerStyles: PropTypes.object,
  statusBarProps: PropTypes.object,
  leftComponent: PropTypes.object,
  centerComponent: PropTypes.object,
  rightComponent: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.entities.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledHeader)
