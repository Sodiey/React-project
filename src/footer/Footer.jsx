import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBNavLink } from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";

import Logo from ".././images/logo.svg";

import { FooterContainer } from "./footer.styles.jsx";

const Footer = () => (
  <Router>
    <FooterContainer className="font-small pt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">Good to know</h5>
            <ul>
              <li className="list-unstyled">
                <MDBNavLink to="/teaching-method">Teaching Method</MDBNavLink>
              </li>
              <li className="list-unstyled">
                <MDBNavLink to="/privacy-policy">Privacy Policy</MDBNavLink>
              </li>
              <li className="list-unstyled">
                <MDBNavLink to="/pricing">Pricing</MDBNavLink>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Join us</h5>
            <ul>
              <li className="list-unstyled">
                <MDBNavLink to="/enterprise-solutions">
                  Enterprise solutions
                </MDBNavLink>
              </li>
              <li className="list-unstyled">
                <MDBNavLink to="/opportunities">Opportunities</MDBNavLink>
              </li>
              <li className="list-unstyled">
                <MDBNavLink to="/partners">Partners</MDBNavLink>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Support</h5>
            <ul>
              <li className="list-unstyled">
                <MDBNavLink to="/faq">FAQ</MDBNavLink>
              </li>
              <li className="list-unstyled">
                <a
                  className="nav-link Ripple-parent"
                  href="mailto:support@skilltransfers.com"
                >
                  Email
                </a>
              </li>
              <li className="list-unstyled">
                <MDBNavLink to="/">WhatsApp</MDBNavLink>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Connect</h5>
            <ul>
              <li className="list-unstyled">
                <MDBNavLink to="/contact-us">Contact</MDBNavLink>
              </li>
              <li className="list-unstyled">
                <a
                  className="nav-link Ripple-parent"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/skilltransfers/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="list-unstyled">
                <MDBNavLink to="/">Facebook</MDBNavLink>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright">
        <MDBContainer>
          <MDBRow className="h-100">
            <MDBCol md="6" style={{ padding: "1rem" }}>
              <span style={{ paddingLeft: "1rem", color: "white" }}>
                skilltransfers &copy; {new Date().getFullYear()} All Rights
                Reserved
              </span>
            </MDBCol>
            <MDBCol md="6">
              <img
                className="float-right"
                src={Logo}
                alt="Logo"
                style={{
                  width: "161px",
                  height: "46px"
                }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </FooterContainer>
  </Router>
);

export default Footer;
