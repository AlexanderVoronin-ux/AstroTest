/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {StatusBar} from 'react-native'

import {MainNavigator} from './app/navigation/MainNavigator.tsx'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <MainNavigator />
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaProvider>
  )
}

export default App
