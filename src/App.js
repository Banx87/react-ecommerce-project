import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { Homepage } from "./pages/homepage/Homepage";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
