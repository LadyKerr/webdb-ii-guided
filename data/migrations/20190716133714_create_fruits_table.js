//always do a return
//create your tables in migrations!

//make changes to db schema (structure)
exports.up = function(knex) {
  return knex.schema.createTable("fruits", tbl => {
    //add primary key named id, INTEGER, autoincrement
    tbl.increments();

    //add name column with size of 128 with a unique identifier
    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    //add other columns
    tbl.decimal("avgWeightOz");
    tbl.boolean("delicious");
  });
};

//undo changes to db schema (structure)
exports.down = function(knex) {
  return knex.schema.dropTableIfExist("fruits");
};


//npx knex init
//npx knex migrate:make create-fruits-table
//npx knex migrate:up

//npx knex migrate:down ---- to undo migrations one at a time


