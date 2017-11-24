import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import LoginForm from 'components/LoginForm';
import * as actions from './actions';
import {
  makeSelectEmail, makeSelectPasssword, makeSelectIsFetching,
  makeSelectErrors,
  makeSelectPause
} from './selectors';
import reducer from './reducer';
import messages from './messages';
import saga from './saga';



export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { loginRequest, inputChange, isFetching, email, password, errors, pause } = this.props;

    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <LoginForm
          processing={isFetching}
          email={email}
          password={password}
          pause={pause}
          errors={errors}
          login={(loginData) => loginRequest(loginData)}
          onChangeHandle={(change) => inputChange(change)} />
      </div>
    );
  }
}

Login.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  errors: PropTypes.object,
  loginRequest: PropTypes.func,
  inputChange: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeHandle: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    inputChange: (change) => dispatch(actions.loginInputChange(change)),
    loginRequest: (loginData) => {
      dispatch(actions.loginRequest(loginData));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPasssword(),
  isFetching: makeSelectIsFetching(),
  errors: makeSelectErrors(),
  pause: makeSelectPause()

});



const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
