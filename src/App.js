import React, { Component } from "react";

import "./App.css";
//components
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Heighlights from "./components/Hightlights";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <Heighlights />
      </div>
    );
  }
}

export default App;
