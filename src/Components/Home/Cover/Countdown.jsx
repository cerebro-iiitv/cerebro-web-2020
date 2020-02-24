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
      count: 0,
    };
  }

  componentDidMount() {
    const date = this.calculateCountdown(this.props.date);
    date ? this.setState(date) : this.stop();
    this.updateHour();
    this.updateMin();
    this.updateSec();
  }
  updateHour = () => {
    setTimeout(() => {
      try {
        this.hourref.current.className = "Countdown-col animation";
        setTimeout(() => {
          try {
            this.hourref.current.className = "Countdown-col";
            this.setState({
              hours: this.calculateHour()
            });
            this.updateHour();
          } catch (err) {}
        }, 120);
      } catch (err) {}
    }, this.calculateMin() * 60 * 1000);
  };
  updateMin = () => {
    setTimeout(() => {
      try {
          this.minref.current.className = "Countdown-col animation";
          setTimeout(() => {
            try {
              this.minref.current.className = "Countdown-col";
              this.setState({
                min: this.calculateMin(),
              });
              this.updateMin();
            } catch (err) {}
          }, 120);
        } catch (err) {}
      }, this.calculateSec() * 1000 + 880);
    };
    
    updateSec = () => {
      setTimeout(() => {
        try {
          this.secref.current.className = "Countdown-col animation";
          setTimeout(() => {
            try {
              this.secref.current.className = "Countdown-col";
              this.setState({
                sec: this.calculateSec()
              });
              this.updateSec();
            } catch (err) {}
          }, 120);
        } catch (err) {}
    }, 880);
  };

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

  calculateSec() {
    return this.calculateCountdown(this.props.date).sec;
  }

  calculateMin() {
    return this.calculateCountdown(this.props.date).min;
  }

  calculateHour() {
    return this.calculateCountdown(this.props.date).hours;
  }
  calculateDay() {
    return this.calculateCountdown(this.props.date).days;
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
