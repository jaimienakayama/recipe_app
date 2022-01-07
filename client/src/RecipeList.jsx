import React, { useState, useEffect } from "react";
import Recipe from "./Recipe.jsx";
import Button from "./Button.jsx";

const RecipeList = ({ recipes, setView, setRecipe }) => {
  const [showing, setShowing] = useState([]);
  const [max, setMax] = useState(16);

  useEffect(() => {
    if (recipes.length > 16) {
      const segment = recipes.slice(0, max);
      setShowing(segment);
    } else {
      setShowing(recipes);
    }
  }, [recipes, max]);

  const recipeOnClick = (recipe) => {
    setView("recipe");
    setRecipe(recipe);
    window.scrollTo(0, 0);
  };

  const showMoreOnClick = () => {
    setMax((prev) => prev + 8);
  };

  const backToTopOnClick = () => {
    window.scrollTo(0, 0);
    setMax(16);
  };

  return (
    <>
      <div className="recipe-list">
        {showing &&
          showing.map((r) => {
            const { name, url, components } = r;
            return (
              <Recipe
                key={name}
                name={name}
                url={url}
                components={components}
                onClick={() => recipeOnClick(r)}
              />
            );
          })}
      </div>
      <div className="footer">
        {showing.length !== recipes.length ? (
          <Button
            btnClass="btn"
            text="Show More"
            onClick={() => showMoreOnClick()}
          />
        ) : (
          <Button
            btnClass="btn"
            text="Back To Top"
            onClick={() => backToTopOnClick()}
          />
        )}
      </div>
    </>
  );
};

export default RecipeList;
