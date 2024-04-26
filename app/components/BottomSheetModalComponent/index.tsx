import React, {forwardRef, useMemo} from 'react'
import {ActivityIndicator, Button, Image, Text, View} from 'react-native'
import {BottomSheetModal} from '@gorhom/bottom-sheet'

import {colors} from '../../constants'
import {useGetTrackPlayer} from '../../hooks/useGetTrackPlayer.ts'
import * as S from '../../screens/AudioScreen/styles.ts'

export const BottomSheetModalComponent = forwardRef<BottomSheetModal>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['35%', '50%'], [])

    const {
      handleSheetChanges,
      togglePlayBack,
      audioTrack,
      isPlayerReady,
      changeBtnTitle,
    } = useGetTrackPlayer()

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{backgroundColor: colors.purpleLight}}>
        <View style={S.TEXT_MODAL_CTR}>
          <Text style={S.TITLE_2_TXT}>{audioTrack[0]?.name}</Text>
          <View style={S.IMAGE_CTR}>
            <Image
              style={{width: 20, height: 20}}
              source={{uri: audioTrack[0]?.icon}}
            />
          </View>
          <Text>{audioTrack[0]?.title}</Text>
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
