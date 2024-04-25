import {TextStyle, ViewStyle} from 'react-native'
import {fonts, colors} from '../../constants'

export const BTN_CTR: ViewStyle = {
  marginTop: 38,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const BTN = (isActive: boolean): ViewStyle => ({
  backgroundColor: colors.white,
  width: 72,
  height: 42,
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: isActive ? colors.green : colors.gray,
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 20,
  elevation: 5,
  borderColor: isActive ? colors.green : colors.white,
  borderWidth: 1,
})

export const BTN_TXT: TextStyle = {
  fontFamily: fonts.poppinsSemiBold_600,
  fontSize: 12,
  color: colors.gray,
}
export const DESCRIPTION_TITLE_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 24,
  color: colors.black,
  marginBottom: 17,
}
export const DESCRIPTION_SUBTITLE_TXT: TextStyle = {
  fontFamily: fonts.poppinsRegular_400,
  fontSize: 16,
  color: colors.gray,
  lineHeight: 28,
}

export const INPUT_TITLE_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 16,
  color: colors.darkGray,
  marginBottom: 17,
}
export const SUBMIT_BTN_TXT: TextStyle = {
  fontFamily: fonts.poppinsBold_700,
  fontSize: 14,
  color: colors.white,
}
export const UNDER_SUBMIT_BTN_TXT: TextStyle = {
  fontFamily: fonts.poppinsMedium_500,
  fontSize: 12,
  color: colors.darkGray,
  textAlign: 'center',
}

export const SUBMIT_BTN: ViewStyle = {
  backgroundColor: colors.green,
  width: '100%',
  height: 72,
  borderRadius: 26,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 24,
  marginBottom: 20,
}
