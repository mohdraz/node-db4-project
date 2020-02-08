exports.seed = function(knex) {
  return knex("ingredients").insert([
    { ingr_name: "Potato" },
    { ingr_name: "Tomato" },
    { ingr_name: "Banana" },
    { ingr_name: "Lemon" },
    { ingr_name: "Water" }
  ]);
};
