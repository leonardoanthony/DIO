import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: var(--black);
    padding: .5em 0;
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const Input = styled.input`
    background-color: var(--gray);
    border: none;
    padding: 1em;
    border-radius: 10px;
    outline: none;
    color: var(--white);

    &:focus {
        outline: 1px solid white;
    }
`

export const Menu = styled.a`
    color: var(--white);
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Col = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`