import icons, { Icons } from '@assets/icons'
import { useTheme } from '@themes'
import { ColorKey } from '@themes/types'
import { Icon as NBIcon } from 'native-base'
import { InterfaceIconProps } from 'native-base/lib/typescript/components/primitives/Icon/types'
import React from 'react'
import { SvgXml } from 'react-native-svg'

interface IIconProps extends Omit<InterfaceIconProps, 'name' | 'color'> {
  color?: ColorKey
  name: Icons
}

const MBIcon: React.FC<IIconProps> = ({ name, color = 'primary', ...props }) => {
  const { colors } = useTheme()

  return (
    <NBIcon color={color ? colors[color] : colors.primary} viewBox={icons[name].viewBox} {...props}>
      <SvgXml xml={icons[name].content} />
    </NBIcon>
  )
}

export { MBIcon }
