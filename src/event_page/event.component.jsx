import React, { Fragment } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBBtn } from "mdbreact";

import {
  Description,
  OverLay,
  Btn,
  Informative,
  CaptionWrap,
  CaptionIcon,
  CaptionItem,
  TitlePage

} from "./event.styles.jsx";

import bannerImg from ".././images/events/banner-img.png";
import eventImg from ".././images/events/event-img.png";
import eventIcon from ".././images/events/icon.png";

import {
  MainTitle,
  ImgContainer,
  TextContainer,
  ImgBanner,
  Span
} from ".././teaching_method/teaching-method.styles.jsx";

const eventsData = [
  {
    timeFrom: "9:30 -",
    timeTo: "16:00",
    title: "Learn Java and BDD",
    skill1: "small groupss",
    skill2: "90% practical",
    skill3: "intens and fun",
    teacher: "Nuri Bayram",
    TargetGroup: "People with basic Javascript experience.",
    location: "Laan van Kronenburg 14, Amstelvee",
    fee: "€ 1.300 /person",
    includes:
      "Includes: Certificate of completition, warm lunch and after-care",
    spotsLeft: 9
  },
  {
    timeFrom: "9:30 -",
    timeTo: "PM",
    title: "Learn Programming",
    skill1: "small groupss",
    skill2: "90% practical",
    skill3: "intens and fun",
    teacher: "Nuri Bayram",
    language: "English",
    TargetGroup: "People with basic Javascript experience.",
    location: "Laan van Kronenburg 14, Amstelvee",
    fee: "€ 1.300 /person",
    includes: "Certificate of completition, warm lunch and after-care",
    spotsLeft: 1
  },
  {
    timeFrom: "7:30-",
    timeTo: "PM",
    title: "Free Skill HTML/CSS/JS",
    skill1: "HTML 10:00",
    skill2: "CSS 11:00",
    skill3: "JS 12:00",
    teacher: "Nuri Bayram",
    language: "English",
    TargetGroup: "People with basic Javascript experience.",
    location: "Borgerstraat 102, Amsterdam",
    fee: "€ 1.300 /person",
    includes: "Certificate of completition, warm lunch and after-care",
    spotsLeft: 9
  }
];

const EventComponent = props => {
  return (
    <MDBContainer>
      <MDBRow className="p-lg-4 pt-4">
        <MDBCol lg="4" sm="6" className="p-0">
          <OverLay>
            <img src={eventImg} className="img-fluid" />
            <MDBMask className="flex-center">
              <h3>
                {eventsData[0].timeFrom} <br /> {eventsData[0].timeTo}
              </h3>
            </MDBMask>
          </OverLay>
        </MDBCol>
        <MDBCol md="5" className="d-flex">
          <Description>
            <h4 className="h4-responsive ">{props.title}</h4>
            <small>
              <span>💪</span> {props.skill1}
            </small>
            <small>
              <span>💪</span> {props.skill2}
            </small>
            <small>
              <span>💪</span> {props.skill3}
            </small>
            <p className="mt-3">
              <span>Teacher: </span>
              {props.teacher}
            </p>
            <p>
              <span>Target Group: </span>
              {props.TargetGroup}
            </p>
            <p>
              <span>Location: </span>
              {props.location}
            </p>
            <p>
              <span>Fee: </span>
              {props.fee}
            </p>
            <p>
              <span>Includes: </span>
              {props.includes}
            </p>
          </Description>
        </MDBCol>
        <MDBCol lg="2" className="p-0">
          <MDBContainer className="d-flex flex-column justify-content-between h-100">
            <Btn size="sm" color="danger" outline className="">
              {props.spotsLeft} spots left
            </Btn>
            <MDBBtn size="sm" className="p-3">
              Secure My Spot
            </MDBBtn>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
      <hr className="hr-primary mt-5" />
    </MDBContainer>
  );
};
const eventItems = eventsData.map(event => {
  return (
    <EventComponent
      timeFrom={event.timeFrom}
      timeTo={event.timeTo}
      title={event.title}
      skill1={event.skill1}
      skill2={event.skill2}
      skill3={event.skill3}
      teacher={event.teacher}
      TargetGroup={event.TargetGroup}
      location={event.location}
      fee={event.fee}
      includes={event.includes}
      spotsLeft={event.spotsLeft}
    />
  );
});

const Banner = () => {
  return (
    <MDBContainer fluid style={{ background: "#2176A7" }}>
      <MDBContainer className="mb-5">
        <MDBRow className="p-3 col-sm-12">
          <TextContainer lg="5" className="mt-4 p-0 text-end title-offset">
            <MainTitle>
              Events
            </MainTitle>
            <Span>
              <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            </Span>
          </TextContainer>
          <ImgBanner lg="7" className="p-0">
            <ImgContainer>
              <img src={bannerImg} alt="" />
            </ImgContainer>
          </ImgBanner>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

const Title = () => {
  return (
    <MDBContainer>
    <TitlePage className="p-md-3 p-sm-2">
        Upcoming
      </TitlePage>
      <MDBRow >
        <MDBCol>
          <Informative>
            <CaptionWrap>
              <CaptionIcon>
                <img src={eventIcon} alt="" />
              </CaptionIcon>
              <CaptionItem>
                All opportunities have continues training and growth and its
                important you comprehend our equity model, feel free to ask for
                more details or come have a coffee with us.
              </CaptionItem>
            </CaptionWrap>
          </Informative>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
  );
}

export const Event = () => {
  return (
    <Fragment>
      <Banner />
      <Title />
      {eventItems}
    </Fragment>
  );
};

export default Event;