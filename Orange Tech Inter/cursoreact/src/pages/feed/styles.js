import styled from 'styled-components';

export const Container = styled.main`
    padding: 100px 0;
    width: 80%;
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: ${({justify}) => justify};    
    flex-direction: ${({direction}) => direction};
    gap: 2em;
`;
export const Column = styled.div`
    flex: ${({flex}) => flex};
`;

export const Title = styled.h2`
    font-weight: bold;
    color: white;
    margin-bottom: 1em;

    ${({variant}) => variant === "highlight" && `color: #e4105d;`}
`;