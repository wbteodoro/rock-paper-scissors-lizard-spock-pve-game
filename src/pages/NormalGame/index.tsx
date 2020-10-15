import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FaRegQuestionCircle,
  FaLongArrowAltLeft,
  FaRedoAlt,
} from 'react-icons/fa';

import rockLogo from '../../assets/rock.png';
import lizardLogo from '../../assets/lizard.png';
import paperLogo from '../../assets/paper.png';
import scissorsLogo from '../../assets/scissors.png';
import spockLogo from '../../assets/spock.png';

import {
  Content,
  CardBattle,
  PlayerSide,
  CardChosenOption,
  Options,
  CardOption,
  OptionsList,
  BackToHomeButton,
  CardResult,
  ResultDisplay,
} from './styles';
import Container from '../../components/Container';
import { compareHands } from '../../utils/compareHands';

interface HandOptionsProps {
  name: string;
  logo: string;
}

interface Result {
  compareResult: 'Empate' | 'Ganhou' | 'Perdeu' | '';
  message: string;
}

const NormalGame: React.FC = () => {
  const history = useHistory();

  const [handOptions] = useState<HandOptionsProps[]>([
    { name: 'Pedra', logo: rockLogo },
    { name: 'Papel', logo: paperLogo },
    { name: 'Tesoura', logo: scissorsLogo },
    { name: 'Lagarto', logo: lizardLogo },
    { name: 'Spock', logo: spockLogo },
  ]);

  const [playerSelectedHand, setPlayerSelectedHand] = useState<
    HandOptionsProps
  >({
    name: '',
    logo: '',
  });
  const [computerGeneratedHand, setComputerGeneratedHand] = useState<
    HandOptionsProps
  >({
    name: '',
    logo: '',
  });

  const [result, setResult] = useState<Result>({
    compareResult: '',
    message: '',
  });

  const handleSelectOption = ({ name, logo }: HandOptionsProps): void => {
    setPlayerSelectedHand({ name, logo });

    const randomIndex = Math.floor(Math.random() * 5);
    setComputerGeneratedHand(handOptions[randomIndex]);

    const { compareResult, message } = compareHands({
      playerHand: name,
      opponentHand: handOptions[randomIndex].name,
    });
    setResult({ compareResult, message });
  };

  const restartGame = (): void => {
    setResult({ compareResult: '', message: '' });
    setPlayerSelectedHand({ name: '', logo: '' });
    setComputerGeneratedHand({ name: '', logo: '' });
  };

  return (
    <Container>
      <Content>
        <BackToHomeButton onClick={() => history.push('/')}>
          <FaLongArrowAltLeft />
          Início
        </BackToHomeButton>
        <CardBattle>
          <PlayerSide>
            <span>VOCÊ</span>
            <CardChosenOption side="player" result={result.compareResult}>
              {!playerSelectedHand.name ? (
                <FaRegQuestionCircle size={115} />
              ) : (
                <img
                  src={playerSelectedHand.logo}
                  alt={playerSelectedHand.name}
                />
              )}

              {!!playerSelectedHand.name && (
                <span data-testid="playerSelectedHand">
                  {playerSelectedHand.name}
                </span>
              )}
            </CardChosenOption>
          </PlayerSide>

          {result.compareResult && (
            <CardResult>
              <ResultDisplay id="resultDisplay" result={result.compareResult}>
                {result.compareResult === 'Empate'
                  ? 'EMPATE!'
                  : `VOCÊ ${result.compareResult.toUpperCase()}!`}
              </ResultDisplay>
              <span>{result.message}</span>
              <button id="buttonPlayAgain" type="button" onClick={restartGame}>
                <FaRedoAlt size={20} />
                JOGAR NOVAMENTE
              </button>
            </CardResult>
          )}

          <PlayerSide>
            <span>COMPUTADOR</span>
            <CardChosenOption side="computer" result={result.compareResult}>
              {!computerGeneratedHand.name ? (
                <FaRegQuestionCircle size={115} />
              ) : (
                <img
                  src={computerGeneratedHand.logo}
                  alt={computerGeneratedHand.name}
                />
              )}

              {!!computerGeneratedHand?.name && (
                <span>{computerGeneratedHand.name}</span>
              )}
            </CardChosenOption>
          </PlayerSide>
        </CardBattle>

        <Options>
          <strong>ESCOLHA UMA OPÇÃO</strong>
          <OptionsList>
            {handOptions.map(option => (
              <CardOption
                id={`${option.name}-option`}
                selected={option.name === playerSelectedHand.name}
                disabled={!!result.compareResult}
                data-testid={`${option.name}-option`}
                key={option.name}
                onClick={() =>
                  handleSelectOption({ name: option.name, logo: option.logo })
                }
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

export default NormalGame;
