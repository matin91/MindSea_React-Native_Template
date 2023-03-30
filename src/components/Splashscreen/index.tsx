import React, { FC, memo, useEffect } from 'react'
import { View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

/**
 * An empty component used to manage SplashScreen from Suspense fallback
 */
const Splashscreen: FC = () => {
  useEffect(() => {
    return () => {
      // Hide Splashscreen when Fallback get willUnmount
      SplashScreen.hide()
    }
  })

  // To avoid strange crash
  return <View />
}

export default memo(Splashscreen)
