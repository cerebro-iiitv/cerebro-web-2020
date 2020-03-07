import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import Header from "../Header/Header";
import "./Timeline.scss";

class Timeline extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const timeline = this.props.events.sort((eventA, eventB) => {
      let [eventADate, eventATime, eventAPeriod] = eventA.start_time.split(' ')
      let [eventBDate, eventBTime, eventBPeriod] = eventB.start_time.split(' ')

      if (eventATime.length === 4) eventATime = "0".concat(eventATime)
      if (eventBTime.length === 4) eventBTime = "0".concat(eventBTime)
      return eventADate.localeCompare(eventBDate) || eventAPeriod.localeCompare(eventBPeriod) || eventATime.localeCompare(eventBTime)
    }).map((event, index) => {
      if (index % 2 === 0) {
        var side = "left";
      } else {
        side = "right";
      }
      return (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="27-28-29 March"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            position={side}
          >
            {event.start_time}
            <Link className="eventLink">
              <h3 className="vertical-timeline-element-title">{event.event}</h3>
              <p className="vertical-timeline-element-description">{event.description}</p>
            </Link>
          </VerticalTimelineElement>
        </VerticalTimeline>
      );
    });
    return (
      <div>
        <Header></Header>
        <div>
          <a
            href="https://github.com/cerebro-iiitv/cerebro-backend-2020/files/4301776/timeline.pdf"
            className="timelinePdf"
          >
            <img
              src="media/download.svg"
              alt="download Logo"
              className="download-icons__icon"
            />
          </a>
        </div>
        <div className="timeline">{timeline}</div>
        <div className="shadow-bottom"></div>
      </div>
    );
  }
}

export default Timeline;
