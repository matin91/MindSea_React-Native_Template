import { useTheme } from '@themes'
import { TextVariants } from '@themes/theming/components/types'
import { ColorKey } from '@themes/types'
import { Text as NBText } from 'native-base'
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types'
import React, { FC, useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'

interface IMBTextProps extends InterfaceTextProps {
  variant?: TextVariants
  children: React.ReactNode
  color?: ColorKey
  style?: StyleProp<TextStyle>
}

const MBText: FC<IMBTextProps> = ({ variant, children, color, style, ...props }) => {
  const { colors, theming } = useTheme()

  const [textStyle, fontFamily, fontWeight, fontSize] = useMemo(() => {
    if (!style) {
      return [undefined, undefined, undefined, undefined]
    }

    let finalFontFamily: string | undefined
    let finalFontWeight: string | undefined
    let finalFontSize: number | undefined

    const styleArray: Array<TextStyle> = !Array.isArray(style)
      ? [style as TextStyle]
      : (style as Array<TextStyle>)

    let finalTextStyle: TextStyle = {}
    styleArray.forEach(styleItem => {
      if (!styleItem) {
        return
      }

      finalFontFamily = finalFontFamily ?? styleItem.fontFamily
      finalFontWeight = finalFontWeight ?? styleItem.fontWeight
      finalFontSize = finalFontSize ?? styleItem.fontSize

      finalTextStyle = {
        ...finalTextStyle,
        ...(styleItem || {}),
      }
    })

    finalFontFamily = finalFontFamily ?? 'Lato'
    finalFontWeight = finalFontWeight ?? theming.fontWeights.normal.toString()
    finalFontSize = finalFontSize ?? theming.fontSizes.md

    finalTextStyle = {
      ...finalTextStyle,
      fontFamily: undefined,
    }

    return [finalTextStyle, finalFontFamily, finalFontWeight, finalFontSize]
  }, [style, theming])

  return (
    <NBText
      variant={variant}
      color={color ? colors[color] : colors.textPrimary}
      adjustsFontSizeToFit={true}
      allowFontScaling={true}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      style={textStyle}
      {...props}
    >
      {children}
    </NBText>
  )
}

export { MBText }
