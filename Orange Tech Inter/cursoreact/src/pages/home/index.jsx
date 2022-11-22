import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, Content, Title, W50 } from "./styles";
import banner from "../../assets/banner.png";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <W50>
                    <Title variant="highlight">Implemente</Title>
                    <Title>
                        o seu futuro global <br /> agora!
                    </Title>
                    <Content>
                        Domine as tecnologias utilizadas pelas empresas mais
                        inovadoras do mundo e encare seu novo desafio
                        profissional, evoluindo em comunidade com os melhores
                        experts
                    </Content>
                    <Button variant="secondary" title="Comece agora!" />
                </W50>
                <W50>
                    <img className="banner" src={banner} alt="" />
                </W50>
            </Container>
        </>
    );
};

export default Home;
