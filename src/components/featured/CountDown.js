import React, { Component } from "react";
import styled from "styled-components";
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
  render() {
    return (
      <TimeUntil>
        <p className="event_start">EVENT START IN</p>
        <div
          class="time"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "-4rem",
            flexWrap: "wrap"
          }}
        >
          <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
            <p style={{ fontSize: "3rem", fontWeight: "bold" }}>166</p>
            <p style={{ marginTop: "-5rem" }}>days</p>
          </div>
          <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
            <p style={{ fontSize: "3rem", fontWeight: "bold" }}>166</p>
            <p style={{ marginTop: "-5rem" }}>days</p>
          </div>
          <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
            <p style={{ fontSize: "3rem", fontWeight: "bold" }}>166</p>
            <p style={{ marginTop: "-5rem" }}>days</p>
          </div>
          <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
            <p style={{ fontSize: "3rem", fontWeight: "bold" }}>166</p>
            <p style={{ marginTop: "-5rem" }}>days</p>
          </div>
        </div>
      </TimeUntil>
    );
  }
}

export default CountDown;
