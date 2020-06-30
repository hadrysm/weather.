import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

*, *::after, *::before{
  margin:0;
  padding:0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{
font-size: 62.5%;
}

body{
font-family: 'Open Sans Condensed', sans-serif;
font-size: 1.6rem;
}

p{
   font-family: 'Open Sans', sans-serif;
}

`;

export default GlobalStyled;
