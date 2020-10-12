import styled from 'styled-components';
import { transparentize, shade } from 'polished';

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

  > a {
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 40px;
    transition: color 0.2s;

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

export const CardBattle = styled.div`
  height: 300px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 0 102px;
  color: #fff;
  background-color: ${transparentize(0.58, '#884BB7')};

  > span {
    font-size: 45px;
  }
`;

export const PlayerSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 30px;
  }
`;

export const CardChosenOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 160px;
  width: 160px;
  margin-top: 25px;
  background: #884bb7;
  padding: 27px;
  border-radius: 20px;
  border: 3px solid #fff;

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

export const CardOption = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;
  background: #884bb7;
  padding: 35px;
  border-radius: 20px;
  border: 3px solid #fff;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#884bb7')};
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
