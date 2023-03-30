import colors from '../colors'
import { ComponentParams } from './types'

export default {
  defaultProps: () => undefined,
  variants: {
    primary: ({ colorMode, disabled = false }: ComponentParams) => {
      return {
        bg: disabled ? colors[colorMode].disabledText : colors[colorMode].primary,
        h: 50,
        rounded: 10,
        _text: {
          fontSize: 'xl',
          color: disabled ? colors[colorMode].textPrimary : colors[colorMode].textPrimaryInvert,
          fontFamily: 'Lato',
        },
        _pressed: {
          bg: colors[colorMode].buttonPrimaryPressed,
        },
      }
    },
    secondary: ({ colorMode, disabled = false }: ComponentParams) => {
      return {
        borderColor: disabled ? colors[colorMode].disabledText : colors[colorMode].secondary,
        borderWidth: 1,
        h: 50,
        paddingX: '3',
        rounded: 10,
        _text: {
          fontSize: 'xl',
          color: disabled ? colors[colorMode].disabledText : colors[colorMode].secondary,
          fontFamily: 'Lato',
        },
        _pressed: {
          bg: colors[colorMode].buttonSecondaryPressed,
        },
      }
    },
  },
}
