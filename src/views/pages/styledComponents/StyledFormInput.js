import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'

export const StyledFormInput = ({ colors, inputStyle, ...rest }) => (
  <Input
    inputStyle={{
      color: colors.textColorSecondary,
      ...inputStyle
    }}
    placeholderTextColor={colors.textColorDisabled}
    underlineColorAndroid={colors.textColorDisabled}
    {...rest}
  />
)

StyledFormInput.propTypes = {
  colors: PropTypes.object,
  inputStyle: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.entities.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledFormInput)
