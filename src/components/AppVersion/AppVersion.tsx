import { MBText } from '@components/MBText'
import env from '@env'
import { Flex } from 'native-base'
import React, { FC } from 'react'
import VersionNumber from 'react-native-version-number'

const AppVersion: FC = () => {
  console.log(VersionNumber.appVersion)
  return (
    <Flex marginTop={5}>
      {/* This is just to show you how to get values from the generated ENV file */}
      <MBText variant={'subTitle'}>{`ENV: ${env.ENV}`}</MBText>

      <MBText
        variant={'subTitle'}
      >{`v.${VersionNumber.appVersion}-${VersionNumber.buildVersion}`}</MBText>
    </Flex>
  )
}

export { AppVersion }
