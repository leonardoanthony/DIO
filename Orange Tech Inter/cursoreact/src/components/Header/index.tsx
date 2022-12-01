import React from "react";
import { Container, Input, Menu, Wrapper, Row, Col } from "./style";
import logo from "../../assets/logo.png";
import Button from "../Button";
import { IHeader } from "./types";

const Header = ({ auth }: IHeader) => {
    return (
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <Col>
                            <img className="logo" src={logo} alt="" />
                            <Input />
                            <Menu href="teste">Live code</Menu>
                            <Menu>Global</Menu>
                        </Col>
                        $
                        {auth ? (
                            <></>
                        ) : (
                            <Col>
                                <Menu>Home</Menu>
                                <Button title={"Entrar"} />
                                <Button title={"Cadastrar"} />
                            </Col>
                        )}
                    </Row>
                </Container>
            </Wrapper>
        </>
    );
};

export default Header;
