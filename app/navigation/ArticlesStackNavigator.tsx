import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {ArticleScreen, ArticlesScreen} from '../screens'
import {ArticlesStack, ArticlesStackList} from './constants.ts'
import {TouchableOpacity} from 'react-native'
import {colors} from '../constants'
import {SVGIcon} from '../components'

const Stack = createStackNavigator<ArticlesStackList>()

export const ArticlesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ArticlesStack.ArticlesScreen}
        component={ArticlesScreen}
      />
      <Stack.Screen
        name={ArticlesStack.ArticleScreen}
        component={ArticleScreen}
        options={({navigation}) => ({
          headerShown: true,
          title: '',
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: 16}}
              onPress={() => navigation.goBack()}>
              <SVGIcon
                name={'chevronLeft'}
                width={24}
                height={24}
                color={colors.black}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  )
}
