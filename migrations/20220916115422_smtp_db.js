/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("list", function (table) {
      table.increments("id");
      table.integer("filesAmount");
      table.timestamps("time_stamp");
    })
    .createTable("filesjsons", function (table) {
      table.increments("id");
      table.json("fileJson");
      table.timestamps("time_stamp");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("list").dropTable("filesjsons");
};
