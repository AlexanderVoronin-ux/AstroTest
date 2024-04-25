import React, {FC, useCallback} from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import {useSelector} from 'react-redux'

import {PlasticBoardLayout} from '../../components'
import {selectArticles} from '../../store/selectors/articles.ts'
import * as S from './styles.ts'

export interface IArticlesOption {
  id: number
  description: string
  title: string
}

export const ArticlesScreen: FC = () => {
  const articles = useSelector(selectArticles)

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
        <TouchableOpacity style={S.CARD_CTR}>
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
    <PlasticBoardLayout>
      <FlatList
        ListHeaderComponent={() => <ListHeaderComponent />}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={articles}
        renderItem={renderItem}
        // getItemLayout={getItemLayout}
        alwaysBounceVertical={false}
        stickyHeaderHiddenOnScroll={true}
        stickyHeaderIndices={[0]}
      />
    </PlasticBoardLayout>
  )
}
