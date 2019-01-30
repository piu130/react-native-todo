import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'

export const StyledHeader = ({ colors, containerStyle, statusBarProps, leftComponent, centerComponent, rightComponent, ...rest }) => (
  <Header
    backgroundColor={colors.colorPrimary}
    containerStyle={{
      borderBottomWidth: 0,
      ...containerStyle
    }}
    statusBarProps={{
      backgroundColor: colors.navigationBarColor,
      barStyle: colors.navigationBarStyle,
      ...statusBarProps
    }}
    leftComponent={{
      color: colors.textColorPrimary,
      disabledStyle: {
        backgroundColor: 'transparent'
      },
      underlayColor: 'transparent',
      ...leftComponent
    }}
    centerComponent={{
      style: { color: colors.textColorPrimary },
      ...centerComponent
    }}
    rightComponent={{
      color: colors.textColorPrimary,
      disabledStyle: {
        backgroundColor: 'transparent'
      },
      underlayColor: 'transparent',
      ...rightComponent
    }}
    {...rest}
  />
)

StyledHeader.propTypes = {
  colors: PropTypes.object,
  containerStyle: PropTypes.object,
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
