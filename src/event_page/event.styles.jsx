import styled from "styled-components";
import { MDBContainer, MDBCol, MDBView, MDBBtn } from "mdbreact";

export const TitlePage = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2.875rem;
    line-height: 3.375rem;
    color: #414754;
    margin-top: 6.25rem ;
`;
export const Informative = styled.div`
  left: 242px;
  top: 245px;
  background: #a9e5ff;
  margin-bottom: 44px;
`;
export const CaptionWrap = styled.div`
  position: relative;
`;
export const CaptionIcon = styled.div`
  position: absolute;
  top: 24px;
  left: 20px;
`;
export const CaptionItem = styled.div`
  padding: 15px 20px 0px 67px;
  font-size: 16px;
`;

export const Description = styled(MDBContainer)`
  color: #666a6a;
  font-family: Roboto;
  font-style: normal;
  line-height: 1.3875rem;
  margin-left: 0px;
  margin-top: 1rem;
  h4 {
    font-weight: 500;
    font-size: 1.875rem;
    line-height: 2.1875rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
  span {
    font-weight: bold;
  }
  small {
    font-size: 1rem;
    line-height: 1.1875rem;
    text-align: justify;
    display: block;
  }
  small span {
    color: #fdf305;
    font-weight: bold;
  }
`;

export const OverLay = styled(MDBView)`
  width: fit-content;
  img {
    width: 100vw;
  }
  .mask h3 {
    font-weight: 900;
    font-size: 2.8125rem;
    line-height: 3.3125rem;
    color: rgba(255, 255, 255, 0.85);
  }
  @media (max-width: 573px) {
    img {
      width: 100%;
    }
  }
`;

export const Btn = styled(MDBBtn)`
`;
