import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BackToHomeButton from '../../components/BackToHomeButton';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('BackToHomeButton component', () => {
  it('should be able to direct to the home page', () => {
    const { getByText } = render(<BackToHomeButton />);

    const backButtonElement = getByText('Início');

    userEvent.click(backButtonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });
});
