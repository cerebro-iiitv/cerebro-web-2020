import React from 'react';
import Countdown from './Countdown';
import 'font-awesome/css/font-awesome.min.css';
import './Cover.scss';

function Cover() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
        <div className="cover">
             <div className="cover__social-links">
                <div className="cover__social-links__container">
                    <a className="cover__social-links__link" href="https://www.twitter.com/cerebro_iiitv/" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a className="cover__social-links__link" href="https://www.instagram.com/cerebro.iiitv/" target="_blank"><i className="fa fa-instagram"></i></a>
                    <a className="cover__social-links__link" href="https://www.facebook.com/cerebro.iiitv/" target="_blank"><i className="fa fa-facebook"></i></a>
                </div>

                <a className="cover__social-links__link down-arrow"><i className="fa fa-chevron-down"></i></a>
            </div>
            <div className="cover__titles">
                <h1 className="cover__titles__title">Cerebro</h1>
                <p className="cover__titles__date"><span>27<sup>th</sup> - 29<sup>th</sup> March 2020</span></p>
                <div className="cover__titles__timer">
                    <p className="t">T - </p>
                    <Countdown date={`2020-03-27T00:00:00`} />
                    <p className="t">For the launch</p>
                </div>
            </div>
            <div className="cover__image">
                <img className="cover__image__bg-left" src="media/cover/cover-bg-left.png" alt="Cerebro helmet background" />
                <img className="cover__image__bg-right" src="media/cover/cover-bg-right.png" alt="Cerebro helmet background" />
                <img className="cover__image__helmet animation-space-float" src="media/cover/helmet.png" alt="Cerebro helmet" />
                <img
                    src="media/Asset 16@4x.png"
                    className="aboutcontainer__images__Recpurplebig animation-particles-rotate Recpurple1"
                    alt="rectanglepurple"
                />
                <img
                    src="media/Asset 16@4x.png"
                    className="aboutcontainer__images__Recpurplesmall animation-particles-rotate Recpurple2"
                    alt="rectanglepurple"
                />
                <img
                    src="media/Asset 13@4x.png"
                    className="aboutcontainer__images__Circpin animation-particles-rotate Circpin1"
                    alt="circpin"
                />
                <img
                    src="media/Asset 15@4x.png"
                    className="aboutcontainer__images__Circpurple animation-particles-rotate Circpurple1"
                    alt="circpurple"
                />
                <img
                    src="media/Asset 15@4x.png"
                    className="aboutcontainer__images__Circpurple animation-particles-rotate Circpurple2"
                    alt="circpurple"
                />
                <img
                    src="media/Asset 15@4x.png"
                    className="aboutcontainer__images__Circpurple animation-particles-rotate Circpurple3"
                    alt="circpurple"
                />
                <img
                    src="media/Asset 13@4x.png"
                    className="aboutcontainer__images__Circpin animation-particles-rotate Circpin2"
                    alt="circpin"
                />
            </div>
        </div>
    );
}

export default Cover;
