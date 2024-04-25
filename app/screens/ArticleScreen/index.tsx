import React, {FC} from 'react'
import {ScrollView, Text} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import Markdown from 'react-native-markdown-display'

import {ArticlesStack, ArticlesStackList} from '../../navigation/constants.ts'
import * as S from './styles.ts'

export const ArticleScreen: FC<
  StackScreenProps<ArticlesStackList, ArticlesStack.ArticleScreen>
> = ({route}) => {
  const {title, description} = route.params.article

  return (
    <ScrollView style={S.CTR} contentInsetAdjustmentBehavior="automatic">
      <Text style={S.TITLE_2_TXT}>{title}</Text>
      <Markdown>{description}</Markdown>
    </ScrollView>
  )
}
