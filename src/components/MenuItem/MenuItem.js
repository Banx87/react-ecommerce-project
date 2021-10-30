import React from "react";
import { withRouter } from "react-router-dom";

// import "./MenuItem.scss";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenuItem.styles";

const menuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const menuItemClass = size ? `${size} menu-item` : "menu-item";

  return (
    <MenuItemContainer
      className={menuItemClass}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(menuItem);
