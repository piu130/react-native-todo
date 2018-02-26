import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

export default () => {
  const middleware = [
    thunk,
    promiseMiddleware()
  ]
  if (__DEV__) middleware.push(logger)
  return middleware
}
