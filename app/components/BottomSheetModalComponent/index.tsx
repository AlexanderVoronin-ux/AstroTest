import {forwardRef, useMemo} from 'react'
import {BottomSheetModal, BottomSheetProps} from '@gorhom/bottom-sheet'
import {colors} from '../../constants'

export const BottomSheetModalComponent = forwardRef<
  BottomSheetModal,
  BottomSheetProps
>((props, ref) => {
  const {children} = props
  const snapPoints = useMemo(() => ['25%', '50%'], [])
  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={{backgroundColor: colors.purpleLight}}>
      {children}
    </BottomSheetModal>
  )
})
