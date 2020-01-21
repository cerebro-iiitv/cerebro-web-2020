import React from "react";
import "./PastGlimpse.scss";

function PastGlimpse() {
    return (
        <div className="pastglimpse">
            <div className="inner-container">
                <h1>PAST YEAR GLIMPSES</h1>
                <br />
                <br />
                <div className="frame">
                    <img src="media/pastGlimpse/img1.jpeg" className="image" />
                </div>
            </div>
            <div>
                <img src="media/pastGlimpse/Group 55.png" className="group"></img>
                <img src="media/pastGlimpse/Ellipse 32.png" className="circle1"></img>
                <img src="media/pastGlimpse/Ellipse 33.png" className="circle2"></img>
                <img src="media/pastGlimpse/Rectangle 29.png" className="rec1"></img>
                <img src="media/pastGlimpse/Rectangle 30.png" className="rec2"></img>
            </div>
        </div>
    );
}

export default PastGlimpse;
