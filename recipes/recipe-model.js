const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
};

/*

getRecipes(): should return a list of all recipes in the database.
getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

*/
function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes")
    .where("id", id)
    .first();
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .join(
      "recipe_ingredient",
      "recipe_ingredient.ingredient_id",
      "ingredients.id"
    )
    .join("recipes", "recipes.id", "recipe_ingredient.recipe_id")
    .select("ingredients.ingr_name", "recipe_ingredient.quantity")
    .where("recipes.id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("instructions")
    .join("recipes", "recipes.id", "instructions.recipe_id")
    .select("instructions.step_number", "instructions.instruction")
    .where("recipes.id", recipe_id);
}
