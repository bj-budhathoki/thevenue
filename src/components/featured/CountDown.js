import React, { Component } from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
const TimeUntil = styled.div`
  background-color: red;
  position: absolute;
  bottom: 0rem;
  /* left: 1rem; */
  display: flex;
  flex-direction: column;
  width: 50rem;
  color: #fff;
  .event_start {
    background-color: #f15;
    margin-top: -3rem;
    width: 30%;
    padding-left: 1rem;
  }
`;
export class CountDown extends Component {
  state = {
    deadline: "Dec,16,2018",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }
  getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("end of deadline");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  };
  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <Slide left delay={1000}>
        <TimeUntil>
          <p className="event_start">EVENT START IN</p>
          <div
            className="time"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "-4rem",
              flexWrap: "wrap"
            }}
          >
            <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
              <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{days}</p>
              <p style={{ marginTop: "-5rem" }}>days</p>
            </div>
            <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
              <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{hours}</p>
              <p style={{ marginTop: "-5rem" }}>hours</p>
            </div>
            <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
              <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{minutes}</p>
              <p style={{ marginTop: "-5rem" }}>minutes</p>
            </div>
            <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
              <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{seconds}</p>
              <p style={{ marginTop: "-5rem" }}>seconds</p>
            </div>
          </div>
        </TimeUntil>
      </Slide>
    );
  }
}

export default CountDown;
