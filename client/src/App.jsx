import "./styles/styles.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import Button from "./Button.jsx";
import RecipeList from "./RecipeList.jsx";
import RecipePage from "./RecipePage.jsx";
import Loader from "react-loader-spinner";
import { getRecipes } from "../src/utils/api.js";

const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [view, setView] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRecipes(undefined, "desserts").then(({ data }) => {
      setRecipes(data);
      setIsLoading(false);
    });
  }, []);

  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const searchOnClick = (qs) => {
    setRecipes([]);
    setIsLoading(true);
    setView("home");
    window.scrollTo(0, 0);
    getRecipes(qs).then(({ data }) => {
      setRecipes(data);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Header />
      <div className="search-bar-container">
        <Search onChange={searchOnChange} />
        <Button
          btnClass="search-btn"
          onClick={() => searchOnClick(search)}
          text="Search"
        />
      </div>
      {isLoading && (
        <Loader
          className="loader"
          type="Hearts"
          color="#fe019a"
          height={500}
          width={500}
          timeout="10000"
        />
      )}
      {view === "home" && (
        <RecipeList recipes={recipes} setView={setView} setRecipe={setRecipe} />
      )}
      {view === "recipe" && <RecipePage recipe={recipe} setView={setView} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
