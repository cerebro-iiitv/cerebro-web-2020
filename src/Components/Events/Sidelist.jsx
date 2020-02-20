import React from "react";

import "./Sidelist.scss";
import "font-awesome/css/font-awesome.min.css";
const Sidelist = props => {
  const eventList=props.events.map((event)=>{
    return(
      <li className="sidebarmenu__links__link">
      <a>{event.Title}</a>
    </li>
    )
  })
  return (
    <div className="sidebarmenu">
      <ul className="sidebarmenu__links">
      {eventList}
      </ul>
    </div>
  );
};

export default Sidelist;
