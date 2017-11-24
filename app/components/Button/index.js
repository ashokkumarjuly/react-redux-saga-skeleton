/**
*
* Button
*
*/

import React, {Component} from "react";
import {PropTypes as PT} from 'prop-types';
import cx from "classnames";
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    primary: PT.bool,
    link: PT.bool,
    busy: PT.bool,
    disabled: PT.bool,
    updated: PT.bool,
    error: PT.string,
    busyText: PT.string,
    onClick: PT.func
  }

  static defaultProps = {
    primary: true,
    link: false,
    busy: false,
    disabled: false,
    updated: false,
    error: null,
    // busyText: <FormattedMessage {...messages.busyText} />,
    busyText:"Please Wait...",
    onClick: () => { }
  }

  _buttonContent() {
    if (this.props.busy) {
      return this.props.busyText;
    }
    return this.props.children;
  }
  _disabledState() {
    return this.props.disabled || this.props.busy || !!this.props.error;
  }
  render() {
    let { link, busy, error, primary, disabled } = this.props;
    let classes = cx({
      "btn": true,
      "btn-link": link,
      "btn-primary": !link && primary,
      "btn-default": !link && !primary,
      "disabled": disabled,
      "loading": busy,
      "error": error
    }, this.props.className);

    return (
      <button
        disabled={this._disabledState()}
        onClick={this.props.onClick}
        className={classes}>
        {this._buttonContent()}
      </button>
    );
  }
}


export default Button;
