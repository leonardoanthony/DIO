import styled from "styled-components";

export const Box = styled.div`
    color: white;
    margin: 1em auto;
    width: 600px;
    border: 1px solid gray;
    height: 120px;
    border-radius: 1em;
    background-color: var(--gray);
    padding: 1em;
`;

export const Profile = styled.img`
    height: 80px;
    border-radius: 50%;
`;

export const Title = styled.h2`
    width: 100%;
`;

export const User = styled.p`
    color: gray;
`;

export const Link = styled.a`
    display: block;
    margin-top: 2em;
    cursor: pointer;
    font-size: .8em;
    color: var(--blue);
`;

export const Remove = styled.p`
    align-self: center;
    color: #f44336;
    font-size: 2em;
    margin-left: 20%;
    cursor: pointer;
`;

export const Row = styled.div`
    display: flex;
    gap: 1em;
`;

export const Column = styled.div`
    flex: ${({flex}) => flex};

`;