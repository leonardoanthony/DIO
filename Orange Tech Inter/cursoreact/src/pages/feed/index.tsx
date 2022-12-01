import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import UserRanking from "../../components/UserRanking";
import { Column, Container, Row, Title } from "./styles";

const Feed = () => {
    return (
        <>
            <Header auth={true} />
            <Container>
                <Row>
                    <Column flex='2'>
                        <Title>FEED</Title>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Column>
                    <Column flex='1'>
                        <Title>Ranking Top #5 da Semana</Title>
                        <UserRanking src="https://avatars.githubusercontent.com/u/67436042?v=4" width="60"/>
                        <UserRanking src="https://avatars.githubusercontent.com/u/67436042?v=4" width="60"/>
                        <UserRanking src="https://avatars.githubusercontent.com/u/67436042?v=4" width="60"/>
                        <UserRanking src="https://avatars.githubusercontent.com/u/67436042?v=4" width="60"/>
                        <UserRanking src="https://avatars.githubusercontent.com/u/67436042?v=4" width="60"/>
                    </Column>
                </Row>
            </Container>
        </>
    );
};

export default Feed;
