require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/recipes", async (req, res) => {
  try {
    const { qs } = req.body;
    const { tags } = req.body;

    const response = await axios.get(
      "https://tasty.p.rapidapi.com/recipes/list",
      {
        headers: {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY,
        },
        params: { from: "0", size: "100", tags: tags, q: qs },
      }
    );

    const { results } = await response.data;
    let recipes = [];
    for (let i = 0; i < results.length; i++) {
      const validRecipe = results[i].instructions;
      if (validRecipe) {
        const { name } = results[i];
        const instructions = results[i].instructions.map((i) => i.display_text);
        const url = results[i].thumbnail_url;
        const video = results[i].original_video_url;
        const componentsList = results[i].sections.map((s) =>
          s.components.map((c) => {
            return c.raw_text;
          })
        );
        recipes.push({
          name,
          instructions,
          url,
          video,
          componentsList,
        });
      }
    }

    res.status(200).send(recipes);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
