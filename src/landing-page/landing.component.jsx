import React, { Fragment } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
  MDBNavLink
} from "mdbreact";

import {
  Header,
  Define,
  Title,
  Text,
  Bold,
  Media,
  Img,
  Layout,
  IconGroup,
  Span,
  Wrap
} from "./landing.styles.jsx";

import bannerImg from "../images/landing/landing-header.png";
import reactImg from "../images/landing/react.png";
import cypressImg from "../images/landing/cypress.png";
import javaImg from "../images/landing/java.png";
import awsImg from "../images/landing/aws.png";
import laptopImg from "../images/landing/image01.png";
import peopleImg from "../images/landing/image02.png";
import fistImg from "../images/landing/image03.png";

const Banner = () => {
  return (
    <Header size="lg" className="py-5">
      <MDBRow className="justify-content-center">
        <MDBCol size="11" md="5" className="pb-5">
          <h1 className="h1 animated fadeInRight">
            READY FOR A CAREER THAT MOVES AS FAST AS YOU DO?
          </h1>
          <p>
            <Bold>In-Person training and mentoring</Bold> every step of the way.
            How fast can you go?
          </p>
          <MDBBtnGroup className="d-block d-sm-flex">
            <MDBBtn
              outline
              className=" animated fadeInDown rounded-lg w-100 mr-4 "
            >
              Full stack developer path
            </MDBBtn>
            <MDBBtn
              color="primary"
              className=" animated fadeInDown rounded-lg w-100 ml-1"
            >
              Full stack tester path
            </MDBBtn>
          </MDBBtnGroup>
        </MDBCol>

        <MDBCol size="10" md="7">
          <img className="img-fluid animated zoomIn" src={bannerImg} alt="" />
        </MDBCol>
      </MDBRow>
    </Header>
  );
};

const DefineUs = () => {
  return (
    <Define>
      <MDBContainer>
        <Title>What Defines Us</Title>
        <Text>
          There are a lot of trainers and learning systems out there...
          <br />
          <br />
          But there aren't enough who are truly{" "}
          <Bold>committed and connected to your success </Bold>—and supported in
          their ambitions with a learning system and a community that works as
          hard and cares as much as we do. We believe that career and life are
          not seperate things and the integration of them is part of your growth
          and happiness in life.
          <br />
          <br />
          If you're in this for the long haul, we're there for you{" "}
          <Bold>every step of the way</Bold>. Because if we're not working every
          day for your{" "}
          <Bold>personal happiness and professional development</Bold>, we're
          not truly serving our members and our community.
          <br />
          <br />
          Ready to help us change lives?
        </Text>
      </MDBContainer>
    </Define>
  );
};

