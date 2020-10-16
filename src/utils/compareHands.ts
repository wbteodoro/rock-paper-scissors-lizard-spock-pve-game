interface Hands {
  playerHand: string;
  opponentHand: string;
}

interface Result {
  compareResult: 'Empate' | 'Ganhou' | 'Perdeu' | '';
  message: string;
}

export const compareHands = (hands: Hands): Result => {
  const { playerHand, opponentHand } = hands;
  if (playerHand && opponentHand) {
    if (playerHand === opponentHand)
      return { compareResult: 'Empate', message: 'Ninguém ganhou!' };

    if (
      playerHand === 'Pedra' &&
      (opponentHand === 'Lagarto' || opponentHand === 'Tesoura')
    )
      return {
        compareResult: 'Ganhou',
        message: `Pedra esmaga ${opponentHand}`,
      };

    if (
      opponentHand === 'Pedra' &&
      (playerHand === 'Lagarto' || playerHand === 'Tesoura')
    )
      return {
        compareResult: 'Perdeu',
        message: `Pedra esmaga ${playerHand}`,
      };

    if (playerHand === 'Lagarto' && opponentHand === 'Papel')
      return { compareResult: 'Ganhou', message: `Lagarto come Papel` };

    if (opponentHand === 'Lagarto' && playerHand === 'Papel')
      return { compareResult: 'Perdeu', message: `Lagarto come Papel` };

    if (playerHand === 'Lagarto' && opponentHand === 'Spock')
      return { compareResult: 'Ganhou', message: `Lagarto envenena Spock` };

    if (opponentHand === 'Lagarto' && playerHand === 'Spock')
      return { compareResult: 'Perdeu', message: `Lagarto envenena Spock` };

    if (playerHand === 'Spock' && opponentHand === 'Pedra')
      return { compareResult: 'Ganhou', message: `Spock vaporiza Pedra` };

    if (opponentHand === 'Spock' && playerHand === 'Pedra')
      return { compareResult: 'Perdeu', message: `Spock vaporiza Pedra` };

    if (playerHand === 'Spock' && opponentHand === 'Tesoura')
      return { compareResult: 'Ganhou', message: `Spock esmaga Tesoura` };

    if (opponentHand === 'Spock' && playerHand === 'Tesoura')
      return { compareResult: 'Perdeu', message: `Spock esmaga Tesoura` };

    if (playerHand === 'Tesoura' && opponentHand === 'Lagarto')
      return { compareResult: 'Ganhou', message: `Tesoura decapita Lagarto` };

    if (opponentHand === 'Tesoura' && playerHand === 'Lagarto')
      return { compareResult: 'Perdeu', message: `Tesoura decapita Lagarto` };

    if (playerHand === 'Tesoura' && opponentHand === 'Papel')
      return { compareResult: 'Ganhou', message: `Tesoura corta Papel` };

    if (opponentHand === 'Tesoura' && playerHand === 'Papel')
      return { compareResult: 'Perdeu', message: `Tesoura corta Papel` };

    if (playerHand === 'Papel' && opponentHand === 'Pedra')
      return { compareResult: 'Ganhou', message: `Papel embrulha Pedra` };

    if (opponentHand === 'Papel' && playerHand === 'Pedra')
      return { compareResult: 'Perdeu', message: `Papel embrulha Pedra` };

    if (playerHand === 'Papel' && opponentHand === 'Spock')
      return { compareResult: 'Ganhou', message: `Papel rejeita Spock` };

    if (opponentHand === 'Papel' && playerHand === 'Spock')
      return { compareResult: 'Perdeu', message: `Papel rejeita Spock` };
  }

  return { compareResult: '', message: `Resultado não esperado!` };
};
