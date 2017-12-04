import { fromJS } from 'immutable';

import { APP_LOAD, REDIRECT, LOGGED_IN_USER } from './constants';

// The initial state of the App
const initialState = fromJS({
  //isAutenticated: false,
  //loggedinEmail: null,
  //loggedinUser: [],
  appName: "MY APP",
  token: null,
  appLoaded: true,
  currentUser: null,
  // redirectTo:null
});

function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      }
    case REDIRECT:
      return { ...state, redirectTo: action.redirectUrl ? action.redirectUrl : null };
    default: return state;
  }
}

export default appReducer;
