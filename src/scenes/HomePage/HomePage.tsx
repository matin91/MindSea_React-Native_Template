import { Icons } from '@assets/icons'
import { AppVersion } from '@components/AppVersion'
import { MBButton } from '@components/MBButton'
import { MBIcon } from '@components/MBIcon'
import { MBInput } from '@components/MBInput'
import { MBText } from '@components/MBText'
import SafeAreaView from '@components/SafeAreaView'
import { useNavigation } from '@react-navigation/native'
import { GenericNavigationProps } from '@routes/types'
import styles from '@scenes/HomePage/HomePage.styles'
import { useTheme } from '@themes'
import { ScrollView } from 'native-base'
import React, { FC, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const HomePage: FC = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<GenericNavigationProps>()
  const { setOptions } = useNavigation<GenericNavigationProps>()
  const { colors } = useTheme()
  const [, setInputText] = useState<string>('')

  useLayoutEffect(() => {
    setOptions({
      headerTitle: () => (
        <MBText fontSize="20px" fontFamily="body" fontWeight={700}>
          Home
        </MBText>
      ),
    })
  }, [setOptions])

  const placeholder = t('Homepage:inputPlaceholder')

  return (
    <SafeAreaView>
      <ScrollView
        backgroundColor={colors.pageBackground}
        _contentContainerStyle={styles.scrollContainer}
      >
        <MBText variant={'title'} paddingBottom="20px" textAlign="center">
          {t('Homepage:welcome')}
        </MBText>
        <MBIcon name={Icons.GoogleLogoIcon} mb={'5'} />
        <MBInput
          variant="form"
          placeholder={placeholder}
          InputLeftElement={
            <MBIcon name={Icons.AlertIcon} color={'SUN_FLOWER'} size={'sm'} ml={2} />
          }
          onChange={setInputText}
        />
        <MBButton
          variant={'primary'}
          onPress={() => navigation.navigate('Main', { screen: 'UsersList' })}
          text={t('Homepage:gotoUsersList')}
        />

        <MBButton
          variant={'secondary'}
          onPress={() => navigation.navigate('MyModal')}
          text={t('Homepage:openModal')}
        />
        <MBText variant={'link'}>{t('Homepage:link')}</MBText>

        <AppVersion />
      </ScrollView>
    </SafeAreaView>
  )
}

export { HomePage }
