import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    background-color: #141a2f;
    color: #ffffff;
    font-family: 'Heebo', sans-serif;
    word-break: break-word;
    }
  `;