import React from "react";
import { connect } from "react-redux";

// import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";

// import "./CollectionItem.scss";
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionItemFooterContainer,
  AddButton,
  NameContainer,
  PriceContainer,
} from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionItemFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer className="price">
          {price.toFixed(2) + " €"}
        </PriceContainer>
      </CollectionItemFooterContainer>
      <AddButton
        // className="custom-button"
        onClick={() => addItem(item)}
        inverted
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
