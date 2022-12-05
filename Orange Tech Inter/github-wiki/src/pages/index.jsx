import React from 'react'
import logo from '../assets/logo.png'
import Button from '../components/Button'
import Input from '../components/Input'
import Repository from '../components/Repository'
import { Container, Image } from './style'

const Wiki = () => {
  return (
    <>
      <Container>
        <Image src={logo}/>
         <Input />
         <Button />
         <Repository />
         <Repository />
         <Repository />
      </Container>
    </>
  )
}

export default Wiki