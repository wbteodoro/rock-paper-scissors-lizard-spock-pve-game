import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonLink = styled.button`
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  transition: color 0.2s;
  background: none;
  border: none;
  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-right: 25px;
  }

  &:hover {
    color: ${shade(0.2, '#fff')};
  }

  @media (max-width: 900px) {
    font-size: 20px;

    svg {
      margin-right: 10px;
    }
  }

`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  img {
    height: 80px;
    width: auto;
  }

  @media (max-width: 900px) {
    img {
      height: 50px;
      width: auto;
    }
  }

`;
