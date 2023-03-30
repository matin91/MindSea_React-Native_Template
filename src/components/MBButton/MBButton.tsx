import { useTheme } from '@themes'
import { ButtonVariants } from '@themes/theming/components/types'
import { ColorKey } from '@themes/types'
import { Box, Button as NBButton } from 'native-base'
import { InterfaceButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types'
import React from 'react'

interface IMBButtonProps extends InterfaceButtonProps {
  variant?: ButtonVariants
  color?: ColorKey
  onPress: () => void
  text: string
}

const MBButton: React.FC<IMBButtonProps> = ({ variant, onPress, color, text, ...props }) => {
  const { colors } = useTheme()

  return (
    <Box w={'90%'} alignSelf="center" my={2}>
      <NBButton
        color={color ? colors[color] : colors.primary}
        onPress={onPress}
        variant={variant}
        {...props}
      >
        {text}
      </NBButton>
    </Box>
  )
}

export { MBButton }
