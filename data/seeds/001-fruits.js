exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("fruits")
    .truncate() //deletes data and resets primary key back to 1
    .then(function() {
      // Inserts seed entries
      return knex("fruits").insert([
        { name: "mango", avgWeightOz: 0.2, delicious: true, color: "yellow" },
        { name: "red apple", avgWeightOz: 0.5, delicious: true, color: "red" },
        {
          name: "green apple",
          avgWeightOz: 1.2,
          delicious: true,
          color: "green"
        }
      ]);
    });
};
