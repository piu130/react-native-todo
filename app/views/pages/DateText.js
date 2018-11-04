import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text } from 'react-native-elements'
import { getColor } from '../enhancers'

export class DateText extends Component {
  render () {
    const { colors, date, style, ...rest } = this.props
    const color = getColor(date, colors)
    return (
      <Text
        {...color && { style: { ...style, color } }}
        {...rest}
      >
        {date.format('llll')}
      </Text>
    )
  }
}

DateText.propTypes = {
  colors: PropTypes.object,
  date: PropTypes.object,
  style: PropTypes.object
}

const mapStateToProps = (state) => ({
  colors: state.entities.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DateText)
