exports.seed = function(knex) {
  return knex("instructions").insert([
    { step_number: 1, instruction: "pour water", recipe_id: 1 },
    { step_number: 2, instruction: "mix water with lemon", recipe_id: 1 },
    { step_number: 3, instruction: "put on oven ", recipe_id: 1 },
    { step_number: 1, instruction: "pour water", recipe_id: 2 },
    { step_number: 2, instruction: "mix water with lemon", recipe_id: 2 },
    { step_number: 3, instruction: "put on oven ", recipe_id: 2 },
    { step_number: 1, instruction: "pour water", recipe_id: 3 },
    { step_number: 2, instruction: "mix water with lemon", recipe_id: 3 },
    { step_number: 3, instruction: "put on oven ", recipe_id: 3 },
    { step_number: 1, instruction: "pour water", recipe_id: 4 },
    { step_number: 2, instruction: "mix water with lemon", recipe_id: 4 },
    { step_number: 3, instruction: "put on oven ", recipe_id: 4 },
    { step_number: 1, instruction: "pour water", recipe_id: 5 },
    { step_number: 2, instruction: "mix water with lemon", recipe_id: 5 },
    { step_number: 3, instruction: "put on oven ", recipe_id: 5 }
  ]);
};
