import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'

export const StyledListItem = ({ colors, titleStyle, containerStyle, ...rest }) => (
  <ListItem
    titleStyle={{
      color: colors.textColorSecondary,
      ...titleStyle
    }}
    containerStyle={{
      backgroundColor: 'transparent',
      minHeight: 50,
      ...containerStyle
    }}
    titleNumberOfLines={3}
    {...rest}
  />
)

StyledListItem.propTypes = {
  colors: PropTypes.object,
  titleStyle: PropTypes.object,
  containerStyle: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.entities.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledListItem)
