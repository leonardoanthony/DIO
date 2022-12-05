import React from "react";
import { Box, Column, Link, Profile, Remove, Row, Title, User } from "./style";
import { BiTrash } from "react-icons/bi";

const Repository = ({repo}) => {
    return (
        <Box>
            <Row>
                <Column flex='1'>
                    <Profile src={repo.profile} />
                </Column>
                <Column flex='3'>
                    <Title>{repo.repo_name}</Title>
                    <User>{repo.name}</User>
                    <Link href={`https://github.com/${repo.name}/${repo.repo_name}`}>Ver Repositório</Link>
                </Column>
                <Remove>
                    <BiTrash />
                </Remove>
            </Row>
        </Box>
    );
};

export default Repository;
