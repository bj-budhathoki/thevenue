import React from "react";
import styled from "styled-components";
const Div = styled.div`
  background-color: #fff;
  width: 15%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
  box-shadow: 0 0 0.3rem 0.1rem #2f2f2f;
  .close__Drawer__btn {
    color: #fff;
    font-size: 2rem;
    background: #2f2fff;
    width: 6rem;
    height: 5.5rem;
    border-bottom-right-radius: 5rem;
    display: flex;
    justify-content: center;
    position: relative;
    :hover {
      background-color: #f00;
      cursor: pointer;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-left: -4rem;
    li {
      font-size: 2rem;
      cursor: pointer;
      padding: 0.3rem 1rem;
      display: inline-block;
      flex: 1;
      transition: 1s all;
      :hover {
        background: #ccc;
      }
    }
  }
`;
const SideDrawer = props => {
  return (
    <Div>
      <div className="close__Drawer__btn" onClick={props.closeDrawer}>
        <span>✖</span>
      </div>
      <ul>
        <li onClick={() => console.log("event star in")}>Event start in</li>
        <li onClick={() => console.log("event star in")}>Venue Info</li>
        <li onClick={() => console.log("event star in")}>hightlights</li>
        <li onClick={() => console.log("event star in")}>Pricing</li>
        <li onClick={() => console.log("event star in")}>locations</li>
      </ul>
    </Div>
  );
};

export default SideDrawer;
