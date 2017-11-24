import { LOGGED_IN_USER } from './constants';



// for logout
export const userLogout = () => ({
  type: USER_LOGOUT
});


export const loggedInUser = (user) => ({
  type: LOGGED_IN_USER,
  user
})
