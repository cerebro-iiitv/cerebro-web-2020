import React from "react";
import "../../../Components/Home/Sponsors/Sponsors.scss";

function Sponsors() {
  return (
    <div className="sponsorContainer">
      <div className="cont">
        <div className="hr-container">
          <div className="hr-txt">
            <hr color="#29abe2" />
          </div>
          <div className="hr-txt2">
            <hr color="#29abe2" />
          </div>
        </div>
        <div className="sponsorsText">SPONSORS</div>
        <div className="hr-container">
          <div className="hr-txt3">
            <hr color="#29abe2" />
          </div>
          <div className="hr-txt2">
            <hr color="#29abe2" />
          </div>
        </div>
      </div>
      <div class="sponsorWrapper">
        <img src="media/stickermule.png" className="sponsorOne sponsorImg" />
        <img src="media/souledstore.png" className="sponsorTwo sponsorImg" />
        <img src="media/stickermule.png" className="sponsorThree sponsorImg" />
        <img src="media/souledstore.png" className="sponsorFour sponsorImg" />
      </div>
    </div>
  );
}

export default Sponsors;
