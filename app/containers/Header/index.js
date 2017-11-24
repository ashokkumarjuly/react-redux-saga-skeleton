/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCurrentUser from './selectors';
import reducer from './reducer';
import messages from './messages';
import { makeSelectLoggedInUser, makeSelectLoggedInEmail } from 'containers/App/selectors';

import Hamburger from '../../components/Navigation/Hamburger'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownItem, DropdownMenu } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LocaleToggle from 'containers/LocaleToggle';
import { isLoggedIn } from 'utils/AuthService';


export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      // isLoggedIn:isLoggedIn()
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const brand = 'Logo';
    const { isLoggedIn } = this.props;



    return (
      <div className='header'>
        <Navbar color="navbar-inverse bg-primary" light expand="md">
          <NavbarBrand href="/">Site Logo</NavbarBrand>
          <LocaleToggle />
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/">Home</NavLink>
              </NavItem>
              {!isLoggedIn ?
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                : ''}
              {!isLoggedIn ?
                <NavItem>
                  <NavLink tag={RRNavLink} to="/SignUp">SignUp</NavLink>
                </NavItem>
                : ''}

              {isLoggedIn ?
                <NavItem>
                  <NavLink tag={RRNavLink} to="/dashboard">Dashboard</NavLink>
                </NavItem>
                : ''}

              <NavItem>
                <NavLink tag={RRNavLink} to="/about">About</NavLink>
              </NavItem>
              {isLoggedIn ?
                <NavItem>
                  <NavLink tag={RRNavLink} to="/logout">Logout</NavLink>
                </NavItem>
                : ''}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.array,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

// NavbarBrand.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }

const mapStateToProps = createStructuredSelector({
  loggedInUser: makeSelectLoggedInUser(),
  loggedInEmail: makeSelectLoggedInEmail(),

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'header', reducer });


export default compose(
  withReducer,
  withConnect,
)(Header);
