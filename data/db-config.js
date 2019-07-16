const knex = require("knex");

//db connecting to the fruits table
const knexConfig = require("../knexfile.js");

module.exports = knex(knexConfig.development);

//import this file into each router
