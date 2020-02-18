import React from "react";
import Countdown from './Countdown';
import "./Cover.scss";

function Cover() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
        <div className="cover">
            <div className="inner-container">
                <h1 className="cerebro-title">CEREBRO</h1>
                <div className="cont">
                    <div className="hr-container-x">
                        <div className="hr-second-title">
                            <hr color="#29abe2" />
                        </div>
                    </div>
                    <div className="second-title">27<sup>th</sup> - 29<sup>th</sup> March 2020</div>
                    <div className="hr-container-x">
                        <div className="hr-second-title">
                            <hr color="#29abe2" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="timer">
                    <p className="t">T - </p>
                    <Countdown date={`${year}-03-06T00:00:00`} />
                    <p className="t">For the launch</p>
                </div>
            </div>
            <div className="cover-image">
                <img src="media/cover/Asset 1@4x.png" className="group animation-space-float" alt="haha"></img>
                <img src="media/cover/Asset 7@4x.png" className="cover-particle rect1 animation-particles-rotate"></img>
                <img src="media/cover/Asset 9@4x.png" className="cover-particle circ1 animation-particles-rotate"></img>
                <img src="media/cover/Asset 8@4x.png" className="cover-particle circ3 animation-particles-rotate"></img>
                <img src="media/cover/Asset 10@4x.png" className="cover-particle circ2 animation-particles-rotate"></img>
                <img src="media/cover/Asset 11@4x.png" className="cover-particle rect2 animation-particles-rotate"></img>
                <img src="media/cover/Asset 6@4x.png" className="cover-particle circ4 animation-particles-rotate"></img>
                <img src="media/cover/Asset 4@4x.png" className="cover-particle circ5 animation-particles-rotate"></img>
            </div>
        </div>
    );
}

export default Cover;
