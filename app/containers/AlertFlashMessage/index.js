/**
 *
 * AlertFlashMessage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectAlertFlashMessage from './selectors';
import reducer from './reducer';
import messages from './messages';
import AlertFlash from 'components/AlertFlash'
import { addFlashMessage, deleteFlashMessage } from './actions'

export class AlertFlashMessage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { messages, deleteFlashMessage } = this.props;
    const listMessages = (messages && messages.length > 0) ? messages.map(
      message => <AlertFlash
        key={message.id}
        id={message.id}
        type={message.type}
        text={message.text}
        onClick={(id) => deleteFlashMessage(id)}
      />


    ) : null;
    return (
      <div>
        <Helmet>
          <title>AlertFlashMessage</title>
          <meta name="description" content="Description of AlertFlashMessage" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <div>
          {listMessages}
        </div>
      </div>
    );
  }
}

AlertFlashMessage.propTypes = {
  messages: PropTypes.array,
  deleteFlashMessage: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  messages: makeSelectAlertFlashMessage(),
});

function mapDispatchToProps(dispatch) {
  return {
    deleteFlashMessage: (id) => dispatch(deleteFlashMessage(id))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'alertFlashMessage', reducer });

export default compose(
  withReducer,
  withConnect,
)(AlertFlashMessage);
