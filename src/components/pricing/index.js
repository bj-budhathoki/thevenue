import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
const PricingDiv = styled.div`
  display: flex;
  background-color: #191919;
  padding: 10rem 0rem;
  justify-content: space-around;
  > div {
    border: 2px solid #ee0;
    width: 30%;
    height: 20rem;
    background: red;
  }
`;
const Pricing = () => {
  return (
    <PricingDiv>
      <Zoom delay={800}>
        <div>$100</div>
      </Zoom>
      <Zoom>
        <div>$200</div>
      </Zoom>
      <Zoom delay={800}>
        <div>$300</div>
      </Zoom>
    </PricingDiv>
  );
};

export default Pricing;
