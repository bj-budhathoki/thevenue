import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
const StyledWrapper = styled.div`
  /* background-color: #dbd6d6; */
  width: 90%;
  margin: 0 auto;
  overflow: hoidden;
  > div {
    border-bottom: 1px solid #6d6d6d;
    .title {
      text-align: center;
      text-transform: uppercase;
    }
    .description {
      font-size: 1.5rem;
      color: #191919;
      padding: 0.5rem 0;
      /* font-weight: bold; */
    }
  }
  .discount_section {
    display: flex;
    align-items: center;

    .discount__percentage {
      /* background-color: red; */
      display: flex;
      flex-direction: column;
      text-align: center;
      min-width: 20rem;
    }
    .percentage {
      color: #000;
      font-size: 4rem;
      padding: 0 2rem;
      text-align: center;
    }
    .offText {
      color: #000;
      font-size: 3rem;
      padding: 0 2rem;
      margin-top: -2rem;
      align-self: center;
    }
  }
.cta_btn{
background:#EE0;
color:#ff0;
font-size:2rem;
font-family:Roboto;
text-transform:uppercase
`;
class Highlights extends Component {
  state = {
    discountStart: 0,
    descountEnd: 30
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }
  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  render() {
    return (
      <StyledWrapper>
        <div>
          <h2 className="title">hightlights</h2>
        </div>
        <div>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            deserunt vitae, dolorem a minus error asperiores numquam, beatae
            similique quibusdam sit natus nihil obcaecati suscipit atque
            possimus. Aspernatur, unde facilis? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci, beatae modi. Aspernatur,
            eveniet quia aliquam ipsa fugit aut nostrum suscipit error cum saepe
            quae sed quibusdam dolorem in laborum a.
          </p>
        </div>
        <div className="discount_section">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount__percentage">
              <span className="percentage"> {this.state.discountStart} %</span>
              <span className="offText">of</span>
            </div>
          </Fade>
          <Slide right>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione deserunt vitae, dolorem a minus error asperiores
                numquam, beatae similique quibusdam sit natus nihil obcaecati
                suscipit atque possimus.
              </p>
              <button value="Read More" className="cta_btn">Read more</button>
            </div>
          </Slide>
        </div>
      </StyledWrapper>
    );
  }
}

export default Highlights;
