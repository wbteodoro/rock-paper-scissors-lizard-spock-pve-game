import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Container, Button } from './styled';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Button onClick={() => history.push('/normal-game')}>
        <FaRegPlayCircle size={85} />
        JOGAR
      </Button>
    </Container>
  );
};

export default Home;
