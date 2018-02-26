import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default () => {
  const middleware = [
    thunk
  ]
  if (__DEV__) middleware.push(logger)
  return middleware
}
