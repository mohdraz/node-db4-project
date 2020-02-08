const express = require("express");
const Recipe = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "error retrieving recipes" });
    });
});
router.get("/:id", (req, res) => {
  console.log("id: ", req.params);
  Recipe.getRecipesById(req.params.id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "error retrieving recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  Recipe.getShoppingList(req.params.id)
    .then(shoppingList => {
      res.json(shoppingList);
    })
    .catch(err => {
      res.status(500).json({ message: "error retrieving recipes" });
    });
});

router.get("/:id/instructions", (req, res) => {
  console.log("id:", req.params.id);
  Recipe.getInstructions(req.params.id)
    .then(instructions => {
      res.json(instructions);
    })
    .catch(err => {
      res.status(500).json({ message: "error retrieving recipes" });
    });
});

module.exports = router;
