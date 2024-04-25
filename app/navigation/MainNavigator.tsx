import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {MainStackScreen} from './constants'
import {BottomTabNavigator} from './BottomTabNavigator'
import {useGetPokemonByNameQuery} from '../api/articlesAudioApi.ts'

export type RootParamList = {
  BottomTabNavigator: undefined
}

const MainStack = createNativeStackNavigator<RootParamList>()

export const MainNavigator = () => {
  const {data} = useGetPokemonByNameQuery()
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen
          name={MainStackScreen.BottomTabNavigator}
          component={BottomTabNavigator}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
