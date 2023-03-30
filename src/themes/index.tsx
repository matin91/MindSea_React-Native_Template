import { useColorMode, useColorModeValue, useTheme as useNativeBaseTheme } from 'native-base'
import colors from './theming/colors'
import { ColorType } from './types'

const useTheme = () => {
  const customColors: ColorType = useColorModeValue(colors.light, colors.dark)
  const nativeBaseTheme = useNativeBaseTheme()

  const { colorMode, toggleColorMode, setColorMode } = useColorMode()

  return {
    colors: customColors,
    lightColors: colors.light,
    darkColors: colors.dark,
    theming: nativeBaseTheme,
    toggleColorMode: toggleColorMode,
    setColorMode: setColorMode,
    isDarkMode: colorMode === 'dark',
  }
}

export { useTheme, useColorModeValue }
