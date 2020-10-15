import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { ButtonLink } from './styles';

const BackToHomeButton: React.FC = () => {
  const history = useHistory();

  return (
    <ButtonLink onClick={() => history.push('/')}>
      <FaLongArrowAltLeft />
      Início
    </ButtonLink>
  );
};

export default BackToHomeButton;
