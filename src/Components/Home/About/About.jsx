import React from "react";
import "../../../scss/pages/_about.scss";
var Photo = "media/Asset 12@4x.png";
var Recpurple = "media/Asset 16@4x.png";
var Recpink = "media/Asset 14@4x.png";
var Circpin = "media/Asset 13@4x.png";
var Circpurple = "media/Asset 15@4x.png";
function About() {
  return (
    <div className="container">
      <div className="leftimage">
        <img src={Photo} />
        <img src={Recpurple} className="Recpurple" />
        <img src={Recpink} className="Recpink" />
        <img src={Circpin} className="Circpin" />
        <img src={Circpurple} className="Circpurple" />
      </div>
      <div className="aboutcard">
        <div className="aboutheader">
          <h3>About</h3>
        </div>
        <div className="aboutcontent">
          <p>
            Cerebro is the Annual Technical Festival of Indian Institute of
            Information Technology, Vadodara. It is organized by the Technical
            Society of IIIT Vadodara and serves as a platform for technophiles
            to showcase their creativity and intelligence.
          </p>

          <p className="para2">
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
