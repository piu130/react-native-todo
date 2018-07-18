import moment from 'moment'

export default (date, colors) =>
  date && date.isSameOrBefore(moment(), 'day')
    ? date.isSameOrBefore(moment())
      ? colors.textColorTodayEvent
      : colors.textColorPastEvent
    : colors.textColorDisabled
