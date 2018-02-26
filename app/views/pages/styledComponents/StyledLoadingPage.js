import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, ActivityIndicator } from 'react-native'

export const StyledLoadingPage = ({ colors }) => (
  <View style={{
    flex: 1,
    backgroundColor: colors.windowBackground,
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <ActivityIndicator size='large' color={colors.textColorPrimary} />
  </View>
)

StyledLoadingPage.propTypes = {
  colors: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledLoadingPage)
