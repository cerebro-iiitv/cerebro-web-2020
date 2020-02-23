import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidelist from "./Sidelist/Sidelist";
import Main from "./Main/Main";
import "./Events.scss";
import { events } from "../../util/event";
import Circle from "./Circle/Circle";
class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventIndex: 0
    };
  }

  updateEvent = index => {
    this.setState({
      eventIndex: index
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="event">
          <div>
            <Circle />{" "}
          </div>
          <div>
            <Main event={events[this.state.eventIndex]} />
          </div>
          <div>
            <Sidelist
              events={events}
              updateEvent={this.updateEvent}
              index={this.state.eventIndex}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Events;
