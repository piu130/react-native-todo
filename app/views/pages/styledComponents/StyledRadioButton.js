import React from 'react'
import PropTypes from 'prop-types'
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'

export const StyledRadioButton = ({ colors, containerStyle, textStyle, ...rest }) => (
  <CheckBox
    checkedColor={colors.textColorPrimary}
    uncheckedColor={colors.textColorPrimary}
    containerStyle={{
      backgroundColor: colors.colorPrimary,
      borderWidth: 0,
      ...containerStyle
    }}
    textStyle={{
      color: colors.textColorPrimary,
      ...textStyle
    }}
    checkedIcon='dot-circle-o'
    uncheckedIcon='circle-o'
    {...rest}
  />
)

StyledRadioButton.propTypes = {
  colors: PropTypes.object,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledRadioButton)
