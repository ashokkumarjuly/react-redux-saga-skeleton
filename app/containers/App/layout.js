// @flow weak

import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import MainRoutes from './routes';
import { Header } from 'containers/Header'
import Footer from 'components/Footer';
import AlertFlashMessage from 'containers/AlertFlashMessage'
import { isLoggedIn } from 'utils/AuthService';

class Layout extends Component {

  render() {
    return (
      <div id="appContainer">
        {/* <Header user={this.props.user} />
        <TopNav user={this.props.user} />
        <BreadCrumbs /> */}
        {/* <Header isLoggedIn={isLoggedIn()} /> */}
        <AlertFlashMessage />
        <div className="container-fluid content-block">
          <MainRoutes />
        </div>
        {/* <Footer /> */}

      </div>
    );
  }

  /* eslint-enable no-unused-vars*/
}


Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(Layout);


