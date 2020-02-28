import React, { Component, createRef } from "react";
import "./Main.scss";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      event: props.event
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event !== this.props.event) {
      this.setState({ event: nextProps.event });

      this.container.current.className =
        "main__container animation-fade-in";
      setTimeout(() => {
        this.container.current.className = "main__container";
      }, 500);
    }
  }
  render() {
    return (
      <div className="main">
        <div className="main__container" ref={this.container}>
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
                  <p className="main__container__content__left__info__nochange">{this.state.event.prize}</p>
                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Team Size:{" "}
                  </p>{" "}
                  <p className="main__container__content__left__info__nochange">{this.state.event.teamSize}</p>

                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Venue:{" "}
                  </p>{" "}
                  <p className="main__container__content__left__info__nochange">{this.state.event.venue}</p>
                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Time:{" "}
                  </p>{ }
                  <p className="main__container__content__left__info__nochange">{ }</p>
                  {this.state.event.startTime} to { }
                  {this.state.event.endTime}
                </div>
              </div>
            </div>

            <span className="main__container__content__vl"></span>

            <div className="main__container__content__right">
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Covenor :
                </p>
                <p className="main__container__content__left__info__nochange">{this.state.event.covenors.name}</p>
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Phone :
                </p>
                <p className="main__container__content__left__info__nochange">{this.state.event.covenors.phone}</p>
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Co-Covenor :
                </p>
                <p className="main__container__content__left__info__nochange">{this.state.event.co_convenors.name}</p>
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Phone :
                </p>
                <p className="main__container__content__left__info__nochange">{this.state.event.co_convenors.phone}</p>
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Member 1 :
                </p>
                <p className="main__container__content__left__info__nochange">{this.state.event.members[0]}</p>
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Member 2 :
                </p>
                <p className="main__container__content__left__info__nochange">{this.state.event.members[1]}</p>
              </div>
            </div>
          </div>

          <div className="main__container__content__right__reg">
            Rules and Regulations
          </div>
          <div className="main__container__content__right__reg__but">
            <a className="main__container__button">Register</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
