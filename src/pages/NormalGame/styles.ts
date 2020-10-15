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

export const Content = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardBattle = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 0 102px;
  color: #fff;
  background-color: ${transparentize(0.4, '#884BB7')};

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 15px;

    div + div {
      margin-top: 25px;
    }
  }
`;

export const PlayerSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 30px;
  }

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;

    > span {
      font-size: 25px;
    }

    & + div {
      margin-top: 20px;
    }
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

  > img {
    width: 90px;
    height: auto;
    margin-bottom: 5px;
  }

  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
    padding: 10px;
    margin: 0 20px 0 0;

    > img {
      margin-right: 10px;
      width: 50px;
      height: auto;
    }

    > svg {
      width: 80px;
      height: auto;
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
  }};

  @media (max-width: 1028px) {
    font-size: 30px;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > strong {
    margin: 25px 0 15px 0;
    color: #fff;
    font-size: 30px;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    > strong {
      margin: 25px 0 15px 0;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const OptionsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
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

  @media (max-width: 900px) {
    width: 100%;
    padding: 10px;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;

    > img {
      width: 50px;
      height: auto;
      margin: 0 15px 0 40px;
    }
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

  @media (max-width: 900px) {
    justify-content: center;
    order: 1;
    margin: 10px 0 10px 0;

    button {
      margin: 0;
    }
  }
`;
