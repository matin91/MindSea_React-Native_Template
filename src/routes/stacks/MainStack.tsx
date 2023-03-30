import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { HomePage } from '@scenes/HomePage'
import { UsersList } from '@scenes/UsersList'
import customTheme from '@themes/theming/theme'
import { FC } from 'react'
import * as React from 'react'

const MainStack = createStackNavigator()

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="UsersList"
        component={UsersList}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            paddingLeft: customTheme.space[5],
          },
          headerRightContainerStyle: {
            paddingRight: customTheme.space[5],
          },
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MainStack.Navigator>
  )
}
