import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../../pages/Home';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Home page', () => {
  it('should be able to direct to the normal game page', () => {
    const { getByText } = render(<Home />);

    const buttonElement = getByText('JOGAR');

    userEvent.click(buttonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/normal-game');
  });

  it('should be able to direct to the about game page', () => {
    const { getByText } = render(<Home />);

    const buttonElement = getByText('SOBRE O JOGO');

    userEvent.click(buttonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/about');
  });

});
