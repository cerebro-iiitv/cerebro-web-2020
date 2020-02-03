import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Countdown.scss";

class Countdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : this.stop();
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

        if (diff >= (365.25 * 86400)) {
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
            value = '0' + value;
        }
        return value;
    }

    render() {
        const countDown = this.state;

        return (
            <div className="box">
                <div className="Countdown">
                    
                    <span className="Countdown-col">
                        <span className="Countdown-col-element">
                        <strong>{this.addLeadingZeros(countDown.days)}</strong>
                        </span>
                    </span>

                    <span className="vl"></span>

                    <span className="Countdown-col">
                        <span className="Countdown-col-element">
                        <strong>{this.addLeadingZeros(countDown.hours)}</strong>
                        </span>
                    </span>

                    <span className="vl"></span>

                    <span className="Countdown-col">
                        <span className="Countdown-col-element">
                        <strong>{this.addLeadingZeros(countDown.min)}</strong>
                        </span>
                    </span>

                    <span className="vl"></span>

                    <span className="Countdown-col">
                        <span className="Countdown-col-element">
                        <strong>{this.addLeadingZeros(countDown.sec)}</strong>
                        </span>
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