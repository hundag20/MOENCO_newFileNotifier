const { Model } = require("objection");
const Knex = require("knex");

// Initialize knex.
const knex = Knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "smtp",
  },
});

// Give the knex instance to objection.
const a = Model.knex(knex);
module.exports = Model;
