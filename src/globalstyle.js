import { createGlobalStyle } from "styled-components";
export const globalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }
    body {
        font-family: 'Poppins', sans-serif;

    }
    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }
    li {
        list-style: none;
    }
    ul {
        padding: 0;
    }
    .app__container {
        display: flex;
        flex-direction: column;
        
        height: 100vh;
    }
    .icon {
        font-size: 3rem;
    }
`;
