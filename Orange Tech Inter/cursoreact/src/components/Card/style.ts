import styled from "styled-components";
import { IColumn, IRow } from "./types";

export const Row = styled.div<IRow>`
    display: flex;
    align-items: center;
    justify-content: ${({justify}) => justify};    
    flex-direction: ${({direction}) => direction};
    gap: 1em;
`;
export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
`;

export const CardContainer = styled.div`
    margin-bottom: 2em;
`;


export const CardImage = styled.img`
    width: 100%;
    max-height: 250px;
`;

export const CardInfo = styled.div`
    padding: 1em;
    background-color: rgb(59, 70, 81);
    color: white;

`;

export const CardUser = styled.div`

    margin-bottom: 1em;

`;

export const CardDescription = styled.div`


`;


export const CardThumb = styled.p`
    margin: 1em 0;
    font-weight: bold;
    color: #b0afb0 ;
`;

export const CardStatus = styled.div`
    display: flex;
    align-items: center;
    gap: .2em;
    font-weight: bold;
`;