import React, { Component } from "react";
import NavStyles from "./NavStyles";
import SideDrawer from "./SideDrawer";
class Header extends Component {
  state = {
    open: false,
    isHeaderVisible: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  // componentWillUnmount(){
  //  window.removeEventListener('scroll',this.handlwScroll)
  // }
  handleScroll = () => {
    console.log("scrolling", window.scrollY);
    if (window.scrollY > 0) {
      this.setState({ isHeaderVisible: true });
    } else {
      this.setState({ isHeaderVisible: false });
    }
  };
  openDrawer = () => {
    this.setState({ open: true });
  };
  closeDrawer = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <React.Fragment>
        <NavStyles isHeaderVisible={this.state.isHeaderVisible}>
          <div className="nav__logo">
            <div className="nav__title">The Venue</div>
            <div className="nav__subtitle">MUSICAL EVENT</div>
          </div>
          <div className="ham__menu">
            <div onClick={this.openDrawer}>menu </div>
          </div>
        </NavStyles>
        {this.state.open && <SideDrawer closeDrawer={this.closeDrawer} />}
      </React.Fragment>
    );
  }
}

export default Header;
