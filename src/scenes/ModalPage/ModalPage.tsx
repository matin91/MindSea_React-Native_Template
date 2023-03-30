import { MBText } from '@components/MBText'
import { useNavigationBackAction } from '@hooks/useNavigationBack'
import { useNavigation } from '@react-navigation/native'
import { GenericNavigationProps } from '@routes/types'
import styles from '@scenes/ModalPage/ModalPage.styles'
import { Flex, Pressable, ScrollView, Text } from 'native-base'
import React, { FC, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'

const ModalPage: FC = () => {
  const { t } = useTranslation()
  const { setOptions } = useNavigation<GenericNavigationProps>()
  const goBack = useNavigationBackAction()

  useLayoutEffect(() => {
    setOptions({
      headerTitle: () => (
        <Text fontSize="20px" fontFamily="body" fontWeight={700}>
          {t('ModalPage:PageName')}
        </Text>
      ),
      headerLeft: () => (
        <Flex flex={1} justifyContent="center">
          <Pressable onPress={goBack}>
            <Text>back</Text>
          </Pressable>
        </Flex>
      ),
    })
  }, [goBack, setOptions, t])

  return (
    <ScrollView _contentContainerStyle={styles.scrollContainer} backgroundColor="white">
      <MBText variant={'subTitle'} textAlign="center">
        {t('ModalPage:thisIsAModal')}
      </MBText>
    </ScrollView>
  )
}

export { ModalPage }
