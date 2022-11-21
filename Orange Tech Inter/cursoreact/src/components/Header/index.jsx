import React from 'react'
import { Container, Input, Menu, Wrapper, Row, Col } from './style'
import logo from '../../assets/logo.png';
import Button from '../Button'

const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
            <Row>
              <Col>
                  <img className='logo' src={logo} alt="" />
                <Input />
                <Menu href='teste'>Live code</Menu>
                <Menu>Global</Menu>
              </Col>
              <Col>
                <Menu>Home</Menu>
                <Button title={'Entrar'}/>
                <Button title={'Cadastrar'}/>
              </Col>

            </Row>
            
        </Container>
      </Wrapper>
        
    </>
  )
}

export default Header