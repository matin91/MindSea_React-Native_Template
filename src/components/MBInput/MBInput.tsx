import { InputVariants } from '@themes/theming/components/types'
import { Box, Input as NBInput } from 'native-base'
import { InterfaceInputProps } from 'native-base/lib/typescript/components/primitives/Input/types'
import React, { useCallback, useRef, useState } from 'react'

interface IInputProps extends Omit<InterfaceInputProps, 'onChange'> {
  variant?: InputVariants
  onChange: (text: string) => void
  debounce?: boolean
  onlyNumbers?: boolean
}

const MBInput: React.FC<IInputProps> = ({
  variant,
  onChange,
  debounce = false,
  onlyNumbers = false,
  ...props
}) => {
  const [value, setValue] = useState('')
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const resetTimer = useCallback(() => {
    clearTimeout(timerRef.current)
  }, [timerRef])

  const runTimeoutUpdate = useCallback(
    (text: string): void => {
      resetTimer()
      timerRef.current = setTimeout(() => onChange?.(text), 200)
    },
    [onChange, resetTimer]
  )

  const onChangeText = useCallback(
    (text: string): void => {
      if (onlyNumbers) {
        text = text.replace(/\D/g, '')
      }
      setValue(text)
      if (debounce) runTimeoutUpdate(text)
      else onChange?.(text)
    },
    [onlyNumbers, debounce, runTimeoutUpdate, onChange]
  )

  return (
    <Box w={'90%'} alignSelf="center" my={2}>
      <NBInput variant={variant} {...props} onChangeText={onChangeText} value={value} />
    </Box>
  )
}

export { MBInput }
