// @flow weak

import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Login from 'containers/Login';
import Dashboard from 'containers/Dashboard';
import Home from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LogoutRoute from 'components/LogoutRoute'
const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <LogoutRoute path="/logout" />
      {/* <Route exact path="/users" render={() => { return (<p>Users Page</p>) }} >
        <Route exact path="/profile" render={() => { return (<p>Users Profile</p>) }} />
      </Route> */}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default MainRoutes;
