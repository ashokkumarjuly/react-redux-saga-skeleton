import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectLoggedInUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loggedinUser
)

const makeSelectLoggedInEmail = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loggedinEmail
)

export {
  makeSelectLocation,makeSelectLoggedInUser,makeSelectLoggedInEmail
};
