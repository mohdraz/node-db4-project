exports.seed = function(knex) {
  return knex("recipe_ingredient").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: "2 oz" },
    { recipe_id: 1, ingredient_id: 2, quantity: "3 oz" },
    { recipe_id: 1, ingredient_id: 3, quantity: "5 oz" },
    { recipe_id: 1, ingredient_id: 4, quantity: "10 oz" },
    { recipe_id: 1, ingredient_id: 5, quantity: "21 oz" },
    { recipe_id: 2, ingredient_id: 3, quantity: "2 oz" },
    { recipe_id: 3, ingredient_id: 2, quantity: "2 oz" },
    { recipe_id: 4, ingredient_id: 3, quantity: "2 oz" },
    { recipe_id: 5, ingredient_id: 2, quantity: "2 oz" }
  ]);
};
