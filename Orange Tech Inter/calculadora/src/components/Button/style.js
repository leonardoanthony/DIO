import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: none;
    font-size: 1.5em;
    flex: ${({flex}) => flex};
    cursor: pointer;

    color: white;

    &:hover{opacity: 0.6;}

    ${({color}) => color === "gray" && `background-color: var(--gray); color: black`}
    ${({color}) => color === "dark-gray" && `background-color: var(--dark-gray);`}
    ${({color}) => color === "orange" && `background-color: var(--orange);`}

    

`;