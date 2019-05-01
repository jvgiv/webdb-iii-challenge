
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'John', cohorts_id: 1},
        {name: 'Mike', cohorts_id: 2},
        {name: 'Donald', cohorts_id: 3}
      ]);
    });
};
