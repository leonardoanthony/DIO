import styled from 'styled-components';

export const Container = styled.main`
    padding: 120px 0;
    width: 80%;
    margin: 0 auto;
`;

export const Title = styled.h3`
    font-weight: bold;
    color: white;
    font-size: 2.5em;

    ${({variant}) => variant === "highlight" && `color: #e4105d;`}
`;

export const Content = styled.p`
    margin: .4em 0;
    font-weight: lighter;
    line-height: 2em;
    color: white;

        

    ${({variant}) => variant === "yellow" && `color: #E5E044; font-weight: bold;`}
    ${({variant}) => variant === "pink" && `color: #e4105d; font-weight: bold;`}
`

export const W50 = styled.div`
    width: 50%;
`;

export const Form = styled.form`
    width: 60%;
    margin: 0 auto;
`;

export const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--gray);
    display: block;
    width: 100%;
    height: 60px;
    margin-bottom: 1.5em;
    padding: 0 1em;
    color: white;
    font-size: 1em;
    transition: .3s;
    
    &:focus{
        outline: none;
        border-bottom: 2px solid var(--white);
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 1em;
`;

export const Column = styled.div`
    flex: 1;

`;