import { compareHands } from '../../utils/compareHands';

describe('CompareHands function', () => {
  it('should return empty result when no have hands to compare', () => {
    const result = compareHands({
      playerHand: '',
      opponentHand: '',
    });

    expect(result).toEqual(
      expect.objectContaining({
        compareResult: '',
        message: 'Resultado não esperado!',
      }),
    );
  });

  describe('Compare Draw', () => {
    it('should tie when the both hands are equal to "Pedra"', () => {
      const drawResultExpected = {
        compareResult: 'Empate',
        message: 'Ninguém ganhou!',
      };

      const result = compareHands({
        playerHand: 'Pedra',
        opponentHand: 'Pedra',
      });

      expect(result).toEqual(expect.objectContaining(drawResultExpected));
    });

    it('should tie when the both hands are equal to "Papel"', () => {
      const result = compareHands({
        playerHand: 'Papel',
        opponentHand: 'Papel',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Empate',
          message: 'Ninguém ganhou!',
        }),
      );
    });

    it('should tie when the both hands are equal to "Tesoura"', () => {
      const result = compareHands({
        playerHand: 'Tesoura',
        opponentHand: 'Tesoura',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Empate',
          message: 'Ninguém ganhou!',
        }),
      );
    });

    it('should tie when the both hands are equal to "Lagarto"', () => {
      const result = compareHands({
        playerHand: 'Lagarto',
        opponentHand: 'Lagarto',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Empate',
          message: 'Ninguém ganhou!',
        }),
      );
    });

    it('should tie when the both hands are equal to "Spock"', () => {
      const result = compareHands({
        playerHand: 'Spock',
        opponentHand: 'Spock',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Empate',
          message: 'Ninguém ganhou!',
        }),
      );
    });
  });

  describe('Compare Wins', () => {
    it('should win when player choose "Papel" and opponent put "Pedra"', () => {
      const result = compareHands({
        playerHand: 'Papel',
        opponentHand: 'Pedra',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Papel embrulha Pedra',
        }),
      );
    });

    it('should win when player choose "Papel" and opponent put "Spock"', () => {
      const result = compareHands({
        playerHand: 'Papel',
        opponentHand: 'Spock',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Papel rejeita Spock',
        }),
      );
    });

    it('should win when player choose "Pedra" and opponent put "Tesoura"', () => {
      const result = compareHands({
        playerHand: 'Pedra',
        opponentHand: 'Tesoura',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Pedra esmaga Tesoura',
        }),
      );
    });

    it('should win when player choose "Pedra" and opponent put "Lagarto"', () => {
      const result = compareHands({
        playerHand: 'Pedra',
        opponentHand: 'Lagarto',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Pedra esmaga Lagarto',
        }),
      );
    });

    it('should win when player choose "Spock" and opponent put "Tesoura"', () => {
      const result = compareHands({
        playerHand: 'Spock',
        opponentHand: 'Tesoura',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Spock esmaga Tesoura',
        }),
      );
    });

    it('should win when player choose "Spock" and opponent put "Pedra"', () => {
      const result = compareHands({
        playerHand: 'Spock',
        opponentHand: 'Pedra',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Spock vaporiza Pedra',
        }),
      );
    });

    it('should win when player choose "Lagarto" and opponent put "Spock"', () => {
      const result = compareHands({
        playerHand: 'Lagarto',
        opponentHand: 'Spock',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Lagarto envenena Spock',
        }),
      );
    });

    it('should win when player choose "Lagarto" and opponent put "Papel"', () => {
      const result = compareHands({
        playerHand: 'Lagarto',
        opponentHand: 'Papel',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Lagarto come Papel',
        }),
      );
    });

    it('should win when player choose "Tesoura" and opponent put "Lagarto"', () => {
      const result = compareHands({
        playerHand: 'Tesoura',
        opponentHand: 'Lagarto',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Tesoura decapita Lagarto',
        }),
      );
    });

    it('should win when player choose "Tesoura" and opponent put "Papel"', () => {
      const result = compareHands({
        playerHand: 'Tesoura',
        opponentHand: 'Papel',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Ganhou',
          message: 'Tesoura corta Papel',
        }),
      );
    });
  });

  describe('Compare Defeats', () => {
    it('should lose when computer choose "Papel" and player put "Pedra"', () => {
      const result = compareHands({
        opponentHand: 'Papel',
        playerHand: 'Pedra',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Papel embrulha Pedra',
        }),
      );
    });

    it('should lose when computer choose "Papel" and player put "Spock"', () => {
      const result = compareHands({
        opponentHand: 'Papel',
        playerHand: 'Spock',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Papel rejeita Spock',
        }),
      );
    });

    it('should lose when computer choose "Pedra" and player put "Tesoura"', () => {
      const result = compareHands({
        opponentHand: 'Pedra',
        playerHand: 'Tesoura',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Pedra esmaga Tesoura',
        }),
      );
    });

    it('should lose when computer choose "Pedra" and player put "Lagarto"', () => {
      const result = compareHands({
        opponentHand: 'Pedra',
        playerHand: 'Lagarto',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Pedra esmaga Lagarto',
        }),
      );
    });

    it('should lose when computer choose "Spock" and player put "Tesoura"', () => {
      const result = compareHands({
        opponentHand: 'Spock',
        playerHand: 'Tesoura',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Spock esmaga Tesoura',
        }),
      );
    });

    it('should lose when computer choose "Spock" and player put "Pedra"', () => {
      const result = compareHands({
        opponentHand: 'Spock',
        playerHand: 'Pedra',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Spock vaporiza Pedra',
        }),
      );
    });

    it('should lose when computer choose "Lagarto" and player put "Spock"', () => {
      const result = compareHands({
        opponentHand: 'Lagarto',
        playerHand: 'Spock',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Lagarto envenena Spock',
        }),
      );
    });

    it('should lose when computer choose "Lagarto" and player put "Papel"', () => {
      const result = compareHands({
        opponentHand: 'Lagarto',
        playerHand: 'Papel',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Lagarto come Papel',
        }),
      );
    });

    it('should lose when computer choose "Tesoura" and player put "Lagarto"', () => {
      const result = compareHands({
        opponentHand: 'Tesoura',
        playerHand: 'Lagarto',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Tesoura decapita Lagarto',
        }),
      );
    });

    it('should lose when computer choose "Tesoura" and player put "Papel"', () => {
      const result = compareHands({
        opponentHand: 'Tesoura',
        playerHand: 'Papel',
      });

      expect(result).toEqual(
        expect.objectContaining({
          compareResult: 'Perdeu',
          message: 'Tesoura corta Papel',
        }),
      );
    });
  });
});
