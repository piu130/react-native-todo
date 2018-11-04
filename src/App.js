import React, { Component } from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router'
import routes from './routes'
import configureStore from './state/configureStore'
import configure from './config/configure'
import { StyledLoadingPage as LoadingPage, StyledStatusBar as StatusBar } from './views/pages'

configure()

const history = createMemoryHistory()

const { persistor, store } = configureStore(
  undefined,
  {},
  [ routerMiddleware(history) ]
)

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingPage />} persistor={persistor}>
          <StatusBar />
          <ConnectedRouter history={history}>
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
