import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 62.5%;
  }

  :root {
    --color-bg-secondary: rgb(141, 2, 31, 0.8);
  }
  
  *,
  *::after,
  *::before,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: Oswald, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
