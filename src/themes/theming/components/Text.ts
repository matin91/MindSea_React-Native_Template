import colors from '../colors'
import { ComponentParams } from './types'

export default {
  defaultProps: {
    adjustsFontSizeToFit: true,
    allowFontScaling: true,
    letterSpacing: -0.24,
  },
  variants: {
    title: ({ colorMode }: ComponentParams) => {
      return {
        fontFamily: 'Lato',
        fontSize: '4xl',
        fontWeight: 700,
        style: {
          color: colors[colorMode].primary,
        },
      }
    },
    subTitle: ({ colorMode }: ComponentParams) => {
      return {
        fontFamily: 'Lato',
        fontSize: 'xl',
        fontWeight: 500,
        style: {
          color: colors[colorMode].secondary,
        },
      }
    },
    link: ({ colorMode }: ComponentParams) => {
      return {
        fontSize: 'xl',
        underline: true,
        style: {
          color: colors[colorMode].textLink,
          letterSpacing: -0.408,
        },
      }
    },
  },
}
