interface Action {
  type: string;
  payload?: any;
}

const initialState = {
  friends: [],
  profileDetails: {},
};

function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'SET_FRIENDS':
      return { ...state, friends: action.payload };
    case 'SET_PROFILE_DETAILS':
      return { ...state, profileDetails: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
