
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', tbl => {
      tbl.increments();

      tbl.string('name', 255)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cohorts')
};
