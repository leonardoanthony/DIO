import React from 'react'
import { TextAreaContainer } from './style'

const TextArea = ({value}) => {
  return (
    <TextAreaContainer>
      <span>{value}</span>
    </TextAreaContainer>
  )
}

export default TextArea