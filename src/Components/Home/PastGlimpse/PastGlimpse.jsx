import React from "react";
import "./PastGlimpse.scss";

function PastGlimpse() {
  return (
    <div className="past-glimpse">
      <div className="past-glimpse__container">
        <div className="past-glimpse__container__heading">
          PAST YEAR GLIMPSES
        </div>
        <div className="past-glimpse__container__slideshow">
          <img
            src="media/pastGlimpse/img1.jpeg"
            className="past-glimpse__container__slideshow__slide"
            alt="slideshow"
          ></img>
        </div>
      </div>
      <div className="past-glimpse__images">
        <img
          src="media/pastGlimpse/Ellipse 32.png"
          className={"past-glimpse__images__elli1 animation-particles-rotate"}
          alt="elli1"
        ></img>
        <img
          src="media/pastGlimpse/Ellipse 33.png"
          className={"past-glimpse__images__elli2 animation-particles-rotate"}
          alt="elli2"
        ></img>
        <img
          src="media/pastGlimpse/Rectangle 29.png"
          className={"past-glimpse__images__rec1 animation-particles-rotate"}
          alt="rec1"
        ></img>
        <img
          src="media/pastGlimpse/Rectangle 30.png"
          className={"past-glimpse__images__rec2 animation-particles-rotate"}
          alt="rec2"
        ></img>
        <img
          src="media/pastGlimpse/Group 55.png"
          className="past-glimpse__images__group"
          alt="group"
        ></img>
      </div>
    </div>
  );
}

export default PastGlimpse;
