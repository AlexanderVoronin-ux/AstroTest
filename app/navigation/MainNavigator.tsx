import React, {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import 'react-native-gesture-handler'

import {MainStackScreen} from './constants'
import {BottomTabNavigator} from './BottomTabNavigator'
import {useLazyGetArticlesAudioQuery} from '../api/articlesAudioApi.ts'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet'

export type RootParamList = {
  BottomTabNavigator: undefined
}

const MainStack = createNativeStackNavigator<RootParamList>()

export const MainNavigator = () => {
  const [trigger] = useLazyGetArticlesAudioQuery()

  useEffect(() => {
    trigger()
  }, [])

  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen
            name={MainStackScreen.BottomTabNavigator}
            component={BottomTabNavigator}
          />
        </MainStack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  )
}
