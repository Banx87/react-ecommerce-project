import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

// import "./Checkout.scss";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./Checkout.styles";

const tableHeaderNames = [
  "Product",
  "Description",
  "Quantity",
  "Price",
  "Remove",
];

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      {tableHeaderNames.map((headerName) => (
        <HeaderBlockContainer key={headerName}>
          <span>{headerName}</span>
        </HeaderBlockContainer>
      ))}
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer className="total">
      TOTAL: {total.toFixed(2) + " €"}
    </TotalContainer>
    <WarningContainer className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: {new Date().getMonth() + 2}/
      {new Date().getFullYear()}
      {" - CVV: 123"}
    </WarningContainer>
    <StripeButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
