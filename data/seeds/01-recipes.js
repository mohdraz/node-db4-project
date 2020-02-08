exports.seed = function(knex) {
  return knex("recipes").insert([
    { recipe_name: "My First Recipe" },
    { recipe_name: "My Second Recipe" },
    { recipe_name: "My Third Recipe" },
    { recipe_name: "My Fourth Recipe" },
    { recipe_name: "My Fifth Recipe" }
  ]);
};
