import React, {forwardRef, useMemo} from 'react'
import {ActivityIndicator, Button, Image, Text, View} from 'react-native'
import {BottomSheetModal} from '@gorhom/bottom-sheet'

import {colors} from '../../constants'
import {useGetTrackPlayer} from '../../hooks/useGetTrackPlayer.ts'
import * as S from './styles.ts'

export const BottomSheetModalComponent = forwardRef<BottomSheetModal>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['26%', '50%'], [])

    const {
      handleSheetChanges,
      togglePlayBack,
      audioTrack,
      isPlayerReady,
      changeBtnTitle,
      isMinimize,
    } = useGetTrackPlayer()

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{backgroundColor: colors.blue_1}}>
        <View style={S.TEXT_MODAL_CTR}>
          <Text style={S.TITLE_TXT}>{audioTrack[0]?.name}</Text>
          <View style={S.IMAGE_CTR}>
            <Image
              style={{width: 20, height: 20}}
              source={{uri: audioTrack[0]?.icon}}
            />
          </View>
          {!isMinimize && (
            <Text style={S.SUBSCRIPTION_TXT}>{audioTrack[0]?.title}</Text>
          )}
          {isPlayerReady ? (
            <Button
              title={changeBtnTitle()}
              color={colors.red}
              onPress={() => togglePlayBack(audioTrack[0])}
            />
          ) : (
            <ActivityIndicator size={'large'} />
          )}
        </View>
      </BottomSheetModal>
    )
  },
)
