import styled from 'styled-components';
import { IColumn } from './types';

export const Container = styled.main`
    padding: 100px 0;
    width: 80%;
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2em;
`;
export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
`;

export const Title = styled.h2`
    font-weight: bold;
    color: white;
    margin-bottom: 1em;
`;