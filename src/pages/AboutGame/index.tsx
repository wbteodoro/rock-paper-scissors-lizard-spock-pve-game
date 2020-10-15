import React from 'react';
import Container from '../../components/Container';
import BackToHomeButton from '../../components/BackToHomeButton';

import { PageText, Content } from './styles';

const AboutGame: React.FC = () => {
  return (
    <Container>
      <Content>
        <BackToHomeButton />
        <PageText>
          <h1>Sobre o jogo</h1>
          <br />
          <p>
            Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método
            de seleção em jogo de pedra-papel-tesoura. Atua sob o mesmo
            princípio básico, mas inclui outras duas armas adicionais: o lagarto
            (formado pela mão igual a uma boca de fantoche) e Spock (formada
            pela saudação dos vulcanos em Star Trek). Isso reduz as chances de
            uma rodada terminar em um empate. O jogo foi inventado por Sam Kass
            e Karen Bryla, como &quot;Rock Paper Scissors Lizard Spock&quot;. O
            seu desafio é criar uma interface que possibilite o usuário jogar
            contra o computador.
          </p>
          <br />
          <br />
          As regras de Pedra-papel-tesoura-lagarto-Spock são:
          <br />
          <br />
          <ol>
            <li>Tesoura corta papel</li>
            <li>Papel cobre pedra</li>
            <li>Pedra esmaga lagarto</li>
            <li>Lagarto envenena Spock</li>
            <li>Spock esmaga tesoura;</li>
            <li>Tesoura decapita lagarto;</li>
            <li>Lagarto come papel;</li>
            <li>Papel rejeita Spock;</li>
            <li>Spock vaporiza pedra;</li>
            <li>Pedra amassa tesoura.</li>
          </ol>
        </PageText>
      </Content>
    </Container>
  );
};

export default AboutGame;
