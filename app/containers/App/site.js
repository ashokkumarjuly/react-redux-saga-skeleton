import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectAppName, makeSelectAppLoaded, makeSelectCurrentUser, makeSelectRedirectTo } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { APP_LOAD } from './constants';
import * as actions from './actions';
import MainRoutes from './routes';
import Header from 'components/Header';
import Footer from 'components/Footer';

import {getAccessToken} from 'utils/AuthService';

export class Site extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }


  componentWillMount() {
    const token = getAccessToken(); // Load token from local storage
    if (token) {
      // set the token to the request for headers with JWT
       agent.setToken(token);
    }
    // this.props.onLoad(token ? (get current logged in user) : null, token);
  }



  render() {    
    if (!this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
          {/*<FormattedMessage {...messages.header} />*/}
        </div>
      );
    }

    return (
      <div>
        {/* <AlertFlashMessage /> */}
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
        <Switch>
          <MainRoutes />
        </Switch>
        <Footer />
      </div>
    );



  }
}


Site.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  appName: makeSelectAppName(),
  appLoaded: makeSelectAppLoaded(),
  currentUser: makeSelectCurrentUser(),
  redirectTo: makeSelectRedirectTo()
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (payload, token) =>
      dispatch(actions.appLoad(payload, token)),
    onRedirect: () =>
      dispatch(actions.redirectTo(null))
    // inputChange: (change) => dispatch(actions.loginInputChange(change)),
    // loginRequest: (loginData) => {
    //   dispatch(actions.loginRequest(loginData));
    // }
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'site', reducer });
const withSaga = injectSaga({ key: 'site', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Site);