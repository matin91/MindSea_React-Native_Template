import { Flex, HStack, Pressable, Text } from 'native-base'
import React, { FC, ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

interface IGenericHeader {
  BodyHeader?: ReactNode
  LeftAction?: ReactNode
  title?: string
  RightAction?: ReactNode
  onBackClicked?: () => void
  style?: StyleProp<ViewStyle>
  subtitle?: string
  withShadow?: boolean
}

const GenericHeader: FC<IGenericHeader> = ({
  BodyHeader,
  LeftAction,
  title,
  RightAction,
  onBackClicked,
  // style = {},
  subtitle = undefined,
  // withShadow = false,
}) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" height="40px" w="100%">
      <Flex alignItems="center">
        {/*
            The GenericHeader component accepts an onBackClicked prop.
            The route where you want to go is specified in the import of this Header in your scene component
          */}
        {!!onBackClicked && (
          <Pressable onPress={onBackClicked}>
            <Text>Back</Text>
            {/* <Text style={MBLoaderStyles.backButtonStyle} >{t('Header:back')}</Text> */}
          </Pressable>
        )}
        {LeftAction}
      </Flex>

      <Flex>
        {!!title && (
          <Text
            color="MIDNIGHT_BLUE"
            fontSize="20px"
            fontFamily="body"
            fontWeight={700}
            lineHeight="24px"
            textAlign="center"
            width="220px"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        )}
        {!subtitle ? <></> : <Text>{subtitle}</Text>}
        {BodyHeader}
      </Flex>

      <Flex alignItems="center">{RightAction}</Flex>
    </HStack>
  )
}

export { GenericHeader }
