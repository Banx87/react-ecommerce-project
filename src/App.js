import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import { Homepage } from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import Header from "./components/Header/Header";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser, checkUserSession } from "./redux/user/user.actions";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "@firebase/firestore";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = ({ setCurrentUser, currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, []);
  // useEffect(() => {
  //   const unSubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       onSnapshot(userRef, (snapShot) => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         });
  //       });

  //       // userRef.onSnapshot((snapShot) => {
  //       // });
  //     } else {
  //       setCurrentUser(userAuth);
  //       // addCollectionAndDocuments(
  //       //   "collections",
  //       //   collectionsArray.map(({ title, items }) => ({ title, items }))
  //       // );
  //     }
  //   });

  //   return unSubscribeFromAuth;
  // }, []);
  // unSubscribeFromAuth = null;

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SigninAndSignupPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
