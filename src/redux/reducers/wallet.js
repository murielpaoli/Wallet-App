import { CURRENCIES, EXPENSES } from '../actions';

const INIIAL_STATE = {

  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,

};

const wallet = (state = INIIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
