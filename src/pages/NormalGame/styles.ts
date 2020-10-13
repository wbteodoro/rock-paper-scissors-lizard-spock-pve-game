import styled, { css } from 'styled-components';
import { transparentize, shade } from 'polished';

interface CardChosenOptionProps {
  result: 'Ganhou' | 'Empate' | 'Perdeu' | '';
  side: 'player' | 'computer';
}

interface ResultDisplayProps {
  result: 'Ganhou' | 'Empate' | 'Perdeu' | '';
}

interface CardOptionProps {
  selected: boolean;
  disabled: boolean;
}

export const Container = styled.div`
  max-width: 1028px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardBattle = styled.div`
  height: 300px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 0 102px;
  color: #fff;
  background-color: ${transparentize(0.4, '#884BB7')};
`;

export const PlayerSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 30px;
  }
`;

export const CardChosenOption = styled.div<CardChosenOptionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 160px;
  width: 160px;
  margin-top: 25px;
  background: #884bb7;
  padding: 27px;
  border-radius: 20px;
  border: 3px solid #fff;

  ${({ result, side }) => {
    if (result === 'Empate') {
      return css`
        border: 3px solid #1b4fd0;
      `;
    }

    if (
      (result === 'Ganhou' && side === 'player') ||
      (result === 'Perdeu' && side === 'computer')
    ) {
      return css`
        border: 3px solid #1c9708;
      `;
    }

    if (
      (result === 'Ganhou' && side === 'computer') ||
      (result === 'Perdeu' && side === 'player')
    ) {
      return css`
        border: 3px solid #ff0000;
      `;
    }

    return css`
      border: 3px solid #fff;
    `;
  }}

  > span {
    font-size: 28px;
  }

  svg {
    color: ${transparentize(0.7, '#000')};
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    margin: 25px 0 15px 0;
    color: #fff;
    font-size: 30px;
    font-weight: 400;
  }
`;

export const OptionsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardOption = styled.button<CardOptionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;

  ${({ selected }) =>
    selected
      ? css`
          background: ${shade(0.5, '#884bb7')};
        `
      : css`
          background: #884bb7;
        `};

  padding: 35px;
  border-radius: 20px;
  border: 3px solid #fff;
  transition: background 0.2s;

  &:hover {
    ${({ disabled, selected }) =>
      disabled && selected
        ? css`
            background: ${shade(0.5, '#884bb7')};
          `
        : css`
            background: #884bb7;
          `};
  }

  > img {
    width: 80px;
    height: auto;
    margin-bottom: 5px;
  }

  > span {
    color: #fff;
    font-size: 30px;
  }
`;

export const BackToHomeButton = styled.button`
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  transition: color 0.2s;
  background: none;
  border: none;
  width: auto;
  margin: 0 auto 40px 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-right: 25px;
  }

  &:hover {
    color: ${shade(0.2, '#fff')};
  }
`;

export const CardResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  > span {
    font-size: 22px;
    margin-bottom: 10px;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #884bb7;
    width: 250px;
    height: auto;
    color: #fff;
    padding: 10px;
    border-radius: 12px;
    border: 3px solid #60337f;
    transition: background 0.2s;
    margin-top: 30px;

    svg {
      margin-right: 10px;
    }

    &:hover {
      background: ${shade(0.2, '#884bb7')};
    }
  }
`;

export const ResultDisplay = styled.h2<ResultDisplayProps>`
  font-size: 40px;
  margin-top: 10px;

  ${({ result }) => {
    if (result === 'Ganhou')
      return css`
        color: #1c9708;
      `;

    if (result === 'Perdeu')
      return css`
        color: #ff0000;
      `;

    if (result === 'Empate')
      return css`
        color: #1b4fd0;
      `;

    return css`
      color: #fff;
    `;
  }}
`;
