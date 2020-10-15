import styled from 'styled-components';

export const ContainerPage = styled.div`
  max-width: 1028px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    margin: 0 15px;
  }
`;
