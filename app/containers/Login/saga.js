import { takeEvery, delay } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import { push } from 'react-router-redux'
import axios from "axios";

import { LOGIN_REQUEST, } from './constants'
import * as loginActions from "./actions";
import { loggedInUser } from "containers/App/actions";
import { addFlashMessage } from 'containers/AlertFlashMessage/actions'
import { setAccessToken } from 'utils/AuthService'



const postLoginToAPI = (data) => {

  return axios({
    method: 'post',
    url: 'http://localhost:3000/api/v1/auth/login',
    data: {
      email: data.email,
      password: data.password
    },
    responseType: 'json'
  })
    .then(results => {
      return (results) ? results.data.result : '';


    })
    .catch(error => {
      let errorObj = {
        statusText: (error.response) ? error.response.statusText : '',
        statusCode: (error.response) ? error.response.status : '',
        errors: (error.response) ? error.response.data.error : '',
      }
      return errorObj;
    });
}

function* login_process(action) {
  try {
    // yield delay(1000); // simulate long db query
    // Llamada a la api
    const payload = yield call(
      postLoginToAPI,
      action.loginData
    );

    // Obtener datos del store actual
    // const loginState = yield select( (state) => state.login );
    // console.log('payload', payload);
    // Hay errores
    if (payload.errors) {
      yield put(loginActions.loginFailed(payload.errors));
      yield put(
        addFlashMessage({
          "type": "error",
          "text": payload.errors.message
        })
      );
    }

    // Pasamos los datos del usuario
    if (payload.token && payload.user) {

      yield put(loggedInUser(payload.user));
      setAccessToken(payload.token);
      yield put(loginActions.loginSuccess(payload.user))
      yield put(push('/dashboard')); // Redirect to dashboard
    }


  } catch (e) {
    console.log(e);
    // yield put(
    //     addFlashMessage({
    //         "type": "error",
    //         "text": "Network Error!"
    //     })
    // );
  }
}

export default function* watchLoginRequest() {
  yield* takeEvery(LOGIN_REQUEST, login_process);
}
