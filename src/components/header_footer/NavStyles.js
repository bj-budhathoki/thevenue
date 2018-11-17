import styled from "styled-components";
const NavStyles = styled.nav`
  background-color: ${props =>
    props.isHeaderVisible ? "#2f2f2f" : "transparent"};
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 0 1.5rem;
  width: 100%;
  position: fixed;
  color: #fff;
  .nav__logo {
    display: flex;
    flex-direction: column;
    .nav__title {
      font-size: 2rem;
      font-weight: bold;
    }
    .nav__subtitle {
      margin-top: -1.5rem;
    }
  }
  .ham__menu {
    align-self: center;
    cursor: pointer;
    background: red;
    padding: 0.5rem;
  }
`;

export default NavStyles;
