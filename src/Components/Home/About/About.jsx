import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="aboutcontainer">
      <div className="aboutcontainer__images">
        <img
          src="media/Asset 12@4x.png"
          className="aboutcontainer__images__spaceship"
          alt="spaceship"
        />
        <img
          src="media/Asset 16@4x.png"
          className="aboutcontainer__images__Recpurplebig animation-particles-rotate"
          alt="rectanglepurple"
        />
        <img
          src="media/Asset 16@4x.png"
          className="aboutcontainer__images__Recpurplesmall animation-particles-rotate"
          alt="rectanglepurple"
        />
        <img
          src="media/Asset 14@4x.png"
          className="aboutcontainer__images__Recpink animation-particles-rotate"
          alt="recpink"
        />
        <img
          src="media/Asset 13@4x.png"
          className="aboutcontainer__images__Circpin animation-particles-rotate"
          alt="circpin"
        />
        <img
          src="media/Asset 15@4x.png"
          className="aboutcontainer__images__Circpurple animation-particles-rotate"
          alt="circpurple"
        />
      </div>
      <div className="aboutcontainer__card">
        <div className="aboutcontainer__card__header">
          <h3>ABOUT</h3>
        </div>
        <div className="aboutcontainer__card__content">
          <p>
            Cerebro is the Annual Technical Festival of Indian Institute of
            Information Technology, Vadodara. It is organized by the Technical
            Society of IIIT Vadodara and serves as a platform for technophiles
            to showcase their creativity and intelligence.
          </p>

          <p className="aboutcontainer__card__content__para2">
            The festival aims to bring together great minds through various
            activities like Technical Workshops, events, talks and exhibitions.
            The event has a complete dose of core technical and fun events
            including literary as well as gaming events.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
