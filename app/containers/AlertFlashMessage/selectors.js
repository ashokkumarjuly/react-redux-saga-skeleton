import { createSelector } from 'reselect';

/**
 * Direct selector to the alertFlashMessage state domain
 */
const selectAlertFlashMessageDomain = (state) => [state.get('alertFlashMessage')];

/**
 * Other specific selectors
 */


/**
 * Default selector used by AlertFlashMessage
 */

const makeSelectAlertFlashMessage = () => createSelector(
  selectAlertFlashMessageDomain,
  (substate) => {
    return Array.isArray(substate[0]) ? substate[0] : null;
  }
);

export default makeSelectAlertFlashMessage;
export {
  selectAlertFlashMessageDomain,
};
