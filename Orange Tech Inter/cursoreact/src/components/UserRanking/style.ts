import styled from "styled-components";
import { IProgress } from "./types";

export const Progress = styled.div<IProgress>`

    background-color: white;
    width: 200px;
    height: .8em;
    border-radius: 10px;
    position: relative;
    margin-top: .5em;

    &::after{
        content: '';
        top: 0;
        left: 0;
        background-color: #23dd7a;
        width: ${({width}) => width}%;
        height: .8em;
        border-radius: 10px;
        position: absolute;
    }

`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    gap: 1em;
`;

export const Title = styled.h3`
    color: white;
`;

export const UserContainer = styled.div`
    margin-bottom: 1em;
`;