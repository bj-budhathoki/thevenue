import React from "react";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";
const InfoWrapper = styled.div`
  background-color: #302e2e;
  display: flex;
  justify-content: space-around;
  padding: 3rem 0rem;
  > div {
    background-color: #302e2e;
    width: 40rem;
    height: 30rem;
    margin-top: 3rem;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    border: 2px solid transparent;
    border-image: linear-gradient(to left, #743ad5 0%, #d53a9d 100%);
    border-image-slice: 1;
    .inner {
      background-color: #302e2e;
      width: 38rem;
      height: 28rem;
      margin: 1rem 1rem;

      color: #fff;
      font-size: 2rem;
      text-align: center;
      border: 2px solid transparent;
      border-image: linear-gradient(to left, #2e98bc 0%, #c66262 100%);
      border-image-slice: 1;
    }
    h3 {
      border-bottom: 2px solid transparent;
      border-image: linear-gradient(to left, #743ad5 0%, #d53a9d 100%);
      border-image-slice: 1;
      margin: 0 1.5rem;
      padding: 1rem 0.5rem;
    }
  }
`;
const VenueInfo = () => {
  return (
    <InfoWrapper>
      <Zoom duration={500}>
        <div>
          <div className="inner">
            <h3>Event Date & time</h3>
            <p>7 December 2018</p>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div duration={500} delay={1000}>
          <div className="inner">
            <h3>Event Location</h3>
            <p>355 streen, pokhara</p>
          </div>
        </div>
      </Zoom>
    </InfoWrapper>
  );
};

export default VenueInfo;
