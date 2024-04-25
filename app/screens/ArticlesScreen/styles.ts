import {TextStyle, ViewStyle} from 'react-native'

import {fonts, colors} from '../../constants'
import {SCREEN_WIDTH} from '../../constants/screenSizes.ts'

export const CTR: ViewStyle = {
  backgroundColor: colors.gray,
  alignItems: 'center',
  justifyContent: 'center',
}
export const CARD_CTR: ViewStyle = {
  width: SCREEN_WIDTH - 32,
  alignSelf: 'center',
  backgroundColor: colors.brown,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  elevation: 8,
  borderRadius: 8,
  padding: 5,
  marginVertical: 15,
}
export const TEXT_CTR: ViewStyle = {
  borderRadius: 8,
  borderWidth: 2,
  borderColor: colors.white,
  width: '100%',
  padding: 10,
}

export const TITLE_1_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 24,
  color: colors.white,
}
export const TITLE_2_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 14,
  color: colors.black,
  textAlign: 'center',
}
