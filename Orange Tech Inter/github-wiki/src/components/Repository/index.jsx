import React from "react";
import { Box, Column, Link, Profile, Remove, Row, Title, User } from "./style";
import { BiTrash } from "react-icons/bi";

const Repository = () => {
    return (
        <Box>
            <Row>
                <Column>
                    <Profile src="https://avatars.githubusercontent.com/u/67436042?v=4" />
                </Column>
                <Column>
                    <Title>DIO</Title>
                    <User>leonardoanthony</User>
                    <Link>Ver Repositório</Link>
                </Column>
                <Remove>
                    <BiTrash />
                </Remove>
            </Row>
        </Box>
    );
};

export default Repository;
