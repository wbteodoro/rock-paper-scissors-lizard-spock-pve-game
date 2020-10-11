import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle, { BackgroundContainer } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BackgroundContainer>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </BackgroundContainer>
      <GlobalStyle />
    </>
  );
};

export default App;
