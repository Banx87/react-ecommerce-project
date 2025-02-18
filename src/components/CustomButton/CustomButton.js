import React from "react";

// import "./CustomButton.scss";
import { CustomButtonContainer } from "./CustomButton.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

//   {
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
// }

// className={`${inverted ? "inverted" : ""} ${
//   isGoogleSignIn ? "google-signin" : ""
// } custom-button`}
// {...otherProps}
// >
