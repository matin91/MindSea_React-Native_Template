import colors from '../colors'
import { ComponentParams } from './types'

export default {
  defaultProps: {
    clearButtonMode: 'always',
    autoCapitalize: 'none',
    borderRadius: 'lg',
    borderWidth: 0,
    autoCorrect: false,
  },
  variants: {
    form: ({ colorMode }: ComponentParams) => {
      return {
        h: 51,
        bg: colors[colorMode].WHITE,
        style: {
          color: colors[colorMode].textSecondary,
          fontSize: 17,
          fontWeight: '500',
        },
      }
    },
    email: ({ colorMode }: ComponentParams) => {
      return {
        h: 50,
        bg: colors[colorMode].WHITE,
        style: {
          color: colors[colorMode].textPrimaryInvert,
          fontSize: 20,
          fontWeight: '600',
        },
      }
    },
  },
}
