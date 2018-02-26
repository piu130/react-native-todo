import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormLabel } from 'react-native-elements'

export const StyledFormLabel = ({ colors, labelStyle, ...rest }) => (
  <FormLabel
    labelStyle={{
      color: colors.textColorSecondary,
      ...labelStyle
    }}
    {...rest}
  />
)

StyledFormLabel.propTypes = {
  colors: PropTypes.object,
  labelStyle: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledFormLabel)
