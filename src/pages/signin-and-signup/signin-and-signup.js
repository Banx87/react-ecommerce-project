import React from "react";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

// import "./signin-and-signup.scss";
import { SignInAndSignUpContainer } from "./signin-and-signup.styles";

const SigninAndSignupPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />;
    <SignUp />;
  </SignInAndSignUpContainer>
);

export default SigninAndSignupPage;
