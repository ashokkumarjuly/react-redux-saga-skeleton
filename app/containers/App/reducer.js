import { fromJS } from 'immutable';

import { LOGGED_IN_USER } from './constants';

// The initial state of the App
const initialState = fromJS({
  isAutenticated: false,
  loggedinEmail: null,
  loggedinUser: []
});

function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGGED_IN_USER:
      return {
        ...state,
        loggedinEmail: action.user.email,
        loggedinUser: action.user
      }
    default: return state;
  }
}

export default appReducer;
