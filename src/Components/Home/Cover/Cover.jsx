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
                    <div className="second-title">Techfest IIIT Vadodara</div>
                    <div className="hr-container-x">
                        <div className="hr-second-title">
                            <hr color="#29abe2" />
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <p className="t">T - </p>
                    <Countdown date={`${year}-03-06T00:00:00`} />
                    <p className="t">For the launch</p>
                </div>
                <br />
                <br />
            </div>
            <div>
                <img src="media/cover/Asset 1@4x.png" className="group" alt="haha"></img>
                <img src="media/cover/Asset 7@4x.png" className="rect1"></img>
                <img src="media/cover/Asset 9@4x.png" className="circ1"></img>
                <img src="media/cover/Asset 8@4x.png" className="circ3"></img>
                <img src="media/cover/Asset 10@4x.png" className="circ2"></img>
                <img src="media/cover/Asset 11@4x.png" className="rect2"></img>
                <img src="media/cover/Asset 6@4x.png" className="circ4"></img>
                <img src="media/cover/Asset 4@4x.png" className="circ5"></img>

            </div>
        </div>
    );
}

export default Cover;
