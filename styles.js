import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    
  }

  main {max-width: 480px;
    margin: 0 auto;
    padding: 8px;
    background: darkgrey;}
`;
