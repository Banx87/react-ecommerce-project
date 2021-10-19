import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { Homepage } from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup";
import Header from "./components/Header/Header";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // GOOGLE SIGN IN
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //////////////////////////

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
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
