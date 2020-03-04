import React, { Fragment } from "react";

import bannerImg from ".././images/banner-img.png";
import methodImg from ".././images/method-img.png";
import approachImg from ".././images/approach-img.png";
import careImg from ".././images/care-img.png";
import courseImg from ".././images/course-img.png";

import { MainTitle, ImgContainer, Title, Text, TextContainer, ImgBanner, Span, Btn } from "./teaching-method.styles.jsx";

import { 
    MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBJumbotron, 
} from "mdbreact";

const TeachingMethod = () => {
  return (
    <Fragment>
      <MDBContainer fluid style={{background: '#2176A7'}}>
        <MDBContainer>
          <MDBRow className="p-3 col-sm-12">
            <TextContainer lg="5" className="mt-4 p-0 text-end title-offset">
               <MainTitle>Teaching <br /> Method</MainTitle>
                <Span><span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span></Span>
            </TextContainer>
            <ImgBanner lg="7" className="p-0">
              <ImgContainer>
                <img src={bannerImg} alt="" />
              </ImgContainer>
            </ImgBanner>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
      <MDBContainer fluid>
      <MDBRow className="p-4 mt-5">
        <MDBCol className="col-sm-12">
          <MDBContainer className="text-center p-5 col-md-10">
            <Title className="mb-4">Method Explained</Title>
            <Text className="mb-5">
              Our courses exist out of an x amount of skills. And every skill is
              made to be able to learn separately. Every skill is made out 2
              pages with steps you have to follow. You follow them first with
              the teacher and then you do them alone but guided. After that the
              teacher will give you a challenge that relates to what you have
              learned. After the lesson, you can download the skill-guide from
              your profile page to review at home.
            </Text>
            <ImgContainer>
                <img src={methodImg} alt="" className="col-xl-10"/>
            </ImgContainer>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBContainer fluid style={{background: '#F2F6F9'}}>
        <MDBRow className="p-lg-5 m-lg-5 p-sm-3"></MDBRow>
      <MDBRow className="col-lg-12 m-auto">
        <MDBCol lg="6">
          <MDBContainer className="p-3">
            <Title>A practical approach</Title>
            <Text>
              You may have noticed that every step is practical and we don’t
              waste much time on theory. The theory is explained by the teacher
              the exact moment that you need it and because the teacher is with
              you there is always interactivity. We encourage you to watch a
              YouTube video on the subject after the lesson with more complex
              skills, but a lot of times it’s not needed.
            </Text>
          </MDBContainer>
        </MDBCol>
        <MDBCol lg="6" className="mb-5">
            <ImgContainer>
                <img src={approachImg} alt=""/>
            </ImgContainer>
        </MDBCol>
      </MDBRow>
      <MDBRow className="p-lg-4 m-lg-4 p-sm-3"></MDBRow>
    </MDBContainer>
    <MDBContainer fluid>
      <MDBRow className="p-md-4 m-md-5 p-sm-4"></MDBRow>
      <MDBRow className="col-lg-12 m-auto">
        <MDBCol lg="6">
          <ImgContainer>
            <img src={careImg} alt="" />
          </ImgContainer>
        </MDBCol>
        <MDBCol lg="6">
          <MDBContainer className="p-3">
            <Title className="text-left">After Care</Title>
            <Text>
            It’s not aftercare its more like always care. We are available for you, if you are stuck with a challenge or don’t know what to choose next or where to start you contact us. For your convenience choose something interactive like WhatsApp or slack instead of mail so you don’t waste time waiting.
            </Text>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
      <MDBRow className="p-lg-4 m-lg-4 p-sm-3"></MDBRow>
    </MDBContainer>
    <MDBContainer fluid style={{background: '#F2F6F9'}}>
        <MDBRow className="p-lg-5 m-lg-5 p-sm-3"></MDBRow>
        <MDBRow className="col-lg-12 m-auto">
          <MDBCol lg="6">
            <MDBContainer className="p-3">
              <Title>Levels and courses</Title>
              <Text>
                Every level has 4 skills and its wise to start with beginner
                skills so you have the fundamentals which are very important to
                understand the other skills. It’s possible to let us know if you
                already master some skills and we will add them to your profile.
                Sometimes it will require a small assessment because we take the
                integrity of the profile pages seriously.
              </Text>
            </MDBContainer>
          </MDBCol>
          <MDBCol lg="6" className="mb-5">
            <ImgContainer>
              <img src={courseImg} alt="" />
            </ImgContainer>
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-lg-4 m-lg-4 p-sm-3"></MDBRow>
      </MDBContainer>
      <MDBContainer className="p-lg-5">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="shadow-none text-center">
              <Title className="mb-3">Experience life through growth</Title>
              <Btn  className=" mt-5">Let’s do it</Btn>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default TeachingMethod;
