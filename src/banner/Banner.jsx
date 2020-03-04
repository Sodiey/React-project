import React from "react";
import "./banner.css";
import bannerImg from ".././images/banner-img.png";
import { MainTitle, ImgContainer } from "./Banner.style.jsx";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Banner = () => {
  return (
    <MDBContainer fluid className="background-banner">
      <MDBContainer>
        <MDBRow className="p-3 col-sm-12">
          <MDBCol
            lg="5"
            className="mt-4 p-0 text-end title-offset"
          >
            <MainTitle className="text-end">Teaching <br/> Method</MainTitle>
          </MDBCol>
          <MDBCol lg="7" className="p-0 img-offset">
            <ImgContainer>
              <img src={bannerImg} alt="" />
            </ImgContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default Banner;
