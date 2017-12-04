/**
*
* AlertFlash
*
*/

import React from 'react';
import {PropTypes as PT} from 'prop-types';
// import styled from 'styled-components';
import { Alert,UncontrolledAlert ,Fade } from 'reactstrap';
import cx from "classnames";

import { FormattedMessage } from 'react-intl';


class AlertFlash extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }
  render() {

    const { id, type, text, onClick } = this.props;
    
    let wrapperClass = cx({
      "primary": type === "info",
      "success": type === "success",
      "danger": type === "error",
      "warning": type === "warning"

    });    

    return (
      <div>
        <Alert color={wrapperClass} isOpen={this.state.visible} toggle={this.onDismiss}>
          {text}
        </Alert>
      </div>
    );
  }
}

AlertFlash.propTypes = {
  id: PT.string,
  type: PT.oneOf(["success", "error", "warning", "info"]),
  text: PT.string,
  onClick: PT.func,

  className: PT.string,
  closeClassName: PT.string,
  color: PT.string, // default: 'success'
  isOpen: PT.bool,  // default: true
  toggle: PT.func,
  tag: PT.oneOfType([PT.func, PT.string]),
  // Controls the transition of the Alert fading in and out
  // See Fade for more details
  transition: PT.shape(Fade.propTypes),
}

export default AlertFlash;
