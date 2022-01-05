import React from "react";

const Recipe = ({ name, url, onClick }) => {
  const fontSize = name.length > 24 ? "medium-font" : "large-font";

  return (
    <div className="recipe-container" onClick={onClick}>
      <div className="thumbnail-container">
        <img src={url} alt={name} className="thumbnail" />
      </div>
      <div className={`recipe-title ${fontSize}`}>{name}</div>
    </div>
  );
};

export default Recipe;
