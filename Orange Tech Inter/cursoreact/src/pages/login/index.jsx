import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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

    const navigate = useNavigate();

    const handleSignIn = () => navigate('/feed');

    const { control, handleSubmit, formState: { errors, isValid } } = useForm();

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
                            <Button title="Entrar" variant="secondary" onClick={handleSignIn} />
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
