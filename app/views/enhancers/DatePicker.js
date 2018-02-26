import { DatePickerAndroid, TimePickerAndroid } from 'react-native'

export async function openDatePicker (initialDate) {
  try {
    const {action, year, month, day} = await DatePickerAndroid.open({
      date: initialDate ? new Date(initialDate.year, initialDate.month, initialDate.day) : new Date(),
      mode: 'calendar'
    })
    if (action !== DatePickerAndroid.dismissedAction) return { year, month, day }
    else return null
  } catch ({code, message}) {
    console.warn('Cannot open date picker', message)
  }
}

export async function openTimePicker (initialTime) {
  try {
    const {action, hour, minute} = await TimePickerAndroid.open({
      hour: initialTime ? initialTime.hour : 0,
      minute: initialTime ? initialTime.minute : 0,
      mode: 'clock'
    })
    if (action !== TimePickerAndroid.dismissedAction) return { hour, minute }
    else return null
  } catch ({code, message}) {
    console.warn('Cannot open time picker', message)
  }
}
