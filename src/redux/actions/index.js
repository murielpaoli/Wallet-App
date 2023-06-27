export const ADD_USER = 'ADD_USER';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';

export const addUser = (data) => ({ type: ADD_USER, payload: data });

export const getCurrencies = (data) => ({
  type: CURRENCIES,
  payload: data,
});

export const getExpenses = (data) => ({
  type: EXPENSES,
  payload: data,
});

// fetch da API
export const fetchApi = () => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const apiResponse = await response.json();
  // console.log(apiResponse);
  // preciso passar apenas o Currency para o estado global ler no ex 3. E não todo o objeto.
  const currencyOnly = Object.keys(apiResponse).filter((currency) => currency !== 'USDT');
  dispatch(getCurrencies(currencyOnly));
  return apiResponse;
};
