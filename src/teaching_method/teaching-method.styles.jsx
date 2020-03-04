import styled from "styled-components";
import { MDBContainer, MDBCol, MDBBtn } from "mdbreact";

export const ImgContainer = styled(MDBContainer)`
  padding: 0;
  img {
    width: 100%;
    height: auto;
  }
`;
export const Title = styled.h2`
  font-weight: bold;
  font-size: 39px;
  line-height: 54px;
  color: #414754;
  letter-spacing: 1.7px;
`;
export const Text = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #6f7676;
  text-align: justify;
`;
export const MainTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 4rem;
  line-height: 75px;
  color: #ffffff;
  margin-bottom: 0px;
`;
export const TextContainer = styled(MDBCol)`
  position: relative;
  right: -9.375rem;
  z-index: 1000;
  top: 3.125rem;
  width: 50%!important;

  @media (max-width: 576px) {
    position: static !important;
}

`;
export const ImgBanner = styled(MDBCol)`
  left: -6.5625rem;
  top: 3.75rem;
  width: 120%;
`;

export const Span = styled.span`
  text-decoration-line: underline;
  color: #ffffff;
`;

export const Btn = styled(MDBBtn)`
  background: #00efd1 !important;
  border-radius: 10em !important;
  color: #2176a7;
  position: relative;
  top: 2.4em;
`;
