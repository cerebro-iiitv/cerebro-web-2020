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
                    <a className="cover__social-links__link"><i className="fa fa-twitter"></i></a>
                    <a className="cover__social-links__link"><i className="fa fa-instagram"></i></a>
                    <a className="cover__social-links__link"><i className="fa fa-facebook"></i></a>
                </div>

                <a className="cover__social-links__link down-arrow"><i className="fa fa-chevron-down"></i></a>
            </div>
            <div className="cover__titles">
                <h1 className="cover__titles__title">Cerebro</h1>
                <p className="cover__titles__date"><span>27<sup>th</sup> - 29<sup>th</sup> March 2020</span></p>
                <div className="cover__titles__timer">
                    <p className="t">T - </p>
                    <Countdown date={`${year}-03-06T00:00:00`} />
                    <p className="t">For the launch</p>
                </div>
            </div>
            <div className="cover__image">
                <img className="cover__image__bg-left" src="media/cover/cover-bg-left.png" alt="Cerebro helmet background" />
                <img className="cover__image__bg-right" src="media/cover/cover-bg-right.png" alt="Cerebro helmet background" />
                <img className="cover__image__helmet animation-space-float" src="media/cover/helmet.png" alt="Cerebro helmet" />
            </div>
        </div>
    );
}

export default Cover;
