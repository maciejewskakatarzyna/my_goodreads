import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap');

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  
  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.color.beige};
    font-family: 'Lato', sans-serif;
  }
  
  a, button {
    font-family: 'Lato', sans-serif;

  }
`;
