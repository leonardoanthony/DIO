import React from 'react'
import { ButtonWrapper } from './style'

const Button = ({onClick}) => {
  return (
    <ButtonWrapper onClick={onClick}>Salvar</ButtonWrapper>
  )
}

export default Button