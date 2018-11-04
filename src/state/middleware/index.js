import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default () => {
  const middleware = [
    thunk
  ]
  if (process.env.NODE_ENV === 'development') middleware.push(logger)
  return middleware
}
