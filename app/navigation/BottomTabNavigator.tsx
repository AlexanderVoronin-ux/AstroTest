import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Platform} from 'react-native'

import {BottomTabScreen} from './constants'
import {colors, fonts} from '../constants'
import {SVGIcon} from '../components'
import {ArticlesScreen, AudioScreen} from '../screens'

export type BottomTabParamList = {
  ArticlesScreen: undefined
  AudioScreen: undefined
}

const Tab = createBottomTabNavigator<BottomTabParamList>()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 70,
          backgroundColor: 'transparent',
          position: 'absolute',
        },
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.gray,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          title: 'Articles',
          tabBarLabelStyle: {
            fontFamily: fonts.poppinsSemiBold_600,
            fontSize: 10,
            marginBottom: 10,
          },
          tabBarIcon: ({focused}) => (
            <SVGIcon
              name={'articles'}
              color={focused ? colors.yellow : colors.gray}
            />
          ),
        }}
        name={BottomTabScreen.ArticlesScreen}
        component={ArticlesScreen}
      />
      <Tab.Screen
        options={{
          title: 'Audio',
          tabBarLabelStyle: {
            fontFamily: fonts.poppinsSemiBold_600,
            fontSize: 10,
            marginBottom: 10,
          },
          tabBarIcon: ({focused}) => (
            <SVGIcon
              name={'audio'}
              color={focused ? colors.yellow : colors.gray}
            />
          ),
        }}
        name={BottomTabScreen.AudioScreen}
        component={AudioScreen}
      />
    </Tab.Navigator>
  )
}
