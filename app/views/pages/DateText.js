import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text } from 'react-native-elements'
import moment from 'moment'

export class DateText extends Component {
  render () {
    const { colors, date, style, ...rest } = this.props
    return (
      <Text
        {...date && date.isSame(moment(), 'day')
          ? { style: {...style, color: colors.textColorTodayEvent} }
          : {...date && date.isBefore(moment(), 'day')
            ? { style: {...style, color: colors.textColorPastEvent} }
            : { style: {...style, color: colors.textColorDisabled} }
          }
        }
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
  colors: state.colors
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DateText)
