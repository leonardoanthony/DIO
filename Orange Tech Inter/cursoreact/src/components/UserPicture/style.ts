import styled from "styled-components";

export const ProfileImage = styled.img`
    border: 2px solid white;
    border-radius: 100%;
    max-width: ${({width}) => width}px;
`;