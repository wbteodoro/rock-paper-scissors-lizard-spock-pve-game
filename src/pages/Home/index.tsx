import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Content, Button, SecondaryButton } from './styled';
import Container from '../../components/Container';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <Button onClick={() => history.push('/normal-game')}>
          <FaRegPlayCircle size={85} />
          JOGAR
        </Button>
        <SecondaryButton onClick={() => history.push('/about')}>
          SOBRE O JOGO
        </SecondaryButton>
      </Content>
    </Container>
  );
};

export default Home;
