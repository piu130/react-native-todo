import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { persistStore, persistReducer, createMigrate } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import migrations from './migrations'
import createMiddleware from './middleware'
import * as reducers from './ducks'

export default (initialState, customReducers, customMiddleware) => {
  const store = createStore(
    persistReducer(
      {
        key: 'root',
        storage,
        version: 3,
        blacklist: ['ui'],
        migrate: createMigrate(migrations, { debug: false })
      },
      combineReducers({ ...reducers, ...customReducers })
    ),
    initialState,
    compose(applyMiddleware(...createMiddleware(), ...customMiddleware))
  )

  const persistor = persistStore(store)

  // persistor.purge()
  return { persistor, store }
}
