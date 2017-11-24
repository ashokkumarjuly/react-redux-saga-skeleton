import { fromJS } from 'immutable';
import {
  LOGIN_INPUT_CHANGE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './constants';

const initialState = fromJS({
  isFetching: false,
  email: '',
  password: '',
  errors: {},
  pause: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      let { change } = action;

      if (change.hasOwnProperty("email")) {
        return {
          ...state,
          email: change.email,
          errors: { ...state.errors, email: "" },
          pause: false
        };
      }
      if (change.hasOwnProperty("password")) {
        return {
          ...state,
          password: change.password,
          errors: { ...state.errors, password: "" },
          pause: false
        };
      }
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, pause: true, errors: {} };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, pause: false, errors: {} };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, errors: action.errors };
    default:
      return state;
  }
}

export default loginReducer;
