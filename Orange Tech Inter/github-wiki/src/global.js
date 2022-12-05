import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --black: rgb(1, 4, 9);
        --gray: rgb(13, 17, 23);
        --green: rgb(35, 134, 54);
        --blue: rgb(88, 166, 255);
    }

    *{margin: 0;padding: 0;box-sizing: border-box; font-family: 'Roboto', sans-serif;}
    html, body{height: 100%; background-color: var(--black)}
    img{max-width: 100%; max-height:100%; display: block;}

`