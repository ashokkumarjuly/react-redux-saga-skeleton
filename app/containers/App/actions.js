import { APP_LOAD,REDIRECT, LOGGED_IN_USER } from './constants';



// for logout
export const userLogout = () => ({
  type: USER_LOGOUT
});


export const loggedInUser = (user) => ({
  type: LOGGED_IN_USER,
  user
})



export const appLoad = (payload, token, skipTracking=true) => ({
  type: APP_LOAD,
  payload, token, skipTracking
})

export const redirectTo = (redirectUrl) => ({
  type: REDIRECT,
  redirectUrl
})