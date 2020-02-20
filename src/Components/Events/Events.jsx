import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidelist from "./Sidelist";
import Main from "./Main";
import "./Events.scss";
import events from '../../util/event'
import Circle from "./Circle";
class Events extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="event">
          <div><Circle/> </div>
          <div>
            <Main events={events}/>
          </div>
          <div>
            <Sidelist events={events}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Events;
