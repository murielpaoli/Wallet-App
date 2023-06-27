import React from 'react';

import { screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { renderWithRouterAndRedux } from './helpers/renderWith';

import Wallet from '../pages/Wallet';

describe('teste coverage for Wallet page locate as "/carteira"', () => {
  it('verifica se os elementos estão na tela', () => {
    renderWithRouterAndRedux(<Wallet />);

    const printedEmail = screen.getByTestId('email-field');
    const printedValue = screen.getByTestId('total-field');
    const printedCurrency = screen.getByTestId('header-currency-field');

    expect(printedEmail).toBeInTheDocument();
    expect(printedValue).toBeInTheDocument();
    expect(printedValue).toHaveTextContent(0);
    expect(printedCurrency).toBeInTheDocument();
    expect(printedCurrency).toHaveTextContent('BRL');

    const valueInput = screen.getByPlaceholderText('digite aqui o valor da despesa!');
    const descriptionInput = screen.getByTestId('description-input');
    const currencyInput = screen.getByTestId('currency-input');
    const tagInput = screen.getByTestId('tag-input');
    const methodInput = screen.getByTestId('method-input');

    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: /Adicionar despesa/i });
    expect(btn).toBeInTheDocument();

    userEvent.type(valueInput, '7');
    userEvent.type(descriptionInput, 'loren ipsum, lorem ipsum');
    userEvent.click(btn);

    const description = screen.getByText('Descrição');
    expect(description).toBeInTheDocument();
  });

  it('teste de branches', async () => {
    const { store } = renderWithRouterAndRedux(<Wallet />);
    const inputValue = screen.getByTestId('value-input');

    const descInput = screen.getByTestId('description-input');
    expect(inputValue).toBeInTheDocument();
    expect(descInput).toBeInTheDocument();

    const btn = screen.getByRole('button', 'Adionar despesa');

    userEvent.type(inputValue, '2');
    userEvent.type(descInput, 'teste');
    userEvent.click(btn);
    await waitFor(() => {
      const size = store.getState().wallet.currencies;
      expect(size).toHaveLength(15);
      const printedValue = screen.getByTestId('total-field');
      expect(printedValue).toHaveTextContent('9.54');
    });
  });
});
