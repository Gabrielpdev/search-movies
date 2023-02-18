import React from 'react'
import { Button as CustomButton, ButtonPropTypes } from '@ui5/webcomponents-react'
import './styles.scss'

interface ButtonProps extends ButtonPropTypes {
  children?: React.ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <CustomButton className="button" {...props}>
      {children}
    </CustomButton>
  )
}
