import {
  LOGIN_REQUEST,
  LOGIN_INPUT_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './constants';

export function loginRequest(loginData) {
  return {
    type: LOGIN_REQUEST,
    loginData
  }
};

export function loginFailed(errors) {
  return {
    type: LOGIN_FAILED,
    errors
  }
};

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }

}
export function loginInputChange(change) {
  return {
    type: LOGIN_INPUT_CHANGE,
    change
  }


};

