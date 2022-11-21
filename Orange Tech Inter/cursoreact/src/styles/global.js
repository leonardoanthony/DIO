import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --black: rgb(10, 10, 10);
        --gray: rgb(122, 134, 154);
        --white: rgb(255,255,255);
    }

    *{margin: 0;padding: 0;box-sizing: border-box; font-family: 'Open Sans'}
    html, body{height: 100%; background-color: #1e192c}
    img{max-width: 100%; display: block;}
    .logo{height: 40px}

`