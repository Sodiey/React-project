import React, { Fragment } from "react";
import styled from "styled-components";

import css from "../assets/css.svg";
import html from "../assets/html.svg";
import database from "../assets/database.svg";

const Banner = styled.div`
  /* background-color: #113d57; */
`;

const Home = () => {
  return (
    <Fragment>
      <Banner id="site-header">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="3000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a
                data-toggle="modal"
                data-target="#site-modal"
                data-image={css}
                href="#"
              >
                <img
                  src={css}
                  className="mt-5 d-block img-fluid w-100"
                  alt="..."
                />
              </a>
              <div className="carousel-caption d-none d-md-block mb-5 pb-5">
                <h5
                  className="display-2 animated bounceInLeft"
                  style={{ animationDuration: "1s" }}
                >
                  CSS
                </h5>
                {/* <p
                  className="lead text-muted animated fadeInUpBig"
                  style={{ animationDuration: "1s" }}
                >
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}
                <a
                  href="#"
                  role="button"
                  className=" btn btn-secondary animated zoomIn"
                  style={{ animationDuration: "1s" }}
                >
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <a
                data-toggle="modal"
                data-target="#site-modal"
                data-image={html}
                href="#"
              >
                <img
                  src={html}
                  className="mt-5 d-block img-fluid w-100"
                  alt="..."
                />
              </a>
              <div className="carousel-caption d-none d-md-block mb-5 pb-5">
                <h5
                  className="display-2 animated bounceInRight"
                  style={{ animationDuration: "1s" }}
                >
                  HTML
                </h5>
                {/* <p
                  className="lead text-muted animated fadeInUpBig"
                  style={{ animationDuration: "1s" }}
                >
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}
                <a
                  href="#"
                  role="button"
                  className=" btn btn-secondary animated zoomIn"
                  style={{ animationDuration: "1s" }}
                >
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <a
                data-toggle="modal"
                data-target="#site-modal"
                data-image={database}
                href="#"
              >
                <img
                  src={database}
                  className="mt-5 d-block img-fluid w-100"
                  alt="..."
                />
              </a>
              <div className="carousel-caption d-none d-md-block mb-5 pb-5">
                <h5
                  className="display-4 animated bounceIn"
                  style={{ animationDuration: "1s" }}
                >
                  DATABASE
                </h5>
                {/* <p
                  className="lead text-muted animated fadeInUpBig"
                  style={{ animationDuration: "1s" }}
                >
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}
                <a
                  href="#"
                  role="button"
                  className="btn btn-secondary animated zoomIn"
                  style={{ animationDuration: "1s" }}
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </Banner>

      <article id="site-modal" className="modal fade animated bounceIn">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <img
              data-dismiss="modal"
              className="img-fluid"
              src="#"
              alt="Modal Photo"
            />
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default Home;
