import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
// import { signInWithEmailAndPassword } from "@firebase/auth";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

// import "./SignIn.scss";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./SignIn.styles";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);

    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   // .then(
    //   //   (userCredentials) => {
    //   //     // this.setState({ email: "", password: "" });
    //   //     console.log(userCredentials);
    //   //     // this.setState(userCredentials);
    //   //   }
    //   // );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="text"
          value={email}
          handleChange={handleChange}
          // placeholder="Enter your email"
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          // placeholder="Enter your password"
          label="password"
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
