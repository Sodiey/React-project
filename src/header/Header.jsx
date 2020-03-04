import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer
} from "mdbreact";



const Header = () => {
  return (
      <MDBNavbar expand="md" size="sm" dark className="site-header">
        <MDBContainer>
          <MDBNavbarBrand>
            <Link to="/" className="white-text h2">Sodiey</Link>
          </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/events">Events</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/teaching-method">Teaching Method</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/landing">Landing</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
  );
};

export default Header;
