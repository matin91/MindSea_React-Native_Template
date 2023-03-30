import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  fullPageLoader: {
    ...Platform.select({
      ios: {
        height: '100%',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 99,
      },
      android: {
        bottom: 0,
        elevation: 4,
        height: '101%',
        left: -5,
        opacity: 1,
        position: 'absolute',
        top: -5,
        width: '103%',
      },
    }),
  },
})

export default styles
