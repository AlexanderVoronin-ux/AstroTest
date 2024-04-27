import {TextStyle, ViewStyle} from 'react-native'

import {fonts, colors} from '../../constants'

export const TEXT_MODAL_CTR: ViewStyle = {
  width: '100%',
  padding: 10,
}
export const IMAGE_CTR: ViewStyle = {alignItems: 'center'}

export const TITLE_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 16,
  color: colors.white,
  textAlign: 'center',
}
export const SUBSCRIPTION_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 14,
  color: colors.white,
  textAlign: 'center',
}
