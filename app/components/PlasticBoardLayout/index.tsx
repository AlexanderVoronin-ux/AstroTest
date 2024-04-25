import * as React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native'
import {FC} from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {colors} from '../../constants'
import * as S from './styles'

type PlasticBoardLayoutProps = {
  children?: React.ReactNode
}

export const PlasticBoardLayout: FC<PlasticBoardLayoutProps> = ({children}) => {
  return (
    <LinearGradient
      colors={[colors.white_1, colors.white_2]}
      style={S.LINEAR_GRADIENT}>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  )
}
