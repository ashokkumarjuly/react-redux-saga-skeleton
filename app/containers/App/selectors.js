import { createSelector } from 'reselect';


const selectRoute = (state) => state.get('route');
const selectSite = (state) => state.get('site');



const makeSelectAppLoaded = () => createSelector(
  selectSite,
  (substate) => {    
    return substate.get('appLoaded');
  }
);
const makeSelectCurrentUser = () => createSelector(
  selectSite,
  (substate) => substate.get('currentUser')
);
const makeSelectAppName = () => createSelector(
  selectSite,
  (substate) => substate.get('appName')
);

const makeSelectRedirectTo = () =>createSelector(
  selectSite,
  (substate) => substate.get('redirectTo')
)
export {
  makeSelectAppName, makeSelectCurrentUser, makeSelectAppLoaded, makeSelectRedirectTo
};
