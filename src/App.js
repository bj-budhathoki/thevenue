import React, { Component } from "react";

import "./App.css";
//components
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Heighlights from "./components/Hightlights";
import Pricing from "./components/pricing";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <Heighlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
