import moment from 'moment'
import { I18nManager } from 'react-native'

import 'moment/locale/de'

const getFontTag = (fontName) => {
  const style = document.createElement('style')

  const fontUrl = require(`react-native-vector-icons/Fonts/${fontName}.ttf`)
  const fontStyles = `@font-face {
    src: url(${fontUrl});
    font-family: '${fontName}';
  }`
  style.type = 'text/css'
  style.appendChild(document.createTextNode(fontStyles))

  return style
}

const setupVectorIconFonts = () => {
  const fonts = [
    'MaterialIcons'
  ]
  fonts.forEach(font => document.head.appendChild(getFontTag(font)))
}

const setupLocale = () => {
  moment.locale(I18nManager.localeIdentifier)
}

export const configure = () => {
  setupVectorIconFonts()
  setupLocale()
}

export default configure
