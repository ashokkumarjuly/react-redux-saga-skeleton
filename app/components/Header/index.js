/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Hamburger from '../../components/Navigation/Hamburger'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownItem, DropdownMenu } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LocaleToggle from 'containers/LocaleToggle';



class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const { currentUser, appName } = this.props;   

    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <div className='header'>
          <Navbar color="navbar-inverse bg-primary" light expand="md">
            <NavbarBrand href="/">{appName}</NavbarBrand>
            <LocaleToggle />
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/">Home</NavLink>
                </NavItem>
                {!currentUser ?
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                  </NavItem>
                  : ''}
                {!currentUser ?
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/SignUp">SignUp</NavLink>
                  </NavItem>
                  : ''}

                {currentUser ?
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/dashboard">Dashboard</NavLink>
                  </NavItem>
                  : ''}

                <NavItem>
                  <NavLink tag={RRNavLink} to="/about">About</NavLink>
                </NavItem>
                {currentUser ?
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/logout">Logout</NavLink>
                  </NavItem>
                  : ''}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
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


export default Header;
