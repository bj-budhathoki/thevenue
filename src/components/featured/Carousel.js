import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import slide_one from "../../assets/images/slide_four.jpg";
import slide_two from "../../assets/images/slide_five.jpg";
import slide_three from "../../assets/images/slide_three.jpg";

const CarouselWrapper = styled.div`
  height: ${props => props.dynamicHeight};
  overflow: hidden;
  .carousel_image {
    width: 100%;
    height: ${props => props.dynamicHeight};
    background-size: cover;
  }
`;
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000
  };
  return (
    <CarouselWrapper dynamicHeight={`${window.innerHeight}px`}>
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{ backgroundImage: `url(${slide_one})` }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{ backgroundImage: `url(${slide_two})` }}
          />
        </div>
        <div>
          <div
            className="carousel_image"
            style={{ backgroundImage: `url(${slide_three})` }}
          />
        </div>
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
