import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { Homepage } from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup";
import Header from "./components/Header/Header";

import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "@firebase/firestore";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        // console.log("UserAuth Block");
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef, "userRef");
        onSnapshot(userRef, (snapShot) => {
          // console.log("current Data: ", snapShot.data());
          // console.log("current Data: ", snapShot);
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });

        // userRef.onSnapshot((snapShot) => {
        //   console.log(snapShot);
        // });
      } else {
        this.setState({ currentUser: userAuth }, () => {});
      }

      // console.log(auth);

      // console.log(user);
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
