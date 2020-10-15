import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background_01.jpg';
import backgroundImgMobile from '../assets/background_mobile.jpg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    width: 100vw;
    height: 100vh;


  }

  body {
    -webkit-font-smoothing: antialiased;
    background: url(${backgroundImg}) no-repeat center fixed;
    background-size: cover;

    // @media (max-width: 900px) {
    //   background: url(${backgroundImg}) no-repeat center fixed;
    //   background-size: cover;
    // }
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

  a {
    text-decoration: none;
  }

`;
