import React, {FC, useCallback, useRef} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import {useSelector} from 'react-redux'
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet'

import {selectAudios} from '../../store/selectors/articles.ts'
import {BottomSheetModalComponent} from '../../components/BottomSheetModalComponent'
import {useAppDispatch} from '../../store'
import {setTrackData} from '../../store/reducers/audio.ts'
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
  const dispatch = useAppDispatch()
  const audios = useSelector(selectAudios)

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = useCallback((item: IAudiOption) => {
    dispatch(setTrackData(item))
    bottomSheetModalRef.current?.present()
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
      const {name, title, icon} = item
      return (
        <TouchableOpacity
          onPress={() => handlePresentModalPress(item)}
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
      )
    },
    [audios],
  )

  const keyExtractor = useCallback(
    (item: IAudiOption) => `${item.id}`,
    [audios],
  )

  return (
    <BottomSheetModalProvider>
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
      <BottomSheetModalComponent ref={bottomSheetModalRef} />
    </BottomSheetModalProvider>
  )
}
