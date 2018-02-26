import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'

export const StyledButton = ({ colors, disabledStyle, ...rest }) => (
  <Button
    color={colors.textColorPrimary}
    backgroundColor={colors.colorPrimary}
    disabledStyle={{
      backgroundColor: colors.colorPrimaryLight,
      ...disabledStyle
    }}
    {...rest}
  />
)

StyledButton.propTypes = {
  colors: PropTypes.object,
  disabledStyle: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledButton)
