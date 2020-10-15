import React from 'react';
import { mount } from 'enzyme';
import { render, waitFor } from '@testing-library/react';
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

  it('should be able to render the game button "Pedra"', () => {
    const handOption = 'Pedra';
    const { getByTestId } = render(<NormalGame />);

    const optionButtonElement = getByTestId(`${handOption}-option`);

    expect(optionButtonElement).toBeTruthy();
  });

  it('should be able to render the game button "Papel"', () => {
    const handOption = 'Papel';
    const { getByTestId } = render(<NormalGame />);

    const optionButtonElement = getByTestId(`${handOption}-option`);

    expect(optionButtonElement).toBeTruthy();
  });

  it('should be able to render the game button "Tesoura"', () => {
    const handOption = 'Tesoura';
    const { getByTestId } = render(<NormalGame />);

    const optionButtonElement = getByTestId(`${handOption}-option`);

    expect(optionButtonElement).toBeTruthy();
  });

  it('should be able to render the game button "Lagarto"', () => {
    const handOption = 'Lagarto';
    const { getByTestId } = render(<NormalGame />);

    const optionButtonElement = getByTestId(`${handOption}-option`);

    expect(optionButtonElement).toBeTruthy();
  });

  it('should be able to render the game button "Spock"', () => {
    const handOption = 'Spock';
    const { getByTestId } = render(<NormalGame />);

    const optionButtonElement = getByTestId(`${handOption}-option`);

    expect(optionButtonElement).toBeTruthy();
  });

  it('should be able to render selected hand in the player card side', async () => {
    const handOption = 'Spock';
    const { getByTestId } = render(<NormalGame />);

    const optionButtonElement = getByTestId(`${handOption}-option`);
    expect(optionButtonElement).toBeTruthy();

    userEvent.click(optionButtonElement);

    await waitFor(() => {
      const playerSelectedHandElement = getByTestId('playerSelectedHand');

      expect(playerSelectedHandElement).toHaveTextContent(handOption);
    });
  });

  it('should reset all info when play again button is clicked', async () => {
    const wrapper = mount(<NormalGame />);

    const handOptionButton = wrapper.find('#Papel-option').at(0);
    expect(handOptionButton).toHaveLength(1);

    handOptionButton.simulate('click');

    const resultDisplay = wrapper.find('#resultDisplay').at(0);
    expect(resultDisplay).toHaveLength(1);

    const buttonPlayAgain = wrapper.find('#buttonPlayAgain').at(0);
    expect(buttonPlayAgain).toHaveLength(1);

    buttonPlayAgain.simulate('click');

    const resultDisplayHidden = wrapper.find('#resultDisplay').at(0);
    expect(resultDisplayHidden).toHaveLength(0);

    const buttonPlayAgainHidden = wrapper.find('#buttonPlayAgain').at(0);
    expect(buttonPlayAgainHidden).toHaveLength(0);
  });
});
