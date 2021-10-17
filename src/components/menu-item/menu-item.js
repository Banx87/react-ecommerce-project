import React from "react";

import "./menu-item.scss";

const menuItem = ({ title, imageUrl, size }) => {
  const menuItemClass = size ? `${size} menu-item` : "menu-item";

  return (
    <div className={menuItemClass}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default menuItem;
