import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;

    @media (max-width: 576px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;
