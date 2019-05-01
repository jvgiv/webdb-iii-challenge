
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenge').del()
    .then(function () {
      // Inserts seed entries
      return knex('challenge').insert([
        { name: 'web18'},
        { name: 'web19'},
        { name: 'web20'}
      ]);
    });
};
