export const ADD_USER = 'ADD_USER';

export const CURRENCIES = 'CURRENCIES';

export const EXPENSES = 'EXPENSES';

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addUser = (data) => ({ type: ADD_USER, payload: data });

export const getCurrencies = (data) => ({
  type: CURRENCIES,
  payload: data,
});

export const getExpenses = (data) => ({
  type: EXPENSES,
  payload: data,
});

export const deleteWallet = (data) => ({
  type: DELETE_EXPENSE,
  payload: data,
});

export const fetchApi = () => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';

  const response = await fetch(URL);

  const apiResponse = await response.json();

  const currencyOnly = Object.keys(apiResponse).filter((currency) => currency !== 'USDT');

  dispatch(getCurrencies(currencyOnly));
  return apiResponse;
};
