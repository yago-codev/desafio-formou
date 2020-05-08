import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
    text-decoration: none;
    list-style: none;
    color: ${(props) => props.theme.colors.font_primary};
  }

  html, body, #app {
    min-height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.colors.secondary};
    -webkit-font-smoothing: antialiased !important;
  }
`;
