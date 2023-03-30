import { Box } from 'native-base'
import React, { FC, ReactNode } from 'react'

interface ISafeAreaViewProps {
  children: ReactNode
}

const SafeAreaView: FC<ISafeAreaViewProps> = ({ children }) => {
  return (
    <Box width="100%" height="100%">
      {children}
    </Box>
  )
}

export default SafeAreaView
