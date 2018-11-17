import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import CountDown from "./CountDown";
const HeadBanner = styled.div`
  height: ${props => props.height};
  /* background-color: #ff00dd; */
  .artist__name {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40rem;
    height: 15rem;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 3px solid transparent;
    border-image: linear-gradient(to left, #743ad5 0%, #d53a9d 100%);
    border-image-slice: 1;
    .wrapper {
      padding: 2px;
      height: 12rem;
      text-align: center;
      color: #fff;
      font-size: 3rem;
      margin-top: 1.3rem;
      margin-left: 1.5rem;
      margin-right: 1rem;
      padding: 3rem 0 0 0;
      text-transform: uppercase;
      border: 2px solid transparent;
      border-image: linear-gradient(to left, #2e98bc 0%, #c66262 100%);
      border-image-slice: 10;
    }
  }
`;
const Featured = () => {
  return (
    <HeadBanner height={`${window.innerHeight}px`}>
      <Carousel />
      <div className="artist__name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <CountDown />
    </HeadBanner>
  );
};
export default Featured;
