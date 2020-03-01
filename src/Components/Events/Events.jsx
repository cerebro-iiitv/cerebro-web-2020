import React, { Component } from "react";

import Header from "../Header/Header";
import Sidelist from "./Sidelist/Sidelist";
import Main from "./Main/Main";
import "./Events.scss";
import Circle from "./Circle/Circle";
import Demo from "./Demo";
class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventIndex: 0,
      selectedEvent: "Tech Hunt"
    };
  }
  updateEvent = (index, event) => {
    this.setState({
      eventIndex: index,
      selectedEvent: event
    });
  };

  render() {
    const { events, contacts } = this.props;
    return (
      <div>
        <Header />
        <div className="event">
          <div>
            <Circle index={this.state.eventIndex} />
          </div>
          <div>
            <Main
              events={events}
              index={this.state.eventIndex}
              title={this.state.selectedEvent}
              contacts={contacts}
            />
          </div>
          <div>
            <Sidelist
              events={events}
              updateEvent={this.updateEvent}
              index={this.state.eventIndex}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
