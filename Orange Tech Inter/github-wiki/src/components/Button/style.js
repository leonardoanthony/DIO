import styled from "styled-components";

export const ButtonWrapper = styled.button`
    width: 300px;
    display: block;
    margin: 0 auto;
    height: 40px;
    background-color: var(--green);
    border-radius: 1em;
    border: none;
    color: white;
    cursor: pointer;
    transition: .3s;

    &:hover{opacity: .6}

`;