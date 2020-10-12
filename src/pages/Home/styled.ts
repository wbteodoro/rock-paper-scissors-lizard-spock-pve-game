import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
