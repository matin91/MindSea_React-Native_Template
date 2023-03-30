import { MBLoader } from '@components/MBLoader'
import SafeAreaView from '@components/SafeAreaView'
import { useNavigationBackAction } from '@hooks/useNavigationBack'
import { useNavigation } from '@react-navigation/native'
import { GenericNavigationProps } from '@routes/types'
import { Flex, Pressable, Text } from 'native-base'
import * as React from 'react'
import { FC, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'

const UsersList: FC = () => {
  const { t } = useTranslation()
  const { setOptions } = useNavigation<GenericNavigationProps>()
  const goBack = useNavigationBackAction()

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => (
        <Flex flex={1} justifyContent="center">
          <Pressable onPress={goBack}>
            <Text>Back</Text>
          </Pressable>
        </Flex>
      ),
      headerTitle: () => (
        <Text fontSize="20px" fontFamily="body" fontWeight={700}>
          {t('UsersList:UsersList')}
        </Text>
      ),
    })
  }, [goBack, setOptions, t])

  return (
    <SafeAreaView>
      <MBLoader fullPage />
    </SafeAreaView>
  )
}

export { UsersList }
