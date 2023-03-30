export type ComponentParams = {
  colorMode: 'light' | 'dark'
  disabled?: boolean
  variant?: TextVariants | ButtonVariants | InputVariants | string
}

export type TextVariants = 'title' | 'subTitle' | 'link'
export type ButtonVariants = 'primary' | 'secondary'
export type InputVariants = 'form' | 'email'
