import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'

export const StyledListItem = ({ colors, titleStyle, containerStyle, ...rest }) => (
  <ListItem
    hideChevron
    underlayColor={colors.colorPrimaryLight}
    titleStyle={{
      color: colors.textColorSecondary,
      ...titleStyle
    }}
    containerStyle={{
      borderBottomColor: 'transparent',
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
  colors: state.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StyledListItem)
