import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlayCircle } from 'react-icons/all';
import { Container } from './styled';

const Styled: React.FC = () => {
  return (
    <Container>
      <Link to="/normal-game">
        <AiOutlinePlayCircle size={85} />
        JOGAR
      </Link>
    </Container>
  );
};

export default Styled;
