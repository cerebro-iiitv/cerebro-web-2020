import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import events from "../../util/event";
import "./Events.scss";
import Main from './Main'

class Events extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="event">
          <div>Circle</div>
          <div><Main /></div>
          <div>Side List</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Events;
