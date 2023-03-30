import { useTheme } from '@themes'
import { Flex } from 'native-base'
import * as React from 'react'
import { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { MaterialIndicator } from 'react-native-indicators'
import styles from './MBLoader.styles'

interface IMBLoader {
  color?: string
  size?: number
  style?: StyleProp<ViewStyle>
  fullPage?: boolean
}

const MBLoader: FC<IMBLoader> = ({ color, size = 40, style = {}, fullPage = false }) => {
  const { colors } = useTheme()
  return (
    <Flex
      flex={1}
      justifyContent="center"
      alignItems="center"
      style={[fullPage && styles.fullPageLoader, style]}
    >
      <MaterialIndicator color={color ?? colors.primary} size={size} />
    </Flex>
  )
}

export { MBLoader }
