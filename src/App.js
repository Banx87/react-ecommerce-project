import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { Homepage } from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
