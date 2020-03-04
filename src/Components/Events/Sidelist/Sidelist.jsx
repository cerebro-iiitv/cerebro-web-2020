import React from "react";
import "./Sidelist.scss";
const Sidelist = props => {
  const eventList = props.events.map((event, curr_index) => {
    return (
      <li
        key={curr_index}
        className={`sidebarmenu__links__link ${
          curr_index === props.index ? "active" : ""
        }`}
        onClick={() => {
          return props.updateEvent(curr_index, event.event, event.pdf);
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
