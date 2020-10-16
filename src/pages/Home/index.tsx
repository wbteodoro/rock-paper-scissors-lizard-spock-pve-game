import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Content, Button, SecondaryButton } from './styled';
import Container from '../../components/Container';

import gameLogoImg from '../../assets/RockPaperScissors_logo.png';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <img
          src={gameLogoImg}
          alt="Pedra, papel, tesoura, lagarto e Spock Logo"
        />
        <div>
          <Button onClick={() => history.push('/normal-game')}>
            <FaRegPlayCircle size={85} />
            JOGAR
          </Button>
          <SecondaryButton onClick={() => history.push('/about')}>
            SOBRE O JOGO
          </SecondaryButton>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
