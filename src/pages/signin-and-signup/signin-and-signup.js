import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import "./signin-and-signup.scss";

const SigninAndSignupPage = () => (
  <div className="signin-and-signup">
    <SignIn />;
    <SignUp />;
  </div>
);

export default SigninAndSignupPage;
