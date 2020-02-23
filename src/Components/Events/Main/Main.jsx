import React, { Component } from "react";
import "./Main.scss";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: props.event
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event !== this.props.event) {
      this.setState({ event: nextProps.event });
    }
  }
  render() {
    const rule = this.state.event.rules.map((rule,index) => {
      return <li key={index}>{rule}</li>;
    });
    return (
      <div className="main">
        <div className="main__container">
          <h1 className="main__container__title">{this.state.event.Title}</h1>
          <div className="main__container__content">
            <div className="main__container__content__left">
              <div className="main__container__content__left__description">
                {this.state.event.description}
              </div>
              <div className="main__container__content__left__info">
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Prize Worth:{" "}
                  </p>{" "}
                  {this.state.event.prize}
                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Team Size:{" "}
                  </p>{" "}
                  {this.state.event.teamSize}
                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Venue:{" "}
                  </p>{" "}
                  {this.state.event.venue}
                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Time:{" "}
                  </p>{" "}
                  {this.state.event.startTime} to
                  {this.state.event.endTime}
                </div>
              </div>
            </div>

            <span className="main__container__content__vl"></span>

            <div className="main__container__content__right">
              <div className="main__container__content__right__rules">
                {rule}
              </div>

              <div className="main__container__content__right__reg">
                Rules and Regulations
              </div>
            </div>
          </div>
          <button className="main__container__button">Register</button>
        </div>
      </div>
    );
  }
}

export default Main;
