import React, {FC, useCallback, useRef} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import {useSelector} from 'react-redux'

import {selectAudios} from '../../store/selectors/articles.ts'
import {BottomSheetModal} from '@gorhom/bottom-sheet'
import {BottomSheetModalComponent} from '../../components/BottomSheetModalComponent'
import * as S from './styles.ts'

type MediaType = {
  url: string
  mimetype: string
  preview_img: string
  duration: number
}

export interface IAudiOption {
  id: number
  name: string
  title: string
  icon: string
  media: MediaType
  paid: false
}

export const AudioScreen: FC = () => {
  const audios = useSelector(selectAudios)

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])
  const ListHeaderComponent: React.FC = () => {
    return (
      <View style={S.CTR}>
        <Text style={S.TITLE_1_TXT}>Audio</Text>
      </View>
    )
  }

  const renderItem = useCallback(
    ({item}: {item: IAudiOption}) => {
      const {name, title, icon, media} = item
      return (
        <>
          <TouchableOpacity
            onPress={handlePresentModalPress}
            style={S.CARD_CTR}>
            <View style={S.TEXT_CTR}>
              <Text style={S.TITLE_2_TXT}>{name}</Text>
              <View style={S.IMAGE_CTR}>
                <Image style={{width: 20, height: 20}} source={{uri: icon}} />
              </View>
              <Text numberOfLines={6} ellipsizeMode={'tail'}>
                {title}
              </Text>
            </View>
          </TouchableOpacity>
          <BottomSheetModalComponent ref={bottomSheetModalRef}>
            <View style={S.TEXT_MODAL_CTR}>
              <Text style={S.TITLE_2_TXT}>{name}</Text>
              <View style={S.IMAGE_CTR}>
                <Image style={{width: 20, height: 20}} source={{uri: icon}} />
              </View>
              <Text>{title}</Text>
            </View>
          </BottomSheetModalComponent>
        </>
      )
    },
    [audios],
  )

  const keyExtractor = useCallback(
    (item: IAudiOption) => `${item.id}`,
    [audios],
  )

  return (
    <>
      <FlatList
        ListHeaderComponent={() => <ListHeaderComponent />}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={audios}
        renderItem={renderItem}
        alwaysBounceVertical={false}
        stickyHeaderHiddenOnScroll={true}
        stickyHeaderIndices={[0]}
      />
    </>
  )
}
