interface Action {
  type: string;
  payload?: any;
}

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case 'REGISTER_FAILURE':
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
