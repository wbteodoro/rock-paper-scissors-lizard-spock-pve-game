import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NormalGame from '../../pages/NormalGame';

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
  it('should be able to direct to the home page', () => {
    const { getByText } = render(<NormalGame />);

    const backButtonElement = getByText('Início');

    userEvent.click(backButtonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });

  it('should be able to select one option', () => {
    const handOption = 'Pedra';
    const { getByTestId } = render(<NormalGame />);

    const optionButtonElement = getByTestId(`${handOption}-option`);

    userEvent.click(optionButtonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });
});
