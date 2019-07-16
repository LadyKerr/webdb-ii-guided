exports.up = function(knex) {
  return knex.schema.table("fruits", tbl => {
    tbl.string("color");
  });
};

exports.down = function(knex) {
  return knex.schema.table("fruits", tbl => {
    tbl.dropColumn("color");
  });
};

//too add a new column to an existing schema, create a new migration.
// from the new migration, add the column like above.
