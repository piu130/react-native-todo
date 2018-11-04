import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'

export const StyledMainView = ({ colors, style, children, ...rest }) => (
  <View
    style={{
      height: '100%',
      flex: 1,
      backgroundColor: colors.windowBackground,
      ...style
    }}
    {...rest}
  >
    {children}
  </View>
)

StyledMainView.propTypes = {
  colors: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

const mapStateToProps = (state) => ({
  colors: state.entities.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledMainView)
