import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 250px;
    width: auto;
  }

  @media (max-width: 900px) {
    img {
      height: auto;
      width: 350px;
    }
  }

`;

export const Button = styled.button`
  width: 480px;
  height: auto;
  padding: 10px;
  background: #884bb7;
  color: #fff;
  font-size: 85px;
  font-weight: 400;
  border: none;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 25px;
  }

  &:hover {
    background: ${shade(0.2, '#884bb7')};
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 50px;

    svg {
      margin-right: 15px;
      width: 50px;
      height: auto;
    }
  }
`;

export const SecondaryButton = styled.button`
  width: 480px;
  height: auto;
  padding: 10px;
  background: #884bb7;
  color: #fff;
  font-size: 50px;
  border: none;
  border-radius: 12px;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#884bb7')};
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 40px;
  }
`;
