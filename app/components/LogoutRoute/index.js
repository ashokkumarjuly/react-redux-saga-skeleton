/**
*
* LogoutRoute
*
*/

import React from 'react';
import propTypes from 'prop-types';
// import styled from 'styled-components';

import {Route,Redirect,withRouter} from 'react-router-dom';
import {clearAllAppStorage} from 'utils/AuthService'

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class LogoutRoute extends React.Component { // eslint-disable-line react/prefer-stateless-function

 componentDidMount(){
   clearAllAppStorage();
 }


  render() {
    return (
      <div>
        <Route {...this.props}>
        <Redirect to={{pathname:'/login'}}/>
        </Route>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

LogoutRoute.propTypes = {
match:propTypes.object.isRequired,
location:propTypes.object.isRequired,
history:propTypes.object.isRequired,
};

export default withRouter(LogoutRoute);
