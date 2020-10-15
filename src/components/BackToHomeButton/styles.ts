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
