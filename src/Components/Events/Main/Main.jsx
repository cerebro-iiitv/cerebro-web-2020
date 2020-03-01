import React, { Component, createRef } from "react";
import "./Main.scss";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  render() {
    const eventList = this.props.events.map((event, index) => {
      if (index == this.props.index) {
        this.container.current.className = "main__container animation-fade-in";
        setTimeout(() => {
          this.container.current.className = "main__container";
        }, 500);
        return (
          <>
            <div className="main__container__content__left__description">
              <p>{event.description}</p>
            </div>
            <div className="main__container__content__left__info">
              <div className="main__container__content__left__details">
                <p className="main__container__content__left__info__colorchange">
                  Prize Worth:{" "}
                </p>{" "}
                <p className="main__container__content__left__info__nochange">
                  {event.prize}
                </p>
              </div>

              <div className="main__container__content__left__details">
                <p className="main__container__content__left__info__colorchange">
                  Team Size:{" "}
                </p>{" "}
                <p className="main__container__content__left__info__nochange">
                  {event.team_size}
                </p>
              </div>
              <div className="main__container__content__left__details">
                <p className="main__container__content__left__info__colorchange">
                  Venue:{" "}
                </p>{" "}
                <p className="main__container__content__left__info__nochange">
                  {event.venue}
                </p>
              </div>
              <div className="main__container__content__left__details">
                <p className="main__container__content__left__info__colorchange">
                  Time:{" "}
                </p>{" "}
                <p className="main__container__content__left__info__nochange">
                  <p>
                    {event.start_time} to {event.end_time}
                  </p>
                </p>
              </div>
            </div>
          </>
        );
      }
    });
    const contact = this.props.contacts.map((contact, index) => {
      if (index == this.props.index) {
        return (
          <>
            <div className="main__container__content__right__main">
              <p className="main__container__content__right__colorchange">
                Covenor :
              </p>
              <p className="main__container__content__left__info__nochange">
                {contact.convenor}
              </p>
            </div>
            <div className="main__container__content__right__main">
              <p className="main__container__content__right__colorchange">
                Contact :
              </p>
              <p className="main__container__content__left__info__nochange">
                {contact.phone_number1}
              </p>
            </div>
            <div className="main__container__content__right__main">
              <p className="main__container__content__right__colorchange">
                Co-Convenor :
              </p>
              <p className="main__container__content__left__info__nochange">
                {contact.co_convenor1}
              </p>
            </div>
            <div className="main__container__content__right__main">
              <p className="main__container__content__right__colorchange">
                Contact :
              </p>
              <p className="main__container__content__left__info__nochange">
                {contact.phone_number2}
              </p>
            </div>
            <div className="main__container__content__right__main">
              <p className="main__container__content__right__colorchange">
                Member :
              </p>
              <p className="main__container__content__left__info__nochange">
                {contact.member1} , {contact.member2}
              </p>
            </div>
          </>
        );
      }
    });
    return (
      <div>
        <div className="main">
          <div className="main__container" ref={this.container}>
										<h1 className="main__container__title">{this.props.title}</h1>
            <div className="main__container__content">
              <div className="main__container__content__left">{eventList}</div>
              <span className="main__container__content__vl"></span>
              <div className="main__container__content__right">{contact}</div>
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
