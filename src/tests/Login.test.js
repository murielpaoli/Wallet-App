import React from 'react';

import { act, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { renderWithRouterAndRedux } from './helpers/renderWith';

import App from '../App';

describe('teste coverage for Login page locate as the homepage "/"', () => {
  it('verifica se os elementos estão na tela', () => {
    const { store } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText('insira o email');
    expect(emailInput).toBeInTheDocument();

    const passInput = screen.getByTestId('password-input');
    expect(passInput).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: /Entrar/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();

    act(() => {
      userEvent.type(emailInput, 'murielpaoli14@gmail.com');
      userEvent.type(passInput, '123456789');
    });

    expect(btn).toBeEnabled();

    act(() => {
      userEvent.click(btn);
    });
    const emailEmStore = store.getState().user.email;
    expect(emailEmStore).toEqual('murielpaoli14@gmail.com');
  });
  it('test para button não completo', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText('insira o email');
    const passInput = screen.getByTestId('password-input');
    const btn = screen.getByRole('button', { name: /Entrar/i });

    act(() => {
      userEvent.type(emailInput, 'erro');
      userEvent.type(passInput, 'erro');
    });
    expect(btn).toBeDisabled();
  });
});
