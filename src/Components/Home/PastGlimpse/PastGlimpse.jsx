import React from "react";
import "./PastGlimpse.scss";

const PastGlimpse = () => {
  const width = window.screen.width;
  return (
    <div className="gallery">
      <h1 className="gallery__title section-title">Past year Glimpses</h1>
      <div className="gallery__images">
        <div className="gallery__images__container">
          <div
            className="wide"
            style={{
              backgroundImage: `url('./media/botrun${
                width <= 1000 ? "_mobile" : ""
              }.jpg')`
            }}
          ></div>
          <div
            className="tall"
            style={{
              backgroundImage: "url('./media/director.png')"
            }}
          ></div>
          <div
            className="big"
            style={{
              backgroundImage: `url('./media/team${
                width <= 2000 ? "_mobile" : ""
              }.png')`
            }}
          ></div>
          <div
            className="wide"
            style={{ backgroundImage: "url('./media/game.jpg')" }}
          ></div>
          <div
            className="tall"
            style={{
              backgroundImage: `url('./media/tabletview${
                width <= 1000 ? "_mobile" : ""
              }.jpg')`
            }}
          ></div>
          <div
            className=""
            style={{ backgroundImage: `url('./media/direction.jpg')` }}
          ></div>
          <div
            className="wide"
            style={{
              backgroundImage: `url('./media/baymax${
                width <= 1000 ? "_mobile" : ""
              }.jpeg')`
            }}
          ></div>
          <div
            className=""
            style={{
              backgroundImage: `url('./media/webhead.png')`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PastGlimpse;
