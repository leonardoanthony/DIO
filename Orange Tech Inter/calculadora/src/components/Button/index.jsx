import React from 'react'
import { StyledButton } from './style'

const Button = ({color, title, flex, action}) => {

  return (
    <StyledButton color={color} flex={flex} onClick={() => {action(title)}}>
        {title}
    </StyledButton>
  )
}

export default Button