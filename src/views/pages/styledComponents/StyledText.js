import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { connect } from 'react-redux'

export const StyledText = ({ colors, textColor, style, ...rest }) => (
  <Text
    style={{
      color: colors[textColor],
      ...style
    }}
    {...rest}
  />
)

StyledText.propTypes = {
  colors: PropTypes.object,
  textColor: PropTypes.string,
  style: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.entities.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledText)
