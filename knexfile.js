// Update with your config settings.
const dotenv = require("dotenv");
dotenv.config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
    },
    seeds: {
      directory: "./seeds/",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds/init_list",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
    },
    migrations: {
      tableName: "knex_migrations",
      path: "./",
    },
    seeds: {
      directory: "./seeds/init_list",
    },
  },
};
