import React, {FC, useCallback} from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import {useSelector} from 'react-redux'
import {StackScreenProps} from '@react-navigation/stack'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {useNavigation} from '@react-navigation/native'

import {selectArticles} from '../../store/selectors/articles.ts'
import {ArticlesStack, ArticlesStackList} from '../../navigation/constants.ts'
import * as S from './styles.ts'

export interface IArticlesOption {
  id: number
  description: string
  title: string
}

export const ArticlesScreen: FC<
  StackScreenProps<ArticlesStackList, ArticlesStack.ArticlesScreen>
> = () => {
  const articles = useSelector(selectArticles)
  const navigation =
    useNavigation<NativeStackNavigationProp<ArticlesStackList>>()

  const ListHeaderComponent: React.FC = () => {
    return (
      <View style={S.CTR}>
        <Text style={S.TITLE_1_TXT}>Articles</Text>
      </View>
    )
  }

  const renderItem = useCallback(
    ({item}: {item: IArticlesOption}) => {
      const {title, description} = item
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ArticlesStack.ArticleScreen, {article: item})
          }
          style={S.CARD_CTR}>
          <View style={S.TEXT_CTR}>
            <Text style={S.TITLE_2_TXT}>{title}</Text>
            <Text numberOfLines={6} ellipsizeMode={'tail'}>
              {description}
            </Text>
          </View>
        </TouchableOpacity>
      )
    },
    [articles],
  )

  const keyExtractor = useCallback(
    (item: IArticlesOption) => `${item.id}`,
    [articles],
  )

  return (
    <FlatList
      ListHeaderComponent={() => <ListHeaderComponent />}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      data={articles}
      renderItem={renderItem}
      alwaysBounceVertical={false}
      stickyHeaderHiddenOnScroll={true}
      stickyHeaderIndices={[0]}
    />
  )
}
