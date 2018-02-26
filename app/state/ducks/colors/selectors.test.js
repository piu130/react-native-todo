import * as selectors from './selectors'
import { dark } from './themes'

test('selectors should lookup theme by name', () => {
  expect(selectors.themeByName('dark')).toEqual(dark)
})
