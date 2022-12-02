import React from 'react'
import { StyledButton } from './style'

const Button = ({color, title, flex}) => {
  return (
    <StyledButton color={color} flex={flex}>
        {title}
    </StyledButton>
  )
}

export default Button