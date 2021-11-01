import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../CollectionItem/CollectionItem";

// import "./CollectionPreview.scss";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./CollectionPreview.styles";

const CollectionPreview = ({ title, items, history }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`shop/${title.toLowerCase()}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default withRouter(CollectionPreview);
