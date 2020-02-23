import React, { Component } from 'react';
import "./Main.scss";

const Main = props => {
    const MainList = props.events.map((event) => {
        return (
            <div className="main__container__content__left__description">
                {event.description}
            </div>
        )
    })
    return (
        <div className="main" >
            <div className="main__container">
                <h1 className="main__container__title">COOK-A-CODE</h1>
                <div className="main__container__content">

                    <div className="main__container__content__left">
                        <div className="main__container__content__left__description">
                            Let the programming juice flow
                            in your brain!
                        </div>
                        <div className="main__container__content__left__info">
                            <div className="main__container__content__left__details">
                                <p className="main__container__content__left__info__colorchange">Prize Worth: </p> 6000
                            </div>
                            <div className="main__container__content__left__details">
                                <p className="main__container__content__left__info__colorchange">Team Size: </p> 3
                            </div>
                            <div className="main__container__content__left__details">
                                <p className="main__container__content__left__info__colorchange">Venue: </p> 9102 (A and B)
                            </div>
                            <div className="main__container__content__left__details">
                                <p className="main__container__content__left__info__colorchange">Time: </p> 2019-03-03 03:30PM to
                                2019-03-03 06:30PM
                            </div>
                        </div>
                    </div>

                    <span class="main__container__content__vl"></span>

                    <div className="main__container__content__right">
                        <div className="main__container__content__right__rules">
                            • Both the rounds online as well as
                            onsite will follow the ACM style
                        ranking system <br />

                            • Any type of plagiarism detected
                              will lead to immediate
                        disqualification  <br />

                            • A team must contain at most 3
                        members.  <br />

                        </div>

                        <div className="main__container__content__right__reg">Rules and Regulations</div>
                    </div>

                </div>
                <button class="main__container__button">Register</button>
            </div>
        </div>
    );
}

export default Main;
