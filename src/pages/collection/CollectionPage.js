import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

import { selectCollection } from "../../redux/shop/shop.selectors";

// import "./collection.scss";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./Collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  // console.log(collection);
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
