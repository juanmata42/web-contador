import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div className="dateCounter">
        <div className="Clock-days">{this.leading0(this.state.days)} Días</div>
        <div className="Clock-hours">
          {this.leading0(this.state.hours)} Horas
        </div>
        <div className="Clock-minutes">
          {this.leading0(this.state.minutes)} Minutos
        </div>
        <div className="Clock-seconds">
          {this.leading0(this.state.seconds)} Segundos
        </div>
      </div>
    );
  }
}
export default Clock;
