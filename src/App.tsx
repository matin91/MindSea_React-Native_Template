import Splashscreen from '@components/Splashscreen'
import '@i18n'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { RootStackScreen } from '@routes'
import { navigationRef } from '@routes/navigationUtils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useTheme } from '@themes'
import theme from '@themes/theming/theme'
import { NativeBaseProvider, StatusBar } from 'native-base'
import { INativebaseConfig as ConfigInterface } from 'native-base'
import React, { FC, Suspense, useEffect, useMemo } from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import SplashScreen from 'react-native-splash-screen'

enableScreens()

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

const AppContainer: FC = () => {
  const { colors, setColorMode } = useTheme()

  const navigationTheme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: colors.pageBackground,
      },
    }),
    [colors]
  )

  useEffect(() => {
    setColorMode('light')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NavigationContainer theme={navigationTheme} ref={navigationRef}>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="light-content" />
        <RootStackScreen />
      </QueryClientProvider>
    </NavigationContainer>
  )
}

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  const configs: ConfigInterface = {
    strictMode: 'warn',
  }

  return (
    <Suspense fallback={<Splashscreen />}>
      <SafeAreaProvider>
        <NativeBaseProvider config={configs} theme={theme}>
          <AppContainer />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Suspense>
  )
}

export default App
