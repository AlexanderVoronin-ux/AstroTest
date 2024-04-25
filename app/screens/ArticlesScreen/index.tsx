import React, {FC} from 'react'
import {Text} from 'react-native'

import {PlasticBoardLayout} from '../../components'
import * as S from './styles.ts'

export const ArticlesScreen: FC = () => {
  return (
    <PlasticBoardLayout>
      <Text style={{paddingHorizontal: 40}}>ArticlesScreen</Text>
    </PlasticBoardLayout>
  )
}
