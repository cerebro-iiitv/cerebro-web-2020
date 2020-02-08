import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Countdown.scss";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.dayref = React.createRef();
    this.hourref = React.createRef();
    this.minref = React.createRef();
    this.secref = React.createRef();
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      countD: 0,
      countH: 0,
      countM: 0,
      countS: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
      this.setState({
        countS: this.state.sec * 1000,
        countM: this.state.min * 60000 + this.state.countS,
        countH: this.state.hours * 3600000 + this.state.countM,
        countD: this.state.days * 86400000 + this.state.countH
      });

      console.log(this.state.countM, this.state.countH);
      // console.log(this.state.sec);
      this.secref.current.className = "Countdown-col";
      this.minref.current.className = "Countdown-col";
      this.hourref.current.className = "Countdown-col";
      this.dayref.current.className = "Countdown-col";

      if (this.state.countS % 2000 == 0) {
        this.secref.current.className = "Countdown-col animation";
      }
      if (this.state.countM % (this.state.min * 60000) == 0) {
        this.minref.current.className = "Countdown-col animation";
      }
      if (this.state.countH % (this.state.hours * 3600000 - 1000) == 0) {
        this.hourref.current.className = "Countdown-col animation";
      }
      if (this.state.countD % 172799000 == 0) {
        this.dayref.current.className = "Countdown-col animation";
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    if (diff >= 365.25 * 86400) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="box">
        <div className="Countdown">
          <span className="Countdown-col">
            <strong ref={this.dayref}>
              {this.addLeadingZeros(countDown.days)}
            </strong>
            <span className="countdown-col-label">D</span>
          </span>

          <span className="vl"></span>

          <span className="Countdown-col">
            <strong ref={this.hourref}>
              {this.addLeadingZeros(countDown.hours)}
            </strong>
            <span className="countdown-col-label">H</span>
          </span>

          <span className="vl"></span>

          <span className="Countdown-col">
            <strong ref={this.minref}>
              {this.addLeadingZeros(countDown.min)}
            </strong>
            <span className="countdown-col-label">M</span>
          </span>

          <span className="vl"></span>

          <span className="Countdown-col">
            <strong ref={this.secref}>
              {this.addLeadingZeros(countDown.sec)}
            </strong>
            <span className="countdown-col-label">S</span>
          </span>
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired
};

Countdown.defaultProps = {
  date: new Date()
};

export default Countdown;
