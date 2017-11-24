/**
 *
 * Dashboard
 *
 */

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
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // console.log(this.props.match.url,this.props.match.path)
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Description of Dashboard" />
        </Helmet>
        <p>Protected Route page</p>
        <FormattedMessage {...messages.header} />

        {/* <Route path="/profile" render={() => { return (<p>Users Profile</p>) }} /> */}
        <div>
          {/* <route exact path={this.props.match.path} component={homedefault} /> */}
          <Route path={`${this.props.match.url}/profile`} render={() => { return (<p>Users Profile</p>) }} />
        </div>
      </div>

    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Dashboard);
