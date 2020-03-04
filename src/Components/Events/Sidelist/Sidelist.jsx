import React from "react";
import "./Sidelist.scss";
const Sidelist = props => {
  const eventList = props.events.map((event, index) => {
    return (
      <li
        key={index}
        className={`sidebarmenu__links__link ${
          index === props.index ? "active" : ""
        }`}
        onClick={() => {
          return props.updateEvent(index, event.event, event.pdf);
        }}
      >
        <span>{event.event}</span>
      </li>
    );
  });
  return (
    <div className="sidebarmenu">
      <ul className="sidebarmenu__links">{eventList}</ul>
    </div>
  );
};

export default Sidelist;
