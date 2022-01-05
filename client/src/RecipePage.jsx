import React from "react";
import Button from "./Button.jsx";

const RecipePage = ({ recipe, setView }) => {
  const { name, instructions, url, video, componentsList } = recipe;

  const components = [].concat.apply([], componentsList);

  const backBtnOnChange = () => {
    setView("home");
  };

  return (
    <div className="recipe-page-container">
      <div className="recipe-page-title">{name}</div>
      <div className="columns">
        <div className="left-column">
          <div className="recipe-page-pic-container">
            <img src={url} alt={name} className="recipe-page-pic" />
          </div>
          <div className="components-container">
            <div className="components-header">Ingredients:</div>
            <div className="components-list">
              <ul>
                {components.map((c) => {
                  return <li>{c}</li>;
                })}
              </ul>
            </div>
            <div className="video-container">
              {video && <iframe width="315" height="315" src={video}></iframe>}
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="instructions-container">
            <div>
              <div className="instructions-header">Instructions:</div>
              <div className="instructions-list">
                <ol>
                  {instructions.map((i) => {
                    return <li className="step">{i}</li>;
                  })}
                </ol>
              </div>
            </div>
            <div className="back-btn-container">
              <Button
                btnClass="back-btn"
                onClick={() => backBtnOnChange()}
                text="Back"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