const Feature = () => {
  return (
    <MDBContainer fluid className="p-5">
      <Title col >Our Featured Courses</Title>
      <MDBRow className="justify-content-center p-0 m-5">
        <Media size="10" md="6" lg="4" xl="3">
          <a href="http://skilltransfers.com/developer">
            <Img
              className="img-fluid d-block"
              src={reactImg}
              alt="react icon"
            />
          </a>
          <a href="http://skilltransfers.com/developer">React.js</a>
        </Media>
        <Media size="10" md="6" lg="4" xl="3">
          <a href="http://skilltransfers.com/tester">
            <Img
              className="img-fluid d-block"
              src={cypressImg}
              alt="cypress icon"
            />
          </a>
          <a href="http://skilltransfers.com">Cypress.io</a>
        </Media>
        <Media size="10" md="6" lg="4" xl="3">
          <a href="https://d12qtwmk6o87p5.cloudfront.net/tester">
            <Img className="img-fluid d-block" src={javaImg} alt="java icon" />
          </a>
          <a href="https://d12qtwmk6o87p5.cloudfront.net/tester">
            Java and BDD
          </a>
        </Media>
        <Media size="10" md="6" lg="4" xl="3">
          <a href="http://skilltransfers.com/developer">
            <Img className="img-fluid d-block" src={awsImg} alt="aws icon" />
          </a>
          <a href="http://skilltransfers.com/developer">AWS architect</a>
        </Media>
      </MDBRow>
      <hr className="hr p-3 mt-5" />
    </MDBContainer>
  );
};

 export const TwoCols = props => {
  return (
    <Layout>
      <MDBContainer size="md">
        <MDBRow className="justify-content-center">
          <MDBCol id="cl" size="auto" md="6" lg="5" className={props.order}>
            <img className="img-fluid" src={props.img} alt="" />
          </MDBCol>
          <MDBCol size="auto" md="6" lg="5">
            <Title className="mb-4">{props.title}</Title>
            <Text class="">{props.text}</Text>
            <MDBBtn
              to={"https://skilltransfers.com/" + props.link}
              className="btn-block w-75 mb-5"
              color="primary"
            >
              <span class="spinner-border spinner-border-sm mr-2"></span>
              {props.button}
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

const Contact = () => {
  return (
    <Layout className="text-center">
      <MDBContainer size="md" className="p-5">
        <Title col className="resize">READY TO JOIN SOMETHING AWESOME?</Title>
        <MDBBtn size="block" className="w-50 my-5">
          Let's Talk!
        </MDBBtn>
        <IconGroup className="">
          <MDBNavLink to="#">
            <MDBIcon tag="a" className="mr-4" fab icon="linkedin-in" />
          </MDBNavLink>
          <MDBNavLink to="#">
            <MDBIcon tag="a" className="mr-4" fab icon="facebook-f" />
          </MDBNavLink>
          <MDBNavLink to="#">
            <MDBIcon tag="a" fab icon="twitter" />
          </MDBNavLink>
        </IconGroup>
        <Span className="mt-3">Skilltransfers © 2020 All Rights Reserved</Span>
      </MDBContainer>
    </Layout>
  );
};

//Text() holds the text for the Twocol layout
const text1 = () => {
  return (
    <Fragment>
      We started with a bunch of people<Bold> wanting to improve</Bold> their
      lives and work for a company that cares, not only in communication but in
      <Bold> support, equity and opportunities</Bold> to build a growth and
      equality framework that no one can surpass.
      <br />
      <br />
      So we started giving our first trainings in 2016 and started building
      <Bold> a learning management system</Bold>(skilltransfers platform) from
      there. We expand our curriculum and grow the number of people who support
      the same vision.
      <br />
      <br />
      We're proud of the team and the system we've built. Skilltransfers is
      proud on its<Bold> employees, network of trainers and partners,</Bold> and
      we're dedicated to help every member to the{" "}
      <Bold>career of their dreams.</Bold>
    </Fragment>
  );
};
const text2 = () => {
  return (
    <Fragment>
      An environment with the<Bold> most motivated people on the planet</Bold>
      —interested to transform their careers and their members lives.
      <br />
      <br />
      At Skilltransfers, you're not just signing up to learn. You're signing up
      for a full support system. From <Bold>training resources</Bold> to{" "}
      <Bold>monthly outings</Bold>, you'll get to know us and
      <Bold> we'll get to know you and your goals.</Bold>
    </Fragment>
  );
};
const text3 = () => {
  return (
    <Fragment>
      When our trainers are supported, our members succeed. We've set
      <Bold> high standards</Bold> and created smart structures to help make the
      tough work of learning <Bold>smoother and more satisfying.</Bold>
      <br />
      <br />
      We look for people who are doing great things and we believe in always
      increasing the pie. It's important for us to{" "}
      <Bold>maintain strong links across our local communities.</Bold>
    </Fragment>
  );
};

const TwoColsInfo = {
  title: ["Where we started", "Who we are", "What represents us"],
  img: [laptopImg, peopleImg, fistImg],
  button: ["Learn More", "Join Us", "See Our Teaching Method"],
  style: ["order-1",],
  link: ["about-us", "opportunities", "teaching-method"]
};

const Landing = () => {
  return (
    <Fragment>
      <Banner />
      <DefineUs />
      <Feature />
      <TwoCols
        img={TwoColsInfo.img[0]}
        title={TwoColsInfo.title[0]}
        text={text1()}
        button={TwoColsInfo.button[0]}
        link={TwoColsInfo.link[0]}
      />
      <Wrap>
      <TwoCols
        img={TwoColsInfo.img[1]}
        title={TwoColsInfo.title[1]}
        text={text2()}
        button={TwoColsInfo.button[1]}
        order={TwoColsInfo.style[0]}
        link={TwoColsInfo.link[1]}
      />
      </Wrap>
      <TwoCols
        img={TwoColsInfo.img[2]}
        title={TwoColsInfo.title[2]}
        text={text3()}
        button={TwoColsInfo.button[2]}
        link={TwoColsInfo.link[2]}
      />
      <Contact />
    </Fragment>
  );
};

export default Landing;
