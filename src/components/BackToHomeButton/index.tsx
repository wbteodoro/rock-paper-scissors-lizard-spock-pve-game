import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { ButtonLink, TopBar } from './styles';

import gameLogo from '../../assets/RockPaperScissors_logo.png';

const BackToHomeButton: React.FC = () => {
  const history = useHistory();

  return (
    <TopBar>
      <ButtonLink onClick={() => history.push('/')}>
        <FaLongArrowAltLeft />
        Início
      </ButtonLink>
      <img src={gameLogo} alt="Pedra, papel, tesoura, lagarto e Spock Logo" />
    </TopBar>
  );
};

export default BackToHomeButton;
