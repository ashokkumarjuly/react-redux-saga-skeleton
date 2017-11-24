import decode from 'jwt-decode';
const ACCESS_TOKEN_KEY = 'access_token';

const REDIRECT = 'YOUR_CALLBACK_URL';

export function requireAuth(nextState, replace) {

  if (!isLoggedIn()) {

    replace({ pathname: '/' });

  }

}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);

}


function clearAccessToken() {

  localStorage.removeItem(ACCESS_TOKEN_KEY);

}

export function clearAllAppStorage() {
  if (localStorage) {
    localStorage.clear();
  }
}


export function logout() {

    clearAccessToken();

}

// Get and store token in local storage

export function setAccessToken(token) {


  localStorage.setItem(ACCESS_TOKEN_KEY, token);

}

export function isLoggedIn() {

  const idToken = getAccessToken();
  return !!idToken && !isAccessTokenExpired(idToken);

}

function getAccessTokenExpirationDate(encodedToken) {



  const token = decode(encodedToken);

  // if (!token.exp) { return null; }

  const date = new Date(0);

  date.setUTCSeconds(token.exp);

  return date;

}

function isAccessTokenExpired(token) {

  const expirationDate = getAccessTokenExpirationDate(token);

  return expirationDate < new Date();

}
