import { createSelector } from 'reselect';

/**
 * Direct selector to the header state domain
 */


const selectGlobal = (state) => state.get('global');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Header
 */

const makeSelectCurrentUser = () => createSelector(
  (globalState) => {
    console.log('sss',globalState);
    return globalState.get('currentUser')
  }
);

export default makeSelectCurrentUser;
export {
  selectGlobal,
};
