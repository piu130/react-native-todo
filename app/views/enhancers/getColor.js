import moment from 'moment'

export default (date, colors) =>
  date && date.isSameOrBefore(moment(), 'day')
    ? date.isSameOrBefore(moment())
      ? colors.textColorPastEvent
      : colors.textColorTodayEvent
    : colors.textColorDisabled
