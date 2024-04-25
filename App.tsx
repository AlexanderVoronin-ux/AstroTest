/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {MainNavigator} from './app/navigation/MainNavigator.tsx'
import {persistor, store} from './app/store'

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider>
          <MainNavigator />
          <StatusBar barStyle={'dark-content'} />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
