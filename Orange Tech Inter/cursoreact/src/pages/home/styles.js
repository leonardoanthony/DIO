import styled from 'styled-components';

export const Container = styled.main`
    padding: 120px 0;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h2`
    font-weight: bold;
    color: white;
    font-size: 2.5em;

    ${({variant}) => variant === "highlight" && `color: #e4105d;`}
`;


export const Content = styled.p`
    margin: 1em 0;
    font-weight: lighter;
    line-height: 2em;
    color: white;
`

export const W50 = styled.div`
    max-width: 50%;
`;