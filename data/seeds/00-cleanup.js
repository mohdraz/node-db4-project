const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: "truncate",
    ingoreTAbles: ["knex_migrations", "knex_migrations_lock"]
  });
};
