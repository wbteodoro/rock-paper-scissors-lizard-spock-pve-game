import styled from 'styled-components';
import { transparentize } from 'polished';

export const Content = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PageText = styled.div`
  width: 100%;
  height: auto;
  color: #fff;
  font-size: 20px;
  background: ${transparentize(0.4, '#884bb7')};
  padding: 40px;
  text-align: justify;
  border-radius: 15px;

  ol {
    margin-left: 40px;
  }

  @media (max-width: 900px) {
    padding: 20px;
    font-size: 14px;
  }
`;
