import styled, { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background.jpg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
