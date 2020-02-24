import React, { Component } from "react";
import "./Circle.scss";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.dial2ref = React.createRef();
    this.dial3ref = React.createRef();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops !== this.props) {
      this.dial2ref.current.className = "circle__dial2 rotate";
      this.dial3ref.current.className = "circle__dial3 rotate-rev";
      setTimeout(() => {
        this.dial2ref.current.className = "circle__dial2";
        this.dial3ref.current.className = "circle__dial3";
      }, 1000);
    }
  }

  render() {
    return (
      <div className="circle">
        <img
          ref={this.dial2ref}
          src="media/event/Group 98.svg"
          className="circle__dial2"
          alt="dial2"
        />
        <img
          ref={this.dial3ref}
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
