import React from "react";
import "../../../Components/Home/Sponsors/Sponsors.scss";

function Sponsors() {
  return (
    <div className="sponsor_container">
      <div className="sponsor_text_container">
        <div className="hr-container">
          <div className="hr-txt__line1">
            <hr color="#29abe2" />
          </div>
          <div className="hr-txt2">
            <hr color="#29abe2" />
          </div>
        </div>
        <div className="sponsors_text">SPONSORS</div>
        <div className="hr-container">
          <div className="hr-txt">
            <hr color="#29abe2" />
          </div>
          <div className="hr-txt2">
            <hr color="#29abe2" />
          </div>
        </div>
      </div>
      <div class="sponsor_wrapper">
        <div class="sponsor_wrapper2">
          <img
            src="media/stickermuletransparent.png"
            className="sponsor_img"
            alt="sponsor One"
          />
          <img
            src="media/souledstoretransparent.png"
            className="sponsor_img"
            alt="sponsor Two"
          />
        </div>
        <div class="sponsor_wrapper2">
          <img
            src="media/stickermuletransparent.png"
            className="sponsor_img"
            alt="sponsor Three"
          />
          <img
            src="media/souledstoretransparent.png"
            className="sponsor_img"
            alt="sponsor Four"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
