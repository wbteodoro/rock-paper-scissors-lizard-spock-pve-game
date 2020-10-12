import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineQuestionCircle, BsArrowLeft } from 'react-icons/all';

import logoOption from '../../assets/play.svg';

import {
  Container,
  Content,
  CardBattle,
  PlayerSide,
  CardChosenOption,
  Options,
  CardOption,
  OptionsList,
} from './styles';

interface HandOptionsProps {
  name: string;
  logo: string;
}

const Index: React.FC = () => {
  const [handOptions] = useState<HandOptionsProps[]>([
    { name: 'Pedra', logo: logoOption },
    { name: 'Papel', logo: logoOption },
    { name: 'Tesoura', logo: logoOption },
    { name: 'Lagarto', logo: logoOption },
    { name: 'Spock', logo: logoOption },
  ]);

  function handleSelectOption(nameOption: string): void {
    console.log(nameOption);
  }

  function generateRandomOptionForOpponent(): void {
    console.log('teste');
  }

  function compareHands(): void {
    console.log('');
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <BsArrowLeft />
          Início
        </Link>
        <CardBattle>
          <PlayerSide>
            <span>VOCÊ</span>
            <CardChosenOption>
              <AiOutlineQuestionCircle size={115} />
            </CardChosenOption>
          </PlayerSide>

          <span>vs</span>

          <PlayerSide>
            <span>COMPUTADOR</span>
            <CardChosenOption>
              <AiOutlineQuestionCircle size={115} />
            </CardChosenOption>
          </PlayerSide>
        </CardBattle>

        <Options>
          <span>ESCOLHA UMA OPÇÃO</span>
          <OptionsList>
            {handOptions.map(option => (
              <CardOption
                key={option.name}
                onClick={() => handleSelectOption(option.name)}
              >
                <img src={option.logo} alt={option.name} />
                <span>{option.name}</span>
              </CardOption>
            ))}
          </OptionsList>
        </Options>
      </Content>
    </Container>
  );
};

export default Index;
