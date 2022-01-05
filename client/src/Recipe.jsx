import React from "react";

const Recipe = ({ name, url, onClick }) => {
  return (
    <div className="recipe-container" onClick={onClick}>
      <div className="thumbnail-container">
        <img src={url} alt={name} className="thumbnail" />
      </div>
      <div className="recipe-title">{name}</div>
    </div>
  );
};

export default Recipe;
