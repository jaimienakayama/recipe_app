import React from "react";
import Recipe from "./Recipe.jsx";

const RecipeList = ({ recipes, setView, setRecipe }) => {
  const recipeOnClick = (recipe) => {
    setView("recipe");
    setRecipe(recipe);
    window.scrollTo(0, 0);
  };

  return (
    <div className="recipe-list">
      {recipes &&
        recipes.map((r) => {
          const { name, url, components } = r;
          return (
            <Recipe
              name={name}
              url={url}
              components={components}
              onClick={() => recipeOnClick(r)}
            />
          );
        })}
    </div>
  );
};

export default RecipeList;
