import React, { Component } from "react";
import "./Main.scss";

class Main extends Component {
  render() {
    const eventList = this.props.events.map((event, index) => {
      if (index === this.props.index) {
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
      } else {
        return <></>;
      }
    });
    const contact = this.props.contacts.map((contact, index) => {
      if (index === this.props.index) {
        return (
          <>
            <div className="main__container__content__right__main">
              <p className="main__container__content__right__colorchange">
                Convenor :
              </p>
              <p className="main__container__content__left__info__nochange">
                {contact.convenor}
              </p>
            </div>
            {contact.phone_number1 !== "" ? (
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Contact :
                </p>
                <p className="main__container__content__left__info__nochange">
                  {contact.phone_number1}
                </p>
              </div>
            ) : (
              <></>
            )}
            <div className="main__container__content__right__main">
              <p className="main__container__content__right__colorchange">
                Co-Convenor :
              </p>
              <p className="main__container__content__left__info__nochange">
                {contact.co_convenor1}
              </p>
            </div>
            {contact.phone_number2 !== "" ? (
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Contact :
                </p>
                <p className="main__container__content__left__info__nochange">
                  {contact.phone_number2}
                </p>
              </div>
            ) : (
              <></>
            )}

            {contact.co_convenor2 !== "" ? (
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Co-Convenor :
                </p>
                <p className="main__container__content__left__info__nochange">
                  {contact.co_convenor2}
                </p>
              </div>
            ) : (
              <></>
            )}
            {contact.phone_number3 !== "" ? (
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Contact :
                </p>
                <p className="main__container__content__left__info__nochange">
                  {contact.phone_number2}
                </p>
              </div>
            ) : (
              <></>
            )}

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
      } else {
        return <></>;
      }
    });
    return (
      <div>
        <div className="main">
          <div className="main__container">
            <h1 className="main__container__title">{this.props.title}</h1>
            <div className="main__container__content">
              <div className="main__container__content__left">{eventList}</div>
              <span className="main__container__content__vl"></span>
              <div className="main__container__content__right">{contact}</div>
            </div>
          </div>
          <div className="main__container__content__right__reg">
            <a href={this.props.pdf}>Rules and Regulations</a>
          </div>
          <div className="main__container__content__right__reg__but">
            <span className="main__container__button">Register</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
