import axios from "axios";

export const getRecipes = (qs, tags) => {
  return axios.post("/recipes", {
    tags: tags,
    qs: qs,
  });
};
