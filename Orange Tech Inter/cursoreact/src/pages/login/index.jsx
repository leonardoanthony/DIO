import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import {
    Column,
    Container,
    Content,
    Form,
    Input,
    Title,
    Row,
} from "./styles";

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Column>
                        <Title>
                            A plataforma para você aprender com experts, dominar
                            as principais tecnologias e entrar no mais rápido
                            nas empresas mais desejadas
                        </Title>
                    </Column>

                    <Column>
                        <Form>
                            <Title>Faça seu cadastro</Title>
                            <Content>make the change!</Content>
                            <Input placeholder="E-mail" type="email"/>
                            <Input placeholder="Senha" type="password"/>
                            <Button title="Entrar" variant="secondary" />
                            <Row>
                                <Content variant="yellow">Esqueci a senha!</Content>
                                <Content variant="pink">Cadastre-se</Content>
                            </Row>
                        </Form>
                    </Column>
                </Row>
            </Container>
        </>
    );
};

export default Login;
