import { ColorType } from '../types'

const palette = {
  EMERALD: '#2ecc71',
  SUN_FLOWER: '#f1c40f',
  ORANGE: '#f39c12',
  MIDNIGHT_BLUE: '#2c3e50',
  ASBESTOS: '#7f8c8d',
  CONCRETE: '#95a5a6',
  SILVER: '#bdc3c7',
  CLOUDS: '#ecf0f1',
  WHITE: '#fff',
  BLACK: '#000',
  TRANSPARENT: '#00000000',
  GREY_SHADOW_7: 'rgba(216,216,216,0.7)',
  BLACK_OPACITY_7: 'rgba(0,0,0,0.7)',
}

const light: ColorType = {
  textPrimary: palette.BLACK,
  textSecondary: palette.ASBESTOS,
  textLink: palette.EMERALD,
  textPrimaryInvert: palette.WHITE,
  textSecondaryInvert: palette.CLOUDS,
  disabledText: palette.SILVER,

  primary: palette.EMERALD,
  secondary: palette.ORANGE,
  tertiary: palette.MIDNIGHT_BLUE,

  pageBackground: palette.MIDNIGHT_BLUE,
  headerBackground: palette.WHITE,

  buttonPrimary: palette.EMERALD,
  buttonPrimaryPressed: 'rgba(98,171,96,0.8)',
  buttonSecondary: palette.ORANGE,
  buttonSecondaryPressed: 'rgba(171, 151, 96, 0.8)',

  ...palette,
}

const dark = light

export default {
  dark,
  light,
}
