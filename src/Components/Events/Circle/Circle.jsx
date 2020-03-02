import React, { Component } from "react";
import "./Circle.scss";

class Circle extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextprops) {
    var dial2 = document.querySelector(".circle__dial2");
    var dial3 = document.querySelector(".circle__dial3");
    if (nextprops !== this.props) {
      dial2.style.webkitTransform = "rotate(" + nextprops.index * 30 + "deg)";
      dial3.style.webkitTransform = "rotate(" + -nextprops.index * 30 + "deg)";
    }
  }

  render() {
    return (
      <div className="circle">
        <img
          src="media/event/Group 98.svg"
          className="circle__dial2"
          alt="dial2"
        />
        <img
          src="media/event/Group 97.svg"
          className="circle__dial3"
          alt="dial3"
        />
        <img
          src="media/event/Group 96.svg"
          className="circle__dial4"
          alt="dial4"
        />
      </div>
    );
  }
}

export default Circle;
