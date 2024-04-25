import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Platform} from 'react-native'

import {BottomTabParamList, BottomTabStack} from './constants'
import {colors, fonts} from '../constants'
import {SVGIcon} from '../components'
import {AudioScreen} from '../screens'
import {ArticlesStackNavigator} from './ArticlesStackNavigator'
import {getFocusedRouteNameFromRoute, RouteProp} from '@react-navigation/native'

const Tab = createBottomTabNavigator<BottomTabParamList>()

export const BottomTabNavigator = () => {
  const handleDisplayTabs = (
    route: RouteProp<BottomTabParamList, keyof BottomTabParamList>,
  ) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ''
    if (routeName === 'ArticleScreen') {
      return 'none'
    }
    return 'flex'
  }
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 70,
          backgroundColor: colors.white_2,
          position: 'absolute',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderWidth: 1,
          borderColor: colors.black,
          display: handleDisplayTabs(route),
        },
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.gray,
        tabBarHideOnKeyboard: true,
      })}>
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
        name={BottomTabStack.ArticlesStackNavigator}
        component={ArticlesStackNavigator}
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
        name={BottomTabStack.AudioScreen}
        component={AudioScreen}
      />
    </Tab.Navigator>
  )
}
