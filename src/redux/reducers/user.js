const INITIAL_STATE = {
  email: '',
};

const userEmail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userEmail;
