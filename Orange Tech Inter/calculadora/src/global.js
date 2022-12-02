import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --black: rgb(10, 10, 10);
        --gray: #9e9e9e;
        --dark-gray: #303031;
        --white: rgb(255,255,255);
        --orange: #f59806;
    }

    *{margin: 0;padding: 0;box-sizing: border-box; font-family: 'Roboto', sans-serif;}
    html, body{height: 100%; background-color: #1e192c}
    img{max-width: 100%; display: block;}
    .logo{height: 40px}

`