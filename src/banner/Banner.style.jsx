import styled from "styled-components";
import { MDBContainer } from "mdbreact";

export const MainTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  color: #ffffff;
`;

export const ImgContainer = styled(MDBContainer)`
  padding: 0;
  img {
    width: 100%;
    height: auto;
  }
`;
