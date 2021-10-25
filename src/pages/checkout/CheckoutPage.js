import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./Checkout.scss";

const tableHeaderNames = [
  "Product",
  "Description",
  "Quantity",
  "Price",
  "Remove",
];

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      {tableHeaderNames.map((headerName) => (
        <div key={headerName} className="header-block">
          <span>{headerName}</span>
        </div>
      ))}
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: {total.toFixed(2) + " €"}</div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: {new Date().getMonth() + 2}/
      {new Date().getFullYear()}
      {" - CVV: 123"}
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
