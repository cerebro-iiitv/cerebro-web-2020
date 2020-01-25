import React from "react";
import "../../../Components/Home/Sponsors/Sponsors.scss";

function Sponsors() {
  return (
    <div className="sponsor_container">
      <div className="cont">
        <div className="hr-container">
          <div className="hr-txt">
            <hr color="#29abe2" />
          </div>
          <div className="hr-txt2">
            <hr color="#29abe2" />
          </div>
        </div>
        <div className="sponsors_text">SPONSORS</div>
        <div className="hr-container">
          <div className="hr-txt3">
            <hr color="#29abe2" />
          </div>
          <div className="hr-txt2">
            <hr color="#29abe2" />
          </div>
        </div>
      </div>
      <div class="sponsor_wrapper">
        <img
          src="media/stickermuletransparent.png"
          className="sponsor_one"
          alt="sponsor One"
        />
        <img
          src="media/souledstoretransparent.png"
          className="sponsor_two"
          alt="sponsor Two"
        />
        <img
          src="media/stickermuletransparent.png"
          className="sponsor_three "
          alt="sponsor Three"
        />
        <img
          src="media/souledstoretransparent.png"
          className="sponsor_four "
          alt="sponsor Four"
        />
      </div>
    </div>
  );
}

export default Sponsors;
