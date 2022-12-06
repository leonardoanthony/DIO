import React from 'react'
import { InputWrapper } from './style'

const Input = ({value, onChange}) => {
  return (
    <InputWrapper value={value} onChange={onChange} placeholder='Pesquise'/>

  )
}

export default Input