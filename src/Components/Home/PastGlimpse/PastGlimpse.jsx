import React from "react";
import "./PastGlimpse.scss";

function PastGlimpse() {

  let count = 0;

  let array = ['1', '2', '3', '4', '5', '6', '7', '8'];
  let images = array.map(image => {
    return <img key={image} src={`https://picsum.photos/50/50`} alt="" className="past-glimpse" />
  });


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

        <div className="past-glimpse__container__slideshow__list">
          <div className="past-glimpse__container__slideshow__list__des">
            <div className="past-glimpse__container__slideshow__list__des__items">
              <img
                src="https://picsum.photos/80/80"
                className="past-past-glimpse__container__slideshow__list__des__items__images"
                alt="slideshow"
              ></img>
            </div>
            <div className="past-glimpse__container__slideshow__list__des__items">
            </div>
            <div className="past-glimpse__container__slideshow__list__des__items">
            </div>
            <div className="past-glimpse__container__slideshow__list__des__items">
            </div>
            <div className="past-glimpse__container__slideshow__list__des__items">
            </div>
            <div className="past-glimpse__container__slideshow__list__des__items">
            </div>
            <div className="past-glimpse__container__slideshow__list__des__items">
            </div>
            <div className="past-glimpse__container__slideshow__list__des__items">
            </div>

          </div>

        </div>
      </div>


      <div className="past-glimpse__images">
        <img
          src="media/pastGlimpse/Ellipse 32.png"
          className="past-glimpse__images__elli1"
          alt="elli1"
        ></img>
        <img
          src="media/pastGlimpse/Ellipse 33.png"
          className="past-glimpse__images__elli2"
          alt="elli2"
        ></img>
        <img
          src="media/pastGlimpse/Rectangle 29.png"
          className="past-glimpse__images__rec1"
          alt="rec1"
        ></img>
        <img
          src="media/pastGlimpse/Rectangle 30.png"
          className="past-glimpse__images__rec2"
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
