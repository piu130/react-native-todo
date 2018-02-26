import moment from 'moment'
import { NativeModules } from 'react-native'

import 'moment/locale/de'

export default () => {
  // moment js
  moment.locale(NativeModules.I18nManager.localeIdentifier)

  // react router
  global.navigator.mimeTypes = ''
  global.navigator.userAgent = 'reactnative'
}
