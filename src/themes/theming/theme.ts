import typography from '@themes/theming/fonts'
import { extendTheme } from 'native-base'
import * as components from './components'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  ...typography,
  components,
})

export default theme

type CustomThemeType = typeof theme

declare module 'native-base' {
  type ICustomTheme = CustomThemeType
}
