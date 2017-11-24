import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = (state) => state.get('login');
/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectEmail = () => createSelector(
  selectLoginDomain,
  (substate) => {
    return substate.email
  }
);

const makeSelectPasssword = () => createSelector(
  selectLoginDomain,
  (substate) => {
    return substate.password;
  }
)

const makeSelectIsFetching = () => createSelector(
  selectLoginDomain,
  (substate) => {
    return substate.isFetching;
  }
)

const makeSelectErrors = () => createSelector(
  selectLoginDomain,
  (substate) => {
    return substate.errors;
  }
)

const makeSelectPause = () => createSelector(
  selectLoginDomain,
  (substate) => {
    return substate.pause;
  }
)

export {
  selectLoginDomain,
  makeSelectEmail,
  makeSelectPasssword,
  makeSelectIsFetching,
  makeSelectErrors,
  makeSelectPause
};
