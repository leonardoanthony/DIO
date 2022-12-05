import styled from "styled-components";

export const InputWrapper = styled.input`
    background-color: var(--black);
    padding: 0 .5em;
    margin: 1em auto;
    display: block;
    width: 300px;
    height: 40px;
    border-radius: 1em;
    border: 1px solid gray;
    color: white;

    &:focus {
        outline: none;
    }

`