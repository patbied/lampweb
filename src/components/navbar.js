import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../css/navbar.scss';
import $ from 'jquery';
import logo from '../images/logo.png';
class NavigationBar extends Component {
  state = {};

  render() {
    return (
      <Navbar fixed="top" id="navbarr" bg="light" expand="sm">
        <Navbar.Brand
          activeClassName="nav-link--active"
          className="BrandLink"
          href="/"
        >
          <img
            alt=""
            src={logo}
            width="45"
            height="30"
            className="d-inline-block align-top"
          />
          BRAND NAME HERE
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link
              className="NavLink"
              activeClassName="nav-link--active"
              href="/About"
              id="NavLinkk"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="NavLink"
              activeClassName="nav-link--active"
              href="/Gallery"
              id="NavLinkk2"
            >
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
window.onscroll = function () {
  if ($(window).width() > 576) {
    scrollFunction();
  }
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbarr').classList.add('scrolled');
    // document.getElementById('NavLinkk').classList.add('scrolledNavLink');
    //  document.getElementById('NavLinkk2').classList.add('scrolledNavLink');
  } else {
    document.getElementById('navbarr').classList.remove('scrolled');
    // document.getElementById('NavLinkk').classList.remove('scrolledNavLink');
    //  document.getElementById('NavLinkk2').classList.remove('scrolledNavLink');
  }
}
export default NavigationBar;
