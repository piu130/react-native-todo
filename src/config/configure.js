import moment from 'moment'
import { I18nManager, Platform } from 'react-native'
import { createNotificationChannel } from 'react-native-local-notification-android'

import 'moment/locale/de'

export default () => {
  // moment js
  moment.locale(I18nManager.localeIdentifier)

  // react router
  global.navigator.mimeTypes = ''
  global.navigator.userAgent = 'reactnative'

  // local notification
  if (Platform.OS === 'android') {
    createNotificationChannel({
      id: 'default',
      name: 'default',
      importance: 3,
      descrition: 'default channel'
    })
  }
}
