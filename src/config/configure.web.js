import moment from 'moment'
import { I18nManager } from 'react-native'

import 'moment/locale/de'

const setupVectorIconFont = () => {
  const style = document.createElement('style')

  const materialIconsFont = require('react-native-vector-icons/Fonts/MaterialIcons.ttf')
  const materialIconsFontStyles = `@font-face {
    src: url(${materialIconsFont});
    font-family: 'MaterialIcons';
  }`
  style.type = 'text/css'
  style.appendChild(document.createTextNode(materialIconsFontStyles))

  document.head.appendChild(style)
}

const setupLocale = () => {
  moment.locale(I18nManager.localeIdentifier)
}

export const configure = () => {
  setupVectorIconFont()
  setupLocale()
}

export default configure
