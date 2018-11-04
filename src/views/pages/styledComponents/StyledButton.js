import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Icon } from 'react-native-elements'

export const StyledButton = ({ colors, icon, buttonStyle, disabledStyle, ...rest }) => (
  <Button
    color={colors.textColorPrimary}
    icon={
      <Icon
        color={colors.textColorPrimary}
        {...icon}
      />
    }
    buttonStyle={{
      backgroundColor: colors.colorPrimary,
      ...buttonStyle
    }}
    disabledStyle={{
      backgroundColor: colors.colorPrimaryLight,
      ...disabledStyle
    }}
    {...rest}
  />
)

StyledButton.propTypes = {
  colors: PropTypes.object,
  buttonStyle: PropTypes.object,
  disabledStyle: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.entities.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledButton)
