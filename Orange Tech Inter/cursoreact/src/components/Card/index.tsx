import React from "react";
import UserPicture from "../UserPicture";
import {
    CardContainer,
    CardDescription,
    CardImage,
    CardInfo,
    CardStatus,
    CardThumb,
    CardUser,
    Column,
    Row,
} from "./style";
import { FaFireAlt, FaComment } from "react-icons/fa";

const Card = () => {
    return (
        <CardContainer>
            <CardImage src="https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png" />
            <CardInfo>
                <CardUser>
                    <Row justify='start'>
                        <UserPicture width='80' src="https://avatars.githubusercontent.com/u/67436042?v=4" />
                        <Column>
                            <h3>Leonardo Anthony</h3>
                            <p>1h atrás</p>
                        </Column>
                    </Row>
                </CardUser>
                <CardDescription>
                    <h2>Como fazer componentes em React</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quaerat inventore nesciunt illo voluptatibus aut
                        reprehenderit reiciendis minus magnam tempora...
                        <b>Ver mais</b>
                    </p>
                </CardDescription>
                <Row>
                    <CardThumb>#JavaScript</CardThumb>
                    <CardThumb>#ReactJS</CardThumb>
                </Row>
                <Row>

                <CardStatus>
                    <FaFireAlt /> 33
                </CardStatus>
                <CardStatus>
                    <FaComment /> 25
                </CardStatus>
                </Row>
            </CardInfo>
        </CardContainer>
    );
};

export default Card;
