import React from "react";

// import "./CartItem.scss";

import {
  CartItemsContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./CartItem.styles";

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemsContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} * {price} €
      </span>
    </ItemDetailsContainer>
  </CartItemsContainer>
);
